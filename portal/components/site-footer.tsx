import Link from 'next/link';

import { FooterColumn } from '@/components/ui/footer-column';
import { coteFinanceAppUrl } from '@/data/homepage';

const footerColumns = [
  {
    title: 'Produtos',
    items: [
      { label: 'Comparadores', href: '/comparadores' },
      { label: 'Ferramentas', href: '/ferramentas' },
      { label: 'Diagnostico Financeiro', href: '/diagnostico-financeiro' },
      { label: 'Cote Finance AI', href: coteFinanceAppUrl, external: true }
    ]
  },
  {
    title: 'Comparadores',
    items: [
      { label: 'Cartoes de credito', href: '/cartoes-de-credito' },
      { label: 'Emprestimos', href: '/emprestimos' },
      { label: 'Financiamento', href: '/financiamento' },
      { label: 'Comparador interativo', href: '/comparador-interativo' }
    ]
  },
  {
    title: 'Editorial',
    items: [
      { label: 'Hub editorial', href: '/editorial' },
      { label: 'Blog', href: '/blog' },
      { label: 'Guias', href: '/guias' },
      { label: 'Analise de mercado', href: '/analise-de-mercado' }
    ]
  },
  {
    title: 'Legal',
    items: [
      { label: 'Politica de privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de uso', href: '/termos-de-uso' }
    ]
  },
  {
    title: 'Suporte',
    items: [
      { label: 'Central de ajuda', href: '/central-de-ajuda' },
      { label: 'Contato', href: '/contato' },
      { label: 'Produtos', href: '/produtos' }
    ]
  }
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            Cote Juros
          </Link>
          <p>
            Portal financeiro para comparar produtos, simular cenarios e tomar decisoes com clareza
            tecnica.
          </p>
        </div>
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} title={column.title} items={column.items} />
        ))}
      </div>
      <div className="container footer-bottom">
        <small>© 2026 Cote Juros. Todos os direitos reservados.</small>
        <small>CNPJ e dados institucionais disponiveis mediante solicitacao em nosso canal oficial.</small>
      </div>
    </footer>
  );
}
