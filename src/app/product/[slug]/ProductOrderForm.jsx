'use client'

import { useState } from 'react'
import QtyStepper from '@/components/QtyStepper'
import { addToCart } from '@/lib/cart'

export default function ProductOrderForm({ product }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product.slug, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
        <QtyStepper qty={qty} setQty={setQty} />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add to Order
        </button>
      </div>
      {added && (
        <p role="status" style={{ color: 'var(--green)' }}>
          Added to your order. <a href="/cart/">View order &rarr;</a>
        </p>
      )}
      <p className="form-note">
        Or <a href="/order/">go straight to the order form</a> and mention this cart.
      </p>
    </div>
  )
}
