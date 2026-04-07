import type { Offer, OfferFilterInput, OfferWithPartner, ProductType } from '@/lib/monetization/types';
import { seedOffers } from '@/lib/monetization/seed-data';
import { listPartners } from '@/lib/partners';
import { getSeoPageBySlug } from '@/lib/seo-pages';
import { isSupabaseConfigured } from '@/lib/env';
import { getPublicSupabaseClient, getServiceSupabaseClient } from '@/lib/supabase/clients';

function scoreBandMatches(scoreBand: OfferFilterInput['scoreBand'], creditScoreMin: number | null) {
  if (!scoreBand || creditScoreMin === null) {
    return true;
  }

  if (scoreBand === 'low') {
    return creditScoreMin <= 650;
  }

  if (scoreBand === 'mid') {
    return creditScoreMin > 650 && creditScoreMin <= 720;
  }

  return creditScoreMin > 720;
}

function applyFilters(offers: Offer[], filters: OfferFilterInput = {}) {
  return offers.filter((offer) => {
    if (filters.productType && offer.product_type !== filters.productType) {
      return false;
    }

    if (filters.category && offer.category !== filters.category) {
      return false;
    }

    if (filters.featured !== undefined && offer.featured !== filters.featured) {
      return false;
    }

    if (filters.isActive !== undefined && offer.is_active !== filters.isActive) {
      return false;
    }

    if (filters.cashbackRequired && !offer.cashback) {
      return false;
    }

    if (filters.maxAnnualFee === 'R$ 0' && offer.annual_fee !== 'R$ 0') {
      return false;
    }

    if (filters.minRating && offer.rating < filters.minRating) {
      return false;
    }

    if (!scoreBandMatches(filters.scoreBand, offer.credit_score_min)) {
      return false;
    }

    return true;
  });
}

async function loadOffers(includeInactive = false) {
  if (isSupabaseConfigured()) {
    try {
      const client = includeInactive ? getServiceSupabaseClient() : getPublicSupabaseClient();
      const query = client.from('offers').select('*').order('featured', { ascending: false }).order('rating', { ascending: false });
      const { data, error } = includeInactive ? await query : await query.eq('is_active', true);

      if (!error && data) {
        return data as Offer[];
      }
    } catch {
      // fallback para seed local
    }
  }

  return seedOffers.filter((offer) => (includeInactive ? true : offer.is_active));
}

async function attachPartners(offers: Offer[]): Promise<OfferWithPartner[]> {
  const partners = await listPartners({ includeInactive: true });
  const partnerMap = new Map(partners.map((partner) => [partner.id, partner]));

  return offers.map((offer) => ({
    ...offer,
    partner: partnerMap.get(offer.partner_id) ?? null
  }));
}

export async function getAllOffers(options: { includeInactive?: boolean } = {}) {
  const offers = await loadOffers(Boolean(options.includeInactive));
  return attachPartners(offers);
}

export async function getOffersByType(productType: ProductType, filters: Omit<OfferFilterInput, 'productType'> = {}) {
  const offers = await loadOffers(false);
  return attachPartners(applyFilters(offers, { ...filters, productType, isActive: true }));
}

export async function getFeaturedOffers(productType?: ProductType) {
  const offers = await loadOffers(false);
  return attachPartners(
    applyFilters(offers, {
      productType,
      featured: true,
      isActive: true
    })
  );
}

export async function getOfferBySlug(slug: string) {
  if (isSupabaseConfigured()) {
    try {
      const client = getPublicSupabaseClient();
      const { data, error } = await client.from('offers').select('*').eq('slug', slug).eq('is_active', true).maybeSingle();
      if (!error && data) {
        const [offer] = await attachPartners([data as Offer]);
        return offer ?? null;
      }
    } catch {
      // fallback para seed local
    }
  }

  const seedOffer = seedOffers.find((offer) => offer.slug === slug && offer.is_active);
  if (!seedOffer) {
    return null;
  }

  const [offer] = await attachPartners([seedOffer]);
  return offer ?? null;
}

export async function getOffersForSeoPage(slug: string) {
  const seoPage = await getSeoPageBySlug(slug);
  if (!seoPage) {
    return [];
  }

  const filters = seoPage.filters_json as OfferFilterInput;
  const offers = await loadOffers(false);
  return attachPartners(applyFilters(offers, { ...filters, isActive: true }));
}

export async function upsertOffer(offer: Offer) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase service role nao configurado para gravar ofertas.');
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('offers').upsert(offer);

  if (error) {
    throw new Error(error.message);
  }
}

export async function toggleOfferFlag(id: string, field: 'featured' | 'is_active', value: boolean) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase service role nao configurado para atualizar ofertas.');
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('offers').update({ [field]: value }).eq('id', id);

  if (error) {
    throw new Error(error.message);
  }
}
