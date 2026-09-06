import { SITE, POSTS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata = {
  title: 'Golf Cart Blog & Buying Guides',
  description: 'Guides and comparisons to help you choose the right golf cart — electric vs. gas, brand comparisons, and new vs. used.',
  alternates: { canonical: `https://${SITE.domain}/blog/` },
}

export default function BlogIndexPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        <h1>Golf Cart Buying Guides</h1>
        <p>Practical guides to help you choose the right golf cart for your needs.</p>

        <div className="grid" style={{ marginTop: 32 }}>
          {POSTS.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}/`} className="tile">
              <div className="tile-body">
                <h2 style={{ fontSize: '1.15rem' }}>{post.title}</h2>
                <p>{post.excerpt}</p>
                <p className="form-note">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
