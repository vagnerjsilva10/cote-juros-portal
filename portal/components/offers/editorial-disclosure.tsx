export function EditorialDisclosure({ compact }: { compact?: boolean }) {
  return (
    <div className={compact ? 'editorial-disclosure compact' : 'editorial-disclosure'}>
      <strong>Transparencia editorial</strong>
      <p>
        O Cote Juros pode receber comissao por ofertas indicadas. Isso nao altera nossos criterios
        de comparacao, que consideram custo total, aderencia ao perfil e qualidade operacional.
      </p>
    </div>
  );
}
