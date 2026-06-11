# Colin McQuilkin Portfolio — Onboarding Guide
*Drop this file into a new Claude instance to get up to speed instantly.*

---

## What This Project Is

Portfolio site for **Colin McQuilkin (CMDESIGN)** — immersive experience designer based in New Orleans. Work includes projection mapping, AI installations, live events, branded environments. Clients: Nike, Mazda, Coca-Cola, Walter Anderson Museum of Art.

**Live site:** https://www.colinmcquilkin.design  
**Live admin:** https://www.colinmcquilkin.design/admin  
**Redesign preview:** https://colinmcquilkin-redesign.pages.dev  
**Redesign admin:** https://colinmcquilkin-redesign.pages.dev/admin

---

## Local Project Path

```
D:\ON2 Percussion Dropbox\Casey Byars\Colin McQuilkin Folder\portfolio
```

---

## Git / GitHub

**Repo:** https://github.com/casey-byars/ColinMcQuilkin  
**Account:** casey-byars

**Branches:**
- `main` — live production site
- `redesign` — in-progress redesign (completely separate backend)

---

## Two Cloudflare Pages Projects — COMPLETELY ISOLATED

### Live site — project: `colinmcquilkin`
- Auto-deploys from branch: `main`
- URLs: `colinmcquilkin.pages.dev` + `www.colinmcquilkin.design`
- KV binding: `CONTENT` → live KV namespace
- Env var: `ADMIN_PASSWORD = colinmcquilkin`
- Preview deployments: **DISABLED** (critical — keeps redesign branch away from live KV)

### Redesign — project: `colinmcquilkin-redesign`
- Auto-deploys from branch: `redesign`
- URL: `colinmcquilkin-redesign.pages.dev`
- KV binding: `CONTENT` → **separate** KV namespace `colinmcquilkin-redesign-content`
- Env var: `ADMIN_PASSWORD` (set separately)
- ⚠️ **TODO:** KV binding + ADMIN_PASSWORD still need to be added in Cloudflare dashboard:
  - Workers & Pages → `colinmcquilkin-redesign` → Settings → Functions → KV namespace bindings → Add `CONTENT` → `colinmcquilkin-redesign-content`
  - Settings → Environment variables → Add `ADMIN_PASSWORD`

> **NEVER use the redesign admin to edit content — it will write to the redesign KV only, never the live site. The two KV stores are completely separate.**

---

## Deploy Workflow

**No manual wrangler deploy commands — just git push.**

```bash
# Deploy to live site
git checkout main
git add <files>
git commit -m "description"
git push origin main

# Deploy redesign
git checkout redesign
git add <files>
git commit -m "description"
git push origin redesign
```

Cloudflare builds automatically: `npm install && npm run build` → `dist/`

If wrangler auth expires (needed for R2 uploads): `npx wrangler login`

---

## Tech Stack

| Layer | What |
|---|---|
| Build | Vite (`npm run build` = `vite build`) → outputs `dist/` |
| Hosting | Cloudflare Pages (Git-connected, auto-deploys) |
| Functions | Cloudflare Pages Functions in `functions/` |
| CMS storage | Cloudflare KV (binding: `CONTENT`, key: `v1`) |
| Media | Cloudflare R2 bucket `colinmcquilkin-media` |
| Domain | Wix DNS: CNAME `www` → `colinmcquilkin.pages.dev` |
| CSS | Tailwind CSS v4 via `@tailwindcss/vite` plugin |
| JS | Vanilla JS modules, no framework |

---

## File Structure

```
portfolio/
├── index.html                   # Home / Experiences page
├── platforms.html
├── creative-collective.html
├── immersive-systems.html
├── ai-360-lab.html
├── contact.html
├── vite.config.js               # Multi-page build — lists all HTML entry points
├── src/
│   ├── shared.js                # navHTML, footerHTML, getContent(), initPage()
│   ├── style.css                # Global styles (page-title, page-subtitle, etc.)
│   ├── fonts.css                # Font imports
│   ├── main.js                  # Experiences/home page
│   ├── platforms.js / .css
│   ├── creative-collective.js / .css
│   ├── immersive-systems.js / .css
│   ├── ai-360-lab.js / .css
│   └── contact.js / .css
├── functions/
│   ├── _middleware.js           # Server-side SEO meta injection for all HTML pages
│   └── api/
│       ├── content.js           # GET/POST CMS content (KV store)
│       ├── contact.js           # Contact form email sender
│       └── upload.js            # R2 media upload endpoint
└── public/
    ├── admin.html               # CMS admin panel
    ├── sitemap.xml
    ├── robots.txt
    ├── _headers                 # Cloudflare cache/security headers
    └── CMD_logo.png, cdc-logos.png, favicon.svg
```

