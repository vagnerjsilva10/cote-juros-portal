import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';
import { coteFinanceAppUrl } from '@/data/homepage';

const supportCategories = [
  { title: 'Conta e acesso', description: 'Login, seguranca e recuperacao de acesso ao portal.' },
  { title: 'Comparadores', description: 'Criterios de ranking, filtros e leitura de resultados.' },
  { title: 'Ferramentas', description: 'Uso de simuladores e interpretacao das projecoes.' },
  { title: 'Diagnostico', description: 'Fluxo, escopo da analise e proximos passos recomendados.' }
];

const faqs = [
  {
    q: 'Como os rankings sao atualizados?',
    a: 'Os rankings passam por revisao recorrente com base em mudancas de condicoes, custos e aderencia ao perfil.'
  },
  {
    q: 'O diagnostico impacta meu score de credito?',
    a: 'Nao. O diagnostico no portal e educativo e nao faz consulta restritiva em bureaus de credito.'
  },
  {
    q: 'Posso confiar nos comparativos mesmo com publicidade?',
    a: 'Sim. Mantemos separacao entre criterio editorial e relacionamento comercial de parceiros.'
  },
  {
    q: 'Como acesso o Cote Finance AI?',
    a: 'Voce pode acessar diretamente em finance.cotejuros.com.br a partir dos botoes do portal.'
  }
];

export function CentralAjudaPage() {
  return (
    <>
      <SiteHeader activePath="/central-de-ajuda" />
      <main>
        <PageHero
          eyebrow="Central de ajuda"
          title="Suporte claro para resolver duvidas sobre o portal e seus produtos."
          subtitle="Encontre respostas por categoria, pesquise por tema e acesse canais de contato quando precisar."
          actions={[{ label: 'Falar com o suporte', href: '/contato' }]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Buscar ajuda" description="Digite um tema para encontrar respostas em todo o portal." />
            <form className="search-help" role="search" aria-label="Buscar temas na central de ajuda">
              <label htmlFor="help-search">Buscar por assunto</label>
              <input
                id="help-search"
                type="search"
                placeholder="Ex: comparador de emprestimos, diagnostico financeiro, CET"
              />
              <button type="button" className="btn btn-primary">
                Buscar
              </button>
            </form>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <SectionHeader title="Categorias de ajuda" />
            <div className="feature-grid four-cols">
              {supportCategories.map((category) => (
                <article key={category.title} className="feature-card">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <article className="panel-card">
              <SectionHeader title="Perguntas frequentes" />
              <div className="faq-list">
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </article>
            <article className="panel-card">
              <SectionHeader title="Atalhos uteis" />
              <ul>
                <li>
                  <Link href="/comparadores">Ir para comparadores</Link>
                </li>
                <li>
                  <Link href="/ferramentas">Ir para ferramentas</Link>
                </li>
                <li>
                  <Link href="/diagnostico-financeiro">Abrir diagnostico financeiro</Link>
                </li>
                <li>
                  <a href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                    Acessar Cote Finance AI
                  </a>
                </li>
              </ul>
              <Link className="btn btn-secondary" href="/contato">
                Contatar equipe
              </Link>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
