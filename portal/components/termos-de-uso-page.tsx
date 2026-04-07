import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { LegalContentLayout } from '@/components/ui/legal-content-layout';

const sections = [
  {
    title: '1. Escopo do portal',
    paragraphs: [
      'O Cote Juros oferece conteudo editorial, comparadores e ferramentas com finalidade informativa e educativa.',
      'As informacoes nao constituem consultoria financeira individual, recomendacao de investimento ou garantia de aprovacao de credito.'
    ]
  },
  {
    title: '2. Responsabilidades do usuario',
    paragraphs: [
      'O usuario e responsavel por validar condicoes finais diretamente com instituicoes financeiras antes de contratar qualquer produto.',
      'Tambem e responsabilidade do usuario manter dados de acesso protegidos e utilizar o portal de forma licita.'
    ]
  },
  {
    title: '3. Propriedade intelectual',
    paragraphs: [
      'Conteudos, marcas, interfaces e elementos visuais do portal sao protegidos por direitos autorais e de propriedade intelectual.',
      'A reproducao parcial ou total depende de autorizacao previa por escrito.'
    ]
  },
  {
    title: '4. Atualizacoes e disponibilidade',
    paragraphs: [
      'Podemos atualizar funcionalidades, criterios editoriais e condicoes de uso para melhorar o servico.',
      'Nao garantimos disponibilidade ininterrupta e podemos realizar manutencoes programadas sem aviso previo.'
    ]
  }
];

export function TermosDeUsoPage() {
  return (
    <>
      <SiteHeader activePath="/termos-de-uso" />
      <LegalContentLayout
        title="Termos de Uso"
        updatedAt="7 de abril de 2026"
        intro="Estes termos descrevem as condicoes para utilizacao do portal Cote Juros e de seus conteudos."
        sections={sections}
      />
      <SiteFooter />
    </>
  );
}
