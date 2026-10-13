import { SITE, ACTIVE_CATEGORIES, PRODUCTS } from '@/config/site'
import PageBar from '@/components/PageBar'
import ShopBrowser from '@/components/ShopBrowser'
import CtaBand from '@/components/CtaBand'

export const metadata = {
  title: 'Shop Golf Carts | E-Z-GO, Club Car & Yamaha',
  description:
    'Browse new E-Z-GO and used Club Car and Yamaha golf carts for sale at Golf Cart Buy, shipped free Australia-wide.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
}

export default function ShopPage() {
  return (
    <>
      <PageBar
        breadcrumbs={[{ label: 'Shop' }]}
        title="Golf Carts for Sale"
        lead={`Browse ${PRODUCTS.length} new and used golf carts from E-Z-GO, Club Car and Yamaha, in electric and petrol. Free shipping Australia-wide.`}
      />
      <section className="section">
        <div className="container">
          <ShopBrowser products={PRODUCTS} categories={ACTIVE_CATEGORIES} activeSlug={null} />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
