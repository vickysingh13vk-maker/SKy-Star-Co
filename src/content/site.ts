// Production copy sourced verbatim from Sky_Star_Production_Website_Brief.md (v1.0, 3 September 2026).
// [TBC] fields are intentional placeholders pending confirmed company information.

export const siteConfig = {
  name: "Sky Star",
  brand: "SKY STAR",
  tagline: "Trading & sourcing from requirement to delivery.",
  // Set NEXT_PUBLIC_SITE_URL in the host's environment to the live domain.
  // Used for the canonical URL, Open Graph tags, sitemap and robots.txt.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.skystar.example", // [TBC] production domain
  email: null as string | null, // [TBC — Business Email]
  phone: null as string | null, // [TBC — Contact Number]
  whatsappNumber: null as string | null, // [TBC — WhatsApp number, digits only for wa.me link]
  hongKongAddress: null as string | null, // [TBC — Registered Address]
  legalCompanyName: null as string | null, // [TBC — Legal Company Name]
  registrationNumber: null as string | null, // [TBC]
};

export const nav = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "What We Source", href: "#what-we-source" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Sky Star", href: "#why-sky-star" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "TRADING & SOURCING FROM HONG KONG",
  headline: ["Tell us what you need.", "We’ll help source it and get it moving."],
  supporting: [
    "Sky Star helps businesses source products from Asia, coordinate purchasing and arrange delivery to their destination.",
    "From your first requirement to the final shipment, you have one point of contact throughout the process.",
  ],
  primaryCta: "Request a Quote",
  secondaryCta: "Chat on WhatsApp",
  highlights: ["Product Sourcing", "Trading Support", "Air & Sea Freight", "DDP Where Available"],
  // Trade-desk metadata. Descriptive only — no claims, volumes or statistics.
  meta: [
    { label: "Desk", value: "HKG / Asia" },
    { label: "Function", value: "Trade Desk" },
    { label: "Ref.", value: "001" },
  ],
  route: ["Source", "Supply", "Deliver"],
};

export const trustStrip = [
  {
    title: "One Point of Contact",
    copy: "From product requirement to delivery.",
  },
  {
    title: "Built for Business Buyers",
    copy: "Supporting importers, distributors and commercial requirements.",
  },
  {
    title: "Sourced to Your Specification",
    copy: "Based on what you need, not a fixed product catalogue.",
  },
  {
    title: "Freight Coordinated",
    copy: "Air and sea freight, with DDP arrangements where available.",
  },
];

export const whatWeDo = {
  eyebrow: "FROM REQUIREMENT TO DELIVERY",
  headline: "Sourcing is only the beginning.",
  copy: [
    "Finding a supplier is one thing.",
    "Knowing which supplier to work with, agreeing the product details, managing the order and arranging the shipment is another.",
    "That is where Sky Star can help.",
    "We bring sourcing, trading support and freight coordination together, giving you a clearer and more straightforward way to manage international purchasing.",
  ],
  services: [
    {
      number: "01",
      heading: "Product Sourcing",
      copy: "Tell us what you need. We work with manufacturers and suppliers to identify suitable options based on your product requirements, quantity and destination.",
    },
    {
      number: "02",
      heading: "Trading & Supply",
      copy: "We can support the commercial side of international purchasing, helping bring product, supplier and order requirements together through one point of contact.",
    },
    {
      number: "03",
      heading: "Freight & Logistics",
      copy: "Once your order is ready, we can coordinate the movement of goods by air or sea based on the product, quantity and destination.",
    },
    {
      number: "04",
      heading: "DDP Arrangements",
      copy: "For eligible product categories and destinations, duty-paid delivery arrangements may be available. Availability is confirmed for each order based on the product, destination and applicable import requirements.",
    },
  ],
  cta: "Request a Quote",
};

