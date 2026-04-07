import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { CTASection } from '@/components/ui/cta-section';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const products = [
  {
    stage: 'Descobrir opcoes',
    title: 'Comparadores',
    description: 'Central para comparar cartoes, emprestimos e financiamento com criterio unico.',
    href: '/comparadores'
  },
  {
    stage: 'Simular cenarios',
    title: 'Ferramentas',
    description: 'Calculadoras e simuladores para antecipar custo e impacto no seu fluxo de caixa.',
    href: '/ferramentas'
  },
  {
    stage: 'Priorizar decisoes',
    title: 'Diagnostico Financeiro',
    description: 'Produto de entrada do funil para mapear renda, gastos, dividas e oportunidades.',
    href: '/diagnostico-financeiro'
  },
  {
    stage: 'Executar com inteligencia',
    title: 'Cote Finance AI',
    description: 'Camada premium com acompanhamento continuo e recomendacoes em tempo real.',
    href: coteFinanceAppUrl,
    external: true
  }
];

export function ProdutosPage() {
  return (
    <>
      <SiteHeader activePath="/produtos" />
      <main>
        <PageHero
          eyebrow="Produtos"
          title="Ecossistema Cote Juros: da comparacao a decisao orientada por dados."
          subtitle="Cada produto atende um estagio da jornada financeira e funciona de forma integrada para reduzir custo de decisao."
          actions={[
            { label: 'Explorar comparadores', href: '/comparadores' },
            { label: 'Conhecer Cote Finance AI', href: coteFinanceAppUrl, external: true, tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader
              title="Arquitetura de produtos por jornada"
              description="Use os modulos de acordo com seu momento: diagnosticar, comparar, simular e executar."
            />
            <div className="journey-grid">
              {products.map((product) => (
                <article key={product.title} className="journey-card">
                  <span>{product.stage}</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  {product.external ? (
                    <a className="card-link" href={product.href} target="_blank" rel="noreferrer">
                      Acessar produto
                    </a>
                  ) : (
                    <Link className="card-link" href={product.href}>
                      Acessar produto
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container two-col-grid">
            <article className="panel-card">
              <h2>Como os produtos se conectam</h2>
              <ol>
                <li>Comece no diagnostico para entender prioridades financeiras reais.</li>
                <li>Valide opcoes nos comparadores e simule cenarios nas ferramentas.</li>
                <li>Ative o Cote Finance AI para monitorar evolucao e ajustar a rota.</li>
              </ol>
            </article>
            <article className="panel-card">
              <h2>Valor para o usuario final</h2>
              <ul>
                <li>Menos tempo para chegar a uma decisao consistente.</li>
                <li>Mais transparencia sobre custo total e risco de cada escolha.</li>
                <li>Experiencia unica entre conteudo, simulacao e recomendacao.</li>
              </ul>
            </article>
          </div>
        </section>

        <CTASection
          title="Comece com uma leitura completa da sua situacao financeira"
          description="O diagnostico conecta todas as partes do ecossistema e aponta o proximo melhor passo."
          primaryLabel="Fazer diagnostico financeiro"
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
