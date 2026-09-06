export const metadata = {
  title: 'Thank You',
  robots: { index: false, follow: true },
}

export default function ThankYouContactPage() {
  return (
    <div className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Thanks for reaching out</h1>
        <p>We received your message and will get back to you shortly.</p>
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </div>
  )
}
