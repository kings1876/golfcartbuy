// ★ SINGLE SOURCE OF TRUTH ★
// Every domain-bearing file, nav link, schema block, and sitemap entry is generated from this file.
// Never hand-edit generated output (llms.txt, .well-known/*, vercel.json) — edit this config instead.

export const SITE = {
  name: 'Golf Cart Buy',
  legalName: 'Golf Cart Buy',
  tagline: 'Premium Golf Carts, Delivered Nationwide',
  domain: 'golfcartbuy.com',
  target: 'vercel',
  description:
    'Golf Cart Buy is a USA-based retailer of new and used electric and gas golf carts, offering Club Car, EZGO, and Yamaha models with nationwide shipping.',
  foundingYear: 2017,
  foundingLocation: 'United States',
  areaServed: 'United States',
  shipsTo: 'Nationwide (all 50 US states)',
  locale: 'en',
  currency: 'USD',
  contactEmail: 'koloonjo@gmail.com',
  orderEmail: 'koloonjo@gmail.com',
  phone: '',
  address: {
    country: 'US',
  },
  minOrderUsd: 3500,
  freeShippingThresholdUsd: 0, // free shipping on all orders
  flatShippingFeeUsd: 15, // fallback fee, not currently applied since shipping is free site-wide
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
      'Brand-new electric and gas golf carts from Club Car, EZGO, and Yamaha, ready to ship nationwide.',
    subcategories: ['Electric', 'Gas'],
  },
  {
    slug: 'used-golf-carts',
    name: 'Used Golf Carts',
    description:
      'Inspected, refurbished used golf carts at a lower price point, covering the same trusted brands.',
    subcategories: ['Electric', 'Gas'],
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
    slug: 'club-car-onward-4-passenger-electric',
    name: 'Club Car Onward 4-Passenger Electric Golf Cart',
    price: 8995,
    category: 'new-golf-carts',
    brand: 'club-car',
    badge: 'Popular',
    short: 'A new 4-passenger electric Club Car Onward, built for comfort and everyday reliability.',
    description:
      'The Club Car Onward 4-Passenger Electric Golf Cart pairs a quiet, efficient electric drivetrain with a comfortable 4-passenger layout, making it a popular choice for neighborhood cruising, golf course use, and light utility work. It ships new, fully assembled, and ready to charge on arrival.',
    images: ['club-car-onward-4-passenger-electric.svg'],
  },
  {
    slug: 'club-car-tempo-2-passenger-electric',
    name: 'Club Car Tempo 2-Passenger Electric Golf Cart',
    price: 7495,
    category: 'new-golf-carts',
    brand: 'club-car',
    badge: 'New',
    short: 'A compact new 2-passenger electric Club Car Tempo with modern styling.',
    description:
      'The Club Car Tempo 2-Passenger Electric Golf Cart is a new, compact electric cart designed for tight turning radiuses and everyday two-passenger trips. Its electric drivetrain keeps operating costs low and its modern body styling sets it apart from older cart designs.',
    images: ['club-car-tempo-2-passenger-electric.svg'],
  },
  {
    slug: 'ezgo-freedom-rxv-electric',
    name: 'EZGO Freedom RXV Electric Golf Cart',
    price: 7995,
    category: 'new-golf-carts',
    brand: 'ezgo',
    badge: 'Best Value',
    short: 'A new electric EZGO Freedom RXV with independent suspension.',
    description:
      'The EZGO Freedom RXV Electric Golf Cart is a new electric cart built on the RXV chassis with independent suspension for a smoother ride over uneven terrain. It is a strong value pick among new electric golf carts.',
    images: ['ezgo-freedom-rxv-electric.svg'],
  },
  {
    slug: 'ezgo-express-s4-gas',
    name: 'EZGO Express S4 Gas Golf Cart',
    price: 9495,
    category: 'new-golf-carts',
    brand: 'ezgo',
    badge: 'Premium',
    short: 'A new 4-passenger gas EZGO Express S4 with extended range.',
    description:
      'The EZGO Express S4 Gas Golf Cart is a new 4-passenger gas-powered cart built for extended range and towing capability, making it a strong option for larger properties, farms, and long golf course rounds.',
    images: ['ezgo-express-s4-gas.svg'],
  },
  {
    slug: 'yamaha-drive2-quietech-efi-gas',
    name: 'Yamaha Drive2 QuieTech EFI Gas Golf Cart',
    price: 8495,
    category: 'new-golf-carts',
    brand: 'yamaha',
    badge: 'none',
    short: 'A new Yamaha Drive2 with QuieTech EFI for a quieter gas engine.',
    description:
      'The Yamaha Drive2 QuieTech EFI Gas Golf Cart uses Yamaha’s QuieTech EFI engine technology to deliver the range of a gas engine with noticeably lower noise than a typical gas golf cart, new and ready to ship.',
    images: ['yamaha-drive2-quietech-efi-gas.svg'],
  },
  {
    slug: 'used-club-car-precedent-electric',
    name: 'Used Club Car Precedent Electric Golf Cart (Refurbished)',
    price: 5495,
    category: 'used-golf-carts',
    brand: 'club-car',
    badge: 'Sale',
    short: 'An inspected, refurbished used Club Car Precedent electric golf cart.',
    description:
      'This Used Club Car Precedent Electric Golf Cart has been inspected and refurbished, offering the reliable Club Car Precedent platform at a lower price point than new. A great option for buyers who want a proven electric cart without the new-cart price.',
    images: ['used-club-car-precedent-electric.svg'],
  },
  {
    slug: 'used-ezgo-txt-gas',
    name: 'Used EZGO TXT Gas Golf Cart (Refurbished)',
    price: 4995,
    category: 'used-golf-carts',
    brand: 'ezgo',
    badge: 'Sale',
    short: 'An inspected, refurbished used EZGO TXT gas golf cart.',
    description:
      'This Used EZGO TXT Gas Golf Cart has been inspected and refurbished. The EZGO TXT is one of the most widely used gas golf cart platforms, and this unit offers that reliability at a used-cart price.',
    images: ['used-ezgo-txt-gas.svg'],
  },
  {
    slug: 'custom-6-passenger-electric-limo',
    name: 'Custom 6-Passenger Electric Golf Cart Limo',
    price: 12995,
    category: 'new-golf-carts',
    brand: 'club-car',
    badge: 'Premium',
    short: 'A new stretched 6-passenger electric golf cart limo build.',
    description:
      'The Custom 6-Passenger Electric Golf Cart Limo is a new stretched electric golf cart built to carry six passengers, popular for resorts, gated communities, and large properties that need higher-capacity transport.',
    images: ['custom-6-passenger-electric-limo.svg'],
  },
  {
    slug: 'golf-cart-lift-kit-off-road-tire-package',
    name: 'Golf Cart Lift Kit & Off-Road Tire Package',
    price: 1895,
    category: 'accessories-parts',
    brand: '',
    badge: 'New',
    short: 'A lift kit and off-road tire package that fits most golf cart models.',
    description:
      'This Golf Cart Lift Kit & Off-Road Tire Package raises ride height and adds off-road tires, fitting most common golf cart models. A popular upgrade for owners who use their cart off pavement.',
    images: ['golf-cart-lift-kit-off-road-tire-package.svg'],
  },
]

