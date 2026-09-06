import { SITE, CATEGORIES } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'About Golf Cart Buy',
  description: `${SITE.name} is a US-based retailer of new and used golf carts, founded in ${SITE.foundingYear}. Learn about how we operate, what we sell, and where we ship.`,
  alternates: { canonical: `https://${SITE.domain}/about/` },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: `About ${SITE.name}`,
  url: `https://${SITE.domain}/about/`,
  mainEntity: {
    '@type': 'Organization',
    name: SITE.name,
    foundingDate: String(SITE.foundingYear),
    foundingLocation: SITE.foundingLocation,
    areaServed: SITE.areaServed,
  },
}

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ label: 'About' }]} />
        <h1>About {SITE.name}</h1>
        <p>
          {SITE.name} is a {SITE.foundingLocation}-based retailer of new and used golf carts,
          founded in {SITE.foundingYear}. We focus on one thing: making it straightforward to
          find and order a golf cart online, whether you want a brand-new electric cart or a
          refurbished used gas cart, and have it shipped to your door.
        </p>

        <h2>What We Sell</h2>
        <p>
          We carry new and used golf carts across the two most common power types — electric and
          gas — from three of the most established manufacturers in the industry: Club Car, EZGO,
          and Yamaha. Our current categories include:
        </p>
        <ul>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <strong>{c.name}</strong> — {c.description}
            </li>
          ))}
        </ul>
        <p>
          Whether you are searching for club car golf carts for sale, an electric golf car for a
          gated community, or a used golf cart at a lower price point, our shop is organized so
          you can browse by category or go straight to a specific brand.
        </p>

        <h2>New vs. Used</h2>
        <p>
          New golf carts ship unused and give you the longest possible service life before any
          major component needs replacing. Used golf carts sold through {SITE.name} are inspected
          and refurbished before listing, which lets us offer a lower price point for buyers who
          don&apos;t need the latest model year or who want a second or backup cart.
        </p>

        <h2>Electric vs. Gas</h2>
        <p>
          Electric golf cars are quieter and generally cheaper to run day to day, since charging
          costs less than fuel and there is no engine oil to change. Gas golf carts offer longer
          range between refuels and are often preferred for larger properties, farms, and
          job sites. We stock both, so the choice comes down to how you plan to use the cart
          rather than what happens to be available.
        </p>

        <h2>How Ordering Works</h2>
        <p>
          {SITE.name} uses a simple order-form checkout: browse the shop, add the cart (or carts)
          you want to your order, and submit the order form with your shipping details. We
          confirm your order and payment instructions by email before anything is finalized —
          there is no automated payment capture on the site itself.
        </p>
        <p>
          Our minimum order amount is ${SITE.minOrderUsd.toLocaleString()}. We currently accept
          payment in cryptocurrency (Bitcoin and USDT), and orders paid with crypto receive a{' '}
          {SITE.cryptoDiscountPercent}% discount off the listed price.
        </p>

        <h2>Where We Ship</h2>
        <p>
          {SITE.name} ships {SITE.shipsTo.toLowerCase()}, with free shipping included on every
          order regardless of order size. This applies to both new and used golf carts and to
          accessories and parts ordered on their own.
        </p>

        <h2>Questions?</h2>
        <p>
          If you have a question about a specific model, shipping timelines, or how the order
          process works, visit our <a href="/faq/">FAQ page</a> or{' '}
          <a href="/contact/">get in touch</a> — we&apos;re happy to help before you order.
        </p>
      </div>
    </div>
  )
}
