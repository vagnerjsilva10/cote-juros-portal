import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const financingRows = [
  { bank: 'Itau Personnalite', rate: '8,45% a.a.', term: '420 meses', approval: '92%' },
  { bank: 'Santander Select', rate: '9,05% a.a.', term: '420 meses', approval: '89%' },
  { bank: 'Bradesco Prime', rate: '9,31% a.a.', term: '360 meses', approval: '86%' }
];

export function FinanciamentoPage() {
  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <PageHero
          eyebrow="Comparador de financiamento"
          title="Leitura tecnica de financiamento para decidir com previsibilidade."
          subtitle="Compare taxa, prazo e estrutura de amortizacao para reduzir custo total e preservar liquidez."
          actions={[
            { label: 'Voltar ao hub de comparadores', href: '/comparadores' },
            { label: 'Simular financiamento', href: '/comparador-interativo', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <article className="panel-card">
              <SectionHeader title="SAC ou PRICE?" />
              <p>
                SAC reduz juros totais e gera parcelas decrescentes. PRICE mantem parcelas fixas e
                pode facilitar previsibilidade de caixa no curto prazo.
              </p>
            </article>
            <article className="panel-card">
              <SectionHeader title="Criterios que mais importam" />
              <ul>
                <li>Taxa efetiva anual e CET.</li>
                <li>Percentual de entrada e liquidez residual.</li>
                <li>Capacidade de amortizacao extraordinaria.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="ranking" className="section-space">
          <div className="container">
            <SectionHeader title="Ranking de financiamento" description="Comparativo inicial para apoiar sua avaliacao de proposta." />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Banco</th>
                    <th>Taxa</th>
                    <th>Prazo</th>
                    <th>Aprovacao</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {financingRows.map((row) => (
                    <tr key={row.bank}>
                      <td>{row.bank}</td>
                      <td>{row.rate}</td>
                      <td>{row.term}</td>
                      <td>{row.approval}</td>
                      <td>
                        <Link className="card-link" href="/comparador-interativo">
                          Simular
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <CTASection
          title="Quer saber o quanto voce pode economizar no longo prazo?"
          description="Use o diagnostico para cruzar seu fluxo de caixa com as melhores estrategias de financiamento."
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
