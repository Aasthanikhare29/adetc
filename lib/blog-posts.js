import { publicClient } from '@/lib/supabase/public';

export const POSTS_PER_PAGE = 6;

// Canonical URL for a post card: bespoke page if `href` set, else the [slug] route.
export function postUrl(post) {
  return post.href || `/blog/${post.slug}`;
}

function fmtDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// DB row -> the post shape the public components expect.
function rowToPost(row) {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    image: row.image,
    href: row.href || undefined,
    contentHtml: row.content_html,
    date: fmtDate(row.published_at || row.created_at),
    dateISO: row.published_at || row.created_at,
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
    draft: row.status !== 'published',
    // SEO / AEO / GEO
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    ogTitle: row.og_title || undefined,
    ogDescription: row.og_description || undefined,
    ogImage: row.og_image || undefined,
    ogImageAlt: row.og_image_alt || undefined,
    imageAlt: row.image_alt || undefined,
    canonical: row.canonical || undefined,
    robots: row.robots || 'index,follow',
    focusKeyword: row.focus_keyword || undefined,
    secondaryKeywords: row.secondary_keywords || [],
    tags: row.tags || [],
    faq: Array.isArray(row.faq) ? row.faq : [],
    tldr: row.tldr || undefined,
  };
}

const SELECT =
  'slug,title,excerpt,category,image,href,content_html,status,published_at,created_at,updated_at,' +
  'meta_title,meta_description,og_title,og_description,og_image,og_image_alt,image_alt,canonical,' +
  'robots,focus_keyword,secondary_keywords,tags,faq,tldr';

// Single-author settings (Person entity for schema). Null if unset.
export async function getSettings() {
  const client = db();
  if (!client) return null;
  const { data } = await client.from('site_settings').select('*').eq('id', 1).maybeSingle();
  return data || null;
}

// Null when Supabase isn't configured yet — lets the site build/deploy before
// the DB is wired (public pages just render empty listings until then).
function db() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  return publicClient();
}

// All published posts, newest first.
export async function getPublishedPosts() {
  const client = db();
  if (!client) return [];
  const { data, error } = await client
    .from('posts')
    .select(SELECT)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  if (error) { console.warn('[blog] getPublishedPosts:', error.message); return []; }
  return (data || []).map(rowToPost);
}

export async function getPaginatedPosts(page) {
  const client = db();
  if (!client) return [];
  const start = (page - 1) * POSTS_PER_PAGE;
  const { data, error } = await client
    .from('posts')
    .select(SELECT)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(start, start + POSTS_PER_PAGE - 1);
  if (error) { console.warn('[blog] getPaginatedPosts:', error.message); return []; }
  return (data || []).map(rowToPost);
}

export async function getTotalPages() {
  const client = db();
  if (!client) return 1;
  const { count, error } = await client
    .from('posts')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published');
  if (error) { console.warn('[blog] getTotalPages:', error.message); return 1; }
  return Math.max(1, Math.ceil((count || 0) / POSTS_PER_PAGE));
}

// Posts rendered by app/blog/[slug] (data-driven: have content, not a bespoke page).
export async function getSlugPosts() {
  const client = db();
  if (!client) return [];
  const { data, error } = await client
    .from('posts')
    .select(SELECT)
    .eq('status', 'published')
    .is('href', null)
    .not('content_html', 'is', null);
  if (error) { console.warn('[blog] getSlugPosts:', error.message); return []; }
  return (data || []).map(rowToPost);
}

export async function getPostBySlug(slug) {
  const client = db();
  if (!client) return null;
  const { data, error } = await client
    .from('posts')
    .select(SELECT)
    .eq('status', 'published')
    .is('href', null)
    .eq('slug', slug)
    .maybeSingle();
  if (error) { console.warn('[blog] getPostBySlug:', error.message); return null; }
  return data ? rowToPost(data) : null;
}
