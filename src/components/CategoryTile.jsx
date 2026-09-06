export default function CategoryTile({ category }) {
  return (
    <a href={`/shop/${category.slug}/`} className="tile category-tile">
      <div className="tile-media">
        <div style={{ fontSize: '2.4rem' }} aria-hidden="true">🛺</div>
      </div>
      <div className="tile-body">
        <h3 style={{ fontSize: '1.05rem', margin: 0 }}>{category.name}</h3>
        <p style={{ fontSize: '0.9rem', margin: '6px 0 0' }}>{category.description}</p>
      </div>
    </a>
  )
}
