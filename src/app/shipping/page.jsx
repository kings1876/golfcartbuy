import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Shipping Policy',
  description: `Shipping information for orders placed with ${SITE.name}, including our free shipping policy and delivery coverage.`,
  alternates: { canonical: `https://${SITE.domain}/shipping/` },
}

export default function ShippingPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Shipping Policy' }]} />
        <h1>Shipping Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>Free Shipping</h2>
        <p>
          {SITE.name} provides free shipping on every order, ships {SITE.shipsTo.toLowerCase()},
          with no minimum order size required to qualify beyond our standard{' '}
          ${SITE.minOrderUsd.toLocaleString()} minimum order amount.
        </p>

        <h2>Delivery Area</h2>
        <p>We currently ship {SITE.shipsTo.toLowerCase()}.</p>

        <h2>Order Confirmation &amp; Delivery Timelines</h2>
        <p>
          After you submit an order request, we confirm availability, final pricing, and an
          estimated delivery window by email before your order is finalized. Delivery timelines
          vary by cart model, current inventory, and destination.
        </p>

        <h2>Damaged or Missing Items</h2>
        <p>
          If your golf cart or accessory order arrives damaged or with items missing, contact us
          within 48 hours of delivery so we can help resolve it.
        </p>

        <p>
          Questions about shipping? <a href="/contact/">Contact us</a>.
        </p>
      </div>
    </div>
  )
}