export const whatWeSource = {
  eyebrow: "SELECTED SOURCING CATEGORIES",
  headline: ["Tell us what you need.", "Not what you see in a catalogue."],
  intro: "We work across selected product categories and assess each requirement individually.",
  // Featured categories. `image` stays null until licensed photography is
  // supplied — the gallery renders an art-directed slot in the meantime.
  //
  // Vape and atomizer products are deliberately absent: the approved brief
  // requires them to stay off the public site unless management and legal
  // explicitly approve an alternative treatment. Adding an entry here is all
  // that is needed if that approval is ever given.
  anchorCategories: [
    {
      key: "led-lighting",
      heading: "LED Lighting",
      copy: "Lighting products and related solutions for commercial sourcing requirements.",
      imageBrief: "Lighting product photography",
      image: null as string | null,
    },
    {
      key: "toys",
      heading: "Toys",
      copy: "Toy sourcing assessed against your product specifications, required quantity and destination.",
      imageBrief: "Toy product photography",
      image: null as string | null,
    },
    {
      key: "furniture",
      heading: "Furniture",
      copy: "Furniture sourced according to your required specifications and commercial requirements.",
      imageBrief: "Furniture product photography",
      image: null as string | null,
    },
  ],
  supportingCategories: [
    "Hardware & Consumer Products",
    "Home Appliances",
    "Building Materials",
    "Mobile & Accessories",
    "Other Product Requirements",
  ],
  closing: {
    heading: "Have a specific product in mind?",
    copy: "Send us the details. We will review the requirement and confirm whether we can support it.",
    cta: "Send Us Your Requirement",
  },
};

// Prepared and reviewed, but not published: the approved brief requires
// management and legal sign-off before vape/atomizer content appears on the
// public site, and that has not been given. Flip SHOW_VAPE to true — and
// only that — once approval is confirmed; WhatWeSource picks it up
// automatically. No regulatory, licensing or compliance claims are made here
// on purpose: none have been approved either.
export const SHOW_VAPE = false;

export const vapeCategory = {
  key: "vape",
  heading: "Vape",
  copy: "Vape and atomizer hardware sourced according to your product specifications, required quantity and destination, assessed individually for each order.",
  imageBrief: "Vape hardware product photography",
  image: null as string | null,
};

// Brands are only rendered when approved logos have been supplied. Never add
// a name or mark here without written approval — the brief forbids inventing
// client names, logos or relationships.
export const brands = {
  eyebrow: "BRANDS WE WORK WITH",
  headline: "Trusted relationships, built around the right products.",
  // Drop logo files into /public/brands and add an entry per approved brand.
  // `logo` is the path; `name` is used for the accessible name.
  logos: [] as { name: string; logo: string; width: number; height: number }[],
};

export const howItWorks = {
  // `stage` is the short route label used by the timeline rail.
  eyebrow: "OUR PROCESS",
  headline: "A clear route from requirement to delivery.",
  steps: [
    {
      number: "01",
      stage: "Requirement",
      heading: "Send Your Requirement",
      copy: "Tell us what you are looking for, how much you need and where the goods need to go.",
    },
    {
      number: "02",
      stage: "Review",
      heading: "We Review the Details",
      copy: "We assess the product, quantity, specifications and destination to understand your requirements.",
    },
    {
      number: "03",
      stage: "Sourcing",
      heading: "We Explore Suitable Options",
      copy: "We work with relevant manufacturers and suppliers to identify suitable sourcing options.",
    },
    {
      number: "04",
      stage: "Commercial Details",
      heading: "We Confirm the Commercial Details",
      copy: "Product specifications, quantities, pricing and other relevant requirements are discussed before the order moves forward.",
    },
    {
      number: "05",
      stage: "Order",
      heading: "The Order Is Confirmed",
      copy: "Once the relevant details are agreed, the order can proceed.",
    },
    {
      number: "06",
      stage: "Production",
      heading: "Production Is Coordinated",
      copy: "We remain involved while the supplier prepares the goods for shipment.",
    },
    {
      number: "07",
      stage: "Delivery",
      heading: "Freight and Delivery",
      copy: "We coordinate the agreed shipping arrangement through to the destination.",
    },
  ],
  cta: "Start Your Enquiry",
};

