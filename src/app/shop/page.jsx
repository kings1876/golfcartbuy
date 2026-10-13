import { SITE, ACTIVE_CATEGORIES, PRODUCTS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import CategoryTile from '@/components/CategoryTile'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Shop Golf Carts for Sale | New E-Z-GO & Used Yamaha',
  description:
    'Browse new E-Z-GO and used Yamaha golf carts for sale at Golf Cart Buy, in electric and petrol, shipped free Australia-wide.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
}

export default function ShopPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Shop' }]} />
        <h1>Golf Carts for Sale</h1>
        <p>
          Browse our current new E-Z-GO and used Yamaha golf carts for sale, in electric and petrol.
        </p>

        <h2 style={{ marginTop: 40 }}>Shop by Category</h2>
        <div className="grid grid-3">
          {ACTIVE_CATEGORIES.map((c) => (
            <CategoryTile key={c.slug} category={c} />
          ))}
        </div>

        <h2 style={{ marginTop: 48 }}>All Golf Carts</h2>
        <div className="grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
