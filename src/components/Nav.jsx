'use client'

import { useState } from 'react'
import { SITE } from '@/config/site'

const NAV_ITEMS = [
  { href: '/shop/', label: 'Shop' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/faq/', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner container">
        <a href="/" className="brand" aria-label={`${SITE.name} home`}>
          <span className="brand-mark" aria-hidden="true">GC</span>
          {SITE.name}
        </a>

        <nav aria-label="Primary">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="/order/" className="cart-link" aria-label="Go to order form">
            Order
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
          <li><a href="/order/" onClick={() => setOpen(false)}>Order</a></li>
        </ul>
      </div>
    </header>
  )
}
