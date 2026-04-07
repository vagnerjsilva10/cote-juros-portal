import type { Metadata } from 'next';

export const SITE_NAME = 'Cote Juros';
export const SITE_URL = 'https://cotejuros.com.br';
export const SITE_LOCALE = 'pt_BR';
export const DEFAULT_SOCIAL_IMAGE =
  'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1200&q=80';

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type SchemaObject = Record<string, unknown>;

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function buildPageMetadata(input: MetadataInput): Metadata {
  const url = canonicalUrl(input.path);

  return {
    title: input.title,
    description: input.description,
    keywords: input.keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: input.title,
      description: input.description,
      images: [
        {
          url: DEFAULT_SOCIAL_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Portal financeiro`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [DEFAULT_SOCIAL_IMAGE]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export function organizationSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description:
      'Portal financeiro com curadoria técnica, comparadores de crédito e inteligência financeira aplicada.',
    foundingDate: '2026-01-01',
    founder: {
      '@type': 'Person',
      name: 'Equipe Técnica Cote Juros',
      jobTitle: 'Especialistas em análise financeira e crédito'
    },
    areaServed: 'BR',
    knowsAbout: [
      'análise de dívidas',
      'comparação de taxas de juros',
      'planejamento financeiro',
      'inteligência financeira'
    ]
  };
}

export function webSiteSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    }
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path)
    }))
  };
}

export function blogPostingSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    mainEntityOfPage: canonicalUrl(input.path),
    image: [DEFAULT_SOCIAL_IMAGE],
    author: {
      '@type': 'Person',
      name: 'Equipe Editorial Cote Juros'
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon.png`
      }
    }
  };
}

export function financialServiceSchema(input: {
  name: string;
  description: string;
  path: string;
}): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    },
    areaServed: 'BR',
    serviceType: 'Curadoria e comparação financeira'
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.path),
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    }
  };
}

export function contactPageSchema(): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato | Cote Juros',
    url: canonicalUrl('/contato'),
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'contato@cotejuros.com.br',
        areaServed: 'BR',
        availableLanguage: ['pt-BR']
      }
    }
  };
}

export function webPageSchema(input: {
  name: string;
  description: string;
  path: string;
}): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: canonicalUrl(input.path),
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    }
  };
}

