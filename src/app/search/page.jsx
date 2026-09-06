'use client'

import { useMemo, useState } from 'react'
import { PRODUCTS, POSTS } from '@/config/site'
import ProductCard from '@/components/ProductCard'

export default function SearchPage() {
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return { products: [], posts: [] }
    return {
      products: PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.short.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          (p.brand || '').toLowerCase().includes(term)
      ),
      posts: POSTS.filter(
        (p) => p.title.toLowerCase().includes(term) || p.excerpt.toLowerCase().includes(term)
      ),
    }
  }, [q])

  return (
    <div className="section">
      <div className="container">
        <h1>Search</h1>
        <div className="form-row" style={{ maxWidth: 480 }}>
          <label htmlFor="q">Search products and articles</label>
          <input
            id="q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="e.g. Club Car, electric, used"
          />
        </div>

        {q.trim() && (
          <div style={{ marginTop: 32 }}>
            <h2>Products ({results.products.length})</h2>
            {results.products.length > 0 ? (
              <div className="grid">
                {results.products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            ) : (
              <p>No products matched.</p>
            )}

            <h2 style={{ marginTop: 32 }}>Articles ({results.posts.length})</h2>
            {results.posts.length > 0 ? (
              <ul>
                {results.posts.map((p) => (
                  <li key={p.slug}>
                    <a href={`/blog/${p.slug}/`}>{p.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No articles matched.</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