export const whySkyStar = {
  eyebrow: "WHY WORK WITH US",
  headline: "A simpler way to manage international sourcing.",
  points: [
    {
      heading: "One Point of Contact",
      copy: "Rather than managing separate conversations for sourcing, purchasing and freight, we bring the process together through one point of contact.",
    },
    {
      heading: "Built Around Your Requirement",
      copy: "We assess what you need rather than asking you to select from a fixed product catalogue.",
    },
    {
      heading: "Sourcing and Freight Together",
      copy: "We can support the process beyond supplier selection, including coordination of the shipment to your destination.",
    },
    {
      heading: "Hong Kong–Registered",
      copy: "Sky Star is a Hong Kong–registered trading and sourcing company working with international businesses.",
    },
    {
      heading: "Flexible Sourcing Capability",
      copy: "Beyond our core categories, we can assess additional product requirements individually.",
    },
    {
      heading: "A Clearer Process",
      copy: "We help bring the different stages of international purchasing together so there is a clearer route from requirement to delivery.",
    },
  ],
};

export const about = {
  eyebrow: "ABOUT SKY STAR",
  headline: ["We are not a manufacturer.", "We help you find the right one."],
  copy: [
    "Sky Star is a Hong Kong–registered trading and sourcing company.",
    "We work with businesses that want a more straightforward way to source products from Asia without managing every part of the process alone.",
    "We do not own factories.",
    "We work with manufacturers and suppliers across selected product categories and assess each requirement individually.",
    "Sometimes a buyer knows exactly what they need.",
    "Sometimes they need help finding the right product, supplier or sourcing approach.",
    "In both cases, the process starts with the same thing:",
  ],
  emphasis: "Your requirement.",
  // Each line restates approved copy from this section — nothing new is
  // claimed here. "are" lines come from the registered-company and
  // one-point-of-contact statements; "areNot" from the manufacturer,
  // factory-ownership and fixed-catalogue statements.
  contrast: {
    areLabel: "What Sky Star is",
    are: [
      "A Hong Kong–registered trading and sourcing company.",
      "One point of contact from requirement to delivery.",
      "A partner that assesses each requirement individually.",
    ],
    areNotLabel: "What Sky Star is not",
    areNot: [
      "A manufacturer.",
      "A factory owner.",
      "A fixed product catalogue.",
    ],
  },
  closing: "Tell us what you need, where it needs to go and what matters to you. We will review the details and confirm how we can help.",
  cta: "Discuss Your Requirement",
};

export const faq = [
  {
    question: "What products can Sky Star source?",
    answer:
      "We work across selected product categories and can assess additional sourcing requirements individually. Send us the product details, quantity and destination, and we will review whether we can support your requirement.",
  },
  {
    question: "Can you source a product that is not listed on the website?",
    answer:
      "Yes. Our website shows selected sourcing categories, but we assess additional product requirements individually.",
  },
  {
    question: "Can you help if I already have a supplier?",
    answer:
      "Depending on your requirements, we may be able to support other parts of the process, including trading and freight coordination.",
  },
  {
    question: "Do you arrange air and sea freight?",
    answer:
      "We can coordinate air and sea freight based on the product, quantity, destination and delivery requirements.",
  },
  {
    question: "Is DDP available?",
    answer:
      "DDP arrangements may be available for eligible product categories and destinations. Availability depends on the product and applicable import requirements and is confirmed for each order.",
  },
  {
    question: "What do you need to review my requirement?",
    answer:
      "The product details, required quantity and destination are a good starting point. Product specifications, images, links or reference files can also help us assess the requirement.",
  },
  {
    question: "Can I contact you before requesting a quote?",
    answer:
      "Yes. If you would prefer to discuss your requirement first, you can contact us by email or WhatsApp.",
  },
];

export const contact = {
  eyebrow: "LET’S START WITH YOUR REQUIREMENT",
  headline: "Tell us what you need.",
  copy: [
    "Whether you have a specific product requirement, want to discuss sourcing options or need support with freight, send us the details.",
    "Tell us what you are looking for, how much you need and where it needs to go.",
    "We will review your enquiry and get back to you with the next steps.",
  ],
  submitCta: "Send My Requirement",
  whatsappCta: "Chat With Us on WhatsApp",
  whatsappPrompt: "Prefer to speak with us directly?",
  privacyConsent:
    "I agree to Sky Star contacting me about my enquiry and handling my information in accordance with the Privacy Policy.",
  responseTime: null as string | null, // [TBC] expected response time
};

export const footer = {
  description:
    "Sky Star helps international businesses source products from Asia, coordinate purchasing and arrange delivery to their destination.",
  legalLinks: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  registeredStatement: "Hong Kong–registered trading and sourcing company",
  copyright: "© 2026 Sky Star. All rights reserved.",
};
