import { SITE, ACTIVE_CATEGORIES, PRODUCTS, FAQS } from '@/config/site'
import CategoryTile from '@/components/CategoryTile'
import ProductCard from '@/components/ProductCard'
import { TruckIcon, BadgeIcon, WrenchIcon, CoinIcon } from '@/components/icons'

export const metadata = {
  title: 'Golf Carts for Sale | E-Z-GO, Club Car & Yamaha',
  description:
    'Shop new E-Z-GO and used Club Car and Yamaha golf carts for sale from Golf Cart Buy, shipped free Australia-wide.',
  alternates: { canonical: `https://${SITE.domain}/` },
}

const featured = PRODUCTS.slice(0, 8)

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <div className="container hero-content">
          <h1>Golf Carts for Sale — New &amp; Used, Shipped Australia-Wide</h1>
          <p>
            {SITE.name} sells golf carts in Australia and was founded in{' '}
            {SITE.foundingYear}, offering new E-Z-GO and used Club Car and Yamaha electric and petrol golf carts
            with free shipping {SITE.shipsTo}.
          </p>
          <div className="hero-ctas">
            <a href="/shop/" className="btn btn-primary">Shop Golf Carts</a>
            <a href="/order/" className="btn btn-secondary">Start an Order</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trust-bar">
            <div className="trust-item">
              <div className="trust-icon" aria-hidden="true"><TruckIcon /></div>
              <strong>Free Shipping</strong>
              <span>On every order, Australia-wide</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon" aria-hidden="true"><BadgeIcon /></div>
              <strong>E-Z-GO, Club Car &amp; Yamaha</strong>
              <span>Electric and petrol carts</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon" aria-hidden="true"><WrenchIcon /></div>
              <strong>New &amp; Used</strong>
              <span>Specs, condition and inclusions listed</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon" aria-hidden="true"><CoinIcon /></div>
              <strong>Crypto Discount</strong>
              <span>{SITE.cryptoDiscountPercent}% off with BTC/USDT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Shop by Category</span>
            <h2>Find the Right Golf Cart</h2>
            <p>Browse our current golf carts.</p>
          </div>
          <div className="grid grid-3">
            {ACTIVE_CATEGORIES.map((c) => (
              <CategoryTile key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Featured Inventory</span>
            <h2>Popular Golf Carts for Sale</h2>
            <p>Our current golf cart inventory.</p>
          </div>
          <div className="grid">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint2">
        <div className="container two-col">
          <div>
            <span className="eyebrow">About {SITE.name}</span>
            <h2>Golf Carts Delivered Australia-Wide, Since {SITE.foundingYear}</h2>
            <p>
              {SITE.name} sells new E-Z-GO and used Club Car and Yamaha
              electric and petrol golf carts. We ship {SITE.shipsTo}{' '}
              with no shipping charge, accept crypto payment with a {SITE.cryptoDiscountPercent}%
              discount, and require a ${SITE.minOrder.toLocaleString()} minimum order.
            </p>
            <a href="/about/" className="btn btn-outline">Learn More About Us</a>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <h3>Why Buy From {SITE.name}?</h3>
            <ul>
              <li>New E-Z-GO and used Club Car and Yamaha golf carts, with specs and details listed</li>
              <li>Free shipping on every order, Australia-wide</li>
              <li>{SITE.cryptoDiscountPercent}% discount when you pay with crypto</li>
              <li>Electric and petrol options</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {FAQS.slice(0, 5).map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p style={{ marginTop: 10 }}>{f.a}</p>
              </details>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <a href="/faq/" className="btn btn-outline">View All FAQs</a>
          </div>
        </div>
      </section>
    </>
  )
}
