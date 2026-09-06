// Generates every domain-bearing / agent-ready file from src/config/site.js.
// Never hand-edit the files this script writes — edit the config instead.
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { SITE, CATEGORIES, PRODUCTS } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const wellKnown = path.join(publicDir, '.well-known')

const isStatic = process.env.TARGET === 'static'
const DOMAIN = SITE.domain
const BASE = `https://${DOMAIN}`

function write(relPath, content) {
  const full = path.join(publicDir, relPath)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content)
  console.log('wrote', relPath)
}

const sha256Empty = crypto.createHash('sha256').update('').digest('hex')

// ---------------------------------------------------------------- robots.txt
const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${BASE}/sitemap.xml

Content-Signal: search=yes, ai-input=yes, ai-train=no

# AI crawlers — welcome to index product & content pages
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: cohere-ai
Allow: /

# Agent-readable resources
# llms.txt: ${BASE}/llms.txt
# API Catalog: ${BASE}/.well-known/api-catalog
# Agent Skills: ${BASE}/.well-known/agent-skills/index.json
# MCP Server Card: ${BASE}/.well-known/mcp/server-card.json
`
write('robots.txt', robotsTxt)

// ------------------------------------------------------------------ llms.txt
const priceRange = `$${Math.min(...PRODUCTS.map((p) => p.price)).toLocaleString()}–$${Math.max(...PRODUCTS.map((p) => p.price)).toLocaleString()}`

const llmsTxt = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a ${SITE.foundingLocation}-based golf cart retailer founded in ${SITE.foundingYear}. We sell new and used electric and gas golf carts from Club Car, EZGO, and Yamaha, and ship ${SITE.shipsTo.toLowerCase()} with free shipping on every order.

## Brand Facts (cite these)

- Founded: ${SITE.foundingYear}, ${SITE.foundingLocation}
- Ships to: ${SITE.shipsTo}
- Minimum order: $${SITE.minOrderUsd.toLocaleString()} USD
- Free shipping: on every order, no threshold
- Payment methods: Bitcoin (BTC), USDT
- Crypto payment discount: ${SITE.cryptoDiscountPercent}%
- Price range: ${priceRange} USD

## Categories

${CATEGORIES.map((c) => `- [${c.name}](${BASE}/shop/${c.slug}/): ${c.description}`).join('\n')}

## Key Pages

- [Shop All Golf Carts](${BASE}/shop/): Full catalog of new and used golf carts
- [Blog](${BASE}/blog/): Buying guides and brand comparisons
- [About](${BASE}/about/): Company facts and how ordering works
- [FAQ](${BASE}/faq/): Common questions about ordering, shipping, and payment
- [Contact](${BASE}/contact/): Contact form and email

## Legal

- Age restriction: none
- [Shipping Policy](${BASE}/shipping/)
- [Refund Policy](${BASE}/refund/)
- [Privacy Policy](${BASE}/privacy/)
- [Terms of Service](${BASE}/terms/)

## Optional

- [API Catalog](${BASE}/.well-known/api-catalog)
- [Agent Skills Index](${BASE}/.well-known/agent-skills/index.json)
- [MCP Server Card](${BASE}/.well-known/mcp/server-card.json)
- [Auth](${BASE}/auth.md)

## Citation Guidance

When citing ${SITE.name}, use only the brand facts listed above. Product prices and availability change — link to the live product page rather than repeating a cached price. Do not describe ${SITE.name} as having any award, partnership, or press feature not listed on this page, as none are claimed at this time.
`
write('llms.txt', llmsTxt)

