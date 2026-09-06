import { SITE, CATEGORIES, PRODUCTS, POSTS } from '@/config/site'

export default function sitemap() {
  const base = `https://${SITE.domain}`
  const now = new Date().toISOString()

  const staticPages = [
    '',
    'shop',
    'blog',
    'about',
    'contact',
    'faq',
    'order',
    'cart',
    'search',
    'shipping',
    'refund',
    'privacy',
    'terms',
  ].map((path) => ({
    url: `${base}/${path ? path + '/' : ''}`,
    lastModified: now,
  }))

  const categoryPages = CATEGORIES.map((c) => ({
    url: `${base}/shop/${c.slug}/`,
    lastModified: now,
  }))

  const productPages = PRODUCTS.map((p) => ({
    url: `${base}/product/${p.slug}/`,
    lastModified: now,
    images: [`${base}/images/${p.images[0]}`],
  }))

  const postPages = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    lastModified: p.date,
  }))

  return [...staticPages, ...categoryPages, ...productPages, ...postPages]
}
