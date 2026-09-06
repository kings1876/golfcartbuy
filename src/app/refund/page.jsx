import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Refund Policy',
  description: `Refund and cancellation policy for orders placed with ${SITE.name}.`,
  alternates: { canonical: `https://${SITE.domain}/refund/` },
}

export default function RefundPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Refund Policy' }]} />
        <h1>Refund Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>Order Confirmation</h2>
        <p>
          No order submitted through our order form is final until we confirm it with you by
          email, including price and payment details. You may cancel or change your order at no
          cost any time before that confirmation.
        </p>

        <h2>Cancellations After Payment</h2>
        <p>
          Because {SITE.name} accepts cryptocurrency payment, cancellations requested after
          payment has been sent are handled on a case-by-case basis. Contact us as soon as
          possible if you need to cancel or change a paid order — the earlier you reach out
          relative to shipment, the more options we have.
        </p>

        <h2>Damaged or Incorrect Items</h2>
        <p>
          If your order arrives damaged, defective, or different from what you ordered, contact
          us within 48 hours of delivery with photos of the item, and we will work with you on a
          repair, replacement, or refund as appropriate.
        </p>

        <p>
          Questions about a refund or cancellation? <a href="/contact/">Contact us</a>.
        </p>
      </div>
    </div>
  )
}
