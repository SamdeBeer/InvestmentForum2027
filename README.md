# The Investment Forum 2027 — Registration Site

Single-page site. Plain HTML, CSS and JavaScript — no build step, no framework.
Open `index.html` in a browser, or drop the whole `site/` folder onto any host
(Netlify, Vercel, Cloudflare Pages, S3, or a normal web server).

---

## Things you need to fill in

### 1. The registration link
`assets/js/site.js`, line 11:

```js
const REGISTER_URL = "#";
```

Paste the live URL between the quotes. Every REGISTER NOW button on the page
(nav, hero, mobile menu, contact) updates at once. External URLs automatically
open in a new tab.

### 2. Speakers
`assets/js/site.js`, the `SPEAKERS` array. Four placeholders are in there now.
Add or remove entries freely — the grid and the lightbox both build themselves
from this array.

```js
{
  name:    "Jane Smith",
  role:    "Chief Investment Officer",
  company: "Acme Asset Management",
  photo:   "jane-smith.jpg",     // file in assets/speakers/  — "" gives a placeholder
  bio:     "Two to four sentences."
}
```

Headshots go in `assets/speakers/`. Roughly square, about 800 × 900px, and crop
them consistently — the cards are greyscale until hover, so mismatched crops
show up quickly.

---

## Things you may want to change

### Countdown dates
`index.html`, the two `.cd` blocks in the About section:

```html
<div class="cd" data-countdown="2027-03-10T08:00:00+02:00" data-city="Cape Town">
```

ISO 8601 with the `+02:00` SAST offset, so the countdown is correct for visitors
in any time zone. Change the `08:00` if you want it to run to doors-open rather
than to the start of the day. When a date passes, that block replaces itself with
"Cape Town is under way" rather than counting into negatives.

### Chapter backdrop images
`index.html`, the five `<div class="sec-slide">` lines inside `#kmBg`. Each one
is the backdrop for the chapter in the same position — first div = chapter 01,
and so on. Change the `data-src` to swap an image.

**Chapters 02 and 05 currently share `trade.webp`** because there are only four
blue-graded images for five chapters. Send a fifth and I'll drop it in.

### Photo archive
`index.html`, the `.gallery` block near the bottom, and the files in
`assets/gallery/`. Each photo needs two versions — `name-thumb.webp` for the grid
and `name.webp` for the enlarged view. Send me new photos and I'll process them;
the originals were ~22MB each and need resizing before they go anywhere near
the web.

---

## Known gaps from the source assets

- **`NIM_LOGO_FULL-WHITE.ai` is not in the ticker.** Browsers can't display
  Illustrator files. Export it as a white-on-transparent PNG (roughly 560 × 200px)
  or SVG, drop it in `assets/sponsors/`, and add an `<li>` in the ticker in
  alphabetical position.
- **`THEME LOGO-01.png` is a blank file** — 10,363 × 6,863px and fully
  transparent. `THEME LOGO-02` (white + cyan) is the one used here.

---

## A note on `vercel.json`

It sets cache headers. Two things to know if you ever edit it:

- **CSS and JS must never be cached long.** `site.js` holds the speaker
  bios and `style.css` holds every style rule, so they carry content, not
  just presentation. They are set to `max-age=0, must-revalidate` on purpose.
  Images cache for an hour.
- **Do not add comments.** JSON has no comment syntax and Vercel validates
  `vercel.json` against a strict schema — any unrecognised property fails the
  build immediately, and the site silently stays on the previous deployment.
  Explanations belong here, not in the file.

## Structure

```
site/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/site.js          ← the two edit blocks live at the top
│   ├── brand/              ← event logo + theme logo
│   ├── hero/               ← 4 background images (full + @1200 mobile crops)
│   ├── sponsors/           ← 28 logos, normalised to a common box
│   └── speakers/           ← headshots go here
└── README.md
```

Source images were 142MB of PNG. They are 1.7MB of WebP here. If you replace any
of them, resize first — the hero images should be no more than 2400px wide.

---

## Notes

- **Colours** — `#131f5b` primary, `#03edfa` secondary, `#ff3b61` used only for
  the location pins, the active chapter numeral and the REGISTER NOW hover state.
  All body and label text meets WCAG AA contrast (4.5:1 or better).
- **Fonts** — Inter and Space Mono, loaded from Google Fonts. If your host blocks
  external requests, the site falls back to system fonts cleanly; self-host the
  two families in `assets/fonts/` if you'd rather remove the dependency.
- **Motion** — everything respects `prefers-reduced-motion`. Visitors who have
  that switched on get the site with no drift, no marquee and no scroll reveals.
- **Sponsor ticker** pauses on hover so people can read a logo.
- The tab labels are ready to be renamed: "Key Subject Matter" → "Agenda" and
  "Keynote Speakers" → "Speakers". The section IDs are already `#agenda` and
  `#speakers`, so only the visible link text needs to change (nav, mobile menu,
  and the section eyebrows).
