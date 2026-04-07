import Link from 'next/link';

import { comparatorGroups } from '@/data/homepage';

function comparatorHref(title: string) {
  if (title.toLowerCase().includes('empréstimo')) {
    return '/emprestimos';
  }

  return '/cartoes-de-credito';
}

export function ComparatorsSection() {
  return (
    <section className="section-spaced comparators">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Comparadores em destaque</h2>
            <p>Atualizado hoje com as melhores taxas do mercado brasileiro.</p>
          </div>
          <Link href="/comparador-interativo">Ver todos</Link>
        </div>

        <div className="comparators-grid">
          {comparatorGroups.map((group) => (
            <article key={group.title} className="comparison-card">
              <header>
                <h3>{group.title}</h3>
              </header>
              <div>
                {group.rows.map((row) => (
                  <div key={row.name} className="comparison-row">
                    <div>
                      <strong>{row.name}</strong>
                      <p>{row.meta}</p>
                    </div>
                    <span>{row.highlight}</span>
                  </div>
                ))}
              </div>
              <Link href={comparatorHref(group.title)}>{group.cta}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
