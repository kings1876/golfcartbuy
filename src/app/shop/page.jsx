import { SITE, CATEGORIES, PRODUCTS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import CategoryTile from '@/components/CategoryTile'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'Shop Golf Carts for Sale | New & Used',
  description:
    'Browse all golf carts for sale at Golf Cart Buy, including new and used electric and gas models from Club Car, EZGO, and Yamaha.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
}

export default function ShopPage() {
  return (
    <div className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Shop' }]} />
        <h1>Golf Carts for Sale</h1>
        <p>
          Browse our full range of new and used golf carts for sale, or shop directly by brand:
          Club Car, EZGO, and Yamaha.
        </p>

        <h2 style={{ marginTop: 40 }}>Shop by Category</h2>
        <div className="grid">
          {CATEGORIES.map((c) => (
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
