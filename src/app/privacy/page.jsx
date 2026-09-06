import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import EncodedMailto from '@/components/EncodedMailto'

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy explaining how ${SITE.name} collects and uses information submitted through our website.`,
  alternates: { canonical: `https://${SITE.domain}/privacy/` },
}

export default function PrivacyPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>Information We Collect</h2>
        <p>
          When you submit our contact or order form, we collect the information you provide,
          such as your name, email address, phone number, shipping address, and order details.
          We do not collect payment card information through this website.
        </p>

        <h2>How We Use Information</h2>
        <p>
          We use the information you submit to respond to your inquiry, confirm and fulfill your
          order, and provide customer support. We do not sell your information to third parties.
        </p>

        <h2>Cart Data</h2>
        <p>
          Items you add to your order before submitting the order form are stored locally in
          your browser (not on our servers) so your selections persist between pages.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Form submissions are processed through Web3Forms, a third-party form-delivery service.
          If our live chat widget is enabled, that provider may also process information you
          share through chat.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <EncodedMailto codes={[...SITE.contactEmail].map((c) => c.charCodeAt(0))} />.
        </p>
      </div>
    </div>
  )
}
