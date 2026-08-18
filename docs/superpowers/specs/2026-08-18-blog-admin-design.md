# Blog Admin Panel — Design

Date: 2026-08-18
Status: Approved

## Context

adetc is a static Next.js 15 marketing site. The blog is the only real data layer:
posts are a hardcoded array in `lib/blog-posts.js`, rendered SSG. There is no
backend, DB, or auth. Goal: a WordPress-like admin to author blog posts. This is
slice 1 of a larger "build something like Shopify" ambition — the backend chosen
here (Supabase + Auth + admin shell + ISR) is the reusable foundation later
product/order features extend.

## Decisions

- **Hosting/DB:** Vercel + Supabase (Postgres + Auth + Storage).
- **Editor:** Tiptap rich-text (WYSIWYG), stores HTML.
- **Publish flow:** ISR — public pages read Supabase; Publish calls
  `revalidatePath` so changes go live in seconds. No rebuild.
- **Auth:** single admin, email + password (Supabase Auth). One `admin` gate on
  `/admin/*`. Roles deferred.

## Data model — `posts`

| col | type | notes |
|---|---|---|
| id | uuid pk | `gen_random_uuid()` |
| slug | text unique | `/blog/[slug]` param |
| title | text | |
| excerpt | text | card + meta description |
| category | text | |
| image | text | cover image URL |
| content_html | text null | Tiptap output; null for legacy bespoke posts |
| href | text null | legacy bespoke page (`/single-post` etc.); links out |
| status | text | `draft` \| `published`, default `draft` |
| published_at | timestamptz null | set on first publish |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | trigger-maintained |

**RLS:** public (anon) may `select` rows where `status = 'published'`;
`authenticated` may do everything. **Storage:** bucket `blog-images`, public
read, authenticated write. Sanitize `content_html` server-side on every save.

One-time seed migrates the 12 existing posts (4 published-with-href, 8 drafts).

## Public site changes

`lib/blog-posts.js` helpers become async DB reads keeping the same names/returns.
`postUrl(post)` stays a pure function. Constants (`TOTAL_PAGES`, `slugPosts`,
`publishedPosts`) become async getters; consumers (`blog/page`, `blog/page/[page]`,
`blog/[slug]`, `sitemap.js`, `feed.xml`, `BlogPagination`) `await`. `[slug]`
renders sanitized `content_html` via `dangerouslySetInnerHTML` instead of `body`
blocks; `dynamicParams = true` so posts not built at deploy render on demand.
Reads use the anon key under RLS (published only) — no session needed.

## Admin panel — `app/admin/*`

- `/admin/login` — Supabase email+password.
- `/admin` — post list (draft/published), New Post.
- `/admin/posts/new` and `/admin/posts/[id]` — Tiptap editor + fields (title,
  auto-slug, excerpt, category, cover upload, status). Save draft / Publish / Delete.
- Root `middleware.js` refreshes the Supabase session and redirects
  unauthenticated `/admin/*` (except `/admin/login`) to login.
- Writes are server actions using `@supabase/ssr` (cookie session): `signIn`,
  `signOut`, `savePost`, `setStatus`, `deletePost`, `uploadImage`. Publish sets
  `published_at`, sanitizes HTML, `revalidatePath('/blog')` +
  `revalidatePath('/blog/'+slug)` + `revalidatePath('/sitemap.xml')`.

## Env

`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (client + public
reads), `SUPABASE_SERVICE_ROLE_KEY` (reserved; not required if RLS covers admin
writes). `.env.local` gitignored.

## Out of scope (now)

Multi-user roles, autosave, revisions, comments, categories-as-table,
scheduling, and anything Shopify (products/cart/checkout). Each is a later slice.

## Dependencies added

`@supabase/supabase-js`, `@supabase/ssr`, `sanitize-html`, `@tiptap/react`,
`@tiptap/pm`, `@tiptap/starter-kit`, `@tiptap/extension-link`,
`@tiptap/extension-image`.
