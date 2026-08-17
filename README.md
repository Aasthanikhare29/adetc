# adetc

Marketing website for **AdEtc Studios** — a full-service film & video production studio based in Ahmedabad, Gujarat. Built with Next.js (App Router) and React, ported from a static HTML template that still drives most of the runtime behavior.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router), React 19 |
| Language | JavaScript / JSX (no TypeScript) |
| Styling | Plain CSS in `public/assets/css` — Bootstrap 5 grid + FontAwesome + Swiper vendor CSS, plus `main.css` / `responsive.css` |
| Client interactivity | Legacy **jQuery** bundle (`public/assets/js/bundle.js`), not React state |
| Fonts | Self-hosted (Anton, Inter, Poppins) under `public/s` and `public/assets/webfonts` |

There are **no runtime npm dependencies beyond `next` / `react` / `react-dom`.** `cheerio` is a dev dependency used only by the conversion script.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | Does |
|---------|------|
| `npm run dev` | Next dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run convert` | Regenerate `app/` pages + shared components from the `legacy/*.html` template (see [ARCHITECTURE.md](ARCHITECTURE.md)) |

## Project layout

```
app/                 App Router pages (one folder per route)
  layout.jsx         Root shell: <Header/> <Sidebar/> {children} <Footer/> + bundle.js
  page.jsx           Home
  <route>/page.jsx   about, services, blog, contact, team, pricing, project, ...
  blog/page/[page]/  Paginated blog route
components/          Header, Sidebar, Footer, BlogCard, BlogPagination
lib/blog-posts.js    Blog post data + pagination helpers (the only real "data model")
public/assets/       CSS, JS (jQuery bundle), images, webfonts — served as-is
legacy/              Original static HTML template (source of truth for `npm run convert`)
scripts/convert.js   HTML → JSX transpiler (cheerio)
```

## Read next

- [ARCHITECTURE.md](ARCHITECTURE.md) — how the pieces fit, the HTML→JSX pipeline, the jQuery/React split, and known gotchas.
- [DEVELOPMENT.md](DEVELOPMENT.md) — recipes: add a page, add a blog post, edit styles, work with the converter.
- [PERFORMANCE-PLAN.md](PERFORMANCE-PLAN.md) — phased plan to remove jQuery/Bootstrap/Swiper and fix Core Web Vitals.