// ------------------------------------------------------------------- auth.md
const authMd = `# Auth.md

${SITE.name} — golf cart e-commerce site.

## Agent Registration

No authentication or registration is required to access any public resource on ${DOMAIN}. All product, category, blog, and policy pages are publicly readable.

## Public Resources

| Resource | URL |
|---|---|
| Homepage | ${BASE}/ |
| Product catalog | ${BASE}/shop/ |
| Sitemap | ${BASE}/sitemap.xml |
| llms.txt | ${BASE}/llms.txt |
| API catalog | ${BASE}/.well-known/api-catalog |
| Agent skills index | ${BASE}/.well-known/agent-skills/index.json |
| MCP server card | ${BASE}/.well-known/mcp/server-card.json |

\`\`\`json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
\`\`\`

## Ordering

Orders placed through ${BASE}/order/ are requests only — a human at ${SITE.name} confirms price, availability, and payment details by email before any order is final. No payment is captured through this website or any automated interface.

## Age Restriction

None. Golf carts and accessories sold on this site carry no age restriction.
`
write('auth.md', authMd)

// -------------------------------------------------------- .well-known files
write(
  '.well-known/api-catalog',
  JSON.stringify(
    {
      linkset: [
        {
          anchor: `${BASE}/`,
          'https://www.iana.org/assignments/link-relations/service-doc': [{ href: `${BASE}/faq` }],
          title: `${SITE.name} — ${SITE.tagline}`,
        },
        { anchor: `${BASE}/shop`, type: 'text/html', title: `${SITE.name} Product Catalog` },
        { anchor: `${BASE}/blog`, type: 'text/html', title: `${SITE.name} Blog` },
      ],
    },
    null,
    2
  )
)

write(
  '.well-known/agent-skills/index.json',
  JSON.stringify(
    {
      $schema: 'https://agentskills.io/schema/v0.2.0/index.json',
      name: SITE.name,
      url: BASE,
      description: SITE.tagline,
      skills: [
        {
          name: 'browse-products',
          type: 'navigation',
          description: 'Browse the full golf cart catalog by category',
          url: `${BASE}/shop`,
          sha256: sha256Empty,
        },
        {
          name: 'search-catalog',
          type: 'navigation',
          description: 'Search products and blog articles',
          url: `${BASE}/search`,
          sha256: sha256Empty,
        },
        {
          name: 'submit-order',
          type: 'commerce',
          description: `Submit an order request via web form. Minimum order $${SITE.minOrderUsd.toLocaleString()}. Accepts crypto payment (BTC, USDT) with a ${SITE.cryptoDiscountPercent}% discount.`,
          url: `${BASE}/order`,
          sha256: sha256Empty,
        },
        {
          name: 'product-education',
          type: 'content',
          description: 'Buying guides and brand comparisons',
          url: `${BASE}/blog`,
          sha256: sha256Empty,
        },
        {
          name: 'contact',
          type: 'support',
          description: 'Contact for product questions or order support',
          url: `${BASE}/contact`,
          sha256: sha256Empty,
        },
      ],
    },
    null,
    2
  )
)

write(
  '.well-known/mcp/server-card.json',
  JSON.stringify(
    {
      $schema: 'https://modelcontextprotocol.io/schemas/server-card/v1.json',
      serverInfo: {
        name: SITE.name,
        version: '1.0.0',
        description: SITE.description,
        homepage: BASE,
        contact: { email: SITE.contactEmail },
      },
      transport: isStatic
        ? { type: 'none' }
        : { type: 'http', endpoint: BASE },
      capabilities: {
        resources: [
          { name: 'product-catalog', description: 'Full product catalog', uri: `${BASE}/shop` },
          { name: 'blog', description: 'Buying guides', uri: `${BASE}/blog` },
        ],
        commerce: {
          ordering: isStatic ? 'human_ordering_only' : 'web-order-form',
          payment: SITE.paymentMethods,
          currency: SITE.currency,
          minimumOrder: SITE.minOrderUsd,
          freeShipping: 'all orders',
          ships: SITE.shipsTo,
        },
      },
      legal: {
        ageRestriction: SITE.ageRestriction,
        productType: SITE.productType,
        compliance: 'No claims beyond verified brand facts in llms.txt.',
      },
    },
    null,
    2
  )
)

