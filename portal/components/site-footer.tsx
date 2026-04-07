import Link from 'next/link';

const footerColumns = [
  {
    title: 'Produtos',
    items: [
      { label: 'Comparadores', href: '/comparadores' },
      { label: 'Ferramentas', href: '/ferramentas' },
      { label: 'Produtos', href: '/produtos' },
      { label: 'Editorial', href: '/editorial' }
    ]
  },
  {
    title: 'Editorial',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Guias', href: '/guias' },
      { label: 'Análise de mercado', href: '/analise-de-mercado' }
    ]
  },
  {
    title: 'Legal',
    items: [
      { label: 'Política de privacidade', href: '/politica-de-privacidade' },
      { label: 'Termos de uso', href: '/termos-de-uso' }
    ]
  },
  {
    title: 'Suporte',
    items: [
      { label: 'Central de ajuda', href: '/central-de-ajuda' },
      { label: 'Contato', href: '/contato' }
    ]
  }
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3 className="brand">Cote Juros</h3>
          <p className="footer-intro">
            Elevando o padrão da curadoria financeira por meio de tecnologia, contexto e clareza.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container copyright">© 2026 Cote Juros. Todos os direitos reservados.</div>
    </footer>
  );
}
