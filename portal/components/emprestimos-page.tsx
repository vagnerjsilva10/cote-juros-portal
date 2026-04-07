import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const rows = [
  { institution: 'Banco Alpha Prime', rate: '1,49% a.m.', term: '48 meses', approval: '92%' },
  { institution: 'Banco Horizonte', rate: '1,67% a.m.', term: '60 meses', approval: '88%' },
  { institution: 'Nexo Finance', rate: '2,14% a.m.', term: '72 meses', approval: '81%' }
];

export function EmprestimosPage() {
  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <PageHero
          eyebrow="Comparador de emprestimos"
          title="Credito pessoal com comparacao de custo real, prazo e risco."
          subtitle="Entenda qual linha faz sentido para seu objetivo sem comprometer sua estabilidade financeira."
          actions={[
            { label: 'Voltar ao hub de comparadores', href: '/comparadores' },
            { label: 'Abrir comparador interativo', href: '/comparador-interativo', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Instituicoes em destaque" description="Comparacao por taxa mensal, prazo maximo e chance estimada de aprovacao." />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Instituicao</th>
                    <th>Taxa</th>
                    <th>Prazo</th>
                    <th>Aprovacao</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.institution}>
                      <td>{row.institution}</td>
                      <td>{row.rate}</td>
                      <td>{row.term}</td>
                      <td>{row.approval}</td>
                      <td>
                        <Link className="card-link" href="/comparador-interativo">
                          Ver detalhes
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container two-col-grid">
            <article className="panel-card">
              <h2>Como escolher emprestimo com criterio</h2>
              <ul>
                <li>Compare CET e nao apenas taxa nominal.</li>
                <li>Evite prazo longo sem necessidade de caixa.</li>
                <li>Reserve margem no orcamento para imprevistos.</li>
              </ul>
            </article>
            <article className="panel-card">
              <h2>Contexto de risco</h2>
              <p>
                Emprestimo e ferramenta de alavancagem. Quando bem usado, protege liquidez; quando
                mal dimensionado, pressiona caixa e aumenta inadimplencia.
              </p>
              <Link className="btn btn-secondary" href="/editorial">
                Ler conteudo de apoio
              </Link>
            </article>
          </div>
        </section>

        <CTASection
          title="Quer reduzir custo das suas dividas atuais?"
          description="O diagnostico identifica onde priorizar renegociacao e quais linhas podem substituir passivos caros."
          primaryLabel="Iniciar diagnostico"
          primaryHref="/diagnostico-financeiro"
          secondaryLabel="Abrir Cote Finance AI"
          secondaryHref={coteFinanceAppUrl}
          secondaryExternal
          dark
        />
      </main>
      <SiteFooter />
    </>
  );
}
