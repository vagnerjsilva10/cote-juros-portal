export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
};

export type ProductPillar = {
  icon: string;
  title: string;
  description: string;
};

export type CategoryCard = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type ComparatorItem = {
  name: string;
  detail: string;
  signal: string;
};

export type ComparatorGroup = {
  title: string;
  description: string;
  href: string;
  cta: string;
  items: ComparatorItem[];
};

export type ToolHighlight = {
  title: string;
  description: string;
  href: string;
  category: 'Credito' | 'Investimento' | 'Financiamento' | 'Consumo';
};

export type EditorialPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Comparadores', href: '/comparadores' },
  { label: 'Ferramentas', href: '/ferramentas' },
  { label: 'Editorial', href: '/editorial' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Diagnostico Financeiro', href: '/diagnostico-financeiro' },
  {
    label: 'Cote Finance AI',
    href: 'https://finance.cotejuros.com.br/',
    external: true,
    highlight: true
  }
];

export const coteFinanceAppUrl = 'https://finance.cotejuros.com.br/';

export const productPillars: ProductPillar[] = [
  {
    icon: 'shield',
    title: 'Curadoria financeira',
    description: 'Transformamos milhares de ofertas em poucas opcoes defensaveis para cada perfil.'
  },
  {
    icon: 'monitoring',
    title: 'Comparacao tecnica',
    description: 'Taxa nominal, CET, risco e contrapartidas analisados com criterios transparentes.'
  },
  {
    icon: 'auto_awesome',
    title: 'Inteligencia aplicada',
    description: 'Diagnostico e IA para acelerar decisoes com foco em custo, liquidez e patrimonio.'
  },
  {
    icon: 'task_alt',
    title: 'Clareza para decidir',
    description: 'Explicamos o impacto real de cada escolha para voce agir com seguranca.'
  }
];

export const homepageCategories: CategoryCard[] = [
  {
    title: 'Cartoes de credito',
    description: 'Rankings por perfil, analise de anuidade, cashback e pontos.',
    href: '/cartoes',
    icon: 'credit_card'
  },
  {
    title: 'Emprestimos',
    description: 'Comparacao por taxa, aprovacao, prazo e custo efetivo total.',
    href: '/emprestimos',
    icon: 'account_balance'
  },
  {
    title: 'Financiamento',
    description: 'Leitura de SAC vs PRICE, entrada ideal e impacto no fluxo de caixa.',
    href: '/financiamento',
    icon: 'home'
  },
  {
    title: 'Organizacao financeira',
    description: 'Ferramentas e diagnosticos para sair do improviso e planejar melhor.',
    href: '/diagnostico-financeiro',
    icon: 'query_stats'
  }
];

export const comparatorGroups: ComparatorGroup[] = [
  {
    title: 'Melhores cartoes',
    description: 'Selecao com melhor equilibrio entre beneficio recorrente e custo anual.',
    href: '/cartoes',
    cta: 'Ver comparador de cartoes',
    items: [
      { name: 'Infinite Rewards Elite', detail: 'Cashback ate 3% + salas VIP', signal: 'Alto valor' },
      { name: 'Skyline Platinum Plus', detail: 'Forte em milhas internacionais', signal: 'Milhas' }
    ]
  },
  {
    title: 'Cartoes sem anuidade',
    description: 'Produtos para rotina de gastos com controle de custo fixo mensal.',
    href: '/cartoes',
    cta: 'Ver opcoes sem anuidade',
    items: [
      { name: 'Neo Digital Zero', detail: 'Anuidade R$ 0 e app completo', signal: 'R$ 0' },
      { name: 'Green Lite', detail: 'Perfil de entrada com cashback basico', signal: 'Entrada' }
    ]
  },
  {
    title: 'Melhores emprestimos',
    description: 'Taxas e aprovacao comparadas para credito pessoal e renegociacao.',
    href: '/emprestimos',
    cta: 'Ver comparador de emprestimos',
    items: [
      { name: 'Banco Alpha Prime', detail: 'Taxa a partir de 1,49% a.m.', signal: 'Top taxa' },
      { name: 'Banco Horizonte', detail: 'Prazo de ate 60 meses', signal: 'Prazo' }
    ]
  }
];

export const toolHighlights: ToolHighlight[] = [
  {
    title: 'Calculadora de juros',
    description: 'Entenda o custo real de juros simples e compostos em segundos.',
    href: '/ferramentas#credito',
    category: 'Credito'
  },
  {
    title: 'Simulador de emprestimo',
    description: 'Projete parcela, CET e custo total antes de contratar credito.',
    href: '/emprestimos',
    category: 'Credito'
  },
  {
    title: 'Simulador de financiamento',
    description: 'Compare SAC e PRICE para reduzir juros no longo prazo.',
    href: '/financiamento',
    category: 'Financiamento'
  },
  {
    title: 'Simulador de parcelamento',
    description: 'Decida entre pagar a vista ou parcelar sem comprometer caixa.',
    href: '/ferramentas#consumo',
    category: 'Consumo'
  }
];

export const editorialPosts: EditorialPost[] = [
  {
    slug: '/editorial-artigo',
    category: 'Estrategia',
    title: 'Como usar portabilidade para reduzir custo de credito em 2026',
    excerpt: 'Metodologia para avaliar propostas e evitar troca que parece barata, mas custa mais no total.',
    readTime: '8 min'
  },
  {
    slug: '/analise-de-mercado',
    category: 'Inovacao',
    title: 'IA financeira no dia a dia: onde ela reduz risco de decisao',
    excerpt: 'Quando confiar em automacao e quando manter avaliacao humana em operacoes criticas.',
    readTime: '5 min'
  },
  {
    slug: '/blog',
    category: 'Mercado',
    title: 'Selic, spread e credito: o que muda no bolso do consumidor',
    excerpt: 'Leitura pratica para ajustar consumo, renegociacao e investimentos em ciclos de juros.',
    readTime: '12 min'
  }
];
