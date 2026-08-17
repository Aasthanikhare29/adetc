import { SITE } from '@/lib/seo';
import { TOTAL_PAGES, slugPosts } from '@/lib/blog-posts';

// Static list of real routes. Add new routes here when you add pages.
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/service-detail',
  '/project',
  '/project-detail',
  '/blog',
  '/single-post',
  '/team',
  '/testimonial',
  '/pricing',
  '/contact',
  '/ad-film-makers',
  '/brand-video',
  '/tvc-format',
  '/video-production-company',
];

export default function sitemap() {
  const now = new Date();
  const urls = ROUTES.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));

  // Paginated blog pages: /blog/page/2 ... /blog/page/N
  for (let p = 2; p <= TOTAL_PAGES; p += 1) {
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

  return urls;
}
