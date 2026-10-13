// ★ SINGLE SOURCE OF TRUTH ★
// Every domain-bearing file, nav link, schema block, and sitemap entry is generated from this file.
// Never hand-edit generated output (llms.txt, .well-known/*, vercel.json) — edit this config instead.

export const SITE = {
  name: 'Golf Cart Buy',
  legalName: 'Golf Cart Buy',
  tagline: 'Premium Golf Carts, Delivered Australia-Wide',
  domain: 'golfcartbuy.com',
  target: 'vercel',
  description:
    'Golf Cart Buy sells used Yamaha Drive2 golf carts in Australia, in electric and petrol, with free Australia-wide shipping.',
  foundingYear: 2017,
  areaServed: 'Australia',
  shipsTo: 'Australia-wide (all states and territories)',
  locale: 'en-AU',
  currency: 'AUD',
  contactEmail: 'koloonjo@gmail.com',
  orderEmail: 'koloonjo@gmail.com',
  phone: '',
  address: {
    country: 'AU',
  },
  minOrder: 5250, // AUD — US$3,500 at the ~1.5 AUD/USD rate used for all prices
  freeShippingThreshold: 0, // free shipping on all orders
  flatShippingFee: 23, // fallback fee, not currently applied since shipping is free site-wide
  cryptoDiscountPercent: 10,
  paymentMethods: ['crypto-BTC', 'crypto-USDT'],
  ageRestriction: 'none',
  productType: 'Golf carts, golf cars, and golf cart accessories',
  sameAs: [],
}

export const FORMS = {
  provider: 'web3forms',
  web3formsKey: 'YOUR-WEB3FORMS-KEY', // PENDING — replace before launch, see README
  resendFrom: '',
  turnstileSiteKey: '',
}

export const CHAT = {
  channels: [
    { type: 'tawk', value: 'PENDING_PROPERTY_ID/PENDING_WIDGET_ID' }, // PENDING — replace before launch
  ],
}

export const NAV = ['shop', 'blog', 'about', 'contact', 'faq']

export const CATEGORIES = [
  {
    slug: 'new-golf-carts',
    name: 'New Golf Carts',
    description:
      'Brand-new electric and petrol golf carts from Club Car, EZGO, and Yamaha, ready to ship Australia-wide.',
    subcategories: ['Electric', 'Petrol'],
  },
  {
    slug: 'used-golf-carts',
    name: 'Used Golf Carts',
    description:
      'Used golf carts listed with their year, condition and what is included.',
    subcategories: ['Electric', 'Petrol'],
  },
  {
    slug: 'club-car',
    name: 'Club Car',
    description:
      'Club Car golf carts, including the Onward, Tempo, and Precedent lines, new and used.',
    subcategories: [],
  },
  {
    slug: 'ezgo',
    name: 'EZGO',
    description:
      'EZGO golf carts, including the Freedom RXV, Express S4, and TXT lines, new and used.',
    subcategories: [],
  },
  {
    slug: 'yamaha',
    name: 'Yamaha',
    description: 'Yamaha golf carts, including the Drive2 QuieTech EFI line.',
    subcategories: [],
  },
  {
    slug: 'accessories-parts',
    name: 'Accessories & Parts',
    description:
      'Lift kits, tires, batteries, and other golf cart accessories and parts.',
    subcategories: [],
  },
]

