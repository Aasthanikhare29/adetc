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
    draft: row.status !== 'published',
  };
}

const SELECT = 'slug,title,excerpt,category,image,href,content_html,status,published_at,created_at';

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
  if (error) throw error;
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
  if (error) throw error;
  return (data || []).map(rowToPost);
}

export async function getTotalPages() {
  const client = db();
  if (!client) return 1;
  const { count, error } = await client
    .from('posts')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'published');
  if (error) throw error;
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
  if (error) throw error;
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
  if (error) throw error;
  return data ? rowToPost(data) : null;
}
