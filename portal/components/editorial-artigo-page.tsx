import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const relatedPosts = [
  { title: 'Portabilidade de credito: erros comuns na negociacao', href: '/blog' },
  { title: 'Como comparar emprestimos sem cair em taxa teaser', href: '/emprestimos' },
  { title: 'Selic e spread: o impacto nas propostas de financiamento', href: '/analise-de-mercado' }
];

export function EditorialArtigoPage() {
  return (
    <>
      <SiteHeader activePath="/editorial" />
      <main>
        <section className="section-space article-hero">
          <div className="container article-wrap">
            <article className="article-main">
              <p className="section-eyebrow">Editorial | Estrategia de credito</p>
              <h1>Como reduzir custo financeiro em 90 dias sem comprometer liquidez</h1>
              <p>
                Um guia pratico para reorganizar dividas caras, aumentar previsibilidade de caixa e
                recuperar margem para investimentos de medio prazo.
              </p>
              <p className="article-meta">Por Equipe Editorial Cote Juros â€¢ Atualizado em 7 de abril de 2026</p>

              <h2>1. Mapeie o custo real das suas dividas</h2>
              <p>
                O primeiro passo e listar todas as obrigacoes com taxa, CET e prazo. Sem essa
                visao consolidada, qualquer tentativa de renegociacao vira tentativa e erro.
              </p>

              <h2>2. Priorize por impacto no caixa mensal</h2>
              <p>
                Nem sempre a maior taxa deve ser quitada primeiro. Em alguns cenarios, a divida com
                maior peso mensal compromete mais sua capacidade de reorganizacao financeira.
              </p>

              <h2>3. Troque custo caro por estrutura sustentavel</h2>
              <p>
                Portabilidade e consolidacao podem reduzir custo, mas so fazem sentido quando prazo,
                parcela e risco ficam alinhados ao seu fluxo real.
              </p>

              <blockquote>
                Decisao financeira boa nao e a mais agressiva. E a que voce consegue sustentar.
              </blockquote>

              <h2>4. Defina metas de 30, 60 e 90 dias</h2>
              <p>
                Crie checkpoints com metas simples: reducao de encargos, reconstrucao de reserva e
                controle de gasto variavel. Isso evita recaida no ciclo de custo alto.
              </p>

              <div className="section-actions">
                <Link className="btn btn-primary" href="/diagnostico-financeiro">
                  Fazer diagnostico financeiro
                </Link>
                <Link className="btn btn-secondary" href="/comparadores">
                  Comparar opcoes
                </Link>
              </div>
            </article>

            <aside className="article-side">
              <article className="panel-card">
                <h3>Checklist rapido</h3>
                <ul>
                  <li>Conhecer CET de cada operacao.</li>
                  <li>Definir teto de parcela mensal.</li>
                  <li>Negociar taxa com alternativa em maos.</li>
                </ul>
              </article>
              <article className="panel-card">
                <h3>Continue lendo</h3>
                <ul>
                  {relatedPosts.map((post) => (
                    <li key={post.title}>
                      <Link href={post.href}>{post.title}</Link>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="panel-card article-ai-cta">
                <h3>Cote Finance AI</h3>
                <p>Leve sua analise para acompanhamento continuo com recomendacoes em tempo real.</p>
                <a className="btn btn-dark" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                  Abrir Cote Finance AI
                </a>
              </article>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
