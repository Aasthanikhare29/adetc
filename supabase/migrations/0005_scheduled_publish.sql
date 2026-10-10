-- Scheduled publishing: a published post/page with a future published_at is not
-- publicly readable until that time. The app filters the same way
-- (lib/blog-posts.js, lib/pages.js); this enforces it for direct API reads too.
-- Admins are unaffected (posts_admin_all / pages_admin_all, role authenticated).

drop policy if exists posts_public_read on public.posts;
create policy posts_public_read on public.posts
  for select using (status = 'published' and published_at <= now());

drop policy if exists pages_public_read on public.pages;
create policy pages_public_read on public.pages
  for select using (status = 'published' and published_at <= now());
