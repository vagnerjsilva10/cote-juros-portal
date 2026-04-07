import type { Metadata } from 'next';

import { ProdutosPage } from '@/components/produtos-page';

export const metadata: Metadata = {
  title: 'Produtos | Cote Juros',
  description: 'Visão geral dos produtos do ecossistema Cote Juros.'
};

export default function Page() {
  return <ProdutosPage />;
}

