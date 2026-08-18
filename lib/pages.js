import { publicClient } from '@/lib/supabase/public';

function db() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return null;
  return publicClient();
}

function rowToPage(row) {
  return {
    slug: row.slug,
    title: row.title,
    blocks: Array.isArray(row.blocks) ? row.blocks : [],
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    ogTitle: row.og_title || undefined,
    ogDescription: row.og_description || undefined,
    ogImage: row.og_image || undefined,
    ogImageAlt: row.og_image_alt || undefined,
    canonical: row.canonical || undefined,
    robots: row.robots || 'index,follow',
    publishedAt: row.published_at,
    updatedAt: row.updated_at,
  };
}

const SELECT =
  'slug,title,blocks,meta_title,meta_description,og_title,og_description,og_image,og_image_alt,canonical,robots,published_at,updated_at';

// Slugs of published pages (for generateStaticParams). May contain slashes.
export async function getPublishedPageSlugs() {
  const client = db();
  if (!client) return [];
  const { data, error } = await client.from('pages').select('slug').eq('status', 'published');
  if (error) { console.warn('[pages] slugs:', error.message); return []; }
  return (data || []).map((r) => r.slug);
}

export async function getPageBySlug(slug) {
  const client = db();
  if (!client) return null;
  const { data, error } = await client
    .from('pages').select(SELECT).eq('status', 'published').eq('slug', slug).maybeSingle();
  if (error) { console.warn('[pages] getPageBySlug:', error.message); return null; }
  return data ? rowToPage(data) : null;
}
