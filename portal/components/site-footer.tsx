const footerColumns = [
  {
    title: 'Produtos',
    items: ['Comparadores', 'Ferramentas', 'Produtos']
  },
  {
    title: 'Editorial',
    items: ['Blog', 'Guias', 'Analise de mercado']
  },
  {
    title: 'Legal',
    items: ['Politica de privacidade', 'Termos de uso']
  },
  {
    title: 'Suporte',
    items: ['Central de ajuda', 'Contato']
  }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3 className="brand">Cote Juros</h3>
          <p className="footer-intro">
            Elevando o padrao da curadoria financeira por meio de tecnologia, contexto e clareza.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.items.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
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
