import { notFound } from 'next/navigation'
import { SITE, POSTS, PRODUCTS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://${SITE.domain}/blog/${post.slug}/` },
  }
}

export default function BlogPostPage({ params }) {
  const post = POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = PRODUCTS.filter((p) => post.relatedProducts.includes(p.slug))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    url: `https://${SITE.domain}/blog/${post.slug}/`,
  }

  return (
    <div className="section">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: post.title }]} />
        <article style={{ maxWidth: 760 }}>
          <h1>{post.title}</h1>
          <p className="form-note">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {related.length > 0 && (
          <div style={{ marginTop: 48 }}>
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
