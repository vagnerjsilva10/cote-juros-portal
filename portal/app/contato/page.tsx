import type { Metadata } from 'next';

import { ContatoPage } from '@/components/contato-page';

export const metadata: Metadata = {
  title: 'Contato | Cote Juros',
  description: 'Canal de contato institucional e suporte do portal Cote Juros.'
};

export default function Page() {
  return <ContatoPage />;
}

