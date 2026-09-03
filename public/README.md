# Brand artwork and photography

Everything here is picked up automatically. Add a file with the exact name
below and the site switches to it on the next build — no code change. Until a
file exists, that slot falls back to its drawn technical plate (photography) or
the typographic wordmark (logo), so the site is never in a broken state.

## Logo — `public/brand/`

| File | Used for |
| --- | --- |
| `logo-light.svg` (or `.png`) | Header over the dark hero, mobile menu, footer |
| `logo.svg` (or `.png`) | Header once the page scrolls onto the light background |

**Supply transparent artwork.** A logo saved on a white rectangle will show
that white box against the navy header. SVG is preferred; a PNG at ~3x the
display height (roughly 200px tall) is fine.

`logo-light` should be the version that reads on navy — usually white or
light artwork. If only one file is supplied it is used on both surfaces.

The favicon is separate: replace `src/app/icon.svg` with the mark on its own
(no wordmark), square, and it becomes the browser tab icon.

## Photography — `public/images/`

Paths are set in `src/content/media.ts`. The defaults expect these names:

| File | Where it appears | Suggested crop |
| --- | --- | --- |
| `hero-port.jpg` | Hero background, full width | Wide, 16:9 or wider. Keep the subject right of centre — the left third sits under the headline scrim. |
| `hardware.jpg` | What We Source, dominant tile | 4:3 landscape |
| `led-lighting.jpg` | What We Source, upper supporting tile | 16:10 landscape |
| `home-appliances.jpg` | What We Source, lower supporting tile | 16:10 landscape |
| `warehouse.jpg` | About | 4:5 portrait |
| `freight.jpg` | Why Sky Star | 3:2 landscape |

Aim for ~2400px on the long edge; `next/image` generates the responsive sizes
and serves AVIF/WebP, so there is no need to pre-optimise.

### Using an image library instead of files

`src/content/media.ts` also accepts a direct URL, so a picture can be dropped in
without downloading anything:

```ts
hero: {
  src: "https://images.unsplash.com/photo-1234567890123-abcdefabcdef",
  ...
}
```

`images.unsplash.com`, `images.pexels.com` and `cdn.pixabay.com` are allowed in
`next.config.mjs`. Add another host there if you use a different library.

To get an Unsplash URL: open the photo, right-click the image → *Copy image
address*. For Pexels, use the "Free download" link's URL.

**Licensing:** Unsplash, Pexels and Pixabay all permit commercial use without
attribution, but check the individual photo's terms and avoid recognisable
logos, brands or people who have not consented to commercial use.
