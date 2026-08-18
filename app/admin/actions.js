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
  };

  let saved;
  if (id) {
    // set published_at on first publish only
    const { data: existing } = await supabase
      .from('posts').select('published_at,status').eq('id', id).maybeSingle();
    if (status === 'published' && !existing?.published_at) {
      row.published_at = new Date().toISOString();
    }
    const { data, error } = await supabase
      .from('posts').update(row).eq('id', id).select('slug').maybeSingle();
    if (error) return { error: error.message };
    saved = data;
  } else {
    if (status === 'published') row.published_at = new Date().toISOString();
    const { data, error } = await supabase
      .from('posts').insert(row).select('slug').maybeSingle();
    if (error) return { error: error.message };
    saved = data;
  }

  revalidateBlog(saved?.slug);
  redirect('/admin');
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
