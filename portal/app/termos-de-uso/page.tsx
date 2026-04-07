import type { Metadata } from 'next';

import { TermosDeUsoPage } from '@/components/termos-de-uso-page';

export const metadata: Metadata = {
  title: 'Termos de Uso | Cote Juros',
  description: 'Condições e responsabilidades para uso da plataforma Cote Juros.'
};

export default function Page() {
  return <TermosDeUsoPage />;
}

