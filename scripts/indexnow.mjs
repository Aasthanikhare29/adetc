// IndexNow submit — pings search engines to recrawl after a deploy.
// Run AFTER the new content is live:  node scripts/indexnow.mjs
// Key file public/<KEY>.txt must be deployed and reachable at the site root.
import { SITE } from '../lib/seo.js';

const KEY = 'bc8fdc59e0b1d841fb0e5bc59a66d566';

// Keep in sync with app/sitemap.js ROUTES (that file can't be imported here:
// it uses the "@/" path alias which plain node doesn't resolve).
const ROUTES = [
  '/', '/about', '/services', '/service-detail', '/project', '/project-detail',
  '/blog', '/single-post', '/team', '/testimonial', '/pricing', '/contact',
  '/ad-film-makers', '/brand-video', '/tvc-format', '/video-production-company',
];

const host = new URL(SITE.url).host;
const urlList = ROUTES.map((p) => `${SITE.url}${p}`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key: KEY, keyLocation: `${SITE.url}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow -> ${res.status} ${res.statusText} (${urlList.length} URLs)`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
