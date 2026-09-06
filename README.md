# Golf Cart Buy

Next.js 15 (App Router) ecommerce site for Golf Cart Buy, deployed to Vercel via GitHub.

## Stack

- Next.js 15 / React 19, no CSS framework (hand-written `src/styles/globals.css`)
- Forms: [Web3Forms](https://web3forms.com) (client-side, no backend needed)
- Deploy: Vercel, auto-deploy on push to `main`

## Commands

```bash
npm install
npm run dev          # local dev server
npm run build         # production build (also regenerates agent-ready files)
npm run start         # serve the production build locally
npm run crosscheck    # pre-ship crosscheck — boots the build and validates it
npm run images        # placeholder — see "Adding real product photos"
```

## Project structure

- `src/config/site.js` — **single source of truth**: brand info, categories, products, blog posts, FAQs, forms config, chat config. Add a product here and its page/route/schema/sitemap entry all follow automatically.
- `scripts/gen-agent-files.mjs` — generates `robots.txt`, `llms.txt`, `auth.md`, all `.well-known/*` files, `js/webmcp.js`, and `vercel.json` from `site.js`. Runs automatically before every build (`prebuild` script). Never hand-edit its output — edit the config instead.
- `scripts/crosscheck.mjs` — pre-ship validation (single H1, JSON-LD validity, agent-ready files present, no plaintext emails, forms use the correct CORS method, etc). Boots a local server on port 4319.
- `scripts/gen-placeholders.mjs` — generates the SVG placeholder product images currently in use.

## Live placeholders — must be set before real launch

| Placeholder | Where | Effect while unset |
|---|---|---|
| `FORMS.web3formsKey` | `src/config/site.js` | Forms skip the network call and redirect straight to the thank-you page — **no order/contact email is actually sent**. Get a free key at [web3forms.com](https://web3forms.com). |
| Tawk.to property/widget ID | `CHAT.channels` in `src/config/site.js` | Chat widget script never loads (checked for the `PENDING` marker). |
| `SITE.contactEmail` / `SITE.orderEmail` | `src/config/site.js` | Currently set to a placeholder inbox — replace with the real business inbox that should receive orders and messages. |
| Product photos | `assets/product-photos/` + `PRODUCTS[].images` | Every product currently shows a plain SVG placeholder graphic instead of a real photo. |

## Adding real product photos

1. Add photos to `assets/product-photos/`, named to match each product slug (e.g. `club-car-onward-4-passenger-electric.jpg`), ideally 2000px+ on a plain white background.
2. This scaffold ships without the full `sharp`-based image pipeline described in the WebForge skill (trim/canvas/compression) — for now, manually convert to WebP and place the result in `public/images/<slug>.webp`, matching the filename referenced in `PRODUCTS[].images` in `src/config/site.js` (change the extension there from `.svg` to `.webp`).
3. Rebuild (`npm run build`) and re-run `npm run crosscheck`.

## Deploying (Vercel via GitHub)

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/kings1876/golfcartbuy.git
git push -u origin main
```

Then in Vercel: **Add New → Project → import the repo → Framework Preset: Next.js → Deploy.**
`vercel.json` (generated) supplies security headers, the www→apex redirect, and the agent-ready `Link` header.

### After first deploy

1. Verify the site loads at the Vercel-assigned URL, then connect the `golfcartbuy.com` domain in Vercel's dashboard.
2. Set a real `FORMS.web3formsKey`, commit, push.
3. Set the real Tawk.to ID (or remove the `tawk` channel from `CHAT.channels` if not wanted).
4. Add real product photos (see above).
5. Submit `https://golfcartbuy.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
6. Run `https://isitagentready.com/golfcartbuy.com` to check the agent-ready score.
