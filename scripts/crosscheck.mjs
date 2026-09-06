// Pre-ship crosscheck. Boots a local `next start` server (build must already exist),
// fetches key routes, and validates the non-negotiable rules from the WebForge skill.
// Exits non-zero on any failure.
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE, PRODUCTS, CATEGORIES, POSTS } from '../src/config/site.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const PORT = 4319
const BASE = `http://localhost:${PORT}`

let failures = 0
let passes = 0
function ok(label) {
  passes++
  console.log(`  \x1b[32mPASS\x1b[0m ${label}`)
}
function fail(label, detail) {
  failures++
  console.log(`  \x1b[31mFAIL\x1b[0m ${label}${detail ? ` — ${detail}` : ''}`)
}

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['next', 'start', '-p', String(PORT)], {
      cwd: root,
      shell: true,
      env: { ...process.env },
    })
    let ready = false
    const timeout = setTimeout(() => {
      if (!ready) reject(new Error('Server did not become ready in time'))
    }, 30000)
    proc.stdout.on('data', (d) => {
      const s = d.toString()
      if (s.includes('Ready') && !ready) {
        ready = true
        clearTimeout(timeout)
        setTimeout(() => resolve(proc), 500)
      }
    })
    proc.stderr.on('data', () => {})
    proc.on('error', reject)
  })
}

async function fetchText(urlPath) {
  const r = await fetch(BASE + urlPath)
  return { status: r.status, headers: r.headers, text: await r.text() }
}

function countH1(html) {
  return (html.match(/<h1[\s>]/g) || []).length
}

function extractJsonLdBlocks(html) {
  const blocks = []
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
  let m
  while ((m = re.exec(html))) blocks.push(m[1])
  return blocks
}

function extractMetaDescription(html) {
  const m = html.match(/<meta name="description" content="([^"]*)"/)
  return m ? m[1] : null
}

async function checkPage(urlPath, { needsH1 = true } = {}) {
  const { status, text } = await fetchText(urlPath)
  if (status !== 200) {
    fail(`${urlPath} returns 200`, `got ${status}`)
    return
  }
  ok(`${urlPath} returns 200`)

  if (needsH1) {
    const h1s = countH1(text)
    if (h1s === 1) ok(`${urlPath} has exactly one H1`)
    else fail(`${urlPath} has exactly one H1`, `found ${h1s}`)
  }

  const desc = extractMetaDescription(text)
  if (desc) {
    if (desc.length > 0 && desc.length <= 165) ok(`${urlPath} meta description in band (${desc.length} chars)`)
    else fail(`${urlPath} meta description in band`, `${desc.length} chars`)
  }

  for (const block of extractJsonLdBlocks(text)) {
    try {
      JSON.parse(block)
      ok(`${urlPath} JSON-LD parses`)
    } catch (e) {
      fail(`${urlPath} JSON-LD parses`, e.message)
    }
  }

  if (text.includes('DOMAIN.com')) {
    fail(`${urlPath} has no DOMAIN.com placeholder`)
  } else {
    ok(`${urlPath} has no DOMAIN.com placeholder`)
  }

  if (text.includes(SITE.contactEmail)) {
    fail(`${urlPath} email is entity-encoded (no plaintext)`, 'found raw email in HTML')
  } else {
    ok(`${urlPath} email is entity-encoded (no plaintext)`)
  }
}

async function checkAgentFiles() {
  const files = [
    ['/robots.txt', 'text/plain'],
    ['/llms.txt', 'text/plain'],
    ['/auth.md', null],
    ['/.well-known/api-catalog', null],
    ['/.well-known/agent-skills/index.json', null],
    ['/.well-known/mcp/server-card.json', null],
    ['/.well-known/oauth-protected-resource', null],
    ['/.well-known/oauth-authorization-server', null],
    ['/.well-known/openid-configuration', null],
    ['/.well-known/acp.json', null],
    ['/.well-known/ucp', null],
    ['/js/webmcp.js', null],
  ]
  for (const [p] of files) {
    const { status, text } = await fetchText(p)
    if (status === 200) ok(`agent-ready file present: ${p}`)
    else {
      fail(`agent-ready file present: ${p}`, `status ${status}`)
      continue
    }
    if (p === '/auth.md' && !text.startsWith('# Auth.md')) {
      fail('auth.md starts with "# Auth.md"')
    } else if (p === '/auth.md') {
      ok('auth.md starts with "# Auth.md"')
    }
    if (p === '/.well-known/ucp') {
      try {
        const json = JSON.parse(text)
        if (json.ucp === '1.0') ok('ucp has "ucp":"1.0" field')
        else fail('ucp has "ucp":"1.0" field')
      } catch {
        fail('ucp is valid JSON')
      }
    }
    if (p.endsWith('.json') || p === '/.well-known/api-catalog' || p === '/.well-known/acp.json' || p.includes('oauth') || p.includes('openid')) {
      try {
        JSON.parse(text)
        ok(`${p} is valid JSON`)
      } catch {
        fail(`${p} is valid JSON`)
      }
    }
  }
}

