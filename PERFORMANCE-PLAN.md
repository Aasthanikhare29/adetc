# Performance / CWV Plan — remove jQuery, shrink client JS

Goal: cut the client-JS weight and fix Core Web Vitals without regressing any behavior. Today every page loads one hand-concatenated `bundle.js` = **jQuery 3.7.1 + Bootstrap bundle + Swiper + all site scripts**, plus the **YouTube iframe API on every page** — even pages with no video. This is the biggest remaining CWV lever (see [ARCHITECTURE.md](ARCHITECTURE.md) §2).

The end state: interactions are React client components (or tiny vanilla ES modules) that Next.js bundles and **code-splits per route**, so a page only ships the JS it uses. No jQuery, no Bootstrap JS, no Swiper JS. Bootstrap/FontAwesome **CSS** stays.

## Inventory — what the JS actually does

Everything currently in `public/assets/js/` (concatenated into `bundle.js`):

| Behavior | Source | Where used | Replacement |
|---|---|---|---|
| YouTube background videos (banner, testimonial, project ×N, service ×N, CTA ×N) | `script.js` | home, testimonial, project, service pages | `<YouTubeBackground>` client component + lazy facade |
| Accordion play/pause video (`shown/hidden.bs.collapse`) | `script.js` | service page | native `<details>` or ~15-line vanilla toggle |
| Mobile sidebar open/close | `script.js` `initSidebar` | global (all pages) | `<Sidebar>` client component (state) |
| Sidebar submenu toggle | `script.js` `initSidebarDropdown` | global | part of `<Sidebar>` |
| Active nav link by URL | `script.js` `initNavLink` | global | `usePathname()` in `<Header>` |
| Counter count-up (IntersectionObserver) | `script.js` `initCounter` | about/home | `<Counter>` client component (already IO-based) |
| Project heading scroll hide/show | `script.js` `initProjectHeading` | project page | small client hook |
| Custom `<select>` dropdown + a11y + `window.*` helpers | `script.js` `initCustomDropdown` | contact form | React controlled `<Dropdown>` |
| Testimonial carousel (scroll/auto-advance) | `script.js` (tail of `initCustomDropdown`) | testimonial page | `<TestimonialCarousel>` client component (already ~vanilla) |
| Partner logo carousel | `swiper-script.js` (Swiper lib) | partners section | CSS scroll-snap / marquee — **removes Swiper (~140 KB)** |
| Video modal (portfolio play button) | `video_embedded.js` | project page | `<VideoModal>` client component |
| Contact + newsletter form validation (no backend) | `submit-form.js` | contact, footer | React form components (Footer already `'use client'`) |

Libraries pulled in by `bundle.js`: **jQuery** (used by nearly everything above), **Bootstrap JS** (only the accordion `*.bs.collapse` events — verify no other use), **Swiper** (only the partner carousel). All three are *vendored files*, not npm deps — removal = delete files + stop loading them, no `package.json` change.

## Phases (each independently shippable + verifiable)

### Phase 0 — Baseline (S) — ✅ DONE
Measured via the prod server + browser DOM/network inspection:
- `bundle.js` = **~346 KB** (jQuery + Bootstrap + Swiper + site scripts), loaded on every page.
- **Before Phase 1**, a video-less page (`/about`) loaded `youtube.com/iframe_api` **and** `www-widgetapi.js` and defined the global `YT` — pure waste on every page with no video.
- Full Lighthouse (LCP/TBT/CLS) still worth capturing on a real device; the in-tool browser pane runs at a 0×0 viewport so it can't produce trustworthy CWV timings or fire `IntersectionObserver`.

### Phase 1 — Lazy-load YouTube (M, high ROI, low risk) — ✅ DONE
Implemented `initLazyYouTube()` in `public/assets/js/script.js` **and** `bundle.js` (kept in sync — no build step yet). The eager `loadYouTubeAPI()` call on DOM-ready is replaced by:
- Early return if the page has no video container → **video-less pages load zero YouTube JS**.
- Otherwise an `IntersectionObserver` (observing a **sized ancestor**, since the video container is zero-area until its iframe mounts) loads the API when a video nears the viewport, `rootMargin: 200px`.
- A first-interaction fallback (`scroll`/`pointerdown`/`touchstart`/`keydown`, `once`) guarantees the API still loads if the observer never fires (0-area/edge cases). Player logic (`onYouTubeIframeAPIReady` → `initBannerVideo` etc.) is **unchanged** — only *when* the API loads changed.
- The click-to-play modal (`video_embedded.js`) was already lazy (iframe `src` set on click) — untouched.

