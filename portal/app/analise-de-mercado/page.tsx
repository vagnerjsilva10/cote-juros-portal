import type { Metadata } from 'next';

import { AnaliseMercadoPage } from '@/components/analise-mercado-page';

export const metadata: Metadata = {
  title: 'Análise de Mercado | Cote Juros',
  description: 'Análises de tendências financeiras, crédito e comparativos de mercado.'
};

export default function Page() {
  return <AnaliseMercadoPage />;
}

