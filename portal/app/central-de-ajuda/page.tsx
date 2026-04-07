import type { Metadata } from 'next';

import { CentralAjudaPage } from '@/components/central-ajuda-page';

export const metadata: Metadata = {
  title: 'Central de Ajuda | Cote Juros',
  description: 'Perguntas frequentes, links úteis e canais de suporte do portal.'
};

export default function Page() {
  return <CentralAjudaPage />;
}