---

## CMS System

Content stored in Cloudflare KV as flat JSON under key `v1`.

**Flow:**
1. `functions/api/content.js` — GET merges KV over defaults, returns JSON. POST (Bearer token) saves to KV.
2. `src/shared.js → getContent()` — fetches `/api/content?_={timestamp}` (always network-first, no stale cache). Applies `data-ck` attributes to DOM.
3. `public/admin.html` — full CMS UI

**`data-ck` pattern:** `<div data-ck="cc-1-title">` → replaced with KV value on load.

**Content key conventions:**
- `cc-{n}-title`, `cc-{n}-client`, `cc-{n}-desc`, `cc-{n}-image`, `cc-{n}-deleted`
- `plat-{n}-title`, `plat-{n}-desc`, `plat-{n}-image`, `plat-{n}-thumb`, `plat-{n}-popup-type`, `plat-{n}-popup-slides`, `plat-{n}-popup-video`
- `cc-count`, `plat-count`, `cc-order`, `plat-order`
- `seo-{page}-title`, `seo-{page}-desc`, `seo-{page}-image`  (pages: home, platforms, cc, is, ai, contact)
- `ai-hero-heading`, `ai-hero-desc`, `contact-desc`, `{page}-subtitle`

---

## Admin Panel (`/admin.html`)

- **Password:** stored in `sessionStorage` — clears on browser close
- **Login password:** `colinmcquilkin` (live site)
- **Logout button:** sticky header, top-right
- **Floating save button:** `position: fixed`, bottom-right corner
- **Tabs:** General | Creative Collections | Platforms | Immersive Systems | AI Lab | Contact | SEO
- **Row reordering:** ▲▼ arrow buttons (no drag-and-drop)
- **DOM append:** always `insertAdjacentHTML('beforeend', ...)` — never `innerHTML +=`
- **Row counts:** derived from actual DOM at save time, not hidden inputs

---

## R2 Media Storage

**Bucket:** `colinmcquilkin-media`  
**Public URL base:** `https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev`

Upload a file:
```bash
npx wrangler r2 object put "colinmcquilkin-media/filename.mp4" \
  --file "C:\path\to\file.mp4" \
  --content-type "video/mp4" \
  --remote
```

Reference in code: `` `https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/filename.mp4` ``

---

## SEO

- `functions/_middleware.js` intercepts HTML requests, reads `seo-{page}-title/desc/image` from KV, replaces meta tags server-side before delivery
- All 6 pages have static meta tags as fallback
- `public/sitemap.xml` — all 6 pages
- Google Search Console verified via TXT record in Wix DNS
- Sitemap URL: `https://www.colinmcquilkin.design/sitemap.xml`

---

## Pages Overview

| Page | Route | Notes |
|---|---|---|
| Experiences (Home) | `/` | 6-col mosaic grid, hover-play videos |
| Platforms | `/platforms.html` | 8 numbered cards, popup gallery/video per card |
| Creative Collections | `/creative-collective.html` | CMS-driven rows, up to N projects |
| Immersive Systems | `/immersive-systems.html` | 3-col card grid, equal-height image containers |
| AI 360 Lab | `/ai-360-lab.html` | Hero video panel + 7-cell info grid, inline divider image |
| Contact | `/contact.html` | Info + form, email via Pages Function |

---

## Critical Rules (always follow)

1. **NEVER ask the user to build or deploy** — do it silently
2. Build: `npx vite build`
3. Deploy: `git commit && git push origin <branch>`
4. **NEVER write to the live KV from the redesign context**
5. The two Cloudflare projects (`colinmcquilkin` and `colinmcquilkin-redesign`) are fully isolated — keep them that way

---

## Where We Left Off (last session: 2026-06-11)

**Completed this session:**
- All work committed to `main` and pushed to GitHub
- `redesign` branch created and pushed
- Live project (`colinmcquilkin`) — preview deploys disabled ✅
- New `colinmcquilkin-redesign` Pages project created, connected to `redesign` branch ✅

**Still to do — next session starts here:**
- [ ] Add KV binding to `colinmcquilkin-redesign`:
  - Cloudflare → Workers & Pages → `colinmcquilkin-redesign` → Settings → Functions → KV namespace bindings
  - Variable name: `CONTENT`, Namespace: create new `colinmcquilkin-redesign-content`
- [ ] Add `ADMIN_PASSWORD` env var to `colinmcquilkin-redesign`
- [ ] Confirm redesign build is green and site loads at `colinmcquilkin-redesign.pages.dev`
- [ ] Begin redesign work on `redesign` branch
