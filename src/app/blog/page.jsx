import { SITE, POSTS } from '@/config/site'
import PageBar from '@/components/PageBar'
import CtaBand from '@/components/CtaBand'

export const metadata = {
  title: 'Golf Cart Blog & Buying Guides',
  description: 'Guides and comparisons to help you choose the right golf cart — electric vs. petrol, brand comparisons, and new vs. used.',
  alternates: { canonical: `https://${SITE.domain}/blog/` },
}

const readMins = (post) => Math.max(1, Math.round(post.body.join(' ').split(/\s+/).length / 200))
const fmt = (d) => new Date(d).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })

export default function BlogIndexPage() {
  return (
    <>
      <PageBar
        breadcrumbs={[{ label: 'Blog' }]}
        title="Golf Cart Buying Guides"
        lead="Plain-language guides to help you choose the right golf cart for your needs."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {POSTS.map((post) => (
              <a key={post.slug} href={`/blog/${post.slug}/`} className="tile">
                <div className="tile-body">
                  <div className="guide-meta">
                    <span className="guide-tag">{post.tag}</span>
                    <span className="guide-read">{readMins(post)} min read</span>
                  </div>
                  <h2 style={{ fontSize: '1.2rem' }}>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div className="card-foot">
                    <span className="guide-read">{fmt(post.date)}</span>
                    <span className="guide-link">Read guide &rarr;</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