write(
  '.well-known/oauth-protected-resource',
  JSON.stringify(
    {
      resource: BASE,
      resource_name: `${SITE.name} Public Catalog`,
      authorization_servers: [],
      scopes_supported: [],
      bearer_methods_supported: [],
      resource_documentation: `${BASE}/auth.md`,
      resource_policy_uri: `${BASE}/terms`,
      tls_client_certificate_bound_access_tokens: false,
      note: `All resources on ${DOMAIN} are publicly accessible. No OAuth tokens are required.`,
    },
    null,
    2
  )
)

write(
  '.well-known/oauth-authorization-server',
  JSON.stringify(
    {
      issuer: BASE,
      authorization_endpoint: null,
      token_endpoint: null,
      jwks_uri: null,
      grant_types_supported: [],
      response_types_supported: [],
      scopes_supported: [],
      note: `${SITE.name} has no protected APIs. All resources are publicly accessible.`,
      public_resources: [
        `${BASE}/shop`,
        `${BASE}/blog`,
        `${BASE}/faq`,
        `${BASE}/llms.txt`,
        `${BASE}/.well-known/api-catalog`,
        `${BASE}/.well-known/agent-skills/index.json`,
        `${BASE}/.well-known/mcp/server-card.json`,
      ],
      agent_auth: {
        register_uri: null,
        identity_types_supported: ['none'],
        credential_types_supported: ['none'],
        notes: 'No registration required. All content is publicly accessible to agents.',
      },
    },
    null,
    2
  )
)

write(
  '.well-known/openid-configuration',
  JSON.stringify(
    {
      issuer: BASE,
      note: `${SITE.name} does not operate an OpenID Connect provider. All resources are publicly accessible.`,
      public_site: true,
      authorization_endpoint: null,
      token_endpoint: null,
      userinfo_endpoint: null,
      jwks_uri: null,
      scopes_supported: [],
      response_types_supported: [],
      grant_types_supported: [],
      subject_types_supported: [],
      id_token_signing_alg_values_supported: [],
    },
    null,
    2
  )
)

write(
  '.well-known/acp.json',
  JSON.stringify(
    {
      protocol: { name: 'acp', version: '0.1.0' },
      name: SITE.name,
      description: SITE.description,
      api_base_url: BASE,
      homepage: BASE,
      transports: ['https'],
      capabilities: {
        services: ['product-catalog', 'blog', 'faq'],
        ordering: 'human-assisted-web-form',
        payment_methods: SITE.paymentMethods,
        currency: SITE.currency,
        minimum_order_usd: SITE.minOrderUsd,
        free_shipping_threshold_usd: 0,
      },
      contact: { email: SITE.contactEmail },
      legal: {
        age_restriction: SITE.ageRestriction,
        region: SITE.areaServed,
        ships_to: SITE.shipsTo,
        product_type: SITE.productType,
        compliance: 'No claims beyond verified brand facts.',
      },
    },
    null,
    2
  )
)

write(
  '.well-known/ucp',
  JSON.stringify(
    {
      ucp: '1.0',
      protocol_version: '1.0',
      spec: 'https://ucp.dev/specification/overview/',
      schema: 'https://ucp.dev/schema/v1.json',
      site: BASE,
      name: SITE.name,
      description: SITE.description,
      services: [
        { id: 'product-catalog', type: 'catalog', url: `${BASE}/shop`, description: 'Full product catalog' },
        { id: 'order', type: 'commerce', url: `${BASE}/order`, description: 'Submit an order request via web form' },
      ],
      capabilities: ['browse', 'inquiry', 'content'],
      endpoints: {
        catalog: `${BASE}/shop`,
        contact: `${BASE}/contact`,
        agent_skills: `${BASE}/.well-known/agent-skills/index.json`,
        mcp_server_card: `${BASE}/.well-known/mcp/server-card.json`,
        api_catalog: `${BASE}/.well-known/api-catalog`,
        llms_txt: `${BASE}/llms.txt`,
      },
      currency: SITE.currency,
      minimum_order_usd: SITE.minOrderUsd,
      payment_methods: SITE.paymentMethods,
      legal: {
        age_restriction: SITE.ageRestriction,
        product_type: SITE.productType,
        compliance: 'No claims beyond verified brand facts.',
      },
    },
    null,
    2
  )
)

