import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const faqs = [
  'Como funciona o comparador interativo?',
  'Os rankings são atualizados com qual frequência?',
  'O diagnóstico financeiro impacta meu score de crédito?',
  'Como acessar o Cote Finance AI?'
] as const;

export function CentralAjudaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Central de ajuda</h1>
            <p>Encontre respostas rápidas, caminhos de suporte e páginas recomendadas.</p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container">
            <div className="simulator-card">
              <h2>Buscar ajuda</h2>
              <p>Digite um tema para encontrar conteúdos relacionados.</p>
              <div className="bar" aria-hidden="true">
                <span style={{ width: '70%' }} />
              </div>
              <small>Exemplo visual de busca inicial</small>
            </div>
          </div>
        </section>

        <section className="section-spaced">
          <div className="container">
            <h2>Perguntas frequentes</h2>
            {faqs.map((question) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>
                  Nossa equipe atualiza conteúdos e fluxos continuamente para manter as informações
                  claras e úteis.
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container">
            <h2>Links úteis</h2>
            <p>
              <Link href="/comparadores">Comparadores</Link> | <Link href="/ferramentas">Ferramentas</Link>{' '}
              | <Link href="/editorial">Editorial</Link>
            </p>
            <Link className="btn btn-primary" href="/contato">
              Falar com o suporte
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

