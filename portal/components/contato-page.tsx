import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { PageHero } from '@/components/ui/page-hero';
import { coteFinanceAppUrl } from '@/data/homepage';

export function ContatoPage() {
  return (
    <>
      <SiteHeader activePath="/contato" />
      <main>
        <PageHero
          eyebrow="Contato"
          title="Fale com a equipe Cote Juros"
          subtitle="Atendimento para parcerias, imprensa, suporte e duvidas sobre nossos comparadores, ferramentas e editorial."
        />

        <section className="section-space section-muted">
          <div className="container contact-grid">
            <article className="panel-card">
              <h2>Canais institucionais</h2>
              <ul>
                <li>Email: contato@cotejuros.com.br</li>
                <li>Suporte: suporte@cotejuros.com.br</li>
                <li>Atendimento: segunda a sexta, 9h as 18h (BRT)</li>
              </ul>
              <p>
                Para orientacoes automatizadas em tempo real, acesse o{' '}
                <a href={coteFinanceAppUrl} target="_blank" rel="noreferrer">
                  Cote Finance AI
                </a>
                .
              </p>
            </article>

            <article className="panel-card">
              <h2>Enviar mensagem</h2>
              <form className="contact-form">
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" type="text" placeholder="Seu nome completo" />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="voce@empresa.com" />

                <label htmlFor="subject">Assunto</label>
                <select id="subject" name="subject" defaultValue="Suporte">
                  <option>Suporte</option>
                  <option>Parcerias</option>
                  <option>Imprensa</option>
                  <option>Duvida comercial</option>
                </select>

                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" rows={6} placeholder="Descreva sua solicitacao com contexto" />

                <button type="button" className="btn btn-primary">
                  Enviar mensagem
                </button>
              </form>
            </article>
          </div>
        </section>

        <section className="section-space">
          <div className="container section-actions">
            <Link className="btn btn-secondary" href="/central-de-ajuda">
              Ir para central de ajuda
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
