export type NavItem = {
  label: string;
  href: string;
};

export type Pillar = {
  icon: string;
  title: string;
  description: string;
};

export type ComparatorRow = {
  badge: string;
  name: string;
  meta: string;
  highlight: string;
};

export type ComparatorGroup = {
  title: string;
  cta: string;
  rows: ComparatorRow[];
};

export type EditorialPost = {
  category: string;
  title: string;
  author: string;
  readTime: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: 'Comparadores', href: '/comparador-interativo' },
  { label: 'Ferramentas', href: '/ferramentas' },
  { label: 'Editorial', href: '/editorial-artigo' },
  { label: 'Cote Finance AI', href: 'https://finance.cotejuros.com.br?source=portal' }
];

export const coteFinanceAppUrl = 'https://finance.cotejuros.com.br?source=portal';

export const pillars: Pillar[] = [
  {
    icon: 'credit_card',
    title: 'Cartões de crédito',
    description: 'As melhores opções comparadas com base no seu perfil de consumo e benefícios.'
  },
  {
    icon: 'account_balance',
    title: 'Empréstimos',
    description: 'Taxas reais, clareza total e simulações sem impacto no score de crédito.'
  },
  {
    icon: 'query_stats',
    title: 'Organização financeira',
    description: 'Visualize para onde seu dinheiro vai e tome o controle do planejamento mensal.'
  }
];

export const comparatorGroups: ComparatorGroup[] = [
  {
    title: 'Melhores cartões',
    cta: 'Ver ranking completo',
    rows: [
      { badge: 'TOP 1', name: 'Infinite Premium', meta: 'Pontos: 2.5 por dólar', highlight: 'TOP 1' },
      { badge: 'TOP 2', name: 'Platinum Global', meta: 'Cashback: 1.5%', highlight: 'TOP 2' }
    ]
  },
  {
    title: 'Cartões sem anuidade',
    cta: 'Ver ranking completo',
    rows: [
      { badge: 'TOP 1', name: 'Digital Zero', meta: 'Anuidade: R$ 0', highlight: 'TOP 1' },
      { badge: 'TOP 2', name: 'Green Lite', meta: 'Benefícios sustentáveis', highlight: 'TOP 2' }
    ]
  },
  {
    title: 'Melhores empréstimos',
    cta: 'Ver todas as taxas',
    rows: [
      { badge: '1.1%', name: 'Home Equity X', meta: 'Taxas a partir de 0.8% a.m.', highlight: '1.1%' },
      { badge: '2.4%', name: 'Pessoal Digital', meta: 'Liberação em 24h', highlight: '2.4%' }
    ]
  }
];

export const editorialPosts: EditorialPost[] = [
  {
    category: 'Estratégia',
    title: 'Como o refinanciamento pode se tornar sua alavanca em 2026',
    author: 'Marcos Valente',
    readTime: '8 min de leitura',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Inovação',
    title: 'O impacto da IA generativa na gestão do patrimônio pessoal',
    author: 'Ana Paula Costa',
    readTime: '5 min de leitura',
    image:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    category: 'Mercado',
    title: 'Selic e crédito: guia prático para o investidor moderado',
    author: 'Equipe Editorial',
    readTime: '12 min de leitura',
    image:
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80'
  }
];
