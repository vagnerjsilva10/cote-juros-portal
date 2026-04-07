import type { Metadata } from 'next';

import { PoliticaPrivacidadePage } from '@/components/politica-privacidade-page';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Cote Juros',
  description: 'Informações sobre coleta, uso e proteção de dados pessoais no portal.'
};

export default function Page() {
  return <PoliticaPrivacidadePage />;
}

