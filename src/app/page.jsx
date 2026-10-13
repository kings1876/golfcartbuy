import { SITE, ACTIVE_CATEGORIES, PRODUCTS, FAQS, POSTS } from '@/config/site'
import CategoryTile from '@/components/CategoryTile'
import ProductCard from '@/components/ProductCard'
import SmartImage from '@/components/SmartImage'
import { TruckIcon, BadgeIcon, WrenchIcon, CoinIcon } from '@/components/icons'

export const metadata = {
  title: 'Golf Carts for Sale | E-Z-GO, Club Car & Yamaha',
  description:
    'Shop new E-Z-GO and used Club Car and Yamaha golf carts for sale from Golf Cart Buy, shipped free Australia-wide.',
  alternates: { canonical: `https://${SITE.domain}/` },
}

const byBrand = (b) => PRODUCTS.filter((p) => p.brand === b)
const featured = [...byBrand('ezgo').slice(0, 2), ...byBrand('club-car').slice(0, 3), ...byBrand('yamaha').slice(0, 3)]

export default function HomePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': ['Store', 'Organization'],
      name: SITE.name,
      description: SITE.description,
      url: `https://${SITE.domain}/`,
      foundingDate: String(SITE.foundingYear),
      address: { '@type': 'PostalAddress', addressCountry: SITE.address.country },
      areaServed: SITE.areaServed,
      numberOfItems: PRODUCTS.length,
      knowsAbout: ['Electric golf carts', 'Petrol golf carts', 'E-Z-GO', 'Club Car', 'Yamaha', 'Used golf carts'],
      priceRange: '$$',
      makesOffer: {
        '@type': 'AggregateOffer',
        priceCurrency: SITE.currency,
        lowPrice: Math.min(...PRODUCTS.map((p) => p.price)),
        highPrice: Math.max(...PRODUCTS.map((p) => p.price)),
        offerCount: PRODUCTS.length,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: `https://${SITE.domain}/`,
      potentialAction: {
        '@type': 'SearchAction',
        target: `https://${SITE.domain}/search/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const flagship = PRODUCTS.find((p) => p.slug === 'e-z-go-rxv-fleet') || PRODUCTS[0]
  const readMins = (post) => Math.max(1, Math.round(post.body.join(' ').split(/\s+/).length / 200))
  const fmtDate = (d) => new Date(d).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <div className="hero-media">
          <img
            src="/images/yamaha-drive2-quietech-efi-2024-evergreen.webp"
            alt="Green Yamaha golf cart parked on a golf course"
            width="1100"
            height="874"
            fetchPriority="high"
          />
        </div>
        <div className="container hero-content">
          <span className="hero-pill">Free shipping {SITE.shipsTo}</span>
          <h1>Golf Carts for Sale — New &amp; Used, Shipped Australia-Wide</h1>
          <p className="hero-sub">
            <strong>New E-Z-GO</strong>, used Club Car and Yamaha — electric and petrol.
          </p>
          <p>
            {SITE.name} sells golf carts in Australia and was founded in {SITE.foundingYear}. Every
            listing shows its specifications, and used carts show their year, condition and what is
            included. Pay with crypto and save {SITE.cryptoDiscountPercent}%.
          </p>
          <div className="hero-ctas">
            <a href="/shop/" className="btn btn-primary">Shop Golf Carts</a>
            <a href="/order/" className="btn btn-outline">Start an Order</a>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Why buy from us">
        <div className="container strip-grid">
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><TruckIcon /></div>
            <div><strong>Free Shipping</strong><span>On every order, Australia-wide</span></div>
          </div>
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><BadgeIcon /></div>
            <div><strong>E-Z-GO, Club Car &amp; Yamaha</strong><span>Electric and petrol carts</span></div>
          </div>
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><WrenchIcon /></div>
            <div><strong>New &amp; Used</strong><span>Specs and condition listed</span></div>
          </div>
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><CoinIcon /></div>
            <div><strong>Crypto Discount</strong><span>{SITE.cryptoDiscountPercent}% off with BTC / USDT</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div className="section-header">
              <span className="eyebrow">Shop by category</span>
              <h2>Find the Right Golf Cart</h2>
              <p>Browse new and used golf carts by condition or by brand.</p>
            </div>
            <div className="stats">
              <div className="stat"><strong>{PRODUCTS.length}</strong><span>Carts listed</span></div>
              <div className="stat"><strong>$0</strong><span>Shipping</span></div>
              <div className="stat"><strong>{SITE.cryptoDiscountPercent}%</strong><span>Crypto discount</span></div>
            </div>
          </div>
          <div className="grid grid-3">
            {ACTIVE_CATEGORIES.map((c) => (
              <CategoryTile key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="feature">
            <div className="feature-media">
              <SmartImage src={flagship.images[0]} alt={flagship.name} />
            </div>
            <div>
              <span className="eyebrow">Featured cart</span>
              {flagship.badge && flagship.badge !== 'none' && (
                <span className="tile-badge" style={{ marginLeft: 10 }}>{flagship.badge}</span>
              )}
              <h2>{flagship.name}</h2>
              <p>{flagship.short}</p>
              <div className="feature-price">
                ${flagship.price.toLocaleString()}<small>AUD</small>
              </div>
              <div className="feature-ctas">
                <a href={`/product/${flagship.slug}/`} className="btn btn-primary">View details</a>
                <a href="/order/" className="btn btn-outline">Start an order</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <div className="section-header">
              <span className="eyebrow">Current inventory</span>
              <h2>Golf Carts for Sale</h2>
              <p>A selection of our current listings.</p>
            </div>
            <a href="/shop/" className="btn btn-outline">View all {PRODUCTS.length} carts</a>
          </div>
          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint2">
        <div className="container">
          <div className="section-head-row">
            <div className="section-header">
              <span className="eyebrow">Buyer guides</span>
              <h2>Latest Golf Cart Guides</h2>
              <p>Plain-language advice on electric vs petrol, new vs used and choosing a brand.</p>
            </div>
            <a href="/blog/" className="btn btn-outline">View all guides</a>
          </div>
          <div className="grid grid-3">
            {POSTS.slice(0, 3).map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}/`} className="tile">
                <div className="tile-body">
                  <div className="guide-meta">
                    <span className="guide-tag">{post.tag}</span>
                    <span className="guide-read">{readMins(post)} min read</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="guide-link">Read guide &rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">About {SITE.name}</span>
            <h2>Golf Carts Delivered Australia-Wide, Since {SITE.foundingYear}</h2>
            <p>
              {SITE.name} sells new E-Z-GO and used Club Car and Yamaha electric and petrol golf
              carts. We ship {SITE.shipsTo} with no shipping charge, accept crypto payment with a{' '}
              {SITE.cryptoDiscountPercent}% discount, and require a $
              {SITE.minOrder.toLocaleString()} minimum order.
            </p>
            <a href="/about/" className="btn btn-outline">Learn more about us</a>
          </div>
          <div className="card" style={{ padding: 28 }}>
            <h3>Why buy from {SITE.name}?</h3>
            <ul>
              <li>New E-Z-GO and used Club Car and Yamaha golf carts, with specs and details listed</li>
              <li>Free shipping on every order, Australia-wide</li>
              <li>{SITE.cryptoDiscountPercent}% discount when you pay with crypto</li>
              <li>Electric and petrol options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers on ordering, shipping and payment.</p>
          </div>
          <div className="faq-list">
            {FAQS.slice(0, 5).map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <a href="/faq/" className="btn btn-outline">View all FAQs</a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <span className="eyebrow">Ready to order?</span>
          <h2>Order direct, delivered Australia-wide</h2>
          <p>
            Choose your cart and submit the order form. We confirm availability, pricing and
            payment details by email before anything is final. Free shipping on every order.
          </p>
          <div className="hero-ctas">
            <a href="/order/" className="btn btn-primary">Start an Order</a>
            <a href="/contact/" className="btn btn-secondary">Contact us</a>
          </div>
        </div>
      </section>
    </>
  )
}
