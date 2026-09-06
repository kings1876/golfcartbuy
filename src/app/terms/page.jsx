import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Terms of Service',
  description: `Terms of service governing use of the ${SITE.name} website and orders placed through it.`,
  alternates: { canonical: `https://${SITE.domain}/terms/` },
}

export default function TermsPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>Orders</h2>
        <p>
          Submitting our order form is a request to purchase, not a confirmed sale. An order is
          only final once we confirm price, availability, and payment details with you by email.
          Our minimum order amount is ${SITE.minOrderUsd.toLocaleString()}.
        </p>

        <h2>Payment</h2>
        <p>
          {SITE.name} currently accepts payment via cryptocurrency (Bitcoin and USDT). Orders
          paid with crypto receive a {SITE.cryptoDiscountPercent}% discount off the listed price.
          Payment instructions are provided after order confirmation.
        </p>

        <h2>Shipping</h2>
        <p>
          See our <a href="/shipping/">Shipping Policy</a> for delivery coverage and timelines.
        </p>

        <h2>Product Descriptions</h2>
        <p>
          We aim to describe every golf cart and accessory accurately. Specifications and
          availability are subject to change; we will confirm exact details before your order is
          finalized.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          {SITE.name} is not liable for indirect or consequential damages arising from the use of
          a purchased golf cart. Golf carts should be operated in accordance with local laws and
          manufacturer guidance.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent through our{' '}
          <a href="/contact/">contact page</a>.
        </p>
      </div>
    </div>
  )
}
