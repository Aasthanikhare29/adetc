'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { serverClient } from '@/lib/supabase/server';
import { cleanHtml } from '@/lib/sanitize';

function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const stripTags = (s) => String(s || '').replace(/<[^>]+>/g, '').trim();

// comma/newline separated -> clean string[]
function parseList(v) {
  return String(v || '')
    .split(/[,\n]/)
    .map((x) => x.trim())
    .filter(Boolean);
}

// FAQ arrives as a JSON string [{q,a}]; keep plain text only.
function parseFaq(v) {
  try {
    const arr = JSON.parse(v || '[]');
    if (!Array.isArray(arr)) return [];
    return arr
      .map((it) => ({ q: stripTags(it.q).slice(0, 300), a: stripTags(it.a).slice(0, 2000) }))
      .filter((it) => it.q && it.a);
  } catch {
    return [];
  }
}

function revalidateBlog(slug) {
  revalidatePath('/blog');
  revalidatePath('/blog/page/[page]', 'page');
  if (slug) revalidatePath(`/blog/${slug}`);
  revalidatePath('/sitemap.xml');
  revalidatePath('/feed.xml');
}

export async function signIn(_prev, formData) {
  const email = String(formData.get('email') || '');
  const password = String(formData.get('password') || '');
  const supabase = await serverClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: error.message };
  redirect('/admin');
}

export async function signOut() {
  const supabase = await serverClient();
  await supabase.auth.signOut();
  redirect('/admin/login');
}

export async function savePost(_prev, formData) {
  const supabase = await serverClient();

  const id = formData.get('id') || null;
  const title = String(formData.get('title') || '').trim();
  const slug = slugify(formData.get('slug') || title);
  const status = formData.get('status') === 'published' ? 'published' : 'draft';

  if (!title) return { error: 'Title is required.' };
  if (!slug) return { error: 'Slug is required.' };

  const row = {
    title,
    slug,
    excerpt: String(formData.get('excerpt') || '').trim(),
    category: String(formData.get('category') || '').trim(),
    image: String(formData.get('image') || '').trim(),
    content_html: cleanHtml(formData.get('content_html') || ''),
    status,
    // SEO / AEO / GEO
    meta_title: stripTags(formData.get('meta_title')),
    meta_description: stripTags(formData.get('meta_description')),
    og_title: stripTags(formData.get('og_title')),
    og_description: stripTags(formData.get('og_description')),
    og_image: String(formData.get('og_image') || '').trim(),
    og_image_alt: stripTags(formData.get('og_image_alt')),
    image_alt: stripTags(formData.get('image_alt')),
    canonical: String(formData.get('canonical') || '').trim(),
    robots: String(formData.get('robots') || 'index,follow').trim(),
    focus_keyword: stripTags(formData.get('focus_keyword')),
    secondary_keywords: parseList(formData.get('secondary_keywords')),
    tags: parseList(formData.get('tags')),
    faq: parseFaq(formData.get('faq')),
    tldr: stripTags(formData.get('tldr')),
  };

  // optional manual publish date
  const pubInput = String(formData.get('published_at') || '').trim();
  if (pubInput) {
    const d = new Date(pubInput);
    if (!Number.isNaN(d.getTime())) row.published_at = d.toISOString();
  }

  let saved;
  if (id) {
    // snapshot the prior state (for rollback) if it was/goes published
    const { data: existing } = await supabase.from('posts').select('*').eq('id', id).maybeSingle();
    if (existing && (existing.status === 'published' || status === 'published')) {
      await supabase.from('post_revisions').insert({ post_id: id, snapshot: existing });
    }
    if (status === 'published' && !existing?.published_at && !row.published_at) {
      row.published_at = new Date().toISOString();
    }
    const { data, error } = await supabase
      .from('posts').update(row).eq('id', id).select('id,slug').maybeSingle();
    if (error) {
      if (error.code === '23505') return { error: 'That slug is already taken.' };
      return { error: error.message };
    }
    saved = data;
  } else {
    if (status === 'published' && !row.published_at) row.published_at = new Date().toISOString();
    const { data, error } = await supabase
      .from('posts').insert(row).select('id,slug').maybeSingle();
    if (error) {
      if (error.code === '23505') return { error: 'That slug is already taken.' };
      return { error: error.message };
    }
    saved = data;
  }

  revalidateBlog(saved?.slug);
  revalidatePath('/admin', 'layout');
  return { ok: true, id: saved?.id, slug: saved?.slug, status };
}

// Restore a prior revision's content onto its post (does not auto-publish).
export async function restoreRevision(revisionId) {
  const supabase = await serverClient();
  const { data: rev, error } = await supabase
    .from('post_revisions').select('post_id,snapshot').eq('id', revisionId).maybeSingle();
  if (error || !rev) return { error: error?.message || 'Revision not found' };

  const s = rev.snapshot || {};
  // snapshot current state first, so a restore is itself reversible
  const { data: current } = await supabase.from('posts').select('*').eq('id', rev.post_id).maybeSingle();
  if (current) await supabase.from('post_revisions').insert({ post_id: rev.post_id, snapshot: current, note: 'before restore' });

  const { id, created_at, updated_at, ...fields } = s; // eslint-disable-line no-unused-vars
  const { data, error: upErr } = await supabase
    .from('posts').update(fields).eq('id', rev.post_id).select('slug').maybeSingle();
  if (upErr) return { error: upErr.message };
  revalidateBlog(data?.slug);
  revalidatePath(`/admin/posts/${rev.post_id}`);
  return { ok: true };
}

export async function saveSettings(_prev, formData) {
  const supabase = await serverClient();
  const patch = {
    id: 1,
    author_name: stripTags(formData.get('author_name')),
    author_title: stripTags(formData.get('author_title')),
    author_bio: stripTags(formData.get('author_bio')),
    author_photo: String(formData.get('author_photo') || '').trim(),
    author_url: String(formData.get('author_url') || '').trim(),
    author_sameas: parseList(formData.get('author_sameas')),
  };
  const { error } = await supabase.from('site_settings').upsert(patch);
  if (error) return { error: error.message };
  revalidatePath('/blog');
  revalidatePath('/admin/settings');
  return { ok: true };
}

export async function setStatus(id, status) {
  const supabase = await serverClient();
  const next = status === 'published' ? 'published' : 'draft';
  const patch = { status: next };
  if (next === 'published') {
    const { data: existing } = await supabase
      .from('posts').select('published_at').eq('id', id).maybeSingle();
    if (!existing?.published_at) patch.published_at = new Date().toISOString();
  }
  const { data, error } = await supabase
    .from('posts').update(patch).eq('id', id).select('slug').maybeSingle();
  if (error) return { error: error.message };
  revalidateBlog(data?.slug);
  revalidatePath('/admin');
}

export async function deletePost(id) {
  const supabase = await serverClient();
  const { data, error } = await supabase
    .from('posts').delete().eq('id', id).select('slug').maybeSingle();
  if (error) return { error: error.message };
  revalidateBlog(data?.slug);
  revalidatePath('/admin');
}
