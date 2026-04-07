import { comparatorGroups } from '@/data/homepage';

export function ComparatorsSection() {
  return (
    <section className="section-spaced comparators">
      <div className="container">
        <div className="section-head">
          <div>
            <h2>Comparadores em destaque</h2>
            <p>Atualizado hoje com as melhores taxas do mercado brasileiro.</p>
          </div>
          <a href="#">Ver todos</a>
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
              <button type="button">{group.cta}</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
