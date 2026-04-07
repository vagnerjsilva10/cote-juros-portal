import type { DiagnosisInput, Offer, OfferCategory, Partner, RecommendationRule, SeoPage } from '@/lib/monetization/types';

const NOW = '2026-04-07T12:00:00.000Z';

export const seedPartners: Partner[] = [
  {
    id: 'partner-banco-alpha',
    name: 'Banco Alpha Prime',
    slug: 'banco-alpha-prime',
    partner_type: 'direct_partner',
    network_name: null,
    website: 'https://www.bancoalphaprime.com.br',
    notes: 'Parceiro ilustrativo para estrutura inicial do offer engine.',
    api_base_url: null,
    has_api: false,
    has_feed: false,
    feed_url: null,
    default_tracking_template: null,
    status: 'active',
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'partner-banco-horizonte',
    name: 'Banco Horizonte',
    slug: 'banco-horizonte',
    partner_type: 'affiliate_network',
    network_name: 'Network Horizon',
    website: 'https://www.bancohorizonte.com.br',
    notes: 'Rede afiliada em fase de negociacao.',
    api_base_url: null,
    has_api: false,
    has_feed: true,
    feed_url: 'https://www.bancohorizonte.com.br/feed-ofertas.json',
    default_tracking_template: null,
    status: 'active',
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'partner-itau-personnalite',
    name: 'Itau Personnalite',
    slug: 'itau-personnalite',
    partner_type: 'direct_partner',
    network_name: null,
    website: 'https://www.itau.com.br/personnalite',
    notes: 'Estrutura pronta para conexao API futura.',
    api_base_url: 'https://api.itau.com.br/ofertas',
    has_api: true,
    has_feed: false,
    feed_url: null,
    default_tracking_template: null,
    status: 'draft',
    created_at: NOW,
    updated_at: NOW
  }
];

export const seedOfferCategories: OfferCategory[] = [
  {
    id: 'category-cartoes',
    name: 'Cartoes',
    slug: 'cartoes',
    description: 'Ofertas de cartoes de credito com foco em cashback, anuidade e elegibilidade.'
  },
  {
    id: 'category-emprestimos',
    name: 'Emprestimos',
    slug: 'emprestimos',
    description: 'Linhas de credito pessoal e renegociacao.'
  },
  {
    id: 'category-financiamento',
    name: 'Financiamento',
    slug: 'financiamento',
    description: 'Financiamento imobiliario e estruturacao de longo prazo.'
  },
  {
    id: 'category-contas',
    name: 'Contas digitais',
    slug: 'contas',
    description: 'Contas digitais com rendimento, cartao e operacao simplificada.'
  }
];

