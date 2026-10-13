import { notFound } from 'next/navigation'
import { SITE, PRODUCTS, CATEGORIES, SPECS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import SmartImage from '@/components/SmartImage'
import CtaBand from '@/components/CtaBand'
import { TruckIcon, CoinIcon, ShieldIcon, BoltIcon, GaugeIcon, BadgeIcon, WrenchIcon } from '@/components/icons'
import ProductOrderForm from './ProductOrderForm'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.short,
    alternates: { canonical: `https://${SITE.domain}/product/${product.slug}/` },
    openGraph: { images: [`/images/${product.images[0]}`] },
  }
}

// Which rows to feature in the side card, in priority order, and the icon for each.
const KEY_ORDER = ['Power', 'Battery', 'Engine', 'Motor', 'Condition', 'Year', 'Seats', 'Listed speed', 'Colour']
const KEY_ICON = {
  Power: BoltIcon, Battery: BoltIcon, Engine: GaugeIcon, Motor: GaugeIcon, Condition: BadgeIcon,
  Year: BadgeIcon, Seats: WrenchIcon, 'Listed speed': GaugeIcon, Colour: WrenchIcon,
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const category = CATEGORIES.find((c) => c.slug === product.category)
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 3)

  const rows = SPECS[product.slug] || []
  const keyRows = KEY_ORDER.map((k) => rows.find((r) => r[0] === k)).filter(Boolean).slice(0, 4)
  const cryptoPrice = Math.round(product.price * (1 - SITE.cryptoDiscountPercent / 100))
  const tagline = [product.condition, product.brandName].filter(Boolean).join(' · ')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `https://${SITE.domain}/images/${img}`),
    brand: { '@type': 'Brand', name: product.brandName || SITE.name },
    url: `https://${SITE.domain}/product/${product.slug}/`,
    offers: {
      '@type': 'Offer',
      priceCurrency: SITE.currency,
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: `https://${SITE.domain}/product/${product.slug}/`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="product-hero">
        <div className="container product-hero-grid">
          <div className="product-hero-main">
            <Breadcrumbs
              items={[
                { label: 'Shop', href: '/shop/' },
                ...(category ? [{ label: category.name, href: `/shop/${category.slug}/` }] : []),
                { label: product.name },
              ]}
            />
            <span className="hero-pill">{tagline}</span>
            {product.badge && product.badge !== 'none' && product.badge.toLowerCase() !== (product.condition || '').toLowerCase() && (
              <span className="tile-badge" style={{ marginLeft: 8 }}>{product.badge}</span>
            )}
            <h1>{product.name}</h1>
            <p className="product-lead">{product.short}</p>

            <div className="price-card">
              <div className="price-main">
                {product.priceFrom ? <small className="from">From </small> : null}${product.price.toLocaleString()} <small>AUD</small>
              </div>
              <p className="price-note">
                Listed price in Australian dollars. Free shipping {SITE.shipsTo}.
              </p>
              <p className="price-crypto">
                <strong>${cryptoPrice.toLocaleString()} AUD</strong> when you pay with Bitcoin (BTC) or USDT
                — {SITE.cryptoDiscountPercent}% off.
              </p>
              <ProductOrderForm product={product} />
            </div>
            <p className="form-note">
              Questions about this cart? <a href="/contact/">Contact us</a> or read the{' '}
              <a href="/faq/">FAQ</a>.
            </p>
          </div>

          <aside className="product-side">
            <div className="product-frame">
              <SmartImage src={product.images[0]} alt={product.name} priority />
            </div>
            {keyRows.length > 0 && (
              <>
                <p className="side-label">Key specifications</p>
                <ul className="key-specs">
                  {keyRows.map(([label, value]) => {
                    const Icon = KEY_ICON[label] || ShieldIcon
                    return (
                      <li key={label}>
                        <span className="ks-icon" aria-hidden="true"><Icon /></span>
                        <div>
                          <strong>{label}</strong>
                          <span>{value}</span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </>
            )}
          </aside>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container two-col-wide">
          <div>
            <span className="eyebrow">About this cart</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div>
            <h3>Specifications</h3>
            <div className="spec-wrap">
              <table className="spec-table">
                <thead>
                  <tr><th scope="col">Component</th><th scope="col">Specification</th></tr>
                </thead>
                <tbody>
                  {rows.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Price</th>
                    <td>${product.price.toLocaleString()} AUD{product.priceFrom ? ' (starting price)' : ''}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="eyebrow">Ordering</span>
            <h2>What to expect when you order</h2>
          </div>
          <div className="grid grid-3">
            <div className="info-card">
              <span className="trust-icon" aria-hidden="true"><TruckIcon /></span>
              <h3>Free shipping</h3>
              <p>Every order ships free to every Australian state and territory.</p>
            </div>
            <div className="info-card">
              <span className="trust-icon" aria-hidden="true"><CoinIcon /></span>
              <h3>{SITE.cryptoDiscountPercent}% crypto discount</h3>
              <p>Pay with Bitcoin or USDT and save {SITE.cryptoDiscountPercent}% on the listed price.</p>
            </div>
            <div className="info-card">
              <span className="trust-icon" aria-hidden="true"><ShieldIcon /></span>
              <h3>Confirmed before you pay</h3>
              <p>We confirm availability, the final price and payment details by email before any order is final.</p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tint2">
          <div className="container">
            <div className="section-head-row">
              <div className="section-header">
                <span className="eyebrow">Keep browsing</span>
                <h2>Related golf carts</h2>
              </div>
              <a href="/shop/" className="btn btn-outline">View all carts</a>
            </div>
            <div className="grid grid-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  )
}
