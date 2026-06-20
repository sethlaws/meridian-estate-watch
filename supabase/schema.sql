-- ============================================================
-- Meridian Estate Watch — Client Portal schema (Phase 1)
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query).
-- Safe to re-run: uses IF NOT EXISTS / OR REPLACE where possible.
-- ============================================================

-- ---------- Tables ----------

-- Operator/inspector accounts. One row per auth user; is_admin gates /admin.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

-- Clients (property owners). Linked to an auth user by email on first login.
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid references auth.users(id) on delete set null,
  name text not null,
  email text,
  phone text,
  created_at timestamptz not null default now()
);

create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  address text not null,
  nickname text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.visits (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  inspector_name text,
  visit_date date not null,
  status text not null default 'completed'
    check (status in ('scheduled', 'completed', 'issue_flagged')),
  checklist_data jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.photos (
  id uuid primary key default gen_random_uuid(),
  visit_id uuid not null references public.visits(id) on delete cascade,
  storage_url text not null,         -- path within the 'visit-photos' bucket
  caption text,
  created_at timestamptz not null default now()
);

create index if not exists idx_properties_client on public.properties(client_id);
create index if not exists idx_visits_property on public.visits(property_id);
create index if not exists idx_photos_visit on public.photos(visit_id);

-- ---------- Helper (security definer to avoid RLS recursion) ----------

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select coalesce((select is_admin from public.profiles where id = auth.uid()), false);
$$;

-- ---------- New-user trigger: create profile + link client by email ----------

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name')
  on conflict (id) do nothing;

  -- Link a pre-created client row to this auth user by matching email.
  update public.clients
    set auth_user_id = new.id
    where lower(email) = lower(new.email) and auth_user_id is null;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- Row Level Security ----------

alter table public.profiles   enable row level security;
alter table public.clients    enable row level security;
alter table public.properties enable row level security;
alter table public.visits     enable row level security;
alter table public.photos     enable row level security;

-- profiles: a user sees their own profile; admins see all.
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select using (id = auth.uid() or public.is_admin());

drop policy if exists profiles_update_own on public.profiles;
create policy profiles_update_own on public.profiles
  for update using (id = auth.uid());

-- clients: a client sees only their own row; admins manage all.
drop policy if exists clients_select on public.clients;
create policy clients_select on public.clients
  for select using (auth_user_id = auth.uid() or public.is_admin());

drop policy if exists clients_admin_write on public.clients;
create policy clients_admin_write on public.clients
  for all using (public.is_admin()) with check (public.is_admin());

-- properties: a client sees only properties they own; admins manage all.
drop policy if exists properties_select on public.properties;
create policy properties_select on public.properties
  for select using (
    public.is_admin()
    or client_id in (select id from public.clients where auth_user_id = auth.uid())
  );

drop policy if exists properties_admin_write on public.properties;
create policy properties_admin_write on public.properties
  for all using (public.is_admin()) with check (public.is_admin());

-- visits: visible if the parent property belongs to the client; admins manage all.
drop policy if exists visits_select on public.visits;
create policy visits_select on public.visits
  for select using (
    public.is_admin()
    or property_id in (
      select p.id from public.properties p
      join public.clients c on c.id = p.client_id
      where c.auth_user_id = auth.uid()
    )
  );

drop policy if exists visits_admin_write on public.visits;
create policy visits_admin_write on public.visits
  for all using (public.is_admin()) with check (public.is_admin());

-- photos: visible if the parent visit is visible; admins manage all.
drop policy if exists photos_select on public.photos;
create policy photos_select on public.photos
  for select using (
    public.is_admin()
    or visit_id in (
      select v.id from public.visits v
      join public.properties p on p.id = v.property_id
      join public.clients c on c.id = p.client_id
      where c.auth_user_id = auth.uid()
    )
  );

drop policy if exists photos_admin_write on public.photos;
create policy photos_admin_write on public.photos
  for all using (public.is_admin()) with check (public.is_admin());

-- ---------- Storage bucket for visit photos (private) ----------

insert into storage.buckets (id, name, public)
values ('visit-photos', 'visit-photos', false)
on conflict (id) do nothing;

-- Admins can upload.
drop policy if exists storage_admin_insert on storage.objects;
create policy storage_admin_insert on storage.objects
  for insert to authenticated
  with check (bucket_id = 'visit-photos' and public.is_admin());

-- Read access: admins, or clients whose accessible visit id is the first path segment.
-- Photos must be stored at path: <visit_id>/<filename>
drop policy if exists storage_read on storage.objects;
create policy storage_read on storage.objects
  for select to authenticated
  using (
    bucket_id = 'visit-photos'
    and (
      public.is_admin()
      or (split_part(name, '/', 1))::uuid in (
        select v.id from public.visits v
        join public.properties p on p.id = v.property_id
        join public.clients c on c.id = p.client_id
        where c.auth_user_id = auth.uid()
      )
    )
  );

-- ============================================================
-- AFTER RUNNING: make yourself an admin (replace the email):
--   update public.profiles set is_admin = true
--   where id = (select id from auth.users where email = 'sethlaws@gmail.com');
-- (You must have logged in once via /login so your auth user exists.)
-- ============================================================
