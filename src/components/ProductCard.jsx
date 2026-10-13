import SmartImage from './SmartImage'

export default function ProductCard({ product }) {
  const tagline = [product.condition, product.brandName, product.power].filter(Boolean).join(' · ')
  return (
    <a href={`/product/${product.slug}/`} className="tile product-tile">
      <div className="tile-media">
        <SmartImage src={product.images[0]} alt={product.name} />
        {product.badge && product.badge !== 'none' && product.badge.toLowerCase() !== (product.condition || '').toLowerCase() && (
          <span className="tile-badge tile-badge-float">{product.badge}</span>
        )}
      </div>
      <div className="tile-body">
        {tagline && <div className="card-tag">{tagline}</div>}
        <h3>{product.name}</h3>
        <p className="card-short">{product.short}</p>
        <div className="card-foot">
          <div className="tile-price">
            {product.priceFrom ? <small className="from">From </small> : null}${product.price.toLocaleString()} <small>AUD</small>
          </div>
          <span className="card-link">View details &rarr;</span>
        </div>
      </div>
    </a>
  )
}
