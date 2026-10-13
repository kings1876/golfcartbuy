// Builds public/images/og-default.jpg (1200x630), the default social-share image.
// A product photo on the left, brand name and tagline on the right.
// Run: node scripts/og-image.mjs
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE } from '../src/config/site.js'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const photo = path.join(root, 'public', 'images', 'refurbished-2021-club-car-tempo-lithium-golf-cart-liquid-yellow.webp')
const out = path.join(root, 'public', 'images', 'og-default.jpg')

const W = 1200, H = 630
const left = await sharp(photo)
  .resize(630, 630, { fit: 'contain', background: '#ffffff' })
  .toBuffer()

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const text = `<svg width="${W - 630}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f7f6f2"/>
  <rect x="48" y="150" width="56" height="4" fill="#b45a40"/>
  <text x="48" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="#121417">${esc(SITE.name)}</text>
  <text x="48" y="292" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#57534e">Golf carts for sale</text>
  <text x="48" y="332" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#57534e">Free shipping Australia-wide</text>
</svg>`

await sharp({ create: { width: W, height: H, channels: 3, background: '#f7f6f2' } })
  .composite([
    { input: left, left: 0, top: 0 },
    { input: Buffer.from(text), left: 630, top: 0 },
  ])
  .jpeg({ quality: 85 })
  .toFile(out)
console.log('wrote', path.relative(root, out))