export const seedOffers: Offer[] = [
  {
    id: 'offer-alpha-cash',
    partner_id: 'partner-banco-alpha',
    name: 'Alpha Cash Signature',
    slug: 'alpha-cash-signature',
    product_type: 'credit_card',
    category: 'cartoes',
    bank: 'Banco Alpha Prime',
    description: 'Cartao para alta recorrencia com cashback acima da media e isencao por volume de gasto.',
    short_description: 'Cashback, isencao por gasto e beneficios premium.',
    annual_fee: 'Isencao mediante gasto mensal',
    interest_rate: '4,2% a.m. no rotativo',
    apr: '64,1% a.a.',
    cashback: '2,2%',
    rewards: 'Acesso a salas VIP e assistencia viagem',
    credit_score_min: 720,
    income_requirement: 'R$ 8.000',
    featured: true,
    is_active: true,
    redirect_url: 'https://www.bancoalphaprime.com.br/cartoes/alpha-cash-signature',
    tracking_code: 'ALPHA_CARD_01',
    rating: 4.8,
    metadata_json: {
      score_band: 'high',
      badges: ['cashback', 'premium'],
      seo_tags: ['melhores-cartoes', 'cartoes-com-cashback'],
      highlights: ['Cashback competitivo', 'Salas VIP', 'Isencao por relacionamento'],
      cta_label: 'Aplicar agora'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'offer-alpha-zero',
    partner_id: 'partner-banco-alpha',
    name: 'Alpha Zero',
    slug: 'alpha-zero',
    product_type: 'credit_card',
    category: 'cartoes',
    bank: 'Banco Alpha Prime',
    description: 'Cartao sem anuidade com cashback de entrada e gestao 100% digital.',
    short_description: 'Sem anuidade e boa aprovacao para perfis intermediarios.',
    annual_fee: 'R$ 0',
    interest_rate: '5,1% a.m. no rotativo',
    apr: '81,3% a.a.',
    cashback: '0,8%',
    rewards: 'Cartao virtual e notificacoes em tempo real',
    credit_score_min: 620,
    income_requirement: 'R$ 2.000',
    featured: true,
    is_active: true,
    redirect_url: 'https://www.bancoalphaprime.com.br/cartoes/alpha-zero',
    tracking_code: 'ALPHA_CARD_02',
    rating: 4.5,
    metadata_json: {
      score_band: 'mid',
      badges: ['sem-anuidade'],
      seo_tags: ['cartoes-sem-anuidade', 'cartoes-para-score-baixo'],
      highlights: ['Sem anuidade', 'App completo', 'Cartao virtual'],
      cta_label: 'Ver oferta'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'offer-horizonte-loan',
    partner_id: 'partner-banco-horizonte',
    name: 'Horizonte Credito Flex',
    slug: 'horizonte-credito-flex',
    product_type: 'loan',
    category: 'emprestimos',
    bank: 'Banco Horizonte',
    description: 'Emprestimo pessoal com aprovacao agil para reorganizacao de caixa e quitacao de passivos.',
    short_description: 'Credito pessoal com aprovacao digital e prazo flexivel.',
    annual_fee: null,
    interest_rate: '1,59% a.m.',
    apr: '20,8% a.a.',
    cashback: null,
    rewards: 'Liberacao em ate 24h',
    credit_score_min: 580,
    income_requirement: 'R$ 1.500',
    featured: true,
    is_active: true,
    redirect_url: 'https://www.bancohorizonte.com.br/emprestimos/credito-flex',
    tracking_code: 'HORIZONTE_LOAN_01',
    rating: 4.6,
    metadata_json: {
      score_band: 'mid',
      supports_negative: true,
      seo_tags: ['melhores-emprestimos', 'emprestimo-para-negativado'],
      highlights: ['Prazo flexivel', 'Liberacao rapida', 'Contratacao digital'],
      cta_label: 'Simular credito'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'offer-itau-home',
    partner_id: 'partner-itau-personnalite',
    name: 'Personnalite Casa Selecao',
    slug: 'personnalite-casa-selecao',
    product_type: 'financing',
    category: 'financiamento',
    bank: 'Itau Personnalite',
    description: 'Financiamento para imovel com leitura clara de CET, prazo e margem para amortizacao.',
    short_description: 'Financiamento premium com boa previsibilidade de fluxo.',
    annual_fee: null,
    interest_rate: '8,45% a.a.',
    apr: '9,11% a.a.',
    cashback: null,
    rewards: 'Suporte especializado durante a contratacao',
    credit_score_min: 700,
    income_requirement: 'R$ 10.000',
    featured: true,
    is_active: true,
    redirect_url: 'https://www.itau.com.br/personnalite/financiamento-imobiliario',
    tracking_code: 'ITAU_HOME_01',
    rating: 4.7,
    metadata_json: {
      score_band: 'high',
      seo_tags: ['melhores-opcoes-de-financiamento'],
      highlights: ['Leitura de CET', 'Especialista dedicado', 'Boa margem para amortizacao'],
      cta_label: 'Ver financiamento'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'offer-horizonte-conta',
    partner_id: 'partner-banco-horizonte',
    name: 'Conta Horizonte Digital+',
    slug: 'conta-horizonte-digital-plus',
    product_type: 'digital_account',
    category: 'contas',
    bank: 'Banco Horizonte',
    description: 'Conta digital com rendimento, cartao sem anuidade e experiencia completa pelo app.',
    short_description: 'Conta digital para operacao diaria com rendimento automatico.',
    annual_fee: 'R$ 0',
    interest_rate: null,
    apr: null,
    cashback: null,
    rewards: 'TED gratuita, pix ilimitado e cartao internacional',
    credit_score_min: 0,
    income_requirement: 'Sem exigencia minima',
    featured: true,
    is_active: true,
    redirect_url: 'https://www.bancohorizonte.com.br/contas/digital-plus',
    tracking_code: 'HORIZONTE_ACCOUNT_01',
    rating: 4.4,
    metadata_json: {
      score_band: 'low',
      seo_tags: ['melhores-contas-digitais'],
      highlights: ['Pix ilimitado', 'Cartao sem anuidade', 'Rendimento automatico'],
      cta_label: 'Abrir conta'
    },
    created_at: NOW,
    updated_at: NOW
  }
];

export const seedSeoPages: SeoPage[] = [
  {
    id: 'seo-melhores-cartoes',
    slug: 'melhores-cartoes',
    title: 'Melhores Cartoes de Credito para Comparar em 2026 | Cote Juros',
    meta_description: 'Compare os melhores cartoes de credito por cashback, anuidade e perfil de aprovacao.',
    h1: 'Melhores cartoes de credito para comparar agora',
    intro: 'Uma selecao orientada por custo total, retorno recorrente e aderencia ao perfil financeiro.',
    page_type: 'credit_card',
    filters_json: {
      productType: 'credit_card',
      category: 'cartoes'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-cartoes-sem-anuidade',
    slug: 'cartoes-sem-anuidade',
    title: 'Cartoes Sem Anuidade com Boa Aprovacao | Cote Juros',
    meta_description: 'Descubra cartoes sem anuidade com boa aprovacao e beneficios consistentes.',
    h1: 'Cartoes sem anuidade para reduzir custo recorrente',
    intro: 'Foco em produtos de entrada e custo fixo zero para quem quer organizar a rotina financeira.',
    page_type: 'credit_card',
    filters_json: {
      productType: 'credit_card',
      category: 'cartoes',
      maxAnnualFee: 'R$ 0'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-cartoes-cashback',
    slug: 'cartoes-com-cashback',
    title: 'Cartoes com Cashback: Compare Retorno Real | Cote Juros',
    meta_description: 'Veja cartoes com cashback e entenda quando o retorno compensa a anuidade.',
    h1: 'Cartoes com cashback para quem quer retorno recorrente',
    intro: 'Uma pagina comparativa para separar cashback marketing de retorno liquido real.',
    page_type: 'credit_card',
    filters_json: {
      productType: 'credit_card',
      category: 'cartoes',
      cashbackRequired: true
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-cartoes-score-baixo',
    slug: 'cartoes-para-score-baixo',
    title: 'Cartoes para Score Baixo | Cote Juros',
    meta_description: 'Selecao de cartoes para perfis com score mais baixo e maior chance de aprovacao.',
    h1: 'Cartoes para score baixo com criterios de aprovacao mais acessiveis',
    intro: 'Produtos para recomecar a construcao de credito sem aumentar custos desnecessarios.',
    page_type: 'credit_card',
    filters_json: {
      productType: 'credit_card',
      category: 'cartoes',
      scoreBand: 'low'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-melhores-emprestimos',
    slug: 'melhores-emprestimos',
    title: 'Melhores Emprestimos para Reorganizacao Financeira | Cote Juros',
    meta_description: 'Compare emprestimos por taxa, prazo e chance de aprovacao.',
    h1: 'Melhores emprestimos para comparar com foco em custo total',
    intro: 'Leitura comparativa para quem precisa de credito sem improvisar.',
    page_type: 'loan',
    filters_json: {
      productType: 'loan',
      category: 'emprestimos'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-emprestimo-negativado',
    slug: 'emprestimo-para-negativado',
    title: 'Emprestimo para Negativado: O que Avaliar | Cote Juros',
    meta_description: 'Entenda como comparar emprestimo para negativado com foco em custo e risco.',
    h1: 'Emprestimo para negativado com mais contexto e menos armadilha',
    intro: 'Produtos e criterios para perfis com score pressionado e necessidade de reorganizacao.',
    page_type: 'loan',
    filters_json: {
      productType: 'loan',
      category: 'emprestimos',
      scoreBand: 'low'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-melhores-contas',
    slug: 'melhores-contas-digitais',
    title: 'Melhores Contas Digitais | Cote Juros',
    meta_description: 'Compare contas digitais por custo, rendimento e recursos para o dia a dia.',
    h1: 'Melhores contas digitais para operacao financeira diaria',
    intro: 'Contas digitais para centralizar rotina, liquidez e servicos essenciais.',
    page_type: 'digital_account',
    filters_json: {
      productType: 'digital_account',
      category: 'contas'
    },
    created_at: NOW,
    updated_at: NOW
  },
  {
    id: 'seo-melhores-financiamento',
    slug: 'melhores-opcoes-de-financiamento',
    title: 'Melhores Opcoes de Financiamento | Cote Juros',
    meta_description: 'Analise financiamento por taxa, prazo e estrutura de amortizacao.',
    h1: 'Melhores opcoes de financiamento para comparar com clareza',
    intro: 'Estrutura tecnica para avaliar financiamento antes de assumir compromisso de longo prazo.',
    page_type: 'financing',
    filters_json: {
      productType: 'financing',
      category: 'financiamento'
    },
    created_at: NOW,
    updated_at: NOW
  }
];

export const seedRecommendationRules: RecommendationRule[] = [
  {
    id: 'rule-sem-anuidade',
    name: 'Priorizar cartoes sem anuidade para perfis conservadores',
    product_type: 'credit_card',
    rule_json: {
      primaryGoal: ['save'],
      wantsNoAnnualFee: true,
      categories: ['cartoes']
    },
    priority: 100,
    is_active: true
  },
  {
    id: 'rule-cashback',
    name: 'Cartoes com cashback para perfil orientado a retorno recorrente',
    product_type: 'credit_card',
    rule_json: {
      primaryGoal: ['cashback'],
      minimumScoreBand: 'mid',
      categories: ['cartoes']
    },
    priority: 90,
    is_active: true
  },
  {
    id: 'rule-credito-reorganizacao',
    name: 'Emprestimos para reorganizacao de caixa',
    product_type: 'loan',
    rule_json: {
      primaryGoal: ['credit'],
      debtLevel: ['mid', 'high'],
      categories: ['emprestimos']
    },
    priority: 95,
    is_active: true
  },
  {
    id: 'rule-conta-digital',
    name: 'Conta digital para entrada e simplificacao operacional',
    product_type: 'digital_account',
    rule_json: {
      primaryGoal: ['account'],
      categories: ['contas']
    },
    priority: 80,
    is_active: true
  },
  {
    id: 'rule-financiamento',
    name: 'Financiamento para quem esta estruturando compra de imovel',
    product_type: 'financing',
    rule_json: {
      primaryGoal: ['financing'],
      minimumIncomeBand: 'mid',
      categories: ['financiamento']
    },
    priority: 85,
    is_active: true
  }
];

export const seedDiagnosisInput: DiagnosisInput = {
  primaryGoal: 'save',
  creditScoreBand: 'mid',
  incomeBand: 'mid',
  debtLevel: 'mid',
  wantsNoAnnualFee: true
};
