import { SITE } from '@/config/site'

export default function Breadcrumbs({ items }) {
  // items: [{ label, href? }] — last item has no href (current page)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${SITE.domain}/` },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.label,
        item: item.href ? `https://${SITE.domain}${item.href}` : undefined,
      })),
    ],
  }

  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <a href="/">Home</a>
        {items.map((item, i) => (
          <span key={i}>
            <span aria-hidden="true">/</span>
            {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
