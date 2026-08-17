# Architecture

This project is a **static marketing site wearing a Next.js coat**. Understanding one fact explains almost everything: the pages were mechanically converted from a hand-built HTML/jQuery template, and that template still owns all client-side behavior. Next.js provides routing, layout, and the blog data layer on top.

## 1. Rendering model

- **Server Components by default.** Almost every `app/**/page.jsx` is a plain server component that returns static JSX. No data fetching, no client hooks.
- **Two exceptions use `'use client'`:** `components/Footer.jsx` (a small newsletter-notify `useState`) — and that's essentially it on the React side.
- **The root layout** (`app/layout.jsx`) is the shell for every page:

  ```
  <Header/> <Sidebar/> <main>{children}</main> <Footer/>
  + <Script src="/assets/js/bundle.js" strategy="afterInteractive"/>
  ```

  It also links the stylesheets directly in `<head>` (`main.css`, `responsive.css`).

## 2. The jQuery layer (important)

Interactivity is **not** React. After hydration, `bundle.js` runs and wires up the DOM with jQuery.

- `public/assets/js/bundle.js` is the **actual runtime bundle** — the only JS the app loads. It is **generated** by `scripts/build-js.js` (`npm run build:js`) from the source parts below, in order.
- The source scripts (edit these, then rebuild):
  - `script.js` — nav/sidebar toggles, dropdowns, counters, lazy YouTube loader (`initLazyYouTube`), YouTube background videos, form init calls
  - `collapse-tabs.js` — tiny vanilla replacement for Bootstrap collapse/accordion + tabs (reads the existing `data-bs-*` markup). **Bootstrap JS was removed.**
  - `submit-form.js` — contact + newsletter form validation (client-only; **does not actually send anything** — it just shows/hides success/error messages)
  - `video_embedded.js` — YouTube modal (portfolio play button)
  - `vendor/jquery.min.js` — jQuery 3.7.1 (still the one remaining library)
- **Removed in CWV Phase 2:** Bootstrap JS (~80 KB, → `collapse-tabs.js`) and Swiper (~154 KB — the partner strip is a pure CSS marquee, so Swiper never ran). `bundle.js` went from ~346 KB to ~114 KB. The unused `vendor/bootstrap.bundle.min.js`, `vendor/swiper-bundle.min.js`, and `swiper-script.js` remain on disk but are **not** part of the build.

> **Gotcha (reduced):** editing a source script still changes nothing until you run `npm run build:js` to regenerate `bundle.js`. But it's now a one-command build, not a hand-edit — never edit `bundle.js` directly. Bootstrap/Swiper **CSS** is still linked in the layout (kept for grid + accordion/tab + marquee styling).

- Forms are **presentation-only.** `submit-form.js` validates and flashes a message; no backend, no email, no API. Wiring up real submission is unimplemented work, not a bug in existing code.

## 3. The HTML → JSX pipeline

The pages were generated, not hand-written. `scripts/convert.js` (run via `npm run convert`) reads `legacy/*.html` and emits `app/**/page.jsx` plus `components/{Header,Sidebar,Footer}.jsx`.

What it does, using `cheerio`:
- Extracts the `<main>` of each legacy page → a route's `page.jsx`; extracts `<header>`/`<aside>`/`<footer>` from `index.html` → the shared components.
- Rewrites HTML attributes to JSX (`class`→`className`, `for`→`htmlFor`, inline `style` strings → style objects, SVG attribute casing, etc.).
- Rewrites asset/link URLs to absolute (`assets/...`→`/assets/...`) and maps legacy `*.html` links to clean routes via the `routes` table at the top of the file.
- **Drops `<script>` and `<style>` tags** — that's why interactivity lives in the separately-loaded `bundle.js`.

`routes` (in `convert.js`) and the `pages` array are the **canonical list of legacy→route mappings**. If you add a page to the template, add it there.

> **Consequence:** `app/**/page.jsx` is partly *generated output*. Hand-edits to a converted page will be overwritten if someone reruns `npm run convert`. See [DEVELOPMENT.md](DEVELOPMENT.md) for how to decide where to edit.

## 4. Routing

Standard App Router — one folder per route under `app/`. Routes present: `/`, `/about`, `/services`, `/service-detail`, `/project`, `/project-detail`, `/blog`, `/single-post`, `/team`, `/testimonial`, `/pricing`, `/contact`, plus content/landing pages `/ad-film-makers`, `/brand-video`, `/tvc-format`, `/video-production-company`. `app/not-found.jsx` is the 404.

Note the detail pages (`service-detail`, `project-detail`, `single-post`) are **single static pages, not dynamic `[slug]` routes.** Every "service" or "post" link currently points at the same detail page.

## 5. Blog (the one real data layer)

The only place with actual data + logic:

- `lib/blog-posts.js` — an array of post objects. Each has a `slug`; a post is either **bespoke** (`href` → a hand-built page) or **data-driven** (`body` blocks → rendered by `/blog/[slug]`). `draft: true` hides a post from listing, pagination and sitemap. Helpers: `publishedPosts`, `postUrl(post)`, `getPaginatedPosts(page)`, `TOTAL_PAGES`, `slugPosts`, `getPostBySlug(slug)`.
- `app/blog/page.jsx` renders page 1 of `publishedPosts`.
- `app/blog/page/[page]/page.jsx` renders pages 2..N — `generateStaticParams` (SSG), `notFound()` out of range.
- `app/blog/[slug]/page.jsx` — **data-driven article route**. Renders any post that has a `body` and no `href`, with per-post metadata + `Article`/`BreadcrumbList` JSON-LD. `generateStaticParams` comes from `slugPosts`.
- `components/BlogCard.jsx` links via `postUrl(post)`; `components/BlogPagination.jsx` renders the pager.

**Current state:** 4 real articles are bespoke pages (`href` → `/single-post`, `/brand-video`, `/tvc-format`, `/video-production-company`). 8 posts are `draft: true` placeholders with no article body — hidden until written. The `[slug]` route is live but has zero pages until a post gets a `body`. This is intentional: duplicate `/single-post` links are gone, and new posts are added as data, not new bespoke pages.

## 6. Styling & assets

- All CSS is static under `public/assets/css`. `main.css` + `responsive.css` are the site's own styles; everything in `vendor/` is third-party.
- **Stylesheets load as parallel `<link>`s in `app/layout.jsx`** (vendor + font CSS, then `main.css`, then `responsive.css`). This replaced a render-blocking serial `@import` chain that used to sit at the top of `main.css` — **if you add a vendor/font CSS, add it as a `<link>` in the layout, not an `@import`.**
- Fonts self-hosted under `public/s` + `public/assets/webfonts`, already `font-display: swap`. Only **Anton** and **Poppins** are wired up (`main.css`); `font-family-inter.css` exists but is imported nowhere (dead).
- Images use plain `<img>` (not `next/image`) with native `loading="lazy" decoding="async"` on content images. `next/image` is a further optimization, not a fix.
- `<head>` preconnects `youtube.com` / `i.ytimg.com` to speed the first video embed.

## 7. SEO / GEO / AEO layer

All native Next 15, zero dependencies. Central config: **`lib/seo.js`**.

- **`lib/seo.js`** — `SITE` constants (name, url, NAP, logo, services, updated), `pageMetadata(...)` helper, and JSON-LD builders: `organizationLd`, `localBusinessLd` (with `areaServed` + `hasOfferCatalog` of the 5 services), `websiteLd`, `breadcrumbLd`, `articleLd` (with `speakable` + `dateModified`), `faqLd`.
- **`FAQPage` JSON-LD** on `/ad-film-makers` (9 Q&A) and `/pricing` (6 Q&A), built from the on-page FAQ accordions via `faqLd`.
- **AI-bot robots rules** — `app/robots.js` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc. **`public/llms-full.txt`** — richer AI-readable extract (services, process, FAQ, articles, NAP).
- **`components/JsonLd.jsx`** — renders a `<script type="application/ld+json">`. Trusted, code-authored data only.
- **`app/layout.jsx`** — `metadataBase` + rich default metadata (title template `%s | AdEtc Studios`, OG, Twitter, robots, favicon) and site-wide JSON-LD (`Organization` + `LocalBusiness` + `WebSite`).
- **`app/sitemap.js`** / **`app/robots.js`** — native `/sitemap.xml` and `/robots.txt`. **Add new routes to the `ROUTES` array in `sitemap.js`.**
- **Per-page metadata** — every `page.jsx` calls `pageMetadata(...)` for a unique description + canonical. Home passes no `title` (uses layout default).
- **Article pages** (`single-post`, `ad-film-makers`, `brand-video`, `tvc-format`, `video-production-company`) also emit `Article` + `BreadcrumbList` JSON-LD.
- **`app/feed.xml/route.js`** — prerendered RSS 2.0 feed of `publishedPosts`, autodiscovered via a `<link rel="alternate">` in the layout.
- **`public/llms.txt`** — plain-text site summary for LLM/answer-engine crawlers (served at `/llms.txt`). Hand-maintained; update it when top-level pages change.

Not yet done — **owner data / off-repo:** `SITE.sameAs` real social URLs (Footer placeholders must NOT be used), `VideoObject` schema (needs real YouTube upload dates), `Offer`/pricing schema (current plan cards are `$299`/lorem placeholders — needs real plans+prices). **Code/content:** `next/image`, the jQuery/`bundle.js` weight (CWV — [PERFORMANCE-PLAN.md](PERFORMANCE-PLAN.md); Phases 0–2 done), and writing the 8 draft articles.

## Mental model, in one line

> Next.js routes and lays out static, mostly-generated pages; a committed jQuery bundle does everything interactive; only the blog has real data and logic.
