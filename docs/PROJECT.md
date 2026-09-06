# Golf Cart Buy — Project Record

## A — Identity
- Site name: Golf Cart Buy
- Tagline: Premium Golf Carts, Delivered Nationwide (Claude-authored — none was specified)
- Domain: golfcartbuy.com
- Brand colors: Forest green #1B5E3C + gold accent #D4A017 (Claude-authored — none was specified)
- Logo/favicon: text-mark "GC" placeholder (Claude-authored — none was supplied)
- GSC verification code: not provided — add to `layout.jsx` metadata when available

## B — Contact & Business
- Contact email: koloonjo@gmail.com (placeholder — user's own account email; replace with real business inbox)
- Phone: not provided
- Location: USA
- Currency: USD
- Tax display: not applicable (crypto-only checkout, no tax collection implemented)

## C — Order Rules
- Minimum order: $3,500
- Free shipping: on all orders (no threshold)
- Flat shipping fee: $15 (fallback constant, unused since shipping is free site-wide)
- Crypto discount: 10%
- Discount code: none

## D — Pages
Shop, Blog, About, Contact, FAQ, plus Shipping/Refund/Privacy/Terms (legal), Order, Cart, Search.
Menu order: Shop, Blog, About, Contact, FAQ.

## E — Checkout & Payment
- Ordering method: order form (web-based cart → order form, no live payment capture)
- Payment methods: crypto only (BTC, USDT)
- Financing page: not needed

## F — Live Chat
- Widget: Tawk.to (property/widget ID pending — placeholder in `CHAT.channels`)
- No link channels (WhatsApp/Telegram/etc.) were provided at intake

## G — Optional Features
- No order tracking, no customer accounts, no wholesale page, no compare tool, no finance calculator

## H — Compliance
- Age gate: none (not applicable to golf carts)
- No banned words/required framings were specified
- Language: English

## I — Shop Structure
Structure A (Category → Subcategory → Product). Categories:
New Golf Carts, Used Golf Carts, Club Car, EZGO, Yamaha, Accessories & Parts.

## J — SEO Keywords
- Primary: golf carts for sale
- Secondary: golf cart cars for sale, club car golf carts for sale, golf cart for sale, electric golf cars for sale, golf carts sale, golf carts for sale near me, new club car golf carts for sale, club car golf carts dealer, golf cart for sale Chicago, used golf carts for sale
- Competitors: cartmarket.com, cartsgonewild.com

## K — Products
9 starter products authored by Claude (none were supplied at intake) — see `src/config/site.js` PRODUCTS. All priced above the $3,500 minimum except the accessory bundle (min order applies to order total, not per item).

## L — Forms
- Provider: web3forms (key pending — see README "Live placeholders")
- Contact form email / order form email: koloonjo@gmail.com (placeholder)
- No wholesale page, no Turnstile key provided

## M — Hosting / Deploy Target
**Vercel**, via GitHub repo: https://github.com/kings1876/golfcartbuy

## N — Brand Authority Facts (truthful only)
- Founded: 2017
- Founding location: United States
- Ships to: Nationwide (all 50 US states)
- Differentiator, milestones, named founder, awards, partnerships: none supplied at intake — not fabricated, not claimed anywhere on the site

## O — Client Backend
No. Pure static-content Next.js site (Vercel target, no D1/R2/Functions).

## Keyword Strategy

| Keyword | Assigned Page |
|---|---|
| golf carts for sale (primary) | Homepage, Shop |
| golf cart cars for sale | Shop |
| club car golf carts for sale | /shop/club-car/ |
| golf cart for sale | Homepage |
| electric golf cars for sale | /shop/new-golf-carts/, blog: electric-vs-gas-golf-carts |
| golf carts sale | Shop |
| golf carts for sale near me | Homepage (local intent — no location pages built; consider city landing pages later) |
| new club car golf carts for sale | /shop/club-car/, /shop/new-golf-carts/ |
| club car golf carts dealer | /shop/club-car/, blog: club-car-vs-ezgo-vs-yamaha |
| golf cart for sale Chicago | blog: golf-cart-buying-guide (mentions Chicago; no dedicated city page built) |
| used golf carts for sale | /shop/used-golf-carts/, blog: new-vs-used-golf-carts |

## Content Calendar (initial 4 posts shipped; next clusters queued)

1. Electric vs. Gas Golf Carts (shipped)
2. Club Car vs. EZGO vs. Yamaha (shipped)
3. New vs. Used Golf Carts (shipped)
4. Golf Cart Buying Guide (shipped)
5. Next up: "Best Golf Carts for Large Properties" (unused cluster: towing/range keywords)
6. Next up: "Golf Cart Financing & Payment Options" (unused cluster: crypto payment education)

## Form Provider & Deploy Target Confirmation
Web3Forms (default, works while domain settings finalize) + Vercel (GitHub auto-deploy), as documented above.
