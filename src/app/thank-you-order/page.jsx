export const metadata = {
  title: 'Order Received',
  robots: { index: false, follow: true },
}

export default function ThankYouOrderPage() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Thanks — your order request was received</h1>
        <p>We&apos;ll confirm availability, pricing, and payment instructions by email shortly.</p>
        <a href="/shop/" className="btn btn-primary">Continue Shopping</a>
      </div>
    </div>
  )
}
