import type { Partner } from '@/lib/monetization/types';
import { seedPartners } from '@/lib/monetization/seed-data';
import { isSupabaseConfigured } from '@/lib/env';
import { getPublicSupabaseClient, getServiceSupabaseClient } from '@/lib/supabase/clients';

export async function listPartners(options: { includeInactive?: boolean } = {}) {
  if (isSupabaseConfigured()) {
    try {
      const client = options.includeInactive ? getServiceSupabaseClient() : getPublicSupabaseClient();
      const query = client.from('partners').select('*').order('name');
      const { data, error } = options.includeInactive ? await query : await query.eq('status', 'active');
      if (!error && data) {
        return data as Partner[];
      }
    } catch {
      // fallback para seed local
    }
  }

  return seedPartners.filter((partner) => (options.includeInactive ? true : partner.status === 'active'));
}

export async function getPartnerById(id: string) {
  const partners = await listPartners({ includeInactive: true });
  return partners.find((partner) => partner.id === id) ?? null;
}

export async function upsertPartner(partner: Partner) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase service role nao configurado para gravar parceiros.');
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('partners').upsert(partner);

  if (error) {
    throw new Error(error.message);
  }
}
