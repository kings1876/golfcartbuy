// Turns client originals in assets/product-photos/<slug>.(jpg|jpeg|png|webp) into
// optimised public/images/<slug>.webp. Photos are flattened onto white (transparent PNGs
// become white-backed), scaled to fit within 1200x900 (never enlarged), and encoded as WebP,
// stepping quality down until the file is under ~145 KB. The product frame is 4:3 with
// object-fit: contain, so any aspect ratio displays correctly.
//
// Usage: npm run images
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = path.join(root, 'assets', 'product-photos')
const outDir = path.join(root, 'public', 'images')
const BUDGET = 145 * 1024

fs.mkdirSync(outDir, { recursive: true })
const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
if (files.length === 0) {
  console.log('No photos in assets/product-photos/')
  process.exit(0)
}

for (const file of files) {
  const slug = file.replace(/\.[^.]+$/, '')
  const input = path.join(srcDir, file)
  const meta = await sharp(input).metadata()
  let buf
  for (let q = 85; q >= 45; q -= 5) {
    buf = await sharp(input)
      .flatten({ background: '#ffffff' })
      .resize({ width: 1200, height: 900, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: q })
      .toBuffer()
    if (buf.length <= BUDGET) break
  }
  fs.writeFileSync(path.join(outDir, `${slug}.webp`), buf)
  const small = Math.min(meta.width, meta.height) < 500 ? '  (small source — consider a larger photo)' : ''
  console.log(`${slug}.webp  ${meta.width}x${meta.height} -> ${(buf.length / 1024).toFixed(0)} KB${small}`)
}
