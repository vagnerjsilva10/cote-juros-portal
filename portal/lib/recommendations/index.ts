import type { DiagnosisInput, OfferWithPartner, RecommendationResult, RecommendationRule } from '@/lib/monetization/types';
import { seedRecommendationRules } from '@/lib/monetization/seed-data';
import { getOffersByType } from '@/lib/offers';
import { isSupabaseConfigured } from '@/lib/env';
import { getPublicSupabaseClient, getServiceSupabaseClient } from '@/lib/supabase/clients';

function scoreRank(scoreBand: DiagnosisInput['creditScoreBand']) {
  if (scoreBand === 'low') return 1;
  if (scoreBand === 'mid') return 2;
  return 3;
}

function incomeRank(incomeBand: DiagnosisInput['incomeBand']) {
  if (incomeBand === 'low') return 1;
  if (incomeBand === 'mid') return 2;
  return 3;
}

function matchesRule(rule: RecommendationRule, input: DiagnosisInput) {
  const config = rule.rule_json as Record<string, unknown>;
  const allowedGoals = Array.isArray(config.primaryGoal) ? (config.primaryGoal as string[]) : [];
  const allowedDebtLevels = Array.isArray(config.debtLevel) ? (config.debtLevel as string[]) : [];
  const minimumScoreBand = typeof config.minimumScoreBand === 'string' ? (config.minimumScoreBand as DiagnosisInput['creditScoreBand']) : null;
  const minimumIncomeBand = typeof config.minimumIncomeBand === 'string' ? (config.minimumIncomeBand as DiagnosisInput['incomeBand']) : null;
  const wantsNoAnnualFee = config.wantsNoAnnualFee === true;

  if (allowedGoals.length > 0 && !allowedGoals.includes(input.primaryGoal)) {
    return false;
  }

  if (allowedDebtLevels.length > 0 && !allowedDebtLevels.includes(input.debtLevel)) {
    return false;
  }

  if (minimumScoreBand && scoreRank(input.creditScoreBand) < scoreRank(minimumScoreBand)) {
    return false;
  }

  if (minimumIncomeBand && incomeRank(input.incomeBand) < incomeRank(minimumIncomeBand)) {
    return false;
  }

  if (wantsNoAnnualFee && !input.wantsNoAnnualFee) {
    return false;
  }

  return true;
}

export async function listRecommendationRules() {
  if (isSupabaseConfigured()) {
    try {
      const client = getPublicSupabaseClient();
      const { data, error } = await client
        .from('recommendation_rules')
        .select('*')
        .eq('is_active', true)
        .order('priority', { ascending: false });

      if (!error && data) {
        return data as RecommendationRule[];
      }
    } catch {
      // fallback para seed local
    }
  }

  return [...seedRecommendationRules].sort((a, b) => b.priority - a.priority);
}

export async function upsertRecommendationRule(rule: RecommendationRule) {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase service role nao configurado para gravar regras de recomendacao.');
  }

  const client = getServiceSupabaseClient();
  const { error } = await client.from('recommendation_rules').upsert(rule);

  if (error) {
    throw new Error(error.message);
  }
}

export async function getRecommendedOffers(input: DiagnosisInput): Promise<RecommendationResult> {
  const rules = await listRecommendationRules();
  const matchedRule = rules.find((rule) => matchesRule(rule, input));

  if (!matchedRule) {
    const fallbackOffers = await getOffersByType('credit_card', { featured: true });
    return {
      title: 'Ofertas em destaque para comecar',
      rationale: 'Sem um match especifico de regra, priorizamos ofertas com melhor equilibrio entre custo, aprovacao e utilidade recorrente.',
      offers: fallbackOffers.slice(0, 3)
    };
  }

  const offers = await getOffersByType(matchedRule.product_type, { featured: true, scoreBand: input.creditScoreBand });
  const filteredOffers = applyRecommendationRuleFilters(offers, matchedRule, input);

  return {
    title: matchedRule.name,
    rationale: buildRationale(input, matchedRule),
    offers: filteredOffers.slice(0, 3)
  };
}

function applyRecommendationRuleFilters(offers: OfferWithPartner[], rule: RecommendationRule, input: DiagnosisInput) {
  const config = rule.rule_json as Record<string, unknown>;
  const categories = Array.isArray(config.categories) ? (config.categories as string[]) : [];

  return offers.filter((offer) => {
    if (categories.length > 0 && !categories.includes(offer.category)) {
      return false;
    }

    if (input.wantsNoAnnualFee && offer.product_type === 'credit_card' && offer.annual_fee !== 'R$ 0' && offer.annual_fee !== 'Isencao mediante gasto mensal') {
      return false;
    }

    return true;
  });
}

function buildRationale(input: DiagnosisInput, rule: RecommendationRule) {
  const goalLabels: Record<DiagnosisInput['primaryGoal'], string> = {
    save: 'reduzir custo recorrente',
    cashback: 'maximizar retorno em gastos do dia a dia',
    credit: 'reorganizar credito com mais previsibilidade',
    account: 'simplificar a operacao financeira',
    financing: 'estruturar uma compra de longo prazo'
  };

  return `Com base no seu objetivo de ${goalLabels[input.primaryGoal]}, no nivel de endividamento ${input.debtLevel} e no perfil de score ${input.creditScoreBand}, priorizamos a regra "${rule.name}".`;
}
