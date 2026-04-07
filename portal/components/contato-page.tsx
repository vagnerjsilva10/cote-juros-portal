import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { coteFinanceAppUrl } from '@/data/homepage';

export function ContatoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Contato</h1>
            <p>Nosso time está pronto para apoiar sua jornada financeira com clareza e agilidade.</p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container grid">
            <article className="comparison-card">
              <h2>Canal institucional</h2>
              <p>Email: contato@cotejuros.com.br</p>
              <p>Atendimento: segunda a sexta, das 9h às 18h.</p>
            </article>

            <article className="comparison-card">
              <h2>Formulário</h2>
              <p>Nome</p>
              <div className="bar" aria-hidden="true">
                <span style={{ width: '100%' }} />
              </div>
              <p>Mensagem</p>
              <div className="bar" aria-hidden="true">
                <span style={{ width: '100%' }} />
              </div>
              <small>Formulário visual inicial para próxima integração.</small>
            </article>
          </div>
        </section>

        <section className="section-spaced">
          <div className="container">
            <h2>Precisa de ajuda imediata?</h2>
            <p>
              Consulte a <Link href="/central-de-ajuda">Central de ajuda</Link> ou acesse o aplicativo
              para acompanhar recomendações em tempo real.
            </p>
            <a className="btn btn-dark" href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
              Acessar Cote Finance AI
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

