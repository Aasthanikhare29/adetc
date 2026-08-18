import { SITE } from '@/lib/seo';
import { getTotalPages, getSlugPosts } from '@/lib/blog-posts';
import { getPublishedPageSlugs } from '@/lib/pages';

// Static list of real routes. Add new routes here when you add pages.
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/project',
  '/project-detail',
  '/blog',
  '/single-post',
  '/team',
  '/testimonial',
  '/pricing',
  '/contact',
  '/ad-film-makers-in-ahmedabad',
  '/video-production-company-in-ahmedabad',
  '/brand-video',
  '/tvc-format',
  '/video-production-company-guide',
];

export default async function sitemap() {
  const [totalPages, slugPosts, pageSlugs] = await Promise.all([
    getTotalPages(), getSlugPosts(), getPublishedPageSlugs(),
  ]);
  const now = new Date();
  const urls = ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));

  // Paginated blog pages: /blog/page/2 ... /blog/page/N
  for (let p = 2; p <= totalPages; p += 1) {
    urls.push({
      url: `${SITE.url}/blog/page/${p}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  // Data-driven blog posts (/blog/[slug]) — published, non-bespoke.
  for (const post of slugPosts) {
    urls.push({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Builder pages (/[...slug]) — published.
  for (const slug of pageSlugs) {
    urls.push({
      url: `${SITE.url}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  return urls;
}
