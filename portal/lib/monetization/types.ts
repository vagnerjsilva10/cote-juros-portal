export type PartnerType = 'affiliate_network' | 'direct_partner' | 'internal';

export type PartnerStatus = 'draft' | 'active' | 'inactive';

export type ProductType = 'credit_card' | 'loan' | 'financing' | 'digital_account';

export type OfferCategorySlug =
  | 'melhores-cartoes'
  | 'cartoes-sem-anuidade'
  | 'cartoes-com-cashback'
  | 'cartoes-para-score-baixo'
  | 'melhores-emprestimos'
  | 'emprestimo-para-negativado'
  | 'melhores-contas-digitais'
  | 'melhores-opcoes-de-financiamento';

export type RecommendationPriority = number;

export type JsonMap = Record<string, unknown>;

export type Partner = {
  id: string;
  name: string;
  slug: string;
  partner_type: PartnerType;
  network_name: string | null;
  website: string | null;
  notes: string | null;
  api_base_url: string | null;
  has_api: boolean;
  has_feed: boolean;
  feed_url: string | null;
  default_tracking_template: string | null;
  status: PartnerStatus;
  created_at: string;
  updated_at: string;
};

export type Offer = {
  id: string;
  partner_id: string;
  name: string;
  slug: string;
  product_type: ProductType;
  category: string;
  bank: string;
  description: string;
  short_description: string;
  annual_fee: string | null;
  interest_rate: string | null;
  apr: string | null;
  cashback: string | null;
  rewards: string | null;
  credit_score_min: number | null;
  income_requirement: string | null;
  featured: boolean;
  is_active: boolean;
  redirect_url: string;
  tracking_code: string | null;
  rating: number;
  metadata_json: JsonMap;
  created_at: string;
  updated_at: string;
};

export type OfferCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
};

export type OfferClick = {
  id?: string;
  offer_id: string;
  clicked_at?: string;
  source_page: string | null;
  referrer: string | null;
  user_agent: string | null;
  ip_hash: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
};

export type SeoPage = {
  id: string;
  slug: string;
  title: string;
  meta_description: string;
  h1: string;
  intro: string;
  page_type: ProductType;
  filters_json: JsonMap;
  created_at: string;
  updated_at: string;
};

export type RecommendationRule = {
  id: string;
  name: string;
  product_type: ProductType;
  rule_json: JsonMap;
  priority: RecommendationPriority;
  is_active: boolean;
};

export type OfferWithPartner = Offer & {
  partner?: Partner | null;
};

export type OfferFilterInput = {
  productType?: ProductType;
  category?: string;
  featured?: boolean;
  isActive?: boolean;
  maxAnnualFee?: string;
  minRating?: number;
  cashbackRequired?: boolean;
  scoreBand?: 'low' | 'mid' | 'high';
};

export type DiagnosisInput = {
  primaryGoal: 'save' | 'cashback' | 'credit' | 'account' | 'financing';
  creditScoreBand: 'low' | 'mid' | 'high';
  incomeBand: 'low' | 'mid' | 'high';
  debtLevel: 'low' | 'mid' | 'high';
  wantsNoAnnualFee: boolean;
};

export type RecommendationResult = {
  title: string;
  rationale: string;
  offers: OfferWithPartner[];
};