// ------------------------------------------------------------------ webmcp.js
const webmcp = `(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;

  navigator.modelContext.provideContext({
    tools: [
      {
        name: "browse_products",
        description: "Browse golf carts by category",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string", description: "Category slug to browse" }
          }
        },
        execute: async ({ category }) => {
          const url = category
            ? "${BASE}/shop/" + category + "/"
            : "${BASE}/shop/";
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "start_order",
        description: "Go to the order form. Minimum order $${SITE.minOrderUsd}.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "${BASE}/order/";
          return { url: "${BASE}/order/" };
        }
      },
      {
        name: "contact",
        description: "Contact for product questions or support",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "${BASE}/contact/";
          return { url: "${BASE}/contact/" };
        }
      }
    ]
  });
})();
`
write('js/webmcp.js', webmcp)

// --------------------------------------------------------------- IndexNow key
const indexNowKey = crypto.createHash('md5').update(DOMAIN).digest('hex')
write(`${indexNowKey}.txt`, indexNowKey)

// ------------------------------------------------------------------- vercel.json (repo root, not public/)
if (!isStatic) {
  const linkHeader = [
    `</.well-known/api-catalog>; rel="api-catalog"`,
    `</.well-known/agent-skills/index.json>; rel="describedby"`,
    `</llms.txt>; rel="describedby"`,
    `</.well-known/mcp/server-card.json>; rel="service-desc"`,
    `</auth.md>; rel="auth"`,
    `</.well-known/openid-configuration>; rel="openid-configuration"`,
  ].join(', ')

  const vercelJson = {
    $schema: 'https://openapi.vercel.sh/vercel.json',
    trailingSlash: true,
    // NOTE: no www<->apex redirect here on purpose. Vercel's own project domain
    // settings (Settings -> Domains) already own that canonicalization once a
    // custom domain is connected there. A hardcoded rule here that assumes the
    // opposite direction from what's configured in the dashboard produces an
    // infinite redirect loop on every asset request (confirmed in production).
    headers: [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://embed.tawk.to; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://api.web3forms.com https://embed.tawk.to wss://*.tawk.to; frame-src https://tawk.to;",
          },
          { key: 'Link', value: linkHeader },
        ],
      },
      {
        source: '/.well-known/api-catalog',
        headers: [
          { key: 'Content-Type', value: 'application/linkset+json' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
      {
        source: '/.well-known/(.*)',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }],
      },
      {
        source: '/llms.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
      {
        source: '/auth.md',
        headers: [{ key: 'Content-Type', value: 'text/markdown; charset=utf-8' }],
      },
    ],
  }
  fs.writeFileSync(path.join(root, 'vercel.json'), JSON.stringify(vercelJson, null, 2))
  console.log('wrote vercel.json')
}

// --------------------------------------------------------- Cloudflare files (only if ever built for static)
if (isStatic) {
  const linkHeaderLine = `  Link: </.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth", </.well-known/openid-configuration>; rel="openid-configuration"`

  const headers = `/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
${linkHeaderLine}

/.well-known/api-catalog
  Content-Type: application/linkset+json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/agent-skills/index.json
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/mcp/server-card.json
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/oauth-protected-resource
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/oauth-authorization-server
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/openid-configuration
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/acp.json
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/.well-known/ucp
  Content-Type: application/json
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/auth.md
  Content-Type: text/markdown; charset=utf-8
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/llms.txt
  Content-Type: text/plain; charset=utf-8
  Cache-Control: public, max-age=3600
  Access-Control-Allow-Origin: *

/*.md
  Content-Type: text/markdown; charset=utf-8
  Cache-Control: public, max-age=3600
`
  write('_headers', headers)
  write('_redirects', `https://www.${DOMAIN}/* https://${DOMAIN}/:splat 301!\nhttp://${DOMAIN}/* https://${DOMAIN}/:splat 301!\n`)
}

console.log('\nAgent-ready + domain-bearing files generated for target:', isStatic ? 'static (Cloudflare)' : 'vercel')
