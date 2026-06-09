# Colin McQuilkin Portfolio — Project Guide

## Overview
Portfolio site for Colin McQuilkin (CMDESIGN) — immersive lighting designer, projection artist, and creative director. Built with Vite + Tailwind CSS v4, no framework, deployed on Cloudflare Pages with media on Cloudflare R2.

---

## Local Project Path
```
D:\ON2 Percussion Dropbox\Casey Byars\Colin McQuilkin Folder\portfolio
```
All editing happens here. Open this folder in VS Code or Claude Code.

---

## Git Repository
**URL:** `https://github.com/casey-byars/ColinMcQuilkin.git`  
**Main branch:** `main`  
**Git user:** Casey Byars

### Deploy workflow
Push to `main` → Cloudflare auto-detects → builds → deploys. No manual deploy step needed.
```bash
git add <files>
git commit -m "description"
git push
```
Build command Cloudflare uses: `npm run build`  
Output directory: `dist`

---

## Cloudflare Pages
- **Project name:** ColinMcQuilkin (or similar — find it in Cloudflare dashboard under Workers & Pages)
- **Connected repo:** `casey-byars/ColinMcQuilkin` on GitHub
- **Auto-deploy:** Yes, on every push to `main`
- **Live URL:** Check Cloudflare dashboard for the Pages URL

### Cloudflare login
Log in at `https://dash.cloudflare.com` under Casey Byars' account.

---

## Cloudflare R2 (Media Storage)
All images and videos are hosted on R2, NOT in the git repo.

**Bucket name:** `colinmcquilkin-media`  
**Public URL base:** `https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev`

### Upload a file to R2
```powershell
# From the portfolio directory
cd "D:\ON2 Percussion Dropbox\Casey Byars\Colin McQuilkin Folder\portfolio"
npx wrangler r2 object put "colinmcquilkin-media/filename.mp4" --file "C:\path\to\file.mp4" --content-type "video/mp4" --remote
```
Common content types: `video/mp4`, `image/jpeg`, `image/png`

### Reference a file in code
```js
const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'
// Then use: ${R2}/filename.mp4
```

### Wrangler login (if needed)
```bash
npx wrangler login
```

---

## Tech Stack
| Tool | Purpose |
|------|---------|
| Vite | Build tool / dev server |
| Tailwind CSS v4 | Utility styling (`@tailwindcss/vite` plugin) |
| Vanilla JS | No framework — all pages are plain JS modules |
| Cloudflare Pages | Static hosting |
| Cloudflare R2 | Video/image storage |
| Wrangler CLI | R2 uploads via `npx wrangler` |

### Dev server
```bash
cd "D:\ON2 Percussion Dropbox\Casey Byars\Colin McQuilkin Folder\portfolio"
npx vite --port 5173
```

---

## File Structure
```
portfolio/
├── index.html                  # Experiences (home)
├── creative-collective.html
├── platforms.html
├── immersive-systems.html
├── ai-360-lab.html
├── contact.html
├── vite.config.js              # Multi-page build config
├── src/
│   ├── fonts.css               # ← EDIT HERE to change fonts site-wide
│   ├── style.css               # Global styles + Tailwind import
│   ├── shared.js               # Shared nav HTML + initPage() function
│   ├── main.js                 # Experiences page
│   ├── creative-collective.js  # Creative Collective page
│   ├── creative-collective.css
│   ├── platforms.js            # Platforms page
│   ├── platforms.css
│   ├── immersive-systems.js    # Immersive Systems page
│   ├── immersive-systems.css
│   ├── ai-360-lab.js           # 360 AI Lab page
│   ├── ai-360-lab.css
│   ├── contact.js              # Contact page
│   └── contact.css
└── public/
    └── pages/                  # Raw media assets (NOT committed to git)
        ├── 2. CREATIVE COLLECTIVE/
        ├── 3_PLATFORM/
        └── 5. 360 AI LAB/
```

---

## Typography System
**File:** `src/fonts.css` — edit this ONE file to change fonts across the entire site.

```css
:root {
  --font-display: 'Playfair Display', Georgia, serif;  /* page titles, project headings */
  --font-body: 'Inter', system-ui, sans-serif;          /* nav, body text, labels */

  --title-hero:    clamp(2rem, 4vw, 4rem);    /* large page titles */
  --title-large:   clamp(1.5rem, 3vw, 3rem);
  --title-section: clamp(1.25rem, 2vw, 2rem);
}
```

