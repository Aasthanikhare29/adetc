-- DB-driven marketing/landing pages (block-based page builder).

create table if not exists public.pages (
  id               uuid primary key default gen_random_uuid(),
  slug             text not null unique,          -- path after domain, e.g. 'summer-promo' or 'campaigns/diwali'
  title            text not null,
  status           text not null default 'draft' check (status in ('draft','published')),
  blocks           jsonb not null default '[]'::jsonb,
  meta_title       text,
  meta_description text,
  og_title         text,
  og_description   text,
  og_image         text,
  og_image_alt     text,
  canonical        text,
  robots           text not null default 'index,follow',
  published_at     timestamptz,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists pages_status_idx on public.pages (status);

drop trigger if exists pages_set_updated_at on public.pages;
create trigger pages_set_updated_at
  before update on public.pages
  for each row execute function public.set_updated_at();

alter table public.pages enable row level security;

drop policy if exists pages_public_read on public.pages;
create policy pages_public_read on public.pages
  for select using (status = 'published');

drop policy if exists pages_admin_all on public.pages;
create policy pages_admin_all on public.pages
  for all to authenticated using (true) with check (true);
