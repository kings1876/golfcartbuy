import { SITE } from '@/config/site'
import EncodedMailto from './EncodedMailto'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>{SITE.name}</h4>
          <p style={{ color: '#dcecdf', maxWidth: 280 }}>{SITE.tagline}</p>
          <p style={{ color: '#dcecdf' }}>
            <EncodedMailto codes={[...SITE.contactEmail].map((c) => c.charCodeAt(0))} />
          </p>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="/shop/">All Golf Carts</a></li>
            <li><a href="/shop/new-golf-carts/">New Golf Carts</a></li>
            <li><a href="/shop/used-golf-carts/">Used Golf Carts</a></li>
            <li><a href="/shop/accessories-parts/">Accessories &amp; Parts</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/contact/">Contact</a></li>
            <li><a href="/faq/">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/shipping/">Shipping Policy</a></li>
            <li><a href="/refund/">Refund Policy</a></li>
            <li><a href="/privacy/">Privacy Policy</a></li>
            <li><a href="/terms/">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
        <span>Ships {SITE.shipsTo}.</span>
      </div>
    </footer>
  )
}
