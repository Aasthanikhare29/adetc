<div align="center">

# 🎬 AdEtc Studios

**Full-service film & video production studio — Ahmedabad, India.**
Marketing site built on the Next.js App Router, engineered for search, answer engines, and speed.

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-JSX-F7DF1E?logo=javascript&logoColor=black)
![Runtime deps](https://img.shields.io/badge/runtime%20deps-next%20%C2%B7%20react%20%C2%B7%20react--dom-brightgreen)
![Bundle](https://img.shields.io/badge/client%20JS-114%20KB-success)

</div>

---

## What this is

A production marketing site for a film studio — home, services, portfolio, team, pricing, contact, and a blog. It began as a static HTML/jQuery template and was ported to Next.js. Next owns routing, layout, metadata, and the blog data layer; a small jQuery bundle still drives legacy interactions (being retired — see the [performance plan](PERFORMANCE-PLAN.md)).

**Zero runtime dependencies beyond `next` / `react` / `react-dom`.** No CSS framework runtime, no UI kit, no analytics SDK. `cheerio` is dev-only (the HTML→JSX converter).

## Why it's fast & findable

This isn't a vanilla template — the discoverability and performance layers were built out deliberately:

| Area | What's shipped |
|------|----------------|
| 🔍 **SEO** | Per-page metadata (canonical + OpenGraph + Twitter), native `sitemap.xml` + `robots.txt`, unique titles/descriptions on every route |
| 🤖 **AEO** (answer engines) | `FAQPage` schema, `speakable` blocks, `llms.txt` + `llms-full.txt` for LLM crawlers |
| 🌐 **GEO** (generative engines) | `Organization` / `LocalBusiness` JSON-LD with NAP + service catalog, `Article` + `BreadcrumbList`, explicit AI-bot allow rules (GPTBot, ClaudeBot, PerplexityBot…) |
| ⚡ **Core Web Vitals** | YouTube API lazy-loaded (video-less pages ship **zero** YouTube JS), Bootstrap + Swiper JS removed, native image lazy-loading, parallelized CSS |
| 📉 **Bundle** | Client JS cut from **~346 KB → ~114 KB** (−67%) |

Current scorecard (out of 10): **SEO 8.7 · AEO 7.3 · GEO 7.6** — remaining gaps are owner data + content, tracked in [ARCHITECTURE.md §7](ARCHITECTURE.md).

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Does |
|---------|------|
| `npm run dev` | Next dev server |
| `npm run build` | Production build (22 static routes) |
| `npm start` | Serve the production build |
| `npm run build:js` | Regenerate `public/assets/js/bundle.js` from source scripts |
| `npm run convert` | Regenerate pages/components from the `legacy/*.html` template |

## Project structure

```
app/                  App Router — one folder per route
  layout.jsx          Shell: Header · Sidebar · main · Footer + metadata + site JSON-LD
  page.jsx            Home
  <route>/page.jsx    about, services, blog, contact, team, pricing, project, …
  blog/[slug]/        Data-driven blog article route
  sitemap.js          /sitemap.xml   robots.js  /robots.txt   feed.xml  RSS
components/           Header, Sidebar, Footer, BlogCard, BlogPagination, JsonLd
lib/
  seo.js              SITE config + pageMetadata() + JSON-LD builders (the SEO core)
  blog-posts.js       Blog data model (slugs, drafts, pagination)
public/assets/        CSS, JS bundle, images, self-hosted fonts
legacy/               Original static HTML (source for `npm run convert`)
scripts/              build-js.js (JS bundler) · convert.js (HTML→JSX)
```

## Common tasks

**Add a blog post** → add an object to `lib/blog-posts.js` with a `slug` + `body` (or `href` for a bespoke page). Drafts (`draft: true`) stay hidden until written. Listing, pagination, sitemap, and JSON-LD update automatically.

**Add a page** → `app/my-route/page.jsx` exporting `metadata = pageMetadata({...})`. Header/Sidebar/Footer come from the layout.

**Edit client JS** → edit the source scripts, then `npm run build:js`. Never hand-edit `bundle.js`.

Full recipes in [DEVELOPMENT.md](DEVELOPMENT.md).

## Documentation

| Doc | For |
|-----|-----|
| [ARCHITECTURE.md](ARCHITECTURE.md) | How it all fits: rendering model, jQuery layer, HTML→JSX pipeline, blog model, SEO layer, gotchas |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Hands-on recipes and conventions |
| [PERFORMANCE-PLAN.md](PERFORMANCE-PLAN.md) | Phased plan to retire jQuery and max out Core Web Vitals |

## Roadmap

- [x] SEO / AEO / GEO foundation (metadata, structured data, sitemap, feeds, llms.txt)
- [x] CWV Phase 0–2 (lazy YouTube, drop Bootstrap/Swiper JS, build step)
- [ ] Owner data: real `sameAs` URLs, pricing plans, `VideoObject` upload dates
- [ ] CWV Phase 3–5: migrate interactions to React, remove jQuery, `next/image`
- [ ] Write the 8 draft blog articles

## Notes

- Contact & newsletter forms **validate only** — no backend wired yet.
- Private project (`package.json` `"private": true`).

<div align="center">
<sub>Built with Next.js · Engineered for search, answers, and speed.</sub>
</div>
