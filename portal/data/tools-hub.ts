export type ToolCard = {
  icon: string;
  category: string;
  categoryTone: 'primary' | 'tertiary' | 'secondary' | 'neutral';
  title: string;
  description: string;
  variant?: 'default' | 'wide';
  metrics?: Array<{ label: string; value: string; highlight?: boolean }>;
  bullets?: string[];
};

export type ToolArticle = {
  category: string;
  title: string;
  image: string;
};

export const toolCards: ToolCard[] = [
  {
    icon: 'trending_up',
    category: 'Investimento',
    categoryTone: 'primary',
    title: 'Calculadora de juros compostos',
    description:
      'Visualize o crescimento do seu patrimônio com projecoes reais de longo prazo.'
  },
  {
    icon: 'payments',
    category: 'Crédito',
    categoryTone: 'tertiary',
    title: 'Calculadora de empréstimo',
    description:
      'Compare taxa efetiva e parcelas para encontrar o melhor custo total da operacao.'
  },
  {
    icon: 'credit_card',
    category: 'Cartões',
    categoryTone: 'secondary',
    title: 'Simulador de cartão de crédito',
    description:
      'Compare cashback, anuidade e vantagens para selecionar o cartão ideal para seu perfil.'
  },
  {
    icon: 'house',
    category: 'Patrimônio',
    categoryTone: 'primary',
    title: 'Simulador de financiamento',
    description:
      'Análise cenarios SAC e PRICE com impacto total de juros e prazo no longo periodo.',
    variant: 'wide',
    metrics: [
      { label: 'Valor do imovel', value: 'R$ 450.000' },
      { label: 'Entrada (20%)', value: 'R$ 90.000' },
      { label: 'Parcelas', value: '360x R$ 3.245', highlight: true }
    ]
  },
  {
    icon: 'splitscreen',
    category: 'Consumo',
    categoryTone: 'neutral',
    title: 'Simulador de parcelamento',
    description:
      'Descubra quando compensa pagar a vista com desconto ou parcelar com disciplina.',
    bullets: ['A vista com desconto', 'Parcelamento em ate 12x']
  }
];

export const recommendedToolArticles: ToolArticle[] = [
  {
    category: 'Educacao financeira',
    title: 'Como o efeito dos juros compostos pode acelerar sua aposentadoria',
    image:
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Financiamento',
    title: 'SAC ou PRICE: qual tabela faz mais sentido no seu perfil',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Cartões',
    title: 'Guia de cashback: como escolher um cartão que realmente rende',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80'
  }
];
