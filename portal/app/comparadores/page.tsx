import type { Metadata } from 'next';

import { ComparadoresHubPage } from '@/components/comparadores-hub-page';

export const metadata: Metadata = {
  title: 'Comparadores | Cote Juros',
  description: 'Hub de comparadores para cartões, empréstimos e financiamento.'
};

export default function Page() {
  return <ComparadoresHubPage />;
}