export const POSTS = [
  {
    slug: 'electric-vs-gas-golf-carts',
    title: 'Electric vs. Gas Golf Carts: Which Is Right for You in 2026?',
    date: '2026-01-15',
    excerpt:
      'A practical comparison of electric and gas golf carts covering range, maintenance, noise, and total cost of ownership.',
    body: [
      'Choosing between an electric and a gas golf cart comes down to how you plan to use it. Electric golf cars for sale generally cost less to run day to day, since charging is cheaper than fuel and there is no engine oil to change. Gas golf carts trade that lower running cost for longer range between fill-ups and stronger performance for towing or hilly terrain.',
      'Electric golf carts are quieter, which matters if you are using one inside a neighborhood or resort with noise restrictions. Gas golf carts tend to be preferred on larger properties, farms, and job sites where refueling is faster than waiting on a charge.',
      'Maintenance also differs: electric carts have fewer moving parts and no oil changes, while gas carts need the same basic upkeep as a small engine. Both platforms, when bought from reputable brands like Club Car, EZGO, and Yamaha, are built to last many years with normal care.',
      'If you are shopping golf carts for sale and are unsure which fits your situation, our team can walk through your typical use case — commute distance, terrain, and how many passengers you carry — to help you land on the right option.',
    ],
    relatedProducts: ['club-car-onward-4-passenger-electric', 'ezgo-express-s4-gas'],
  },
  {
    slug: 'club-car-vs-ezgo-vs-yamaha',
    title: 'Club Car vs. EZGO vs. Yamaha: Comparing the Top Golf Cart Brands',
    date: '2026-02-03',
    excerpt:
      'How Club Car, EZGO, and Yamaha golf carts compare on ride quality, availability of parts, and resale value.',
    body: [
      'Club Car, EZGO, and Yamaha make up the vast majority of golf carts for sale in the United States, and each has a distinct reputation. Club Car golf carts are known for ride comfort and a wide dealer network, which makes finding club car golf carts dealers and parts straightforward almost anywhere.',
      'EZGO golf carts are known for straightforward mechanicals and strong value, particularly on the TXT and RXV platforms, which is why used EZGO carts hold their value well on the resale market.',
      'Yamaha golf carts, particularly models with QuieTech EFI engines, are often chosen by buyers who want gas-cart range with noticeably less engine noise than a typical gas cart.',
      'There is no single "best" brand — the right choice depends on whether you prioritize ride comfort, parts availability, resale value, or noise level. All three brands are available through Golf Cart Buy, new and used.',
    ],
    relatedProducts: ['ezgo-freedom-rxv-electric', 'yamaha-drive2-quietech-efi-gas'],
  },
  {
    slug: 'new-vs-used-golf-carts',
    title: 'New vs. Used Golf Carts: How to Choose the Best Value',
    date: '2026-03-01',
    excerpt:
      'What to expect from new golf carts for sale versus refurbished used golf carts, and how to decide which is the better value for you.',
    body: [
      'A new golf cart gives you the latest features, a full-length warranty period, and zero prior wear, which matters if you plan to keep the cart for many years. New Club Car, EZGO, and Yamaha models are available in both electric and gas configurations.',
      'A used golf cart, when properly inspected and refurbished, can offer most of the reliability of a new cart at a meaningfully lower price. This is especially attractive for buyers who want a second cart, a backup unit, or are trying a golf cart for the first time.',
      'When shopping used golf carts for sale, ask specifically whether the unit has been inspected and refurbished, what was replaced (batteries are the most common wear item on electric carts), and whether there is any remaining warranty coverage.',
      'Both new and used carts ship nationwide from Golf Cart Buy, so the decision usually comes down to budget and how long you plan to keep the cart.',
    ],
    relatedProducts: ['used-club-car-precedent-electric', 'used-ezgo-txt-gas'],
  },
  {
    slug: 'golf-cart-buying-guide',
    title: 'Golf Cart Buying Guide: What to Know Before You Buy',
    date: '2026-03-20',
    excerpt:
      'A step-by-step guide to buying a golf cart online, from choosing electric vs. gas to understanding shipping and payment.',
    body: [
      'Buying a golf cart online is straightforward once you know what to check: passenger capacity, electric vs. gas, new vs. used, and what is included with shipping. Golf Cart Buy ships golf carts nationwide, including to buyers searching for golf cart for sale Chicago and other major metro areas, at no extra shipping cost.',
      'Start by deciding how many passengers you need to carry regularly — 2-passenger carts are more affordable and easier to store, while 4- and 6-passenger carts suit families, resorts, and larger properties.',
      'Next, decide between electric and gas (see our electric vs. gas comparison) based on your typical use case and noise tolerance.',
      'Golf Cart Buy accepts crypto payment (BTC and USDT) with a 10% discount applied, and has a $3,500 minimum order. Our order form walks you through selecting your cart and confirming details before checkout.',
    ],
    relatedProducts: ['club-car-onward-4-passenger-electric', 'used-ezgo-txt-gas'],
  },
]

export const FAQS = [
  {
    q: 'What is Golf Cart Buy?',
    a: 'Golf Cart Buy is a USA-based retailer of new and used electric and gas golf carts, offering Club Car, EZGO, and Yamaha models with nationwide shipping, founded in 2017.',
  },
  {
    q: 'What is the minimum order amount?',
    a: 'The minimum order amount at Golf Cart Buy is $3,500 USD, which covers the vast majority of our golf cart and accessory listings.',
  },
  {
    q: 'Do you offer free shipping?',
    a: 'Yes, Golf Cart Buy offers free shipping on all orders nationwide within the United States, with no minimum threshold required.',
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
    q: 'Do you ship nationwide?',
    a: 'Yes, Golf Cart Buy ships golf carts and accessories to all 50 US states.',
  },
  {
    q: 'What is the difference between new and used golf carts?',
    a: 'New golf carts are unused and come with a full warranty period, while used golf carts are inspected and refurbished before sale and are priced lower than comparable new models.',
  },
  {
    q: 'Do you sell both electric and gas golf carts?',
    a: 'Yes, Golf Cart Buy sells both electric and gas golf carts across Club Car, EZGO, and Yamaha brands, new and used.',
  },
]
