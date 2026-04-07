import type { SeoPage } from '@/lib/monetization/types';
import { seedSeoPages } from '@/lib/monetization/seed-data';
import { isSupabaseConfigured } from '@/lib/env';
import { getPublicSupabaseClient, getServiceSupabaseClient } from '@/lib/supabase/clients';

export async function listSeoPages() {
  if (isSupabaseConfigured()) {
    try {
      const client = getPublicSupabaseClient();
      const { data, error } = await client.from('seo_pages').select('*').order('slug');
      if (!error && data) {
        return data as SeoPage[];
      }
    } catch {
      // fallback para seed local
    }
  }

  return seedSeoPages;
}

export async function getSeoPageBySlug(slug: string) {
  const pages = await listSeoPages();
  return pages.find((page) => page.slug === slug) ?? null;
}

export async function upsertSeoPage(page: SeoPage) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase service role nao configurado para gravar paginas SEO.');
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('seo_pages').upsert(page);

  if (error) {
    throw new Error(error.message);
  }
}
