import type { Offer, Partner, ProductType } from '@/lib/monetization/types';

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

type ExternalOfferPayload = Record<string, unknown>;

export function normalizePartnerOfferData(partner: Partner, input: ExternalOfferPayload): Offer {
  const name = String(input.name ?? input.title ?? 'Oferta sem nome');
  const productType = String(input.product_type ?? input.productType ?? 'credit_card') as ProductType;
  const category = String(input.category ?? (productType === 'digital_account' ? 'contas' : productType === 'loan' ? 'emprestimos' : productType === 'financing' ? 'financiamento' : 'cartoes'));

  return {
    id: String(input.id ?? `seed-${slugify(name)}`),
    partner_id: partner.id,
    name,
    slug: String(input.slug ?? slugify(name)),
    product_type: productType,
    category,
    bank: String(input.bank ?? partner.name),
    description: String(input.description ?? input.short_description ?? 'Oferta importada de parceiro.'),
    short_description: String(input.short_description ?? input.description ?? 'Oferta importada.'),
    annual_fee: input.annual_fee ? String(input.annual_fee) : null,
    interest_rate: input.interest_rate ? String(input.interest_rate) : null,
    apr: input.apr ? String(input.apr) : null,
    cashback: input.cashback ? String(input.cashback) : null,
    rewards: input.rewards ? String(input.rewards) : null,
    credit_score_min: input.credit_score_min ? Number(input.credit_score_min) : null,
    income_requirement: input.income_requirement ? String(input.income_requirement) : null,
    featured: Boolean(input.featured),
    is_active: input.is_active !== false,
    redirect_url: String(input.redirect_url ?? partner.website ?? 'https://cotejuros.com.br'),
    tracking_code: input.tracking_code ? String(input.tracking_code) : null,
    rating: Number(input.rating ?? 0),
    metadata_json: typeof input.metadata_json === 'object' && input.metadata_json !== null ? (input.metadata_json as Record<string, unknown>) : {},
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

function parseCsv(content: string) {
  const [headerLine, ...rows] = content.trim().split(/\r?\n/);
  const headers = headerLine.split(',').map((header) => header.trim());

  return rows
    .filter(Boolean)
    .map((row) => row.split(',').map((cell) => cell.trim()))
    .map((cells) =>
      headers.reduce<Record<string, string>>((accumulator, header, index) => {
        accumulator[header] = cells[index] ?? '';
        return accumulator;
      }, {})
    );
}

export async function importOffersFromFeed(partner: Partner, feedContent: string, format: 'json' | 'csv') {
  const parsed = format === 'json' ? (JSON.parse(feedContent) as ExternalOfferPayload[]) : parseCsv(feedContent);
  return parsed.map((item) => normalizePartnerOfferData(partner, item));
}

export async function syncPartnerOffersFromApi(partner: Partner) {
  if (!partner.api_base_url) {
    throw new Error(`Parceiro ${partner.name} nao possui api_base_url configurada.`);
  }

  const response = await fetch(partner.api_base_url, {
    headers: {
      Accept: 'application/json'
    },
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`Falha ao sincronizar ofertas do parceiro ${partner.name}.`);
  }

  const payload = (await response.json()) as ExternalOfferPayload[];
  return payload.map((item) => normalizePartnerOfferData(partner, item));
}
