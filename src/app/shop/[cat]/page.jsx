import { notFound } from 'next/navigation'
import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }))
}

export function generateMetadata({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.cat)
  if (!category) return {}
  return {
    title: `${category.name} for Sale`,
    description: category.description,
    alternates: { canonical: `https://${SITE.domain}/shop/${category.slug}/` },
  }
}

export default function CategoryPage({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.cat)
  if (!category) notFound()

  const products = PRODUCTS.filter(
    (p) => p.category === category.slug || p.brand === category.slug
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} for Sale`,
    description: category.description,
    url: `https://${SITE.domain}/shop/${category.slug}/`,
  }

  return (
    <div className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Breadcrumbs items={[{ label: 'Shop', href: '/shop/' }, { label: category.name }]} />
        <h1>{category.name} for Sale</h1>
        <p>{category.description}</p>

        {products.length > 0 ? (
          <div className="grid" style={{ marginTop: 32 }}>
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <p style={{ marginTop: 32 }}>
            New inventory in this category is added regularly.{' '}
            <a href="/contact/">Contact us</a> for current availability.
          </p>
        )}
      </div>
    </div>
  )
}
