// One-time helper: generates simple branded SVG placeholder images for every
// product until real photography is supplied. Run with: node scripts/gen-placeholders.mjs
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRODUCTS } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'public', 'images')
fs.mkdirSync(outDir, { recursive: true })

function svgFor(name) {
  const words = name.split(' ')
  const lines = []
  let cur = ''
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > 22) {
      lines.push(cur.trim())
      cur = w
    } else {
      cur = (cur + ' ' + w).trim()
    }
  }
  if (cur) lines.push(cur)
  const lineHeight = 34
  const startY = 300 - ((lines.length - 1) * lineHeight) / 2
  const tspans = lines
    .map((l, i) => `<tspan x="400" y="${startY + i * lineHeight}">${escapeXml(l)}</tspan>`)
    .join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#ffffff"/>
  <rect x="40" y="40" width="720" height="520" rx="16" fill="#eef2ee" stroke="#dfe6e1" stroke-width="2"/>
  <circle cx="400" cy="200" r="70" fill="#1b5e3c"/>
  <path d="M370 210 L395 235 L440 175" stroke="#ffffff" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <text font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="700" fill="#123f28" text-anchor="middle">${tspans}</text>
  <text x="400" y="540" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="#4b564f" text-anchor="middle">Golf Cart Buy — photo coming soon</text>
</svg>`
}

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

for (const p of PRODUCTS) {
  for (const img of p.images) {
    const filePath = path.join(outDir, img)
    fs.writeFileSync(filePath, svgFor(p.name))
    console.log('wrote', img)
  }
}

// generic category / hero placeholders
const generic = {
  'hero.svg': 'Golf Cart Buy',
  'about.svg': 'Golf Cart Buy — About',
  'og-default.svg': 'Golf Cart Buy',
}
for (const [file, label] of Object.entries(generic)) {
  fs.writeFileSync(path.join(outDir, file), svgFor(label))
  console.log('wrote', file)
}
