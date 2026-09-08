/**
 * Copy shared by both versions of the site.
 *
 * v1 (`src/pages/*.astro`) is a 1:1 replica of the original site and must keep rendering
 * byte-identical output — so the strings here are verbatim, including the original's
 * curly apostrophes and em dashes. v2 (`src/pages/v2/*.astro`) reuses the same data with a
 * different presentation.
 *
 * Images are stored as bare file names: v1 resolves them to `/images/<file>` from `public/`,
 * v2 resolves them through `src/lib/images.ts` so `astro:assets` can optimise them.
 */

export const email = 'info@henrycalligraphy.com';
export const instagramUrl = 'https://www.instagram.com/henrycalligraphy/';
export const tagline = 'There’s a distinctive warmth, that only handwritten notes seem to deliver.';

export const mailto = {
  commission:
    'mailto:info@henrycalligraphy.com?subject=Commission%20inquiry&body=Hello%20Isha%2C%0A%0AI%20would%20like%20to%20inquire%20about%3A%0A%0AOccasion%3A%0ADate%3A%0AQuantity%3A%0A%0AKind%20regards%2C',
  service:
    'mailto:info@henrycalligraphy.com?subject=Service%20inquiry&body=Hello%20Isha%2C%0A%0AI%20would%20like%20to%20inquire%20about%20a%20service.%0A%0AService%20of%20interest%3A%0AEvent%20date%3A%0ADetails%3A%0A%0AKind%20regards%2C',
  product:
    'mailto:info@henrycalligraphy.com?subject=Product%20inquiry&body=Hello%20Isha%2C%0A%0AI%20would%20like%20to%20inquire%20about%20a%20product.%0A%0AProduct%20of%20interest%3A%0AQuantity%3A%0ADetails%3A%0A%0AKind%20regards%2C',
};

/** Main navigation. `match` is the path that marks the link as the current page. */
export const navLinks = [
  { href: '/services', label: 'Services', match: '/services' },
  { href: '/products', label: 'Products', match: '/products' },
  { href: '/previous-projects', label: 'Projects', match: '/previous-projects' },
  { href: '/about', label: 'About', match: '/about' },
  { href: '/#inquiry', label: 'Contact', match: '/' },
];

const serviceItems = {
  calligraphy: [
    'Wedding invitations & envelopes',
    'Place cards and menus',
    'Vows, letters and poems',
  ],
  engraving: ['Glassware and bottles', 'Perfume flacons & leather', 'Jewellery and gifting'],
  hotFoil: ['Gold, silver and copper foil', 'Stationery and packaging', 'Branded event details'],
};

/** The three service cards on the home page. */
export const homeServices = [
  {
    file: 'calligraphy-menu.jpg',
    alt: 'Service photograph — copperplate calligraphy menu card',
    position: 'object-[50%_55%]',
    title: 'Calligraphy',
    items: serviceItems.calligraphy,
  },
  {
    file: 'engraving-glass.jpg',
    alt: 'Service photograph — engraved glass and metal',
    position: 'object-[50%_62%]',
    title: 'Engraving',
    items: serviceItems.engraving,
  },
  {
    file: 'hot-foil-notebook.jpg',
    alt: 'Service photograph — hot foil stamping on notebook',
    position: 'object-[50%_70%]',
    title: 'Hot foil',
    items: serviceItems.hotFoil,
  },
];

/**
 * The three sections on the services page. Same items, different photography and alt text.
 *
 * `position` is used by v2 only. These are 2:3 portraits shown in a 3:2 frame, so only ~44%
 * of the image height survives the crop and each photo needs its own focal point — centring
 * the notebook cuts the gold foil lettering in half. v1 keeps its own hardcoded classes.
 */
export const serviceSections = [
  {
    id: 'calligraphy',
    title: 'Calligraphy',
    file: 'calligraphy-menu.jpg',
    alt: 'Handwritten copperplate calligraphy menu card on a dinner plate',
    reversed: false,
    position: 'object-center',
    items: serviceItems.calligraphy,
  },
  {
    id: 'engraving',
    title: 'Engraving',
    file: 'engraving-glass.jpg',
    alt: 'Crystal wine glass engraved with the name Milo',
    reversed: true,
    position: 'object-[50%_55%]',
    items: serviceItems.engraving,
  },
  {
    id: 'hot-foil',
    title: 'Hot foil',
    file: 'hot-foil-notebook.jpg',
    alt: 'Black notebook hot foiled with Henry Calligraphy in gold',
    reversed: false,
    position: 'object-[50%_75%]',
    items: serviceItems.hotFoil,
  },
];

/**
 * Selected commissions. The original site shows these as empty placeholder tiles; v2 pairs each
 * one with an illustrative photograph from the studio's existing library.
 * TODO: replace `file` with real photography of each commission when it becomes available.
 */
export const projects = [
  {
    title: 'Wedding stationery suite',
    tag: 'Calligraphy',
    text: 'Copperplate place cards, menus and envelopes for an intimate spring wedding.',
    file: 'calligraphy-menu.jpg',
  },
  {
    title: 'Brand activation',
    tag: 'Live calligraphy',
    text: 'On-site personalisation of leather goods for a luxury fragrance launch.',
    file: 'live-waxseal.jpg',
  },
  {
    title: 'Engraved keepsakes',
    tag: 'Engraving',
    text: 'Perfume flacons and glassware hand-engraved with names and short messages.',
    file: 'engraving-glass.jpg',
  },
  {
    title: 'Hot foil event details',
    tag: 'Hot foil',
    text: 'Gold-foiled menus and place cards for a seated corporate dinner.',
    file: 'hot-foil-notebook.jpg',
  },
  {
    title: 'Bespoke vow booklets',
    tag: 'Calligraphy',
    text: 'Hand-lettered vow books and love letters written in classic Copperplate.',
    file: 'studio-orders.jpg',
  },
  {
    title: 'Private celebration',
    tag: 'Studio order',
    text: 'A complete stationery set designed around pressed florals from the Pétalia Collection.',
    file: 'petalia-bespoke.jpg',
  },
];

