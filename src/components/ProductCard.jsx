import SmartImage from './SmartImage'

export default function ProductCard({ product }) {
  return (
    <a href={`/product/${product.slug}/`} className="tile">
      <div className="tile-media">
        <SmartImage src={product.images[0]} alt={product.name} />
      </div>
      <div className="tile-body">
        {product.badge && product.badge !== 'none' && (
          <span className="tile-badge">{product.badge}</span>
        )}
        <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{product.name}</h3>
        <p style={{ fontSize: '0.9rem', margin: '6px 0 0' }}>{product.short}</p>
        <div className="tile-price">${product.price.toLocaleString()}</div>
      </div>
    </a>
  )
}
