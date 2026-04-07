export type ComparatorFilterGroup = {
  title: string;
  type: 'checkbox' | 'range' | 'select';
  options?: string[];
  range?: {
    min: number;
    max: number;
    value: number;
    ticks: number[];
  };
  selectOptions?: string[];
};

export type ComparatorCard = {
  badge?: string;
  name: string;
  subtitle: string;
  image: string;
  stats: Array<{ label: string; value: string }>;
  highlights: string[];
  cta: string;
};

export type ComparatorDetailRow = {
  product: string;
  bank: string;
  miles: string;
  scoreLabel: string;
  scoreFill: number;
  status: 'ativo' | 'review';
};

export const comparatorFilterGroups: ComparatorFilterGroup[] = [
  {
    title: 'Anuidade',
    type: 'checkbox',
    options: ['Sem anuidade', 'Anuidade gratis (gasto minimo)']
  },
  {
    title: 'Beneficios',
    type: 'checkbox',
    options: ['Cashback direto', 'Acumulo de milhas', 'Acesso a VIP Lounge']
  },
  {
    title: 'Score necessario',
    type: 'range',
    range: {
      min: 0,
      max: 1000,
      value: 500,
      ticks: [0, 500, 1000]
    }
  },
  {
    title: 'Instituicao',
    type: 'select',
    selectOptions: ['Todos os bancos', 'Itau', 'Santander', 'Nubank', 'Bradesco']
  }
];

export const comparatorCards: ComparatorCard[] = [
  {
    badge: 'Top escolha',
    name: 'Inter Black',
    subtitle: 'Ideal para viajantes frequentes e investidores.',
    image:
      'https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Cashback', value: '1.25%' },
      { label: 'Anuidade', value: 'Gratis' }
    ],
    highlights: ['Acesso ilimitado VIP Lounge', 'Seguro viagem incluso', 'Concierge 24/7'],
    cta: 'Solicitar cartao'
  },
  {
    name: 'Nubank Ultravioleta',
    subtitle: 'A experiencia premium para clientes de alta renda.',
    image:
      'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Cashback', value: '1.0%' },
      { label: 'Anuidade', value: 'R$ 49/mes' }
    ],
    highlights: ['Cashback cresce com CDI', 'Cartao de metal exclusivo', 'Beneficios Mastercard Black'],
    cta: 'Solicitar cartao'
  }
];

export const comparatorDetailRows: ComparatorDetailRow[] = [
  {
    product: 'XP Visa Infinite',
    bank: 'XP Investimentos',
    miles: 'Investback 1%',
    scoreLabel: '850+',
    scoreFill: 85,
    status: 'ativo'
  },
  {
    product: 'BTG Pactual Black',
    bank: 'BTG Pactual',
    miles: 'Ate 2.2 pts',
    scoreLabel: '700+',
    scoreFill: 70,
    status: 'ativo'
  },
  {
    product: 'Itau Personnalite',
    bank: 'Itau Unibanco',
    miles: '1.5 pts',
    scoreLabel: '900+',
    scoreFill: 90,
    status: 'review'
  }
];