/** Pétalia collection gallery. */
export const gallery = [
  { file: 'jardin-violet-carnation.jpg', alt: 'Jardin Violet - Carnation' },
  { file: 'jardin-violet-sweet-pea.jpg', alt: 'Jardin Violet - Sweet Pea' },
  { file: 'jardin-violet-hydrangea.jpg', alt: 'Jardin Violet - Hydrangea' },
  { file: 'jardin-violet-lisa.jpg', alt: 'Jardin Violet - Lisa' },
  { file: 'zanzibar-marigold.jpg', alt: 'The Zanzibar Collection - Marigold' },
  { file: 'bespoke-petalia-lucien.jpg', alt: 'Bespoke Pétalia' },
  { file: 'bespoke-petalia-shinko.jpg', alt: 'Bespoke Pétalia x' },
  { file: 'bespoke-petalia-horloge.jpg', alt: 'Bespoke Pétalia Horloge' },
  { file: 'save-our-date-15.jpg', alt: 'Marry Me Collection' },
  { file: 'new-elan.jpg', alt: 'New Élan' },
];

/* --------------------------------------------------------------------------
 * v2 only. Every line below is drawn from copy that already exists elsewhere
 * on the site (the home page sections and the Terms and Conditions page), so
 * the redesign adds structure without inventing claims.
 * -------------------------------------------------------------------------- */

/** Replaces the original's four empty "Client name" placeholders. */
export const credentials = [
  { label: 'Based in', value: 'Breda, the Netherlands' },
  { label: 'Speciality', value: 'Copperplate calligraphy' },
  { label: 'Available for', value: 'Live events & studio orders' },
  { label: 'Also offering', value: 'Engraving & hot foil' },
];

/** How a commission works. Sourced from Terms sections 2, 3 and 5. */
export const process = [
  {
    step: '01',
    title: 'Inquiry',
    text: 'Every commission is bespoke and begins with an enquiry. Tell me about the occasion, the pieces and the date.',
  },
  {
    step: '02',
    title: 'Quote & design',
    text: 'You receive a tailored proposal based on materials, quantity, complexity and turnaround time. Quotes are valid for 14 days.',
  },
  {
    step: '03',
    title: 'Handcrafted',
    text: 'Written and finished in the studio, or personalised live at your event. Work begins once the agreed deposit has been received.',
  },
  {
    step: '04',
    title: 'Delivered',
    text: 'Crafted at the pace good work requires. Delivery costs and methods are agreed before final payment.',
  },
];

/** Frequently asked questions. Every answer is taken from the Terms page or the home page. */
export const faq = [
  {
    q: 'How do I commission a piece?',
    a: 'All commissions are bespoke and begin with an enquiry. Tell me about the occasion, the pieces and the date, and you receive a tailored proposal based on materials, quantity, complexity and turnaround time.',
  },
  {
    q: 'How long is a quote valid?',
    a: 'Quotes are valid for 14 days unless otherwise stated.',
  },
  {
    q: 'How does payment work?',
    a: 'A deposit may be required to confirm your booking or commission. Full payment terms are outlined in your quote or invoice, and work on custom pieces begins once the agreed deposit or payment has been received.',
  },
  {
    q: 'What are the turnaround times?',
    a: 'Turnaround times are estimates and depend on project scope, material availability and current workload. Expected timelines are communicated clearly and you are kept informed of any changes.',
  },
  {
    q: 'Can I cancel or change an order?',
    a: 'Because each item is made to order, cancellations and refunds are not guaranteed. If you need to cancel or amend an order, please get in touch as soon as possible — any refund or partial credit is considered case by case.',
  },
  {
    q: 'Do you work on location?',
    a: 'Yes. With live calligraphy, guests watch their names, bottles or bags being personalised in ink at your event — a memorable detail for brand activations, weddings and private celebrations.',
  },
  {
    q: 'What is the Pétalia Collection?',
    a: 'Pétalia is a curated collection of fine paper and card designs, created from real flowers that have been carefully pressed, preserved and composed by hand. Each piece can be individually embellished with hand-applied calligraphy for a personal finish.',
  },
  {
    q: 'Can I use the artwork commercially?',
    a: 'Commissioned artwork is for personal or event use as agreed. Commercial reproduction or resale without written permission is not allowed.',
  },
];

/** Subject shortcuts on the contact page; the value lands in the form's subject field. */
export const contactSubjects = [
  {
    value: 'service',
    label: 'A service',
    text: 'Calligraphy, engraving or hot foil — for a wedding, event or brand.',
  },
  {
    value: 'product',
    label: 'A product',
    text: 'Tricolore Oysters, personalised notebooks and other paper goods.',
  },
  {
    value: 'petalia',
    label: 'Pétalia Collection',
    text: 'Botanical paper and cards made from real pressed flowers.',
  },
];

/** Set expectations before someone starts typing. Every line is drawn from the Terms page. */
export const expectations = [
  {
    title: 'A quote made for your project',
    text: 'A final quote is based on materials, quantity, complexity and turnaround time. Quotes are valid for 14 days unless otherwise stated.',
  },
  {
    title: 'A deposit confirms the booking',
    text: 'Full payment terms are outlined in your quote or invoice. Work on custom pieces begins once the agreed deposit has been received.',
  },
  {
    title: 'Timelines agreed up front',
    text: 'Turnaround times depend on project scope, material availability and current workload. Delivery costs and methods are agreed before final payment.',
  },
];
