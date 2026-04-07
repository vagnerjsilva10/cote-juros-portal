import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';

const marketTopics = [
  {
    title: 'Selic e credito ao consumidor',
    summary: 'Como as decisoes do Banco Central afetam aprovacao e custo de novas linhas.'
  },
  {
    title: 'Spread bancario e risco',
    summary: 'Leitura pratica de por que duas propostas com taxa parecida geram custos diferentes.'
  },
  {
    title: 'Juros reais e planejamento familiar',
    summary: 'O efeito dos juros reais na decisao entre consumir, investir ou amortizar dividas.'
  },
  {
    title: 'Mercado de financiamento',
    summary: 'Sinais para avaliar timing de entrada, portabilidade e renegociacao de contrato.'
  }
];

export function AnaliseMercadoPage() {
  return (
    <>
      <SiteHeader activePath="/editorial" />
      <main>
        <PageHero
          eyebrow="Analise de Mercado"
          title="Uma editoria para ler juros, credito e economia com impacto no bolso."
          subtitle="Conteudo orientado a decisao, conectando variaveis macroeconomicas ao cotidiano financeiro do consumidor."
          actions={[
            { label: 'Ver hub editorial', href: '/editorial' },
            { label: 'Explorar comparadores', href: '/comparadores', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Temas em cobertura" description="Acompanhamento recorrente com foco em utilidade pratica para tomada de decisao." />
            <div className="market-grid">
              {marketTopics.map((topic) => (
                <article key={topic.title} className="market-card">
                  <h2>{topic.title}</h2>
                  <p>{topic.summary}</p>
                  <Link className="card-link" href="/editorial-artigo">
                    Ler analise completa
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container panel-card">
            <h2>Como usamos dados no editorial de mercado</h2>
            <ul>
              <li>Comparamos fontes publicas e privadas para contextualizar juros e credito.</li>
              <li>Traduzimos variacoes macro em implicacoes praticas para familias e individuos.</li>
              <li>Mantemos separacao clara entre opiniao editorial e informacao comercial.</li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