Both Google Fonts are loaded in every HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

---

## Pages Overview

### Experiences (`index.html` / `src/main.js`)
- **Layout:** 6-column CSS grid mosaic
- **Videos:** Hover to play (desktop), scroll into view (mobile)
- **Media:** All on R2, referenced via `${R2}/filename.mp4`
- **Do not touch** — leave as-is per client preference

### Creative Collective (`creative-collective.html`)
- **Layout:** Editorial rows — large video left (65%), text panel right (35%)
- **13 projects** with client label, title, description, "VIEW PROJECT →" link
- Videos play on hover (desktop) / scroll (mobile)

### Platforms (`platforms.html`)
- **Layout:** 4-column grid, 8 numbered cards (01–08)
- Each card: text left, image/video right
- Blue numbered headings (`#5b8fff`)
- Cards 01–02 have videos; 03–08 are text-only (awaiting media)

### Immersive Systems (`immersive-systems.html`)
- **Layout:** 6-column card grid, portrait orientation
- Each card: image/video on top, text below with number, tags, specs, link
- All 6 cards are placeholder — awaiting media

### 360 AI Lab (`ai-360-lab.html`)
- **Layout:** Two-column hero (text + video with play button) + 6-cell bottom grid
- Hero has dome image; play button is a UI element (wire up video separately)
- Bottom grid: sections 02–07 (AI workflow, thinking lab, modules, systems, learning, audience)

### Contact (`contact.html`)
- **Layout:** Two-column panel — info left, form right
- **Contact info:** colinmcquilkin@yahoo.com / 504-628-6400 / @colinmcquilkindesign
- **Form:** Currently `action="#"` — connect to Formspree or similar to activate submissions

---

## Navigation
Defined once in `src/shared.js` — edit there to change nav links on all pages.
Active page highlighting: pass the page key to `initPage('page-key')` in each page JS file.

---

## Adding a New Project Card (Experiences page)
1. Upload video to R2: `npx wrangler r2 object put "colinmcquilkin-media/my-video.mp4" --file "path/to/video.mp4" --content-type "video/mp4" --remote`
2. Add a card in `src/main.js` grid section
3. `git add src/main.js && git commit -m "add project" && git push`

## Adding a Creative Collective Row
In `src/creative-collective.js`, add a `row()` call:
```js
${row('r2-filename.mp4', 'poster-filename.jpg', 'CLIENT NAME', 'Project Title', 'Description text.')}
```

---

## R2 Files Currently Uploaded
| R2 Key | Used On |
|--------|---------|
| `hype-hotel-mazda.mp4` | Experiences + Creative Collective |
| `starlight-final-four.mp4` | Experiences + Creative Collective |
| `spectrum-analyzer.mp4` | Experiences + Creative Collective |
| `grid-4-nike-fuel-band.mp4` | Experiences + Creative Collective |
| `grid-5-silent-light.mp4` | Experiences + Creative Collective |
| `grid-6-ai-lab.jpg` | Experiences |
| `grid-7-trampled.mp4` | Experiences + Creative Collective |
| `grid-g-pods.mp4` | Experiences |
| `grid-under-the-oaks.mp4` | Experiences + Creative Collective |
| `grid-10-public-art.png` | Experiences |
| `cc-5-ai-lab.mp4` + cover | Creative Collective |
| `cc-6-mazda-hype-hotel.mp4` | Creative Collective |
| `cc-7-luminous-owls.mp4` + cover | Creative Collective |
| `cc-8-work4hire.mp4` | Creative Collective |
| `cc-11-big-gigantic.mp4` | Creative Collective |
| `cc-12-cmd-fabrication.mp4` | Creative Collective |
| `cc-nike-cover.jpg` | Creative Collective |
| `cc-trampled-cover.jpg` | Creative Collective |
| `cc-spectrum-cover.jpg` | Creative Collective |
| `platform-1.mp4` | Platforms card 01 |
| `platform-2.mp4` | Platforms card 02 |
| `ai-lab-hero.png` | 360 AI Lab hero |

---

## Contact Form Setup (Pending)
The contact form currently posts to `#`. To activate:
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form → copy the endpoint URL
3. In `src/contact.js`, change `action="#"` to `action="https://formspree.io/f/YOUR_ID"`
