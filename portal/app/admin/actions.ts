'use server';

import { randomUUID } from 'crypto';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { getAdminAccessKey } from '@/lib/env';
import type { Offer, Partner, RecommendationRule, SeoPage } from '@/lib/monetization/types';
import { clearAdminSession, isAdminAuthenticated, setAdminSession } from '@/lib/admin/session';
import { upsertOffer, toggleOfferFlag } from '@/lib/offers';
import { upsertPartner } from '@/lib/partners';
import { upsertRecommendationRule } from '@/lib/recommendations';
import { upsertSeoPage } from '@/lib/seo-pages';

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getField(formData: FormData, name: string) {
  return String(formData.get(name) ?? '').trim();
}

async function ensureAdmin() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect('/admin?error=unauthorized');
  }
}

export async function loginAdminAction(formData: FormData) {
  const configuredKey = getAdminAccessKey();
  const submittedKey = getField(formData, 'accessKey');

  if (!configuredKey) {
    redirect('/admin?error=missing-admin-key');
  }

  if (submittedKey !== configuredKey) {
    redirect('/admin?error=invalid-access-key');
  }

  await setAdminSession();
  redirect('/admin');
}

export async function logoutAdminAction() {
  await clearAdminSession();
  redirect('/admin');
}

export async function createPartnerAction(formData: FormData) {
  await ensureAdmin();

  const name = getField(formData, 'name');
  const slug = getField(formData, 'slug') || slugify(name);

  const partner: Partner = {
    id: randomUUID(),
    name,
    slug,
    partner_type: getField(formData, 'partner_type') as Partner['partner_type'],
    network_name: getField(formData, 'network_name') || null,
    website: getField(formData, 'website') || null,
    notes: getField(formData, 'notes') || null,
    api_base_url: getField(formData, 'api_base_url') || null,
    has_api: formData.get('has_api') === 'true',
    has_feed: formData.get('has_feed') === 'true',
    feed_url: getField(formData, 'feed_url') || null,
    default_tracking_template: getField(formData, 'default_tracking_template') || null,
    status: getField(formData, 'status') as Partner['status'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  await upsertPartner(partner);
  revalidatePath('/admin');
}

export async function createOfferAction(formData: FormData) {
  await ensureAdmin();

  const name = getField(formData, 'name');
  const slug = getField(formData, 'slug') || slugify(name);

  const metadataJson = getField(formData, 'metadata_json');
  const metadata = metadataJson ? JSON.parse(metadataJson) : {};

  const offer: Offer = {
    id: randomUUID(),
    partner_id: getField(formData, 'partner_id'),
    name,
    slug,
    product_type: getField(formData, 'product_type') as Offer['product_type'],
    category: getField(formData, 'category'),
    bank: getField(formData, 'bank'),
    description: getField(formData, 'description'),
    short_description: getField(formData, 'short_description'),
    annual_fee: getField(formData, 'annual_fee') || null,
    interest_rate: getField(formData, 'interest_rate') || null,
    apr: getField(formData, 'apr') || null,
    cashback: getField(formData, 'cashback') || null,
    rewards: getField(formData, 'rewards') || null,
    credit_score_min: getField(formData, 'credit_score_min') ? Number(getField(formData, 'credit_score_min')) : null,
    income_requirement: getField(formData, 'income_requirement') || null,
    featured: formData.get('featured') === 'true',
    is_active: formData.get('is_active') !== 'false',
    redirect_url: getField(formData, 'redirect_url'),
    tracking_code: getField(formData, 'tracking_code') || null,
    rating: Number(getField(formData, 'rating') || 0),
    metadata_json: metadata,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  await upsertOffer(offer);
  revalidatePath('/admin');
}

export async function toggleOfferActiveAction(formData: FormData) {
  await ensureAdmin();
  await toggleOfferFlag(getField(formData, 'id'), 'is_active', getField(formData, 'nextValue') === 'true');
  revalidatePath('/admin');
}

export async function toggleOfferFeaturedAction(formData: FormData) {
  await ensureAdmin();
  await toggleOfferFlag(getField(formData, 'id'), 'featured', getField(formData, 'nextValue') === 'true');
  revalidatePath('/admin');
}

export async function createSeoPageAction(formData: FormData) {
  await ensureAdmin();

  const title = getField(formData, 'title');
  const slug = getField(formData, 'slug') || slugify(title);
  const page: SeoPage = {
    id: randomUUID(),
    slug,
    title,
    meta_description: getField(formData, 'meta_description'),
    h1: getField(formData, 'h1'),
    intro: getField(formData, 'intro'),
    page_type: getField(formData, 'page_type') as SeoPage['page_type'],
    filters_json: JSON.parse(getField(formData, 'filters_json') || '{}'),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  await upsertSeoPage(page);
  revalidatePath('/admin');
}

export async function createRecommendationRuleAction(formData: FormData) {
  await ensureAdmin();

  const rule: RecommendationRule = {
    id: randomUUID(),
    name: getField(formData, 'name'),
    product_type: getField(formData, 'product_type') as RecommendationRule['product_type'],
    rule_json: JSON.parse(getField(formData, 'rule_json') || '{}'),
    priority: Number(getField(formData, 'priority') || 0),
    is_active: formData.get('is_active') !== 'false'
  };

  await upsertRecommendationRule(rule);
  revalidatePath('/admin');
}