export const PRODUCTS = [
  {
    slug: 'yamaha-drive2-lithium-ptv-2022-ex-demo',
    name: '2022 Yamaha Drive2 Lithium PTV (Ex-Demo)',
    price: 17500,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'Ex-Demo',
    short: 'Ex-demo 2022 Yamaha Drive2 Lithium PTV with only 4 hours of use.',
    description:
      'An ex-demo 2022 Yamaha Drive2 Lithium PTV in excellent condition, with only 4 hours of use. Lithium-powered used carts are rarely available. Includes head and tail lights, foot horn, rubber floor mat, large cooler box, dual sand bottles, rear-view mirror, battery charger and a spare key.',
    images: ['yamaha-drive2-lithium-ptv-2022-ex-demo.svg'],
  },
  {
    slug: 'yamaha-drive2-quietech-efi-2024-evergreen',
    name: '2024 Yamaha Drive2 QuieTech EFI Petrol (Evergreen)',
    price: 11000,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: '2024 Yamaha Drive2 QuieTech EFI petrol golf car in Evergreen, excellent condition.',
    description:
      'A 2024 Yamaha Drive2 QuieTech EFI petrol golf car in Evergreen, in excellent condition. Includes a full service, a new fold-down windscreen, a spare key, your choice of 8 inch wheel trims (gold, silver, white or chrome) and 2 sand bucket rings.',
    images: ['yamaha-drive2-quietech-efi-2024-evergreen.svg'],
  },
  {
    slug: 'yamaha-drive2-quietech-efi-2022-evergreen',
    name: '2022 Yamaha Drive2 QuieTech EFI Petrol (Evergreen)',
    price: 9900,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: '2022 Yamaha Drive2 QuieTech EFI petrol golf car in Evergreen, excellent condition.',
    description:
      'A 2022 Yamaha Drive2 QuieTech EFI petrol golf car in Evergreen, in excellent condition. Includes a full service, new battery, dry mesh seat covers, gold 8 inch wheel trims, a new fold-down windscreen, a sand bottle, a cooler box and a spare key.',
    images: ['yamaha-drive2-quietech-efi-2022-evergreen.svg'],
  },
  {
    slug: 'yamaha-drive2-quietech-2018-moonstone-silver',
    name: '2018 Yamaha Drive2 QuieTech Petrol (Moonstone Silver)',
    price: 7800,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: '2018 Yamaha Drive2 QuieTech petrol golf car in Moonstone Silver, good condition.',
    description:
      'A 2018 Yamaha Drive2 QuieTech petrol golf car in Moonstone Silver, in good condition. Includes a full service, new battery, wheel trims (four colours available), a fold-down windscreen, a sand bucket ring and a spare key.',
    images: ['yamaha-drive2-quietech-2018-moonstone-silver.svg'],
  },
  {
    slug: 'yamaha-drive2-ac-electric-2022-white',
    name: '2022 Yamaha Drive2 AC Electric (White)',
    price: 9500,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: '2022 white Yamaha Drive2 AC 48V electric golf car with a new set of Trojan T875 batteries.',
    description:
      'A 2022 white Yamaha Drive2 AC 48V electric golf car in excellent condition, with a new set of Trojan T875 batteries. Includes a full service, charger, 8 inch silver wheel trims, a fold-down windscreen, a sand bucket ring and a spare key.',
    images: ['yamaha-drive2-ac-electric-2022-white.svg'],
  },
  {
    slug: 'yamaha-drive2-quietech-2022-white',
    name: '2022 Yamaha Drive2 QuieTech Petrol (White)',
    price: 9100,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: '2022 white Yamaha Drive2 QuieTech petrol golf car in very good condition.',
    description:
      'A 2022 white Yamaha Drive2 QuieTech petrol golf car in very good condition. Includes a full service, new battery, dry mesh seat covers, gold 8 inch wheel trims, a fold-down windscreen, a sand bucket ring and a spare key. Note: there is a slight crack in the bagwell.',
    images: ['yamaha-drive2-quietech-2022-white.svg'],
  },
  {
    slug: 'yamaha-drive2-quietech-efi-2022-bronze-metallic',
    name: '2022 Yamaha Drive2 QuieTech EFI Petrol (Bronze Metallic)',
    price: 9250,
    category: 'used-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: '2022 Yamaha Drive2 QuieTech EFI petrol golf car in Bronze Metallic, very good condition.',
    description:
      'A 2022 Yamaha Drive2 QuieTech EFI petrol golf car in Bronze Metallic, in very good condition. Includes a full service, a new seat, a fold-down windscreen, a spare key, your choice of 8 inch wheel trims (gold, silver, white or chrome) and 2 sand bucket rings.',
    images: ['yamaha-drive2-quietech-efi-2022-bronze-metallic.svg'],
  },
]