**Verified:** `/about` now loads **no** YouTube JS (`YT` undefined). `/` defers YouTube on initial paint, then loads it on interaction/IO (`YT.Player` + our callback confirmed live); no console errors.
**Not verifiable in-tool:** the final player iframe paint — the browser pane's 0×0 viewport + sandboxed youtube network block it. **Confirm autoplay backgrounds on a real desktop + mobile device** (muted + `playsinline`; iOS throttles autoplay).

### Phase 2 — Drop Swiper + Bootstrap JS (M, high ROI) — ✅ DONE
- **Swiper removed (~154 KB).** It never actually ran — `swiper-script.js` early-returns on `.partner-marquee`, and all three partner strips carry that class; the strip is a pure CSS marquee (`@keyframes partnerMarquee` in `main.css`). Dropped Swiper JS from the bundle. Kept Swiper **CSS** (the `.swiper`/`.swiper-wrapper`/`.swiper-slide` layout the marquee markup relies on).
- **Bootstrap JS removed (~80 KB).** Its only uses were collapse/accordion (46×) and tabs (8×), all via `data-bs-*` markup — no modals/dropdowns/etc. Replaced by **`collapse-tabs.js`**, a ~60-line vanilla shim that reads the existing markup, toggles the same classes Bootstrap CSS keys off, honors `data-bs-parent` single-open accordions, and re-fires `shown/hidden.bs.collapse` through jQuery so `script.js`'s service-video play/pause still works. **No page markup changed.** Kept Bootstrap **CSS**.
- **`bundle.js`: ~346 KB → ~114 KB (−232 KB, 67%).** Only jQuery remains.
- **Verified** (prod server + DOM): accordions (single-open) on `/about` + `/ad-film-makers`, tabs on `/ad-film-makers`, partner marquee animating, `Swiper`/`bootstrap` globals gone, no console errors. `ponytail:` the shim does show/hide without Bootstrap's height-slide animation — noted in the file.

### Phase 3 — Build step / module home (M, enabler) — ⏳ PARTIALLY DONE
- ✅ **Build step exists.** `scripts/build-js.js` (`npm run build:js`) now regenerates `bundle.js` from source parts — the hand-edited-bundle gotcha is gone. To change client JS: edit a source script, run `npm run build:js`.
- ⏳ **Remaining:** move interactions **into the Next app** as client components / ES modules so Next bundles, tree-shakes, and code-splits them per route. That's what makes Phase 4 incremental instead of big-bang.

### Phase 4 — Migrate interactions off jQuery (L, incremental)
One behavior at a time, each a small client component or vanilla module, colocated where used (so Next only ships it on those routes):
1. `<Sidebar>` (global) — menu + submenu state.
2. `<Header>` active link via `usePathname()`.
3. `<Counter>`, `<ProjectHeading>` scroll hook.
4. `<Dropdown>` + contact form → one `<ContactForm>` client component (merges the custom select, its `window.*` helpers, and validation).
5. `<TestimonialCarousel>`, `<VideoModal>`.
6. `<YouTubeBackground>` (absorbs Phase 1 facade).
7. Newsletter form (already in `'use client'` Footer) → drop its jQuery validation.

After each migration, delete the corresponding jQuery function. jQuery leaves last, when nothing references `$`.

### Phase 5 — Remove the legacy runtime (S)
Delete `bundle.js`, `vendor/jquery`, `vendor/bootstrap.bundle`, `vendor/swiper-bundle` (JS), `script.js`, `submit-form.js`, `swiper-script.js`, `video_embedded.js`, and the `<Script src="/assets/js/bundle.js">` in `app/layout.jsx`. Remove now-unused vendor CSS links (Swiper).

### Phase 6 — Verify (S)
Re-run Phase 0 Lighthouse + manual QA every interaction on every page it appears. Compare deltas.

## Sequencing / effort

```
Phase 0 (S) → Phase 1 (M) → Phase 2 (M) → Phase 3 (M) → Phase 4 (L, iterative) → Phase 5 (S) → Phase 6 (S)
```

Phases 1 and 2 deliver most of the CWV win (defer/remove the three big third-party chunks) and can ship **before** the larger Phase 4 rewrite. If time-boxed, do 0→1→2→6 first and treat 3→5 as a follow-up epic.

## Out of scope / decisions needed
- **Forms don't submit.** `submit-form.js` only validates and flashes a message — no backend. Migrating to React is the moment to wire real submission (API route, or a service like Formspree). **Needs a decision**; not a CWV task.
- **`next/image`.** Separate optimization (dimensions/`sizes` per image); native `loading="lazy"` already shipped in Tier 3.
- Keep the calibration knob: YouTube background autoplay is finicky on mobile (muted+playsinline required, iOS throttling). Test on real devices, not just desktop.
