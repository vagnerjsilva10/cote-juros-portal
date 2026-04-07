# Monetization Operations

## Visao geral

A base do portal agora esta preparada para operar como hub de comparadores e afiliados com estas camadas:

- `partners`: cadastro de parceiros, redes afiliadas e fontes de feed/API
- `offers`: catalogo de ofertas financeiras com dados de comparacao e URL final do parceiro
- `offer_clicks`: tracking interno via `/go/[slug]`
- `seo_pages`: paginas SEO programaticas puxadas por filtro
- `recommendation_rules`: regras de recomendacao ligadas ao diagnostico
- `page_views`: page views internos para leitura de CTR por pagina

## Rotas principais

- `/comparadores`
- `/cartoes`
- `/emprestimos`
- `/financiamento`
- `/contas`
- `/<seoSlug>` para SEO pages cadastradas no banco
- `/diagnostico-financeiro`
- `/go/[slug]` para redirecionamento e tracking
- `/admin` para operacao inicial

## Como cadastrar um parceiro

1. Acesse `/admin`
2. Entre com `ADMIN_ACCESS_KEY`
3. Preencha nome, slug, tipo, website e metadados operacionais
4. Informe `api_base_url` ou `feed_url` quando existir
5. Salve o parceiro

## Como cadastrar uma oferta

1. Garanta que o parceiro ja exista
2. No admin, selecione o parceiro
3. Defina `product_type`, `category`, `slug`, `redirect_url` e copy da oferta
4. Ajuste rating, destaque e metadados como `highlights` e `badges`
5. O CTA publico passa a usar `/go/[slug]`

## Como funciona o tracking

1. O frontend nunca expoe diretamente o link do parceiro
2. O clique passa por `/go/[slug]`
3. A rota registra `offer_id`, `source_page`, `referrer`, `user_agent`, `ip_hash` e UTMs
4. Depois disso o usuario e redirecionado para `redirect_url`

## Importacao futura por feed ou API

Arquivos prontos:

- `lib/offers/importers.ts`
- `lib/offers/index.ts`
- `lib/partners/index.ts`

Fluxos previstos:

- `importOffersFromFeed(partner, feedUrl)` para JSON/CSV
- `syncPartnerOffersFromApi(partner, endpoint, headers)` para APIs
- `normalizePartnerOfferData(partner, item)` para padronizar payloads externos

## Setup de banco

1. Criar projeto Supabase
2. Aplicar `supabase/migrations/202604071100_offer_engine.sql`
3. Preencher variaveis do `.env`
4. Ajustar politicas RLS conforme operacao do time

## Observacoes

- Sem Supabase configurado, a aplicacao funciona com seed local para leitura e demonstracao
- O admin entra em modo leitura enquanto as credenciais nao forem configuradas
- O Cote Finance AI continua externo em `https://finance.cotejuros.com.br/`
