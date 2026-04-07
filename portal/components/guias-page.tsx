import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeader } from '@/components/ui/section-header';

const guideGroups = [
  {
    title: 'Credito',
    items: [
      { name: 'Guia de comparacao de cartoes', href: '/cartoes-de-credito' },
      { name: 'Guia de emprestimo responsavel', href: '/emprestimos' }
    ]
  },
  {
    title: 'Dividas',
    items: [
      { name: 'Como priorizar dividas por custo total', href: '/diagnostico-financeiro' },
      { name: 'Renegociacao em 3 etapas', href: '/blog' }
    ]
  },
  {
    title: 'Score',
    items: [
      { name: 'O que realmente aumenta score de credito', href: '/editorial-artigo' },
      { name: 'Erros comuns que derrubam aprovacao', href: '/blog' }
    ]
  },
  {
    title: 'Organizacao financeira',
    items: [
      { name: 'Planejamento mensal sem planilha complexa', href: '/ferramentas' },
      { name: 'Reserva de emergencia com metodo', href: '/diagnostico-financeiro' }
    ]
  }
];

export function GuiasPage() {
  return (
    <>
      <SiteHeader activePath="/editorial" />
      <main>
        <PageHero
          eyebrow="Guias"
          title="Conteudo perene para quem quer tomar decisoes financeiras com metodo."
          subtitle="Os guias do Cote Juros organizam conceitos essenciais em trilhas objetivas para reduzir erro e acelerar aprendizado."
          actions={[
            { label: 'Voltar ao editorial', href: '/editorial' },
            { label: 'Ver blog', href: '/blog', tone: 'secondary' }
          ]}
        />

        <section className="section-space section-muted">
          <div className="container">
            <SectionHeader title="Curadoria por tema" description="Escolha um eixo de estudo e avance com leitura orientada ao seu contexto." />
            <div className="guide-grid">
              {guideGroups.map((group) => (
                <article key={group.title} className="guide-card">
                  <h2>{group.title}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container section-actions">
            <Link className="btn btn-primary" href="/diagnostico-financeiro">
              Iniciar diagnostico financeiro
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
