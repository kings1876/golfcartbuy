import { SITE, ACTIVE_CATEGORIES } from '@/config/site'
import EncodedMailto from './EncodedMailto'
import { TruckIcon, CoinIcon, WrenchIcon, ShieldIcon } from './icons'

const SERVICE_LINKS = [
  { href: '/about/', label: 'About us' },
  { href: '/blog/', label: 'Buying guides' },
  { href: '/faq/', label: 'Frequently asked questions' },
  { href: '/contact/', label: 'Contact' },
  { href: '/order/', label: 'Order form' },
  { href: '/shipping/', label: 'Shipping policy' },
  { href: '/refund/', label: 'Refund policy' },
  { href: '/privacy/', label: 'Privacy policy' },
  { href: '/terms/', label: 'Terms of service' },
]

const SEO_LINKS = [
  { href: '/shop/', label: 'Golf carts for sale' },
  { href: '/shop/used-golf-carts/', label: 'Used golf carts for sale' },
  { href: '/shop/new-golf-carts/', label: 'New golf carts for sale' },
  { href: '/shop/club-car/', label: 'Club Car golf carts for sale' },
  { href: '/shop/ezgo/', label: 'E-Z-GO golf carts for sale' },
  { href: '/shop/yamaha/', label: 'Yamaha golf carts for sale' },
  { href: '/blog/electric-vs-gas-golf-carts/', label: 'Electric vs petrol golf carts' },
  { href: '/blog/new-vs-used-golf-carts/', label: 'New vs used golf carts' },
  { href: '/blog/golf-cart-buying-guide/', label: 'Golf cart buying guide' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-strip">
        <div className="container footer-strip-grid">
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><TruckIcon /></div>
            <div><strong>Free shipping</strong><span>On every order, {SITE.shipsTo}</span></div>
          </div>
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><CoinIcon /></div>
            <div><strong>Pay with crypto</strong><span>Save {SITE.cryptoDiscountPercent}% with Bitcoin or USDT</span></div>
          </div>
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><WrenchIcon /></div>
            <div><strong>Details listed</strong><span>Specs, condition and inclusions on every cart</span></div>
          </div>
          <div className="strip-item">
            <div className="trust-icon" aria-hidden="true"><ShieldIcon /></div>
            <div><strong>Confirmed before you pay</strong><span>We confirm every order by email first</span></div>
          </div>
        </div>
      </div>

      <div className="container footer-main">
        <div className="footer-brand">
          <a href="/" className="brand" aria-label={`${SITE.name} home`}>
            <span className="brand-mark" aria-hidden="true">GC</span>
            <span className="brand-text">
              <span className="brand-name">{SITE.name}</span>
              <span className="brand-sub">New &amp; used golf carts · Australia-wide</span>
            </span>
          </a>
          <p>
            {SITE.name} sells new and used golf carts in Australia and was founded in{' '}
            {SITE.foundingYear}. Every listing shows its specifications, and every order is
            confirmed by email before payment.
          </p>
          <dl className="footer-facts">
            <div><dt>Delivery</dt><dd>{SITE.shipsTo}</dd></div>
            <div><dt>Minimum order</dt><dd>${SITE.minOrder.toLocaleString()} AUD</dd></div>
            <div><dt>Payment</dt><dd>Bitcoin (BTC) and USDT</dd></div>
          </dl>
        </div>

        <div className="footer-col">
          <h4>Shop by category</h4>
          <ul>
            <li><a href="/shop/">All golf carts</a></li>
            {ACTIVE_CATEGORIES.map((c) => (
              <li key={c.slug}><a href={`/shop/${c.slug}/`}>{c.name}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Customer services</h4>
          <ul>
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><EncodedMailto codes={[...SITE.contactEmail].map((c) => c.charCodeAt(0))} /></li>
            <li><a href="/contact/">Send us a message</a></li>
            <li><a href="/order/">Start an order</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-seo">
        <div className="container">
          <h4>Popular searches</h4>
          <ul>
            {SEO_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>All prices in Australian dollars (AUD).</span>
        </div>
      </div>
    </footer>
  )
}
