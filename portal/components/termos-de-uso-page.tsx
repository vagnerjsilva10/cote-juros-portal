import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function TermosDeUsoPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Termos de uso</h1>
            <p>Condições gerais para utilização do portal Cote Juros.</p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container">
            <h2>Introdução</h2>
            <p>
              Ao acessar este portal, você concorda com estes termos e com as políticas aplicáveis ao
              uso da plataforma.
            </p>

            <h2>Uso da plataforma</h2>
            <p>
              O conteúdo é informativo e voltado à comparação e educação financeira. O usuário deve
              utilizar a plataforma de forma lícita e responsável.
            </p>

            <h2>Responsabilidades</h2>
            <p>
              Cada decisão financeira permanece sob responsabilidade do usuário. Recomendamos avaliação
              cuidadosa antes de contratar qualquer produto.
            </p>

            <h2>Propriedade intelectual</h2>
            <p>
              Marcas, textos, design e demais ativos do portal são protegidos por direitos de
              propriedade intelectual, salvo quando indicado de forma diversa.
            </p>

            <h2>Isenções</h2>
            <p>
              Não garantimos disponibilidade ininterrupta ou ausência de falhas. Informações podem ser
              atualizadas sem aviso prévio.
            </p>

            <h2>Contato</h2>
            <p>Para dúvidas sobre estes termos, escreva para contato@cotejuros.com.br.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

