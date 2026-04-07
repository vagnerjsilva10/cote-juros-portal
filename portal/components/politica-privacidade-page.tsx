import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export function PoliticaPrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section-spaced">
          <div className="container">
            <h1>Política de privacidade</h1>
            <p>Última atualização: 7 de abril de 2026.</p>
          </div>
        </section>

        <section className="section-spaced section-muted">
          <div className="container">
            <h2>Dados coletados</h2>
            <p>
              Podemos coletar dados cadastrais, de navegação e de interação para melhorar sua
              experiência no portal e nos serviços relacionados.
            </p>

            <h2>Uso das informações</h2>
            <p>
              As informações são utilizadas para personalização de conteúdo, melhoria de produtos,
              suporte e comunicação institucional.
            </p>

            <h2>Cookies</h2>
            <p>
              Utilizamos cookies para lembrar preferências, medir desempenho e apoiar análises de
              navegação do portal.
            </p>

            <h2>Compartilhamento</h2>
            <p>
              Não comercializamos dados pessoais. O compartilhamento ocorre apenas quando necessário
              para operação de serviços, cumprimento legal ou mediante consentimento.
            </p>

            <h2>Direitos do usuário</h2>
            <p>
              Você pode solicitar acesso, correção, atualização e exclusão de dados pessoais, nos
              termos da legislação aplicável.
            </p>

            <h2>Contato</h2>
            <p>Em caso de dúvidas sobre privacidade, entre em contato em contato@cotejuros.com.br.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

