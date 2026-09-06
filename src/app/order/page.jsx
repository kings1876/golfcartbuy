import { SITE } from '@/config/site'
import OrderForm from './OrderForm'

export const metadata = {
  title: 'Order Golf Carts for Sale',
  description: 'Submit an order request for the golf cart(s) you want from Golf Cart Buy — free shipping, crypto discount available.',
  robots: { index: true, follow: true },
  alternates: { canonical: `https://${SITE.domain}/order/` },
}

export default function OrderPage() {
  return (
    <div className="section">
      <div className="container">
        <h1>Order Form</h1>
        <p>
          Fill out the form below to request your order. We&apos;ll confirm details and payment
          instructions by email before finalizing.
        </p>
        <OrderForm />
      </div>
    </div>
  )
}
