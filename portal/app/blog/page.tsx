import type { Metadata } from 'next';

import { BlogPage } from '@/components/blog-page';

export const metadata: Metadata = {
  title: 'Blog | Cote Juros',
  description: 'Publicações e artigos sobre crédito, organização financeira e mercado.'
};

export default function Page() {
  return <BlogPage />;
}

