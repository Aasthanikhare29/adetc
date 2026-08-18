-- SEO/AEO/GEO fields, post revisions, and a single-author settings row.

-- 1. Post columns ----------------------------------------------------------
alter table public.posts
  add column if not exists meta_title         text,
  add column if not exists meta_description    text,
  add column if not exists og_title            text,
  add column if not exists og_description      text,
  add column if not exists og_image            text,
  add column if not exists og_image_alt        text,
  add column if not exists image_alt           text,          -- featured image alt
  add column if not exists canonical           text,
  add column if not exists robots              text not null default 'index,follow',
  add column if not exists focus_keyword       text,
  add column if not exists secondary_keywords  text[] not null default '{}',
  add column if not exists tags                text[] not null default '{}',
  add column if not exists faq                 jsonb  not null default '[]'::jsonb,  -- [{q,a}]
  add column if not exists tldr                text;

create index if not exists posts_tags_idx on public.posts using gin (tags);

-- 2. Revisions (snapshot the full row on each publish) ----------------------
create table if not exists public.post_revisions (
  id         uuid primary key default gen_random_uuid(),
  post_id    uuid not null references public.posts(id) on delete cascade,
  snapshot   jsonb not null,
  note       text,
  created_at timestamptz not null default now()
);
create index if not exists post_revisions_post_idx
  on public.post_revisions (post_id, created_at desc);

alter table public.post_revisions enable row level security;
drop policy if exists post_revisions_admin on public.post_revisions;
create policy post_revisions_admin on public.post_revisions
  for all to authenticated using (true) with check (true);

-- 3. Single-author site settings (public read for schema) -------------------
create table if not exists public.site_settings (
  id             int primary key default 1,
  author_name    text,
  author_title   text,        -- e.g. "Founder, AdEtc Studios"
  author_bio     text,
  author_photo   text,
  author_url     text,        -- author page / homepage
  author_sameas  text[] not null default '{}',  -- social profile URLs
  updated_at     timestamptz not null default now(),
  constraint site_settings_singleton check (id = 1)
);

insert into public.site_settings (id) values (1) on conflict (id) do nothing;

alter table public.site_settings enable row level security;
drop policy if exists site_settings_public_read on public.site_settings;
create policy site_settings_public_read on public.site_settings
  for select using (true);
drop policy if exists site_settings_admin_write on public.site_settings;
create policy site_settings_admin_write on public.site_settings
  for all to authenticated using (true) with check (true);

drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
  before update on public.site_settings
  for each row execute function public.set_updated_at();
