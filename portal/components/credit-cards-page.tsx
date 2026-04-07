import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const cards = [
  {
    name: 'Infinite Rewards Elite',
    profile: 'Alta renda',
    annualFee: 'Isencao por gasto',
    benefit: 'Cashback ate 3%',
    score: '700+'
  },
  {
    name: 'Skyline Platinum Plus',
    profile: 'Viajantes',
    annualFee: '12x R$ 45',
    benefit: '4 pts por dolar',
    score: '720+'
  },
  {
    name: 'Neo Digital Zero',
    profile: 'Entrada',
    annualFee: 'R$ 0',
    benefit: 'Cashback 0,5%',
    score: '650+'
  }
];

export function CreditCardsPage() {
  return (
    <>
      <SiteHeader activePath="/comparadores" />
      <main>
        <PageHero
          eyebrow="Comparador de cartoes"
          title="Escolha seu cartao com base em custo, beneficio e aderencia ao seu perfil."
          subtitle="Comparacao editorial com criterios objetivos para evitar decisao baseada apenas em marketing."
          actions={[
            { label: 'Voltar ao hub de comparadores', href: '/comparadores' },
            { label: 'Abrir comparador interativo', href: '/comparador-interativo', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Ranking atual de cartoes" description="Atualizacao editorial com foco em custo total e recorrencia de beneficio." />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Cartao</th>
                    <th>Perfil</th>
                    <th>Anuidade</th>
                    <th>Beneficio principal</th>
                    <th>Score sugerido</th>
                  </tr>
                </thead>
                <tbody>
                  {cards.map((card) => (
                    <tr key={card.name}>
                      <td>{card.name}</td>
                      <td>{card.profile}</td>
                      <td>{card.annualFee}</td>
                      <td>{card.benefit}</td>
                      <td>{card.score}</td>
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
              <h2>Como escolher o cartao ideal</h2>
              <ol>
                <li>Defina seu objetivo principal: cashback, milhas ou controle de custo.</li>
                <li>Compare anuidade com retorno esperado de uso mensal.</li>
                <li>Considere score minimo e risco de aprovacao antes de solicitar.</li>
              </ol>
            </article>
            <article className="panel-card">
              <h2>Transparencia editorial</h2>
              <p>
                O ranking considera custo, utilidade real dos beneficios e aderencia de perfil.
                Relacoes comerciais nao alteram a ordem tecnica da avaliacao.
              </p>
              <Link className="btn btn-secondary" href="/editorial-artigo">
                Ler metodologia completa
              </Link>
            </article>
          </div>
        </section>

        <CTASection
          title="Nao sabe qual cartao combina com sua rotina?"
          description="Use o diagnostico para receber recomendacoes priorizadas pelo seu contexto financeiro."
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
