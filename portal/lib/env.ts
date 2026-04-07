const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  adminAccessKey: process.env.ADMIN_ACCESS_KEY ?? '',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cotejuros.com.br'
};

export function isSupabaseConfigured() {
  return Boolean(env.supabaseUrl && env.supabaseAnonKey && env.supabaseServiceRoleKey);
}

export function hasPublicSupabaseConfig() {
  return Boolean(env.supabaseUrl && env.supabaseAnonKey);
}

export function hasAdminAccessKey() {
  return Boolean(env.adminAccessKey);
}

export function getSupabaseUrl() {
  return env.supabaseUrl;
}

export function getSupabaseAnonKey() {
  return env.supabaseAnonKey;
}

export function getSupabaseServiceRoleKey() {
  return env.supabaseServiceRoleKey;
}

export function getAdminAccessKey() {
  return env.adminAccessKey;
}

export function getSiteUrl() {
  return env.siteUrl;
}
