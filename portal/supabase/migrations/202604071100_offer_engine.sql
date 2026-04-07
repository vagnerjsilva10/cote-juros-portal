create extension if not exists "pgcrypto";

create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  partner_type text not null check (partner_type in ('affiliate_network', 'direct_partner', 'internal')),
  network_name text,
  website text,
  notes text,
  api_base_url text,
  has_api boolean not null default false,
  has_feed boolean not null default false,
  feed_url text,
  default_tracking_template text,
  status text not null default 'draft' check (status in ('draft', 'active', 'inactive')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.offer_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  name text not null,
  slug text not null unique,
  product_type text not null check (product_type in ('credit_card', 'loan', 'financing', 'digital_account')),
  category text not null,
  bank text not null,
  description text not null,
  short_description text not null,
  annual_fee text,
  interest_rate text,
  apr text,
  cashback text,
  rewards text,
  credit_score_min integer,
  income_requirement text,
  featured boolean not null default false,
  is_active boolean not null default true,
  redirect_url text not null,
  tracking_code text,
  rating numeric(2,1) not null default 0,
  metadata_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.offer_clicks (
  id uuid primary key default gen_random_uuid(),
  offer_id uuid not null references public.offers(id) on delete cascade,
  clicked_at timestamptz not null default timezone('utc', now()),
  source_page text,
  referrer text,
  user_agent text,
  ip_hash text,
  utm_source text,
  utm_medium text,
  utm_campaign text
);

create table if not exists public.seo_pages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  meta_description text not null,
  h1 text not null,
  intro text not null,
  page_type text not null check (page_type in ('credit_card', 'loan', 'financing', 'digital_account')),
  filters_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.recommendation_rules (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  product_type text not null check (product_type in ('credit_card', 'loan', 'financing', 'digital_account')),
  rule_json jsonb not null default '{}'::jsonb,
  priority integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists offers_product_type_idx on public.offers(product_type);
create index if not exists offers_category_idx on public.offers(category);
create index if not exists offers_featured_idx on public.offers(featured);
create index if not exists offers_active_idx on public.offers(is_active);
create index if not exists offer_clicks_offer_id_idx on public.offer_clicks(offer_id);
create index if not exists offer_clicks_source_page_idx on public.offer_clicks(source_page);
create index if not exists seo_pages_page_type_idx on public.seo_pages(page_type);
create index if not exists recommendation_rules_priority_idx on public.recommendation_rules(priority desc);

alter table public.partners enable row level security;
alter table public.offer_categories enable row level security;
alter table public.offers enable row level security;
alter table public.offer_clicks enable row level security;
alter table public.seo_pages enable row level security;
alter table public.recommendation_rules enable row level security;

drop policy if exists "Public can read active partners" on public.partners;
create policy "Public can read active partners"
  on public.partners
  for select
  using (status = 'active');

drop policy if exists "Public can read offer categories" on public.offer_categories;
create policy "Public can read offer categories"
  on public.offer_categories
  for select
  using (true);

drop policy if exists "Public can read active offers" on public.offers;
create policy "Public can read active offers"
  on public.offers
  for select
  using (is_active = true);

drop policy if exists "Public can read seo pages" on public.seo_pages;
create policy "Public can read seo pages"
  on public.seo_pages
  for select
  using (true);

drop policy if exists "Public can read active recommendation rules" on public.recommendation_rules;
create policy "Public can read active recommendation rules"
  on public.recommendation_rules
  for select
  using (is_active = true);

drop policy if exists "Service role manages offer clicks" on public.offer_clicks;
create policy "Service role manages offer clicks"
  on public.offer_clicks
  for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');

create table if not exists public.page_views (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  viewed_at timestamptz not null default timezone(''utc'', now()),
  referrer text,
  user_agent text,
  ip_hash text,
  utm_source text,
  utm_medium text,
  utm_campaign text
);

create index if not exists page_views_path_idx on public.page_views(path);
create index if not exists page_views_viewed_at_idx on public.page_views(viewed_at desc);

alter table public.page_views enable row level security;

drop policy if exists "Service role manages page views" on public.page_views;
create policy "Service role manages page views"
  on public.page_views
  for all
  using (auth.role() = ''service_role'')
  with check (auth.role() = ''service_role'');