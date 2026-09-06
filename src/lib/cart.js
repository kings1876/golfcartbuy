const KEY = 'gcb-cart'

export function readCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function writeCart(items) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(KEY, JSON.stringify(items))
  window.dispatchEvent(new Event('gcb-cart-updated'))
}

export function addToCart(slug, qty) {
  const items = readCart()
  const existing = items.find((i) => i.slug === slug)
  if (existing) {
    existing.qty += qty
  } else {
    items.push({ slug, qty })
  }
  writeCart(items)
  return items
}

export function updateQty(slug, qty) {
  const items = readCart()
    .map((i) => (i.slug === slug ? { ...i, qty } : i))
    .filter((i) => i.qty > 0)
  writeCart(items)
  return items
}

export function removeFromCart(slug) {
  const items = readCart().filter((i) => i.slug !== slug)
  writeCart(items)
  return items
}

export function cartCount(items) {
  return items.reduce((sum, i) => sum + i.qty, 0)
}
