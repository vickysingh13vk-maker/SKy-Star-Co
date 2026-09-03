# Sky Star — Production Website

Single-page marketing and enquiry site for Sky Star, a Hong Kong–registered B2B
trading and sourcing company. Built from the approved brief
(`docs/Sky_Star_Production_Website_Brief.md`, v1.0), which remains the source
of truth for all copy and content rules.

## Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** with project design tokens in `tailwind.config.ts`
- Self-hosted Inter / Inter Tight variable fonts via `next/font/local`
- No UI, animation or analytics libraries — three runtime dependencies total

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
npm run lint       # ESLint (next/core-web-vitals)
npm run typecheck  # tsc --noEmit
```

## Project structure

```
src/
  app/
    layout.tsx        Metadata, Open Graph, JSON-LD (Organization/WebSite/Service), fonts, skip link
    page.tsx          Section composition for the single page
    globals.css       Base layer, container utilities, focus + reduced-motion rules
    icon.svg          Favicon (placeholder mark — replace with the final logo)
    robots.ts         robots.txt
    sitemap.ts        sitemap.xml
    api/quote/route.ts  Quote form endpoint (validation, honeypot, timing gate)
    fonts/            Self-hosted woff2 subsets (SIL Open Font License)
  components/
    Header.tsx        Sticky header, compact-on-scroll, accessible mobile menu
    Footer.tsx        Footer navigation, contact, legal, company details
    ContactForm.tsx   Request a Quote form: validation, states, analytics
    StickyMobileCta.tsx  Scroll-triggered mobile CTA bar
    sections/         One component per page section
    cta/              Tracked Request a Quote / WhatsApp buttons
    ui/               Button, Eyebrow, SectionHeading, Accordion, Reveal,
                      PlaceholderImage, form primitives
  content/site.ts     All production copy and company details (single source)
  lib/
    analytics.ts      Named event dispatch (dataLayer-compatible)
    contact.ts        WhatsApp / tel / mailto helpers, TBC-aware
    quote-schema.ts   Validation rules shared by client and server
```

## Deployment

Standard Next.js app — any host that runs Node 20+ works. It needs a Node
runtime rather than static hosting, because `/api/quote` handles form posts.

### Vercel (recommended)

1. vercel.com → **Add New Project** → import this repository.
2. Framework preset, build command and output directory are detected
   automatically. Nothing to configure.
3. Add the environment variables from `.env.example` under
   **Settings → Environment Variables**.
4. Attach the domain under **Settings → Domains**.

Every pull request then gets its own preview URL, and merges to `main` deploy
to production.

### Netlify / Cloudflare Pages

Build command `npm run build`, Node version from `.nvmrc`, and the platform's
Next.js adapter (Netlify installs `@netlify/plugin-nextjs` automatically).

### Self-hosted

```bash
npm ci && npm run build
npm start          # listens on $PORT, default 3000
```

Run it behind a reverse proxy that terminates TLS. Security headers
(`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`,
`X-Frame-Options`, HSTS) are set by the app in `next.config.mjs`, so they apply
on every host.

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Before launch | Canonical URL, Open Graph, sitemap, robots |
| `QUOTE_NOTIFICATION_EMAIL` | For the form | Where enquiry notifications are delivered |
| `EMAIL_PROVIDER_API_KEY` | For the form | Credential for the email provider (server-side only) |

### CI

`.github/workflows/ci.yml` runs typecheck, lint and build on every pull request
and on pushes to `main`.

## Content rules (from the brief)

- No invented clients, testimonials, statistics, certifications or claims.
- Vape and atomizer products must not appear on the public site.
- DDP is always described conditionally, using the approved wording.
- Unconfirmed company information stays marked `[TBC]`.

## Outstanding `[TBC]` items

Everything below lives in `src/content/site.ts`. Set the value and the site
switches from a `[TBC]` label to a live, tracked link automatically.

| Field | Used for |
| --- | --- |
| `siteConfig.url` | Canonical URL, Open Graph, sitemap, robots |
| `siteConfig.email` | Contact section, footer, form failure fallback |
| `siteConfig.phone` | Contact section, footer |
| `siteConfig.whatsappNumber` | Every WhatsApp CTA (falls back to the contact section) |
| `siteConfig.hongKongAddress` | Contact section, footer |
| `siteConfig.legalCompanyName` | Footer company line |
| `siteConfig.registrationNumber` | Footer company line |
| `contact.responseTime` | Success state ("we will get back to you within …") |

Also outstanding: production photography (see below), the final logo/favicon,
the Open Graph image, and the Privacy Policy / Terms / Cookie Policy pages —
the footer lists them as plain text rather than dead links until they exist.

## Photography

No production photography exists yet, so image areas use `PlaceholderImage`:
art-directed slots that carry an art-direction label rather than stock imagery.
To swap one in, replace the component with a `next/image` element in the same
container — the surrounding layout does not depend on the placeholder.

## Connecting the form

`src/app/api/quote/route.ts` validates the submission server-side (mirroring
`src/lib/quote-schema.ts`), rejects honeypot and too-fast submissions, then
returns success. Add the real delivery mechanism (email provider or CRM
webhook) at the marked `TODO(production)` — no component changes are required.
Keep provider credentials in server-side environment variables.

## Analytics

`src/lib/analytics.ts` pushes named events to `window.dataLayer`:
`quote_cta_click`, `quote_form_start`, `quote_form_submit`, `whatsapp_click`,
`phone_click`, `email_click`, `file_upload`, `faq_open`. No third-party script
is loaded — add the destination (e.g. GTM) when analytics is approved.

## Verified against the brief

- Ten required breakpoints (320–1920px) checked for horizontal overflow: none.
- axe-core (WCAG 2.0/2.1/2.2 A + AA) at 375px and 1440px, including the mobile
  menu, FAQ, form error state and success state: zero violations.
- Lighthouse mobile: Performance 98, Accessibility 100, Best Practices 100,
  SEO 100 (LCP ~2.0s, CLS 0). Desktop: 100 across all four categories.
