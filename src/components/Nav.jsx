'use client'

import { useEffect, useRef, useState } from 'react'
import { SITE, ACTIVE_CATEGORIES } from '@/config/site'
import { SearchIcon } from './icons'

const NAV_ITEMS = ACTIVE_CATEGORIES.map((c) => ({ href: `/shop/${c.slug}/`, label: c.name }))

const MORE_ITEMS = [
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/faq/', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const moreRef = useRef(null)

  useEffect(() => {
    if (!moreOpen) return
    const onDown = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setMoreOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [moreOpen])

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a href="/" className="brand" aria-label={`${SITE.name} home`}>
          <span className="brand-mark" aria-hidden="true">GC</span>
          <span className="brand-text">
            <span className="brand-name">{SITE.name}</span>
            <span className="brand-sub">New &amp; used golf carts · Australia-wide</span>
          </span>
        </a>

        <nav aria-label="Product categories">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li className="more-menu" ref={moreRef}>
              <button
                type="button"
                className="more-toggle"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                aria-controls="more-list"
                onClick={() => setMoreOpen((v) => !v)}
              >
                More <span className="more-caret" aria-hidden="true">▾</span>
              </button>
              <ul id="more-list" className={`more-list${moreOpen ? ' open' : ''}`}>
                {MORE_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={() => setMoreOpen(false)}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="/search/" className="icon-btn" aria-label="Search carts and guides">
            <SearchIcon aria-hidden="true" />
          </a>
          <a href="/order/" className="btn btn-primary btn-sm">
            Order Now
          </a>
          <button
            type="button"
            className="hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            </li>
          ))}
          <li className="mobile-more-heading">More</li>
          {MORE_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            </li>
          ))}
          <li><a href="/order/" onClick={() => setOpen(false)}>Order</a></li>
        </ul>
      </div>
    </header>
  )
}
