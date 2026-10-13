import { notFound } from 'next/navigation'
import { SITE, CATEGORIES, ACTIVE_CATEGORIES, PRODUCTS } from '@/config/site'
import PageBar from '@/components/PageBar'
import ShopBrowser from '@/components/ShopBrowser'
import CtaBand from '@/components/CtaBand'

export function generateStaticParams() {
  return ACTIVE_CATEGORIES.map((c) => ({ cat: c.slug }))
}

// Categories with no products yet are not routable.
export const dynamicParams = false

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageBar
        breadcrumbs={[{ label: 'Shop', href: '/shop/' }, { label: category.name }]}
        title={`${category.name} for Sale`}
        lead={category.description}
      />
      <section className="section">
        <div className="container">
          <ShopBrowser products={products} categories={ACTIVE_CATEGORIES} activeSlug={category.slug} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
