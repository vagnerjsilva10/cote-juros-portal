import type { Metadata } from 'next';

import { SobreNosPage } from '@/components/sobre-nos-page';
import { JsonLd } from '@/components/json-ld';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Sobre o Cote Juros | Curadoria Financeira',
  description:
    'Conheca a visao, metodologia e compromisso editorial do Cote Juros para decisoes financeiras mais claras.',
  path: '/sobre-nos',
  keywords: ['sobre cote juros', 'metodologia financeira', 'curadoria', 'portal financeiro', 'editorial']
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          webSiteSchema(),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Sobre nos', path: '/sobre-nos' }
          ]),
          webPageSchema({
            name: 'Sobre o Cote Juros',
            description: 'Informacoes institucionais sobre metodologia e posicionamento do portal.',
            path: '/sobre-nos'
          })
        ]}
      />
      <SobreNosPage />
    </>
  );
}