export const POSTS = [
  {
    slug: 'electric-vs-gas-golf-carts',
    title: 'Electric vs. Petrol Golf Carts: Which Is Right for You in 2026?',
    date: '2026-01-15',
    excerpt:
      'A practical comparison of electric and petrol golf carts covering range, maintenance, noise, and total cost of ownership.',
    body: [
      'Choosing between an electric and a petrol golf cart comes down to how you plan to use it. Electric golf cars for sale generally cost less to run day to day, since charging is cheaper than fuel and there is no engine oil to change. Petrol golf carts trade that lower running cost for longer range between fill-ups and stronger performance for towing or hilly terrain.',
      'Electric golf carts are quieter, which matters if you are using one inside a neighbourhood or resort with noise restrictions. Petrol golf carts tend to be preferred on larger properties, farms, and job sites where refuelling is faster than waiting on a charge.',
      'Maintenance also differs: electric carts have fewer moving parts and no oil changes, while petrol carts need the same basic upkeep as a small engine. Both platforms, when bought from established brands like Club Car, EZGO, and Yamaha, are built to last many years with normal care.',
      'If you are shopping golf carts for sale and are unsure which fits your situation, our team can walk through your typical use case — commute distance, terrain, and how many passengers you carry — to help you land on the right option.',
    ],
    relatedProducts: ['yamaha-drive2-ac-electric-2022-white', 'yamaha-drive2-quietech-efi-2022-evergreen'],
  },
  {
    slug: 'club-car-vs-ezgo-vs-yamaha',
    title: 'Club Car vs. EZGO vs. Yamaha: Comparing the Top Golf Cart Brands',
    date: '2026-02-03',
    excerpt:
      'How Club Car, EZGO, and Yamaha golf carts compare on ride quality, availability of parts, and resale value.',
    body: [
      'Club Car, EZGO, and Yamaha make up the vast majority of golf carts for sale in Australia, and each has a distinct reputation. Club Car golf carts are known for ride comfort and a wide dealer network, which makes finding club car golf carts dealers and parts straightforward almost anywhere.',
      'EZGO golf carts are known for straightforward mechanicals and strong value, particularly on the TXT and RXV platforms, which is why used EZGO carts hold their value well on the resale market.',
      'Yamaha golf carts, particularly models with QuieTech EFI engines, are often chosen by buyers who want petrol-cart range with noticeably less engine noise than a typical petrol cart.',
      'There is no single "best" brand — the right choice depends on whether you prioritize ride comfort, parts availability, resale value, or noise level.',
    ],
    relatedProducts: ['yamaha-drive2-quietech-efi-2024-evergreen', 'yamaha-drive2-lithium-ptv-2022-ex-demo'],
  },
  {
    slug: 'new-vs-used-golf-carts',
    title: 'New vs. Used Golf Carts: How to Choose the Best Value',
    date: '2026-03-01',
    excerpt:
      'What to expect from new golf carts for sale versus used golf carts, and how to decide which is the better value for you.',
    body: [
      'A new golf cart gives you the latest features, a full-length warranty period, and zero prior wear, which matters if you plan to keep the cart for many years. New Club Car, EZGO, and Yamaha models are available in both electric and petrol configurations.',
      'A used golf cart, when it has been properly serviced and looked after, can offer most of the reliability of a new cart at a meaningfully lower price. This is especially attractive for buyers who want a second cart, a backup unit, or are trying a golf cart for the first time.',
      'When shopping used golf carts for sale, ask specifically whether the unit has been serviced, what was replaced (batteries are the most common wear item on electric carts), and whether there is any remaining warranty coverage.',
      'Our carts ship Australia-wide, so the decision usually comes down to budget and how long you plan to keep the cart.',
    ],
    relatedProducts: ['yamaha-drive2-quietech-2018-moonstone-silver', 'yamaha-drive2-quietech-2022-white'],
  },
  {
    slug: 'golf-cart-buying-guide',
    title: 'Golf Cart Buying Guide: What to Know Before You Buy',
    date: '2026-03-20',
    excerpt:
      'A step-by-step guide to buying a golf cart online, from choosing electric vs. petrol to understanding shipping and payment.',
    body: [
      'Buying a golf cart online is straightforward once you know what to check: passenger capacity, electric vs. petrol, new vs. used, and what is included with shipping. Golf Cart Buy ships golf carts Australia-wide, including to buyers looking for a golf cart for sale in Sydney, Melbourne, Brisbane, Perth and other major cities, at no extra shipping cost.',
      'Start by deciding how many passengers you need to carry regularly — 2-passenger carts are more affordable and easier to store, while 4- and 6-passenger carts suit families, resorts, and larger properties.',
      'Next, decide between electric and petrol (see our electric vs. petrol comparison) based on your typical use case and noise tolerance.',
      'Golf Cart Buy accepts crypto payment (BTC and USDT) with a 10% discount applied, and has a $5,250 AUD minimum order. Our order form walks you through selecting your cart and confirming details before checkout.',
    ],
    relatedProducts: ['yamaha-drive2-ac-electric-2022-white', 'yamaha-drive2-quietech-efi-2022-bronze-metallic'],
  },
]

export const FAQS = [
  {
    q: 'What is Golf Cart Buy?',
    a: 'Golf Cart Buy sells used Yamaha Drive2 golf carts in Australia, in electric and petrol, with free Australia-wide shipping, and was founded in 2017.',
  },
  {
    q: 'What is the minimum order amount?',
    a: 'The minimum order amount at Golf Cart Buy is $5,250 AUD, which all of our current golf cart listings exceed.',
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes, Golf Cart Buy offers free shipping on all orders Australia-wide, with no minimum threshold required.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Golf Cart Buy currently accepts cryptocurrency payments, including Bitcoin (BTC) and USDT.',
  },
  {
    q: 'Is there a discount for paying with crypto?',
    a: 'Yes, orders paid with crypto (BTC or USDT) receive a 10% discount off the listed price.',
  },
  {
    q: 'Do you ship Australia-wide?',
    a: 'Yes, Golf Cart Buy ships golf carts and accessories to every Australian state and territory.',
  },
  {
    q: 'What is the difference between new and used golf carts?',
    a: 'New golf carts are unused, while used golf carts have prior wear but are priced lower. Every used cart we list shows its year, condition and what is included.',
  },
  {
    q: 'Do you sell both electric and petrol golf carts?',
    a: 'Yes. Our current used Yamaha Drive2 stock includes both electric and petrol golf carts.',
  },
]

// Categories that currently have at least one product — used for nav, home/shop grids and listings.
export const ACTIVE_CATEGORIES = CATEGORIES.filter((c) =>
  PRODUCTS.some((p) => p.category === c.slug || p.brand === c.slug)
)
