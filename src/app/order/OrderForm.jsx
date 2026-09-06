'use client'

import { useEffect, useState } from 'react'
import { PRODUCTS, SITE } from '@/config/site'
import { readCart } from '@/lib/cart'
import WebForm from '@/components/WebForm'

export default function OrderForm() {
  const [summary, setSummary] = useState('')

  useEffect(() => {
    const items = readCart()
    const lines = items
      .map((i) => {
        const p = PRODUCTS.find((pr) => pr.slug === i.slug)
        return p ? `${i.qty} x ${p.name} ($${p.price.toLocaleString()} each)` : null
      })
      .filter(Boolean)
    setSummary(lines.join('\n'))
  }, [])

  return (
    <WebForm subject={`New order request — ${SITE.name}`} thankYouPath="/thank-you-order/" submitLabel="Submit Order Request">
      <div className="form-row">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="form-row">
        <label htmlFor="shipping_address">Shipping address</label>
        <textarea id="shipping_address" name="shipping_address" required />
      </div>
      <div className="form-row">
        <label htmlFor="order_summary">Order details</label>
        <textarea
          id="order_summary"
          name="order_summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="List the golf cart(s) and quantity you'd like to order, or edit the items added from your cart."
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="payment_method">Preferred payment method</label>
        <select id="payment_method" name="payment_method" defaultValue="BTC">
          <option value="BTC">Bitcoin (BTC) — {SITE.cryptoDiscountPercent}% discount</option>
          <option value="USDT">USDT — {SITE.cryptoDiscountPercent}% discount</option>
        </select>
      </div>
      <p className="form-note">
        Minimum order: ${SITE.minOrderUsd.toLocaleString()}. Free shipping on every order.
      </p>
    </WebForm>
  )
}
