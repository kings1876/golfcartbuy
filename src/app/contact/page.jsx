import { SITE } from '@/config/site'
import EncodedMailto from '@/components/EncodedMailto'
import PageBar from '@/components/PageBar'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact Us',
  description: `Contact ${SITE.name} with questions about golf carts for sale, orders, or shipping.`,
  alternates: { canonical: `https://${SITE.domain}/contact/` },
}

export default function ContactPage() {
  return (
    <>
      <PageBar
        breadcrumbs={[{ label: 'Contact' }]}
        title="Contact Us"
        lead="Have a question about a golf cart, an order or shipping? Send us a message and we'll get back to you."
      />
      <section className="section">
        <div className="container two-col-wide">
          <div className="prose-side">
            <div className="info-card">
              <h3>Email</h3>
              <p>
                <EncodedMailto codes={[...SITE.contactEmail].map((c) => c.charCodeAt(0))} />
              </p>
            </div>
            <div className="info-card">
              <h3>Delivery</h3>
              <p>We ship {SITE.shipsTo}, and shipping is free on every order.</p>
            </div>
            <div className="info-card">
              <h3>Before you write</h3>
              <p>
                Many questions are answered on our <a href="/faq/">FAQ page</a>, including
                minimum order, payment and the crypto discount.
              </p>
            </div>
          </div>
          <div className="card form-card">
            <h2 style={{ fontSize: '1.5rem' }}>Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
