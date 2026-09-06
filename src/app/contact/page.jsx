import { SITE } from '@/config/site'
import EncodedMailto from '@/components/EncodedMailto'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact Us',
  description: `Contact ${SITE.name} with questions about golf carts for sale, orders, or shipping.`,
  alternates: { canonical: `https://${SITE.domain}/contact/` },
}

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container two-col">
        <div>
          <h1>Contact Us</h1>
          <p>
            Have a question about a golf cart, an order, or shipping? Send us a message and
            we&apos;ll get back to you.
          </p>
          <p>
            Email: <EncodedMailto codes={[...SITE.contactEmail].map((c) => c.charCodeAt(0))} />
          </p>
          <p>Location: {SITE.foundingLocation}. We ship {SITE.shipsTo.toLowerCase()}.</p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
