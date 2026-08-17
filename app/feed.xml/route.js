import { SITE } from '@/lib/seo';
import { publishedPosts, postUrl } from '@/lib/blog-posts';

// Prerender at build (like sitemap/robots) rather than per-request.
export const dynamic = 'force-static';

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function GET() {
  const items = publishedPosts
    .map((post) => {
      const link = `${SITE.url}${postUrl(post)}`;
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${esc(post.category)}</category>
      <description>${esc(post.excerpt)}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE.name)} — Blog</title>
    <link>${SITE.url}/blog</link>
    <description>${esc(SITE.description)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
