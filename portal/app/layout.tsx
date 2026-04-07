import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter, Manrope } from 'next/font/google';

import { PageViewTracker } from '@/components/analytics/page-view-tracker';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-headline'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cotejuros.com.br'),
  title: 'Cote Juros | Portal Financeiro Premium',
  description:
    'Comparadores, ferramentas, diagnostico financeiro e curadoria editorial para decisoes financeiras com clareza.',
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <Suspense fallback={null}>
          <PageViewTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
