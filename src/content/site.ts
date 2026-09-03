// Production copy sourced verbatim from Sky_Star_Production_Website_Brief.md (v1.0, 3 September 2026).
// [TBC] fields are intentional placeholders pending confirmed company information.

export const siteConfig = {
  name: "Sky Star",
  brand: "SKY STAR",
  tagline: "Trading & sourcing from requirement to delivery.",
  url: "https://www.skystar.example", // [TBC] production domain
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
  anchorCategories: [
    {
      heading: "Hardware & Consumer Products",
      copy: "Products and accessories sourced according to your required specifications and commercial requirements.",
    },
    {
      heading: "LED Lighting",
      copy: "Lighting products and related solutions for commercial sourcing requirements.",
    },
    {
      heading: "Home Appliances",
      copy: "Appliance sourcing based on product specifications, required quantity and destination.",
    },
  ],
  supportingCategories: [
    "Building Materials",
    "Furniture",
    "Mobile & Accessories",
    "Other Product Requirements",
  ],
  closing: {
    heading: "Have a specific product in mind?",
    copy: "Send us the details. We will review the requirement and confirm whether we can support it.",
    cta: "Send Us Your Requirement",
  },
};

export const howItWorks = {
  eyebrow: "OUR PROCESS",
  headline: "A clear route from requirement to delivery.",
  steps: [
    {
      number: "01",
      heading: "Send Your Requirement",
      copy: "Tell us what you are looking for, how much you need and where the goods need to go.",
    },
    {
      number: "02",
      heading: "We Review the Details",
      copy: "We assess the product, quantity, specifications and destination to understand your requirements.",
    },
    {
      number: "03",
      heading: "We Explore Suitable Options",
      copy: "We work with relevant manufacturers and suppliers to identify suitable sourcing options.",
    },
    {
      number: "04",
      heading: "We Confirm the Commercial Details",
      copy: "Product specifications, quantities, pricing and other relevant requirements are discussed before the order moves forward.",
    },
    {
      number: "05",
      heading: "The Order Is Confirmed",
      copy: "Once the relevant details are agreed, the order can proceed.",
    },
    {
      number: "06",
      heading: "Production Is Coordinated",
      copy: "We remain involved while the supplier prepares the goods for shipment.",
    },
    {
      number: "07",
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
