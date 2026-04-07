import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const products = [
  {
    product: 'Infinite Rewards Elite',
    type: 'Cartao',
    institution: 'Banco Alpha Prime',
    rate: '4,2% a.m. (rotativo)',
    profile: 'Alta renda'
  },
  {
    product: 'Emprestimo Consignado Plus',
    type: 'Emprestimo',
    institution: 'Banco Horizonte',
    rate: '1,39% a.m.',
    profile: 'Renda previsivel'
  },
  {
    product: 'Financiamento Casa Select',
    type: 'Financiamento',
    institution: 'Itau Personnalite',
    rate: '8,45% a.a.',
    profile: 'Entrada acima de 20%'
  }
];

export function ComparadorInterativoPage() {
  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <PageHero
          eyebrow="Comparador interativo"
          title="Refine filtros e compare produtos financeiros em uma unica tela."
          subtitle="Selecione categoria, objetivo e faixa de risco para priorizar as melhores alternativas para o seu perfil."
          actions={[
            { label: 'Voltar ao hub de comparadores', href: '/comparadores' },
            { label: 'Fazer diagnostico financeiro', href: '/diagnostico-financeiro', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <aside className="panel-card">
              <SectionHeader title="Filtros visuais" />
              <form className="filter-form">
                <label htmlFor="category">Categoria</label>
                <select id="category" defaultValue="Todos">
                  <option>Todos</option>
                  <option>Cartoes</option>
                  <option>Emprestimos</option>
                  <option>Financiamento</option>
                </select>

                <label htmlFor="objective">Objetivo</label>
                <select id="objective" defaultValue="Menor custo total">
                  <option>Menor custo total</option>
                  <option>Maior aprovacao</option>
                  <option>Melhor beneficio recorrente</option>
                </select>

                <label htmlFor="score">Score minimo sugerido</label>
                <input id="score" type="range" min={0} max={1000} defaultValue={700} />

                <button type="button" className="btn btn-primary">
                  Aplicar filtros
                </button>
              </form>
            </aside>

            <article className="panel-card">
              <SectionHeader title="Resultado comparativo" description="Tabela com leitura rapida para apoiar decisao inicial." />
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Tipo</th>
                      <th>Instituicao</th>
                      <th>Taxa</th>
                      <th>Perfil</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((row) => (
                      <tr key={row.product}>
                        <td>{row.product}</td>
                        <td>{row.type}</td>
                        <td>{row.institution}</td>
                        <td>{row.rate}</td>
                        <td>{row.profile}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>
        </section>

        <section className="section-space">
          <div className="container section-actions">
            <a className="btn btn-dark" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
              Continuar no Cote Finance AI
            </a>
            <Link className="btn btn-secondary" href="/editorial">
              Entender metodologia
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
