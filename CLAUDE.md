# Golf Cart Buy — project instructions

Ecommerce site for a golf cart retailer selling in Australia (AUD, en-AU spelling: petrol, colour, finalise). Next.js 15 (App Router), deployed to Vercel via GitHub. No client backend/CMS.

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
- Product photos — 24 of 28 products use photos supplied by the user (taken from the dealer sites' listings; originals in assets/product-photos, gitignored, processed by npm run images). 4 of the 6 Yamaha Drive2 listings still use SVG placeholders. Confirm you have permission to use third-party dealer photos.
- `SITE.domain` is already set to `golfcartbuy.com` (live) — if it ever changes, edit that ONE line and rebuild; never find-and-replace across files.

## Brand facts (only these are true — never invent more)
- Founded 2017 (founding location NOT stated anywhere on the site — not yet supplied for the Australian version)
- Sells to Australia, ships Australia-wide (all states and territories), free shipping on every order
- Minimum order: $5,250 AUD
- Payment: crypto only (BTC, USDT), 10% discount when paying with crypto
- Current stock (28 listings, all taken from third-party dealer pages at the user's request): 6 used Yamaha Drive2 (yamahagolfcars.com.au/used.html), 5 new E-Z-GO (qldgolfcarts.com.au), and 17 used/refurbished Club Car + 1 used Yamaha (igu.com.au/collections/used-carts). Facts/specs only; descriptions rewritten; no photos copied; dealer warranties, optional extras, stock status, "was" prices and contact details NOT carried over.
- Categories with no products are hidden from nav, grids, sitemap and llms.txt (ACTIVE_CATEGORIES in site.js); they return after products are added.
No invented statistics, awards, press, or named clients. Ever.
