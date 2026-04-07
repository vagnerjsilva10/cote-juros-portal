import type { Metadata } from 'next';

import { GuiasPage } from '@/components/guias-page';

export const metadata: Metadata = {
  title: 'Guias | Cote Juros',
  description: 'Guias financeiros para cartões, empréstimos, score e financiamento.'
};

export default function Page() {
  return <GuiasPage />;
}

