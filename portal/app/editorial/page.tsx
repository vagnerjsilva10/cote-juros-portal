import type { Metadata } from 'next';

import { EditorialHubPage } from '@/components/editorial-hub-page';

export const metadata: Metadata = {
  title: 'Editorial | Cote Juros',
  description: 'Hub editorial com blog, guias, análises e artigos especiais.'
};

export default function Page() {
  return <EditorialHubPage />;
}

