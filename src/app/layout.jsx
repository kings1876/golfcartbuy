import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatHub from '@/components/ChatHub'
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
    images: ['/images/og-default.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Golf Carts for Sale`,
    description: SITE.description,
    images: ['/images/og-default.svg'],
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
        <div className="announce">
          Free shipping on every order &middot; {SITE.cryptoDiscountPercent}% off when you pay with crypto &middot; ${SITE.minOrderUsd.toLocaleString()} minimum order
        </div>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <ChatHub />
      </body>
    </html>
  )
}
