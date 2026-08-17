# Development guide

Practical recipes. Read [ARCHITECTURE.md](ARCHITECTURE.md) first — especially the "generated pages" and "jQuery layer" gotchas, which change *where* you should make edits.

## Decide where to edit: generated vs. hand-owned

| File | Owned by | Edit here? |
|------|----------|-----------|
| `app/**/page.jsx` (converted routes) | `scripts/convert.js` output | Only if no one will rerun `npm run convert`. Otherwise edit the `legacy/*.html` source and reconvert. |
| `components/{Header,Sidebar,Footer}.jsx` | Same converter | Same caveat as above. |
| `lib/blog-posts.js` | Hand-written | Yes, freely. |
| `components/{BlogCard,BlogPagination}.jsx` | Hand-written | Yes, freely. |
| `public/assets/css/*` | Hand-written | Yes, freely. |
| `public/assets/js/bundle.js` | Committed runtime bundle | Yes — but see "Editing client JS" below. |

Rule of thumb: if a page came out of the converter and the team still uses the converter, treat `legacy/*.html` as the source. In practice the project appears to have moved past the converter (pages like `/team` were hand-edited with live image URLs), so confirm with the team before assuming either direction.

## Add a blog post

Edit `lib/blog-posts.js`. A post is one of two kinds:

**Data-driven (preferred)** — no bespoke page, rendered by `/blog/[slug]`:

```js
{
  slug: 'my-post-slug',
  title: '…',
  image: '/assets/images/your-image.jpg',
  date: 'August 17, 2026',
  category: 'Production Insights',
  excerpt: '…',
  body: [
    { type: 'paragraph', text: '…' },
    { type: 'heading', text: 'A section' },
    { type: 'list', items: ['one', 'two'] },
    { type: 'quote', text: '…', author: '…' },
  ],
}
```

It appears in the listing, gets a canonical `/blog/<slug>` URL, sitemap entry, and `Article` + `BreadcrumbList` JSON-LD automatically. Drop the image into `public/assets/images/`.

**Bespoke** — a hand-built page (like the existing 5 articles): give the post a `href` pointing at that page instead of a `body`. `postUrl()` links cards to the `href`.

**Drafts:** set `draft: true` to keep a card out of the listing, pagination and sitemap until its `body` is written. The 8 placeholder posts are currently drafts — fill in `body` and remove `draft` to publish. Pagination and static params recompute from `publishedPosts` automatically.

## Add a new route (hand-written)

```
app/my-route/page.jsx
```

```jsx
export const metadata = { title: 'My Page - adetc' };

export default function Page() {
  return (
    <>
      {/* your sections; reuse existing classNames from main.css */}
    </>
  );
}
```

Header/Sidebar/Footer come from the layout automatically. Link to it with a plain `<a href="/my-route">` (the template uses `<a>`, not `next/link`, except in the blog pager).

## Add a page via the converter (template-driven)

1. Add the HTML file to `legacy/`.
2. Register it in **`scripts/convert.js`**: add an entry to the `routes` map (legacy filename → route) and to the `pages` array (file, title, route).
3. `npm run convert`.

This regenerates the listed pages and the shared components. Review the diff before committing — the converter overwrites.

## Edit styles

Site CSS lives in `public/assets/css/main.css` and `responsive.css`. All stylesheets — vendor + font CSS, then `main.css`, then `responsive.css` — are loaded as parallel `<link>`s in `app/layout.jsx` (order = cascade order). No preprocessor, no CSS modules — plain global CSS. Vendor CSS in `css/vendor/` is third-party; don't edit.

**Adding a vendor/font stylesheet:** add a `<link>` in the layout `<head>` (before `main.css`). Do **not** use `@import` in `main.css` — the old serial `@import` chain was removed because it blocks rendering.

## Editing client JS (the jQuery layer)

The loaded file is `public/assets/js/bundle.js`, **generated** by `scripts/build-js.js`. Edit the source scripts (`script.js`, `collapse-tabs.js`, `submit-form.js`, `video_embedded.js`), then rebuild:

```bash
npm run build:js
```

Never edit `bundle.js` directly — it's regenerated. To add/remove a script, edit the `parts` array in `scripts/build-js.js`. jQuery must stay first (other scripts use `$`). Bootstrap JS and Swiper have been removed (see [PERFORMANCE-PLAN.md](PERFORMANCE-PLAN.md) Phase 2); collapse/accordion/tabs are handled by `collapse-tabs.js`.

Forms (`submit-form.js`) currently only validate and flash a message. To make contact/newsletter actually submit, you'll need to add a backend or third-party endpoint — none exists today.

## Gotchas checklist

- `bundle.js` is generated — edit source scripts then run `npm run build:js`; never edit `bundle.js` directly.
- Converted pages can be overwritten by `npm run convert` — know which mode the team is in.
- The app uses `<img>` (native `loading="lazy"`), not `next/image`. New content images should carry `loading="lazy" decoding="async"`.
- Vendor/font CSS is loaded via `<link>` in the layout, not `@import` in main.css. Adding `next/image` is an optimization, not a fix.
- `reactStrictMode` is off (`next.config.mjs`).
