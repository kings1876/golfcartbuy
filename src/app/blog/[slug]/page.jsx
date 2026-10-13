import { notFound } from 'next/navigation'
import { SITE, POSTS, PRODUCTS } from '@/config/site'
import PageBar from '@/components/PageBar'
import ProductCard from '@/components/ProductCard'
import CtaBand from '@/components/CtaBand'

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
  const mins = Math.max(1, Math.round(post.body.join(' ').split(/\s+/).length / 200))
  const date = new Date(post.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageBar
        breadcrumbs={[{ label: 'Blog', href: '/blog/' }, { label: post.title }]}
        eyebrow={post.tag}
        title={post.title}
        lead={`${date} · ${mins} min read`}
      />
      <section className="section">
        <div className="container">
          <article className="prose">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-tint2">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">Related carts</span>
              <h2>Golf carts mentioned in this guide</h2>
            </div>
            <div className="grid grid-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  )
}
