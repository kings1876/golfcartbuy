'use client'

import { useEffect, useState } from 'react'
import { PRODUCTS, SITE } from '@/config/site'
import { readCart, updateQty, removeFromCart } from '@/lib/cart'
import QtyStepper from '@/components/QtyStepper'
import SmartImage from '@/components/SmartImage'

export default function CartPage() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(readCart())
  }, [])

  const lines = items
    .map((i) => {
      const product = PRODUCTS.find((p) => p.slug === i.slug)
      return product ? { ...i, product } : null
    })
    .filter(Boolean)

  const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0)
  const cryptoTotal = subtotal * (1 - SITE.cryptoDiscountPercent / 100)
  const meetsMin = subtotal >= SITE.minOrderUsd

  return (
    <div className="section">
      <div className="container">
        <h1>Your Order</h1>

        {lines.length === 0 ? (
          <p>
            Your order is empty. <a href="/shop/">Browse golf carts for sale</a> to get started.
          </p>
        ) : (
          <>
            <div className="table-wrap" style={{ marginTop: 24 }}>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th aria-label="Remove" />
                  </tr>
                </thead>
                <tbody>
                  {lines.map((l) => (
                    <tr key={l.slug}>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 64, height: 48 }}>
                            <SmartImage src={l.product.images[0]} alt={l.product.name} />
                          </div>
                          <a href={`/product/${l.slug}/`}>{l.product.name}</a>
                        </div>
                      </td>
                      <td>${l.product.price.toLocaleString()}</td>
                      <td>
                        <QtyStepper
                          qty={l.qty}
                          setQty={(q) => setItems(updateQty(l.slug, q))}
                        />
                      </td>
                      <td>${(l.product.price * l.qty).toLocaleString()}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline"
                          onClick={() => setItems(removeFromCart(l.slug))}
                          aria-label={`Remove ${l.product.name} from order`}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card" style={{ padding: 24, marginTop: 24, maxWidth: 420 }}>
              <p style={{ display: 'flex', justifyContent: 'space-between', margin: 0 }}>
                <span>Subtotal</span> <strong>${subtotal.toLocaleString()}</strong>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>With {SITE.cryptoDiscountPercent}% crypto discount</span>{' '}
                <strong>${cryptoTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}</strong>
              </p>
              <p className="form-note">Free shipping included on every order.</p>
              {!meetsMin && (
                <p className="form-error">
                  Minimum order is ${SITE.minOrderUsd.toLocaleString()}. Add more items to continue.
                </p>
              )}
              <a
                href="/order/"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: 12, pointerEvents: meetsMin ? 'auto' : 'none', opacity: meetsMin ? 1 : 0.5 }}
                aria-disabled={!meetsMin}
              >
                Continue to Order Form
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
