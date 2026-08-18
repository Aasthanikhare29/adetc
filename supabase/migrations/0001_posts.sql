-- Blog posts: table, RLS, storage bucket, updated_at trigger.

create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),
  slug          text not null unique,
  title         text not null,
  excerpt       text not null default '',
  category      text not null default '',
  image         text not null default '',
  content_html  text,
  href          text,
  status        text not null default 'draft' check (status in ('draft','published')),
  published_at  timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index if not exists posts_status_published_at_idx
  on public.posts (status, published_at desc);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
  before update on public.posts
  for each row execute function public.set_updated_at();

-- RLS: anyone reads published; authenticated does everything.
alter table public.posts enable row level security;

drop policy if exists posts_public_read on public.posts;
create policy posts_public_read on public.posts
  for select using (status = 'published');

drop policy if exists posts_admin_all on public.posts;
create policy posts_admin_all on public.posts
  for all to authenticated using (true) with check (true);

-- Storage bucket for cover + inline images (public read, authenticated write).
insert into storage.buckets (id, name, public)
  values ('blog-images', 'blog-images', true)
  on conflict (id) do nothing;

drop policy if exists blog_images_public_read on storage.objects;
create policy blog_images_public_read on storage.objects
  for select using (bucket_id = 'blog-images');

drop policy if exists blog_images_admin_write on storage.objects;
create policy blog_images_admin_write on storage.objects
  for insert to authenticated with check (bucket_id = 'blog-images');

drop policy if exists blog_images_admin_update on storage.objects;
create policy blog_images_admin_update on storage.objects
  for update to authenticated using (bucket_id = 'blog-images');

drop policy if exists blog_images_admin_delete on storage.objects;
create policy blog_images_admin_delete on storage.objects
  for delete to authenticated using (bucket_id = 'blog-images');
