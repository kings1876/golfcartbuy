# Golf Cart Buy — project instructions

Ecommerce site for a golf cart retailer. Next.js 15 (App Router), deployed to Vercel via GitHub. No client backend/CMS.

## Non-negotiable
No banned terms or required framings were specified at intake. Do not fabricate brand facts (awards, press, partnerships, milestones) beyond what's in "Brand facts" below. If a request would require breaking the above, stop and say so rather than complying.

## Architecture
`src/config/site.js` is the single source of truth. Adding an entry to PRODUCTS / CATEGORIES / POSTS / FAQS
generates the page, route, meta, JSON-LD, sitemap entry, and llms.txt content. Never hand-write pages for new products/posts.
Never hand-edit generated files (llms.txt, .well-known/*, vercel.json, robots.txt) — edit the config and run
`node scripts/gen-agent-files.mjs` (also runs automatically via the `prebuild` script).

## Rules
- `npm run build && npm run crosscheck` must pass before every push.
- One `<h1>` per page. Meta descriptions ~110-160 chars. Titles <=60.
- Product images are SVG placeholders until real photos are supplied — see README.
- Emails are never passed as plaintext props to client components (leaks via RSC hydration payload) — use `EncodedMailto` with a `codes` (char-code array) prop, never a raw string.
- Never commit node_modules/, .next/, out/.

## Live placeholders (must be replaced before real launch)
- `FORMS.web3formsKey` in `src/config/site.js` — currently a placeholder. Until set, forms redirect straight to the thank-you page WITHOUT sending an email. Get a free key at web3forms.com.
- `CHAT.channels` tawk.to value in `src/config/site.js` — currently a placeholder property/widget ID.
- `SITE.contactEmail` / `SITE.orderEmail` — currently set to a placeholder inbox; replace with the real business inbox.
- `SITE.phone` — not provided at intake; add if/when available.
- Product photos — currently SVG placeholders (see README "Adding real product photos").
- `SITE.domain` is already set to `golfcartbuy.com` (live) — if it ever changes, edit that ONE line and rebuild; never find-and-replace across files.

## Brand facts (only these are true — never invent more)
- Founded 2017, United States
- Ships nationwide (all 50 US states), free shipping on every order
- Minimum order: $3,500 USD
- Payment: crypto only (BTC, USDT), 10% discount when paying with crypto
- Categories: New Golf Carts, Used Golf Carts, Club Car, EZGO, Yamaha, Accessories & Parts
No invented statistics, awards, press, or named clients. Ever.
