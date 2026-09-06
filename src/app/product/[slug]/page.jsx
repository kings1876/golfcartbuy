import { notFound } from 'next/navigation'
import { SITE, PRODUCTS, CATEGORIES } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import SmartImage from '@/components/SmartImage'
import ProductOrderForm from './ProductOrderForm'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.short,
    alternates: { canonical: `https://${SITE.domain}/product/${product.slug}/` },
    openGraph: { images: [`/images/${product.images[0]}`] },
  }
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const category = CATEGORIES.find((c) => c.slug === product.category)
  const related = PRODUCTS.filter(
    (p) => p.slug !== product.slug && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 4)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((img) => `https://${SITE.domain}/images/${img}`),
    brand: { '@type': 'Brand', name: product.brand || SITE.name },
    url: `https://${SITE.domain}/product/${product.slug}/`,
    offers: {
      '@type': 'Offer',
      priceCurrency: SITE.currency,
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: `https://${SITE.domain}/product/${product.slug}/`,
    },
  }

  return (
    <div className="section">
      <div className="container">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Breadcrumbs
          items={[
            { label: 'Shop', href: '/shop/' },
            ...(category ? [{ label: category.name, href: `/shop/${category.slug}/` }] : []),
            { label: product.name },
          ]}
        />

        <div className="product-grid">
          <div>
            <div className="product-frame">
              <SmartImage src={product.images[0]} alt={product.name} priority />
            </div>
          </div>
          <div>
            {product.badge && product.badge !== 'none' && (
              <span className="tile-badge">{product.badge}</span>
            )}
            <h1>{product.name}</h1>
            <div className="product-price">${product.price.toLocaleString()}</div>
            <p>{product.description}</p>
            <ProductOrderForm product={product} />
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <h2>Related Golf Carts</h2>
            <div className="grid">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
