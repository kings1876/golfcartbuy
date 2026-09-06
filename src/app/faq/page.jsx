import { SITE, FAQS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'FAQ — Golf Cart for Sale Questions',
  description: 'Frequently asked questions about buying golf carts, shipping, payment, and minimum order amounts at Golf Cart Buy.',
  alternates: { canonical: `https://${SITE.domain}/faq/` },
}

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="section">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
        <h1>Frequently Asked Questions</h1>
        <div style={{ maxWidth: 760, marginTop: 24 }}>
          {FAQS.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p style={{ marginTop: 10 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  )
}
