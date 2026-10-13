import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatHub from '@/components/ChatHub'
import { ShieldIcon } from '@/components/icons'
import { SITE } from '@/config/site'

export const metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: `${SITE.name} | Golf Carts for Sale`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: `${SITE.name} | Golf Carts for Sale`,
    description: SITE.description,
    url: `https://${SITE.domain}/`,
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Golf Carts for Sale`,
    description: SITE.description,
    images: ['/images/og-default.jpg'],
  },
  alternates: {
    canonical: `https://${SITE.domain}/`,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang={SITE.locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/js/webmcp.js" defer />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <div className="promo">
          <span className="promo-dot" aria-hidden="true" />
          Save {SITE.cryptoDiscountPercent}% on your order when you pay with Bitcoin (BTC) or USDT
        </div>
        <div className="utility">
          <div className="utility-inner container">
            <span className="utility-chip">
              <ShieldIcon aria-hidden="true" /> Specs, condition and inclusions listed on every cart
            </span>
            <span className="utility-right">
              <span>Free shipping {SITE.shipsTo}</span>
              <span>Minimum order ${SITE.minOrder.toLocaleString()} AUD</span>
            </span>
          </div>
        </div>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <ChatHub />
      </body>
    </html>
  )
}
