'use client'

export default function QtyStepper({ qty, setQty, min = 1, max = 9 }) {
  return (
    <div className="qty-stepper">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => setQty(Math.max(min, qty - 1))}
      >
        −
      </button>
      <span aria-live="polite">{qty}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => setQty(Math.min(max, qty + 1))}
      >
        +
      </button>
    </div>
  )
}
