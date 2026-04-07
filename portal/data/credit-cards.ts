export type CreditFilter = {
  label: string;
  active?: boolean;
};

export type RankedCard = {
  badge?: string;
  badgeTone?: 'mint' | 'violet';
  stars?: number;
  name: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  ctaLabel: string;
  ctaStyle?: 'primary' | 'outline';
  image: string;
};

export type CardComparison = {
  card: string;
  revolvingInterest: string;
  withdrawFee: string;
  keyBenefit: string;
  yearlyFee: string;
};

export const creditFilters: CreditFilter[] = [
  { label: 'Sem anuidade' },
  { label: 'Cashback', active: true },
  { label: 'Milhas' },
  { label: 'Score baixo' },
  { label: 'Alta renda' }
];

export const rankedCards: RankedCard[] = [
  {
    badge: 'Top Escolha',
    badgeTone: 'mint',
    stars: 5,
    name: 'Infinite Rewards Elite',
    description:
      'Cartão premium para quem busca 3% de cashback em todas as compras e acesso a salas VIP globais.',
    metrics: [
      { label: 'Cashback', value: '3.0%' },
      { label: 'Anuidade', value: 'Gratis*' },
      { label: 'Renda min.', value: 'R$ 15k' }
    ],
    ctaLabel: 'Solicitar agora',
    ctaStyle: 'primary',
    image:
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=1000&q=80'
  },
  {
    badge: 'Melhor para milhas',
    badgeTone: 'violet',
    name: 'Skyline Platinum Plus',
    description:
      'Transforme gastos em viagens com 4 pontos por dolar em companhias parceiras e beneficios internacionais.',
    metrics: [
      { label: 'Pontos/$', value: '4.0 pts' },
      { label: 'Anuidade', value: '12x R$ 45' },
      { label: 'Acesso VIP', value: 'LoungeKey' }
    ],
    ctaLabel: 'Saber mais',
    ctaStyle: 'outline',
    image:
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80'
  }
];

export const cardComparisonRows: CardComparison[] = [
  {
    card: 'Infinite Rewards',
    revolvingInterest: '4.2% p.m.',
    withdrawFee: 'Gratis',
    keyBenefit: '3% Cashback',
    yearlyFee: 'Isento via gasto'
  },
  {
    card: 'Skyline Platinum',
    revolvingInterest: '5.8% p.m.',
    withdrawFee: 'R$ 15,00',
    keyBenefit: 'Multiplus x4',
    yearlyFee: 'R$ 540,00'
  },
  {
    card: 'Neo Digital Zero',
    revolvingInterest: '3.9% p.m.',
    withdrawFee: 'Gratis',
    keyBenefit: 'Sem burocracia',
    yearlyFee: 'Zero'
  },
  {
    card: 'Black Signature',
    revolvingInterest: '8.1% p.m.',
    withdrawFee: 'R$ 25,00',
    keyBenefit: 'Concierge 24/7',
    yearlyFee: 'R$ 1.200,00'
  }
];

export const approvalChecklist = [
  'Score acima de 700',
  'Cadastro Positivo ativo',
  'Renda comprovada',
  'Sem pendencias no CPF'
];
