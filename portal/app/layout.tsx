import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';

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
  title: 'Cote Juros | Curadoria Financeira',
  description: 'Compare opcoes financeiras, simuladores e diagnostico inteligente para sua vida financeira.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
