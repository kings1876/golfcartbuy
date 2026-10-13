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
    <div className="order-box">
      <div className="order-row">
        <QtyStepper qty={qty} setQty={setQty} />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add to Order
        </button>
        <a href="/order/" className="btn btn-outline">Start an order</a>
      </div>
      {added && (
        <p role="status" className="added-note">
          Added to your order. <a href="/cart/">View order &rarr;</a>
        </p>
      )}
    </div>
  )
}
