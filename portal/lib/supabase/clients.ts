import { createClient, type SupabaseClient } from '@supabase/supabase-js';

import {
  getSupabaseAnonKey,
  getSupabaseServiceRoleKey,
  getSupabaseUrl,
  hasPublicSupabaseConfig,
  isSupabaseConfigured
} from '@/lib/env';

function throwMissingSupabaseConfig(): never {
  throw new Error(
    'Supabase nao configurado. Defina NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY e SUPABASE_SERVICE_ROLE_KEY.'
  );
}

export function getPublicSupabaseClient(): SupabaseClient {
  if (!hasPublicSupabaseConfig()) {
    throwMissingSupabaseConfig();
  }

  return createClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    auth: {
      persistSession: false
    }
  });
}

export function getServiceSupabaseClient(): SupabaseClient {
  if (!isSupabaseConfigured()) {
    throwMissingSupabaseConfig();
  }

  return createClient(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: {
      persistSession: false
    }
  });
}
