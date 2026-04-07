export type LoanIntent = {
  icon: string;
  title: string;
  description: string;
};

export type LoanInstitution = {
  name: string;
  rate: string;
  term: string;
  approval: string;
};

export const loanIntents: LoanIntent[] = [
  {
    icon: "home",
    title: "Empréstimo pessoal",
    description: "Crédito rapido para equilibrar caixa e manter sua estratégia."
  },
  {
    icon: "warning",
    title: "Para negativados",
    description: "Alternativas com foco em garantia e reestruturacao segura."
  },
  {
    icon: "verified",
    title: "Consignado",
    description: "Taxas menores para quem busca previsibilidade de parcelas."
  },
  {
    icon: "bolt",
    title: "Renegociacao",
    description: "Troque dividas caras por linhas com custo total mais baixo."
  }
];

export const loanInstitutions: LoanInstitution[] = [
  { name: "Banco Alpha Prime", rate: "1,49% a.m.", term: "48 meses", approval: "92%" },
  { name: "Banco Horizonte", rate: "1,67% a.m.", term: "60 meses", approval: "88%" },
  { name: "Lend Turbo", rate: "1,99% a.m.", term: "36 meses", approval: "85%" },
  { name: "Nexo Finance", rate: "2,14% a.m.", term: "72 meses", approval: "81%" }
];
