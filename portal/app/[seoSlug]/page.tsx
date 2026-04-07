import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { JsonLd } from '@/components/json-ld';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { SeoLandingPageTemplate } from '@/components/offers/seo-landing-page-template';
import { getFeaturedOffers, getOffersForSeoPage } from '@/lib/offers';
import { getSeoPageBySlug } from '@/lib/seo-pages';
import { breadcrumbSchema, buildPageMetadata, organizationSchema, webPageSchema, webSiteSchema } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ seoSlug: string }> }): Promise<Metadata> {
  const { seoSlug } = await params;
  const seoPage = await getSeoPageBySlug(seoSlug);

  if (!seoPage) {
    return {};
  }

  return buildPageMetadata({
    title: seoPage.title,
    description: seoPage.meta_description,
    path: `/${seoPage.slug}`,
    keywords: [seoPage.slug, seoPage.page_type, 'comparador financeiro', 'ofertas', 'afiliados']
  });
}

export default async function Page({ params }: { params: Promise<{ seoSlug: string }> }) {
  const { seoSlug } = await params;
  const seoPage = await getSeoPageBySlug(seoSlug);

  if (!seoPage) {
    notFound();
  }

  const offers = await getOffersForSeoPage(seoPage.slug);
  const recommendationOffers = await getFeaturedOffers(seoPage.page_type);

  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          webSiteSchema(),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'SEO', path: `/${seoPage.slug}` }
          ]),
          webPageSchema({
            name: seoPage.h1,
            description: seoPage.meta_description,
            path: `/${seoPage.slug}`
          })
        ]}
      />
      <SiteHeader activePath="/comparadores" />
      <main>
        <SeoLandingPageTemplate
          page={seoPage}
          offers={offers}
          sourcePage={seoPage.slug}
          recommendationOffers={recommendationOffers.slice(0, 3)}
        />
      </main>
      <SiteFooter />
    </>
  );
}