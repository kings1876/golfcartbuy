import { SITE, CATEGORIES, PRODUCTS, FAQS } from '@/config/site'
import CategoryTile from '@/components/CategoryTile'
import ProductCard from '@/components/ProductCard'
import { TruckIcon, BadgeIcon, WrenchIcon, CoinIcon } from '@/components/icons'

export const metadata = {
  title: 'Golf Carts for Sale | New & Used Club Car, EZGO, Yamaha',
  description:
    'Shop golf carts for sale from Golf Cart Buy — new and used electric and gas golf carts from Club Car, EZGO, and Yamaha, shipped free nationwide.',
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
      foundingLocation: SITE.foundingLocation,
      address: { '@type': 'PostalAddress', addressCountry: SITE.address.country },
      areaServed: SITE.areaServed,
      numberOfItems: PRODUCTS.length,
      knowsAbout: ['Electric golf carts', 'Gas golf carts', 'Club Car', 'EZGO', 'Yamaha', 'Golf cart accessories'],
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
          <h1>Golf Carts for Sale — New &amp; Used, Shipped Nationwide</h1>
          <p>
            {SITE.name} is a {SITE.foundingLocation}-based golf cart retailer founded in{' '}
            {SITE.foundingYear}, offering new and used electric and gas golf carts from Club Car,
            EZGO, and Yamaha with free shipping {SITE.shipsTo.toLowerCase()}.
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
              <span>On every order, nationwide</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon" aria-hidden="true"><BadgeIcon /></div>
              <strong>Trusted Brands</strong>
              <span>Club Car, EZGO, Yamaha</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon" aria-hidden="true"><WrenchIcon /></div>
              <strong>New &amp; Used</strong>
              <span>Inspected, refurbished options</span>
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
            <p>Browse new and used golf carts, or shop directly by brand.</p>
          </div>
          <div className="grid">
            {CATEGORIES.map((c) => (
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
            <p>A sample of our current new and used golf cart inventory.</p>
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
            <h2>A US-Based Golf Cart Retailer, Founded {SITE.foundingYear}</h2>
            <p>
              {SITE.name} is a {SITE.foundingLocation}-based retailer specializing in new and used
              electric and gas golf carts from Club Car, EZGO, and Yamaha. We ship {SITE.shipsTo.toLowerCase()}{' '}
              with no shipping charge, accept crypto payment with a {SITE.cryptoDiscountPercent}%
              discount, and require a ${SITE.minOrderUsd.toLocaleString()} minimum order.
            </p>
            <a href="/about/" className="btn btn-outline">Learn More About Us</a>
          </div>
          <div className="card" style={{ padding: 24 }}>
            <h3>Why Buy From {SITE.name}?</h3>
            <ul>
              <li>New and used golf carts from Club Car, EZGO, and Yamaha</li>
              <li>Free shipping on every order, nationwide</li>
              <li>{SITE.cryptoDiscountPercent}% discount when you pay with crypto</li>
              <li>Electric and gas options across every category</li>
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
