import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { LegalContentLayout } from '@/components/ui/legal-content-layout';

const sections = [
  {
    title: '1. Dados coletados',
    paragraphs: [
      'Coletamos dados de navegacao, interacao e informacoes fornecidas por voce em formularios do portal.',
      'Quando necessario para suporte ou relacionamento comercial, podemos solicitar dados de contato adicionais.'
    ]
  },
  {
    title: '2. Finalidades de uso',
    paragraphs: [
      'Usamos os dados para melhorar experiencia, personalizar conteudo e oferecer suporte tecnico e institucional.',
      'Tambem utilizamos informacoes agregadas para medir desempenho de produtos e qualidade editorial.'
    ]
  },
  {
    title: '3. Compartilhamento e seguranca',
    paragraphs: [
      'Nao comercializamos dados pessoais. O compartilhamento ocorre apenas com fornecedores essenciais e sob obrigacoes contratuais.',
      'Aplicamos medidas de seguranca administrativas e tecnicas para proteger as informacoes processadas.'
    ]
  },
  {
    title: '4. Direitos do titular',
    paragraphs: [
      'Voce pode solicitar confirmacao de tratamento, acesso, correcao, portabilidade e eliminacao de dados conforme a legislacao aplicavel.',
      'Solicitacoes podem ser feitas por meio do email contato@cotejuros.com.br.'
    ]
  }
];

export function PoliticaPrivacidadePage() {
  return (
    <>
      <SiteHeader activePath="/politica-de-privacidade" />
      <LegalContentLayout
        title="Politica de Privacidade"
        updatedAt="7 de abril de 2026"
        intro="Este documento explica como o Cote Juros coleta, utiliza e protege dados pessoais no contexto do portal."
        sections={sections}
      />
      <SiteFooter />
    </>
  );
}
