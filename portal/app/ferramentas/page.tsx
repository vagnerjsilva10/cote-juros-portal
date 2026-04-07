import type { Metadata } from 'next';

import { ToolsHubPage } from '@/components/tools-hub-page';

export const metadata: Metadata = {
  title: 'Ferramentas | Cote Juros',
  description: 'Hub de simuladores e ferramentas para decisões financeiras com clareza.'
};

export default function Page() {
  return <ToolsHubPage />;
}
