import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PageHero } from '@/components/ui/page-hero';

export function SobreNosPage() {
  return (
    <>
      <SiteHeader activePath="/produtos" />
      <main>
        <PageHero
          eyebrow="Sobre nos"
          title="Tecnologia, curadoria e responsabilidade editorial para decisoes financeiras melhores."
          subtitle="O Cote Juros nasceu para reduzir assimetria de informacao no mercado financeiro brasileiro."
          actions={[{ label: 'Conhecer produtos', href: '/produtos' }]}
        />

        <section className="section-space section-muted">
          <div className="container two-col-grid">
            <article className="panel-card">
              <h2>Nossa missao</h2>
              <p>
                Ajudar pessoas e familias a decidir com clareza, sem depender de promessas
                comerciais ou linguagem tecnica inacessivel.
              </p>
            </article>
            <article className="panel-card">
              <h2>Como trabalhamos</h2>
              <ul>
                <li>Metodologia editorial com criterios publicos.</li>
                <li>Comparacao tecnica de custo, risco e aderencia.</li>
                <li>Experiencia de produto orientada a decisao.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section-space">
          <div className="container section-actions">
            <Link className="btn btn-primary" href="/editorial">
              Explorar editorial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