function checkStrategyDocsNotPublished() {
  const publicDir = path.join(root, 'public')
  const banned = ['PROJECT.md', 'keyword-map.md']
  let leaked = false
  for (const b of banned) {
    if (fs.existsSync(path.join(publicDir, b))) leaked = true
  }
  if (fs.existsSync(path.join(publicDir, 'docs'))) leaked = true
  if (leaked) fail('docs/PROJECT.md and keyword-map.md are not in public/')
  else ok('docs/PROJECT.md and keyword-map.md are not in public/')
}

function checkFormsSource() {
  const webform = fs.readFileSync(path.join(root, 'src/components/WebForm.jsx'), 'utf8')
  const hasFormData = webform.includes('new FormData(form)')
  const hasAcceptOnly = webform.includes("Accept: 'application/json'") || webform.includes('Accept: "application/json"')
  const hasContentType = /['"]Content-Type['"]\s*:/.test(webform)
  const hasPreventDefault = webform.includes('e.preventDefault()')
  if (hasFormData) ok('WebForm uses body: new FormData(form)')
  else fail('WebForm uses body: new FormData(form)')
  if (hasAcceptOnly) ok('WebForm sets Accept header')
  else fail('WebForm sets Accept header')
  if (!hasContentType) ok('WebForm does not set Content-Type header')
  else fail('WebForm does not set Content-Type header')
  if (hasPreventDefault) ok('WebForm calls e.preventDefault()')
  else fail('WebForm calls e.preventDefault()')
}

function checkImages() {
  const imagesDir = path.join(root, 'public', 'images')
  let missing = []
  for (const p of PRODUCTS) {
    for (const img of p.images) {
      if (!fs.existsSync(path.join(imagesDir, img))) missing.push(img)
    }
  }
  if (missing.length === 0) ok('every product has an image file on disk')
  else fail('every product has an image file on disk', missing.join(', '))
}

async function main() {
  console.log('\nWEBFORGE CROSSCHECK — Golf Cart Buy\n')

  checkStrategyDocsNotPublished()
  checkFormsSource()
  checkImages()

  console.log('\nBooting local server for live checks...')
  const proc = await startServer()
  try {
    await checkPage('/')
    await checkPage('/shop/')
    await checkPage('/shop/new-golf-carts/')
    await checkPage('/shop/club-car/')
    await checkPage('/product/club-car-onward-4-passenger-electric/')
    await checkPage('/blog/')
    await checkPage('/blog/electric-vs-gas-golf-carts/')
    await checkPage('/about/')
    await checkPage('/contact/')
    await checkPage('/faq/')
    await checkPage('/order/')
    await checkPage('/shipping/')
    await checkPage('/refund/')
    await checkPage('/privacy/')
    await checkPage('/terms/')
    await checkPage('/cart/', { needsH1: false })
    await checkPage('/search/', { needsH1: false })
    await checkPage('/thank-you-contact/')
    await checkPage('/thank-you-order/')

    // cross-page H1 uniqueness across all products/categories/posts
    const h1s = new Map()
    const allRoutes = [
      '/',
      ...CATEGORIES.map((c) => `/shop/${c.slug}/`),
      ...PRODUCTS.map((p) => `/product/${p.slug}/`),
      ...POSTS.map((p) => `/blog/${p.slug}/`),
    ]
    let dupFound = false
    for (const route of allRoutes) {
      const { text } = await fetchText(route)
      const m = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
      const h1Text = m ? m[1].replace(/<[^>]+>/g, '').trim() : null
      if (h1Text) {
        if (h1s.has(h1Text)) {
          fail('cross-page H1 uniqueness', `"${h1Text}" duplicated on ${route} and ${h1s.get(h1Text)}`)
          dupFound = true
        }
        h1s.set(h1Text, route)
      }
    }
    if (!dupFound) ok('cross-page H1 uniqueness')

    await checkAgentFiles()
  } finally {
    proc.kill()
  }

  console.log(`\n${passes} passed, ${failures} failed.\n`)
  if (failures > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
