'use client'

import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'

export default function ShopBrowser({ products, categories, activeSlug }) {
  const [q, setQ] = useState('')
  const [power, setPower] = useState('All')
  const [sort, setSort] = useState('featured')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    let list = products.filter((p) => {
      if (power !== 'All' && p.power !== power) return false
      if (!term) return true
      return [p.name, p.short, p.brandName, p.condition, p.power].join(' ').toLowerCase().includes(term)
    })
    if (sort === 'low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'high') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [products, q, power, sort])

  return (
    <div>
      <div className="shop-toolbar">
        <div className="form-row shop-search">
          <label htmlFor="shop-q" className="sr-only">Search golf carts</label>
          <input
            id="shop-q"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by brand, model, colour or year"
          />
        </div>
        <div className="form-row shop-sort">
          <label htmlFor="shop-sort" className="sr-only">Sort</label>
          <select id="shop-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Sort: Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
      </div>

      <nav className="chips" aria-label="Categories">
        <a href="/shop/" className={`chip${!activeSlug ? ' active' : ''}`} aria-current={!activeSlug ? 'page' : undefined}>All carts</a>
        {categories.map((c) => (
          <a
            key={c.slug}
            href={`/shop/${c.slug}/`}
            className={`chip${activeSlug === c.slug ? ' active' : ''}`}
            aria-current={activeSlug === c.slug ? 'page' : undefined}
          >
            {c.name}
          </a>
        ))}
      </nav>

      <div className="chips chips-filter" role="group" aria-label="Power type">
        <span className="chips-label">Power</span>
        {['All', 'Electric', 'Petrol'].map((o) => (
          <button
            key={o}
            type="button"
            className={`chip${power === o ? ' active' : ''}`}
            aria-pressed={power === o}
            onClick={() => setPower(o)}
          >
            {o}
          </button>
        ))}
      </div>

      <p className="result-count" role="status">
        {results.length} {results.length === 1 ? 'cart' : 'carts'}
      </p>

      {results.length > 0 ? (
        <div className="grid grid-3">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <p>No carts match your search. Try clearing the filters.</p>
      )}
    </div>
  )
}
