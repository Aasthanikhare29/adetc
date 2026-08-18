-- Newsletter subscribers + an admin "handled" flag on the existing contacts table.
-- (The `contacts` table + /api/contact route already exist from an earlier change.)

create table if not exists public.subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  created_at timestamptz not null default now()
);

alter table public.subscribers enable row level security;
drop policy if exists subs_admin_all on public.subscribers;
create policy subs_admin_all on public.subscribers
  for all to authenticated using (true) with check (true);
-- inserts happen server-side via the service-role key (bypasses RLS), so no anon policy.

alter table public.contacts
  add column if not exists handled boolean not null default false;
