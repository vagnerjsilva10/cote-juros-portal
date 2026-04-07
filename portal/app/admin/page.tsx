import type { ReactNode } from 'react';
import Link from 'next/link';

import { getAnalyticsOverview } from '@/lib/analytics';
import { hasAdminAccessKey, isSupabaseConfigured } from '@/lib/env';
import { isAdminAuthenticated } from '@/lib/admin/session';
import { getAllOffers } from '@/lib/offers';
import { listPartners } from '@/lib/partners';
import { listRecommendationRules } from '@/lib/recommendations';
import { listSeoPages } from '@/lib/seo-pages';

import {
  createOfferAction,
  createPartnerAction,
  createRecommendationRuleAction,
  createSeoPageAction,
  loginAdminAction,
  logoutAdminAction,
  toggleOfferActiveAction,
  toggleOfferFeaturedAction
} from '@/app/admin/actions';

function AdminMessage({ children }: { children: ReactNode }) {
  return <div className="admin-message">{children}</div>;
}

export default async function Page({
  searchParams
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const authenticated = await isAdminAuthenticated();
  const hasAdminKey = hasAdminAccessKey();
  const supabaseEnabled = isSupabaseConfigured();

  if (!authenticated) {
    return (
      <main className="admin-shell">
        <section className="admin-login-card">
          <p className="section-eyebrow">Admin</p>
          <h1>Area administrativa do Cote Juros</h1>
          <p>Ambiente basico para operar parceiros, ofertas, SEO pages e regras do portal.</p>
          {!hasAdminKey ? <AdminMessage>Defina ADMIN_ACCESS_KEY para habilitar login seguro.</AdminMessage> : null}
          {params.error ? <AdminMessage>Falha de acesso: {String(params.error)}</AdminMessage> : null}
          <form className="admin-form" action={loginAdminAction}>
            <label htmlFor="accessKey">Chave de acesso</label>
            <input id="accessKey" name="accessKey" type="password" placeholder="Digite a chave do admin" />
            <button className="btn btn-primary" type="submit">
              Entrar
            </button>
          </form>
        </section>
      </main>
    );
  }

  const [analytics, partners, offers, seoPages, recommendationRules] = await Promise.all([
    getAnalyticsOverview(),
    listPartners({ includeInactive: true }),
    getAllOffers({ includeInactive: true }),
    listSeoPages(),
    listRecommendationRules()
  ]);

  const offerMap = new Map(offers.map((offer) => [offer.id, offer]));

  return (
    <main className="admin-shell">
      <section className="admin-topbar">
        <div>
          <p className="section-eyebrow">Admin</p>
          <h1>Operacao de afiliados, comparadores e SEO</h1>
          <p>Base operacional conectada ao Supabase quando configurado, com fallback local para desenvolvimento.</p>
        </div>
        <div className="section-actions">
          <Link className="btn btn-secondary" href="/comparadores">
            Ver portal
          </Link>
          <form action={logoutAdminAction}>
            <button className="btn btn-dark" type="submit">
              Sair
            </button>
          </form>
        </div>
      </section>

      {!supabaseEnabled ? (
        <AdminMessage>
          Supabase ainda nao configurado. O painel fica em modo leitura com fallback local, e os formularios de escrita permanecem desabilitados ate recebermos as credenciais.
        </AdminMessage>
      ) : null}

      <section className="admin-stats-grid">
        <article>
          <strong>{analytics.totalClicks}</strong>
          <span>Cliques rastreados</span>
        </article>
        <article>
          <strong>{analytics.totalPageViews}</strong>
          <span>Page views internos</span>
        </article>
        <article>
          <strong>{offers.length}</strong>
          <span>Ofertas catalogadas</span>
        </article>
        <article>
          <strong>{partners.length}</strong>
          <span>Parceiros cadastrados</span>
        </article>
      </section>

      <section className="admin-grid">
        <article className="panel-card">
          <h2>Top ofertas</h2>
          <ul className="admin-list compact">
            {analytics.topOffers.length === 0 ? <li>Nenhum clique registrado ainda.</li> : null}
            {analytics.topOffers.map((item) => (
              <li key={item.offer_id}>
                <strong>{offerMap.get(item.offer_id)?.name ?? item.offer_id}</strong>
                <span>{item.clicks} cliques</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel-card">
          <h2>CTR por pagina</h2>
          <ul className="admin-list compact">
            {analytics.sourcePages.length === 0 ? <li>Nenhum dado de origem ainda.</li> : null}
            {analytics.sourcePages.map((item) => (
              <li key={item.source_page}>
                <strong>{item.source_page}</strong>
                <span>
                  {item.clicks} cliques | {item.page_views} views | CTR {item.ctr}%
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel-card">
          <h2>Categorias com mais clique</h2>
          <ul className="admin-list compact">
            {analytics.topCategories.length === 0 ? <li>Nenhuma categoria com tracao ainda.</li> : null}
            {analytics.topCategories.map((item) => (
              <li key={item.category}>
                <strong>{item.category}</strong>
                <span>{item.clicks} cliques</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="admin-grid">
        <article className="panel-card">
          <h2>Novo parceiro</h2>
          <form className="admin-form" action={createPartnerAction}>
            <fieldset disabled={!supabaseEnabled}>
              <input name="name" placeholder="Nome do parceiro" />
              <input name="slug" placeholder="slug-opcional" />
              <select name="partner_type" defaultValue="direct_partner">
                <option value="direct_partner">Parceiro direto</option>
                <option value="affiliate_network">Rede afiliada</option>
                <option value="internal">Interno</option>
              </select>
              <input name="website" placeholder="https://parceiro.com.br" />
              <input name="network_name" placeholder="Rede afiliada" />
              <input name="api_base_url" placeholder="API base URL" />
              <input name="feed_url" placeholder="Feed URL" />
              <input name="default_tracking_template" placeholder="Template tracking" />
              <textarea name="notes" rows={4} placeholder="Notas operacionais" />
              <select name="status" defaultValue="active">
                <option value="active">Ativo</option>
                <option value="draft">Draft</option>
                <option value="inactive">Inativo</option>
              </select>
              <label className="checkbox-row"><input type="checkbox" name="has_api" value="true" /> <span>Tem API</span></label>
              <label className="checkbox-row"><input type="checkbox" name="has_feed" value="true" /> <span>Tem feed</span></label>
              <button className="btn btn-primary" type="submit">Salvar parceiro</button>
            </fieldset>
          </form>
        </article>

        <article className="panel-card">
          <h2>Nova oferta</h2>
          <form className="admin-form" action={createOfferAction}>
            <fieldset disabled={!supabaseEnabled}>
              <select name="partner_id" defaultValue={partners[0]?.id ?? ''}>
                {partners.map((partner) => (
                  <option key={partner.id} value={partner.id}>{partner.name}</option>
                ))}
              </select>
              <input name="name" placeholder="Nome da oferta" />
              <input name="slug" placeholder="slug-opcional" />
              <select name="product_type" defaultValue="credit_card">
                <option value="credit_card">Cartao</option>
                <option value="loan">Emprestimo</option>
                <option value="financing">Financiamento</option>
                <option value="digital_account">Conta digital</option>
              </select>
              <input name="category" placeholder="cartoes, emprestimos, financiamento, contas" />
              <input name="bank" placeholder="Banco / instituicao" />
              <textarea name="short_description" rows={2} placeholder="Descricao curta" />
              <textarea name="description" rows={3} placeholder="Descricao completa" />
              <input name="annual_fee" placeholder="Anuidade ou custo" />
              <input name="interest_rate" placeholder="Taxa" />
              <input name="apr" placeholder="APR / CET" />
              <input name="cashback" placeholder="Cashback" />
              <input name="rewards" placeholder="Beneficios" />
              <input name="credit_score_min" placeholder="Score minimo" />
              <input name="income_requirement" placeholder="Renda minima" />
              <input name="redirect_url" placeholder="URL final do parceiro" />
              <input name="tracking_code" placeholder="Codigo de tracking" />
              <input name="rating" type="number" min="0" max="5" step="0.1" placeholder="Rating" />
              <textarea name="metadata_json" rows={4} placeholder='{"highlights":["..."],"badges":["..."]}' />
              <label className="checkbox-row"><input type="checkbox" name="featured" value="true" /> <span>Destaque</span></label>
              <label className="checkbox-row"><input type="checkbox" name="is_active" value="true" defaultChecked /> <span>Ativa</span></label>
              <button className="btn btn-primary" type="submit">Salvar oferta</button>
            </fieldset>
          </form>
        </article>
      </section>

      <section className="admin-grid">
        <article className="panel-card">
          <h2>Paginas SEO</h2>
          <form className="admin-form" action={createSeoPageAction}>
            <fieldset disabled={!supabaseEnabled}>
              <input name="title" placeholder="Title da pagina" />
              <input name="slug" placeholder="slug-seo" />
              <input name="meta_description" placeholder="Meta description" />
              <input name="h1" placeholder="H1" />
              <textarea name="intro" rows={3} placeholder="Introducao premium" />
              <select name="page_type" defaultValue="credit_card">
                <option value="credit_card">Cartao</option>
                <option value="loan">Emprestimo</option>
                <option value="financing">Financiamento</option>
                <option value="digital_account">Conta</option>
              </select>
              <textarea name="filters_json" rows={4} placeholder='{"productType":"credit_card","category":"cartoes"}' />
              <button className="btn btn-primary" type="submit">Salvar pagina SEO</button>
            </fieldset>
          </form>
          <ul className="admin-list compact">
            {seoPages.map((page) => (
              <li key={page.id}><strong>/{page.slug}</strong> <span>{page.title}</span></li>
            ))}
          </ul>
        </article>

        <article className="panel-card">
          <h2>Regras de recomendacao</h2>
          <form className="admin-form" action={createRecommendationRuleAction}>
            <fieldset disabled={!supabaseEnabled}>
              <input name="name" placeholder="Nome da regra" />
              <select name="product_type" defaultValue="credit_card">
                <option value="credit_card">Cartao</option>
                <option value="loan">Emprestimo</option>
                <option value="financing">Financiamento</option>
                <option value="digital_account">Conta</option>
              </select>
              <input name="priority" type="number" placeholder="Prioridade" />
              <textarea name="rule_json" rows={5} placeholder='{"primaryGoal":["save"],"categories":["cartoes"]}' />
              <label className="checkbox-row"><input type="checkbox" name="is_active" value="true" defaultChecked /> <span>Regra ativa</span></label>
              <button className="btn btn-primary" type="submit">Salvar regra</button>
            </fieldset>
          </form>
          <ul className="admin-list compact">
            {recommendationRules.map((rule) => (
              <li key={rule.id}><strong>{rule.name}</strong> <span>prioridade {rule.priority}</span></li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel-card admin-table-panel">
        <h2>Ofertas cadastradas</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Oferta</th>
                <th>Tipo</th>
                <th>Banco</th>
                <th>Status</th>
                <th>Destaque</th>
                <th>Acoes</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => (
                <tr key={offer.id}>
                  <td>{offer.name}</td>
                  <td>{offer.product_type}</td>
                  <td>{offer.bank}</td>
                  <td>{offer.is_active ? 'Ativa' : 'Inativa'}</td>
                  <td>{offer.featured ? 'Sim' : 'Nao'}</td>
                  <td>
                    <div className="admin-action-row">
                      <form action={toggleOfferActiveAction}>
                        <fieldset disabled={!supabaseEnabled}>
                          <input type="hidden" name="id" value={offer.id} />
                          <input type="hidden" name="nextValue" value={offer.is_active ? 'false' : 'true'} />
                          <button className="btn btn-secondary" type="submit">{offer.is_active ? 'Desativar' : 'Ativar'}</button>
                        </fieldset>
                      </form>
                      <form action={toggleOfferFeaturedAction}>
                        <fieldset disabled={!supabaseEnabled}>
                          <input type="hidden" name="id" value={offer.id} />
                          <input type="hidden" name="nextValue" value={offer.featured ? 'false' : 'true'} />
                          <button className="btn btn-secondary" type="submit">{offer.featured ? 'Remover destaque' : 'Destacar'}</button>
                        </fieldset>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
