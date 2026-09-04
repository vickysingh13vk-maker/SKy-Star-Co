# Working on this repository

Single-page Next.js (App Router) site for Sky Star. `README.md` covers setup
and structure; this file covers the conventions to follow when changing it.

## Content rules — non-negotiable

The approved brief is the source of truth for copy. Never introduce clients,
testimonials, statistics, certifications, awards, partnerships, years of
experience, delivery or pricing guarantees. Keep unconfirmed details as
`[TBC]`. DDP must stay conditional, in the approved wording. Vape and atomizer
products must not appear. British English throughout.

All copy lives in `src/content/site.ts` — edit it there, not in components.

Two things in that file are gated on approval and must stay that way:

- `whatWeSource.anchorCategories` deliberately omits vape/atomizer products.
- `brands.logos` is empty, so the "Brands we work with" section does not
  render. Only add entries for logos and names that have been supplied and
  approved in writing.

Photography goes through `src/components/ui/Media.tsx`: set the category's
`image` to a path under `/public` and it swaps the art-directed slot for a
real `next/image`. No other change is needed.

## Design system

- Tokens (colour, type, spacing, radius, shadow, breakpoints) live in
  `tailwind.config.ts`. Use them; avoid arbitrary one-off values.
- `accent` is text-safe (AA on white and paper); `accent-strong` is for fills
  and marks on dark surfaces only. Keep the accent sparse.
- Section rhythm comes from alternating surfaces (`cream`, `white`, `paper`,
  `navy-950`, `charcoal-900`) and changing layout structure. Do not turn
  sections into another card grid — each section should keep a distinct visual
  role. The page currently runs: hero (cream) → trust rail (navy-950) → service
  list (white) → category gallery (paper) → process (cream) → reasons
  (charcoal-900) → about (white) → FAQ (paper) → contact (navy-950).
- Headings come from the fluid `fontSize` scale in `tailwind.config.ts`
  (`display-1`…`display-4`, `numeral`, `numeral-sm`, `lead`, `label`). Do not
  hand-roll a `clamp()` in a component — add to the scale instead.
- `.meta` (uppercase metadata), `.tnum` (tabular figures), `.rule-grid` /
  `.rule-grid-dark` (hairline column overlays) and `.row-editorial` (the shared
  list-row hover rule) live in `globals.css`. Reuse them rather than
  re-implementing.
- Any grid item containing a full-bleed child (`-mx-5 xs:-mx-6 …`) needs
  `min-w-0`, or the negative margin widens the grid track and clips content.

## Accessibility

Target is WCAG 2.2 AA and the site currently passes axe with zero violations.
When adding UI: semantic elements, visible focus, 44px minimum touch targets,
labels tied to inputs, errors linked via `aria-describedby` and not signalled
by colour alone, and no content that only appears with JavaScript enabled
(scroll reveals are gated behind `@media (scripting: enabled)` for this reason).

## Before finishing a change

```bash
npm run typecheck && npm run lint && npm run build
```

Check the layout at 320, 375, 768, 1024 and 1440px for overflow, and verify
keyboard paths through the mobile menu, FAQ and form.
