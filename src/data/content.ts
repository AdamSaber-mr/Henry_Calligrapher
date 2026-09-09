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
 *
 * `title`, `tag` and `text` are rendered verbatim by v1 (four times per entry, in
 * `src/pages/previous-projects.astro`), so the client's copy corrections live in the optional
 * `titleV2` / `tagV2` / `textV2` overrides instead — same additive pattern as
 * `serviceSections[].position`. `file`, `credit` and `gallery` are read by v2 only.
 */
type Project = {
  /** Rendered verbatim by v1 — do not edit these three to change v2 copy. */
  title: string;
  tag: string;
  text: string;
  /** v2 only, all optional. */
  file: string;
  titleV2?: string;
  tagV2?: string;
  textV2?: string;
  alt?: string;
  credit?: string;
  /** object-position for the card crop, as on `homeServices`. Defaults to centre. */
  position?: string;
  /** Key into `projectGalleries`; a card with one opens a lightbox. */
  gallery?: string;
};

export const projects: Project[] = [
  {
    title: 'Wedding stationery suite',
    tag: 'Calligraphy',
    text: 'Copperplate place cards, menus and envelopes for an intimate spring wedding.',
    file: 'calligraphy-menu.jpg',
    gallery: 'wedding-stationery',
  },
  {
    title: 'Brand activation',
    tag: 'Live calligraphy',
    text: 'On-site personalisation of leather goods for a luxury fragrance launch.',
    file: 'live-waxseal.jpg',
    textV2: 'On-site personalisation of private gatherings and events.',
    gallery: 'brand-activation',
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
    // 2:3 portrait in a 4:3 frame, so most of the height is cropped away. Centring lands on
    // the wood and the chess set; the same shift the home page uses brings the notebook back.
    position: 'object-[50%_70%]',
    tagV2: 'Hot foiling',
    titleV2: 'Hot foiling event details',
    textV2: 'Bespoke leather gifts',
  },
  {
    title: 'Bespoke vow booklets',
    tag: 'Calligraphy',
    text: 'Hand-lettered vow books and love letters written in classic Copperplate.',
    file: 'studio-orders.jpg',
    titleV2: 'Birth cards and announcements',
    textV2: 'Hand-lettered birth announcements and keepsake cards in classic Copperplate.',
  },
  {
    title: 'Private celebration',
    tag: 'Studio order',
    text: 'A complete stationery set designed around pressed florals from the Pétalia Collection.',
    file: 'tefaf-alexander-adler.jpg',
    textV2: 'Bespoke details for your event.',
    alt: 'Copperplate place card for Alexander Adler at a TEFAF Maastricht dinner',
    credit: 'Photos by Maison Rowena. Courtesy of TEFAF.',
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

/**
 * Brands the studio has worked with. Isha supplied these three; the rest follow once the site
 * is live and she can point each brand at the page before asking permission.
 * `logo` is a file under `src/assets/images/trusted/`; TEFAF is drawn inline as an SVG so it
 * stays crisp and inherits the ink colour.
 */
export const trustedBy = [
  // TEFAF ships a clean SVG wordmark; it is inlined in the component so it stays vector-sharp
  // and picks up the ink colour. The rest are PNGs under `src/assets/images/trusted/`.
  { name: 'TEFAF', href: 'https://www.tefaf.com/', height: 'h-4 sm:h-5' },
  {
    name: 'House of Flux',
    href: 'https://houseofflux.com/',
    logo: 'trusted/house-of-flux.png',
    height: 'h-12 sm:h-14',
  },
  {
    name: 'Dévents Event Agency',
    href: 'https://www.devents-agency.com',
    logo: 'trusted/devents.png',
    height: 'h-9 sm:h-10',
  },
  {
    name: 'The Perfect',
    href: 'https://the-perfect.nl/',
    logo: 'trusted/the-perfect.png',
    height: 'h-8 sm:h-9',
  },
];

/**
 * Photo sets behind the project cards on `/v2/previous-projects`. Keyed by the `gallery` field
 * on a `projects` entry; a card without one stays a plain, non-clickable tile.
 */
type GalleryPhoto = { file: string; alt: string; credit?: string };

export const projectGalleries: Record<string, GalleryPhoto[]> = {
  'wedding-stationery': [
    { file: 'wedding-table-menu.jpg', alt: 'Garden table set with a calligraphed menu and candles' },
    { file: 'wedding-oyster-placecard.jpg', alt: 'Gilded oyster shell place card resting on a handwritten menu' },
    { file: 'wedding-long-table.jpg', alt: 'Long candlelit wedding table laid with place cards' },
  ],
  'brand-activation': [
    { file: 'activation-mandarin-oriental.jpg', alt: 'Calligraphed welcome card for a Mandarin Oriental spa guest' },
    { file: 'activation-welcome-cards.jpg', alt: 'Fan of handwritten welcome cards beside a Henry Calligraphy folder' },
    { file: 'activation-boutique.jpg', alt: 'Guest leaving a boutique event with a personalised gift bag' },
    { file: 'activation-place-setting.jpg', alt: 'Place card being set at a private dinner table' },
    { file: 'activation-jansz-eva.jpg', alt: 'Handwritten place card and menu beside peonies' },
    { file: 'activation-wax-seal.jpg', alt: 'Guest holding a monogrammed envelope closed with a wax seal' },
  ],
};

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
    title: 'Delivered or Orchestration Service',
    text: 'Delivered by shipping/mail or delivered in person with our Orchestration Service: instead of simply delivering it, we will personally bring the pieces and help you orchestrate and place them.',
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
