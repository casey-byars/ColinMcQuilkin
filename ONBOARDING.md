# Colin McQuilkin Portfolio — Onboarding Guide
*Drop this into a new Claude instance to get up to speed instantly.*

---

## Project Overview

Portfolio site for **Colin McQuilkin (CMDESIGN)** — immersive experience designer based in New Orleans. Clients: Nike, Mazda, Coca-Cola, Walter Anderson Museum of Art.

**Local project path:**
```
D:\ON2 Percussion Dropbox\Casey Byars\Colin McQuilkin Folder\portfolio
```

---

## Two Sites — Completely Isolated

| | Live Site | Redesign |
|---|---|---|
| **URL** | https://www.colinmcquilkin.design | https://colinmcquilkin-redesign.pages.dev |
| **Admin** | https://www.colinmcquilkin.design/admin | https://colinmcquilkin-redesign.pages.dev/admin |
| **Git branch** | `main` | `redesign` |
| **Cloudflare project** | `colinmcquilkin` | `colinmcquilkin-redesign` |
| **KV namespace** | original `CONTENT` binding | `colinmcquilkin-redesign-content` |
| **Admin password** | `colinmcquilkin` | set separately in redesign project env vars |

**The two KV stores are completely separate. Editing content on the redesign admin never touches the live site.**

---

## Deploy Workflow

### Redesign (use this 99% of the time)
```bash
cd "D:\ON2 Percussion Dropbox\Casey Byars\Colin McQuilkin Folder\portfolio"
git checkout redesign
git add <files>
git commit -m "description"
git push origin redesign
```
If the GitHub → Cloudflare auto-deploy fails (error: "Unable to authenticate request"), deploy directly:
```bash
npx vite build
npx wrangler pages deploy dist --project-name colinmcquilkin-redesign --commit-dirty=true
```

### Live site (only when explicitly told to touch it)
```bash
git checkout main
git add <files>
git commit -m "description"
git push origin main
```

### Going live (when redesign is approved)
```bash
git checkout main
git merge redesign
git push origin main
```

---

## GitHub

**Repo:** https://github.com/casey-byars/ColinMcQuilkin  
**Account:** casey-byars  
**Branches:** `main` (live), `redesign` (in progress)

---

## Cloudflare

**Dashboard:** https://dash.cloudflare.com  
**Account:** Cbyars928@gmail.com

### Live project — `colinmcquilkin`
- Connected to GitHub branch: `main`
- Preview deployments: **DISABLED** (critical — keeps redesign branch away from live KV)
- Domain: `www.colinmcquilkin.design` via Wix DNS CNAME → `colinmcquilkin.pages.dev`

### Redesign project — `colinmcquilkin-redesign`
- Connected to GitHub branch: `redesign`
- KV binding: `CONTENT` → `colinmcquilkin-redesign-content`
- Note: GitHub auto-deploy sometimes fails with "Unable to authenticate request" — use direct wrangler deploy as fallback (see above)

---

## Tech Stack

| Layer | What |
|---|---|
| Build | `npm run build` = `npx vite build` → outputs `dist/` |
| Hosting | Cloudflare Pages |
| Backend | Cloudflare Pages Functions (`functions/api/`) |
| CMS storage | Cloudflare KV (binding: `CONTENT`, key: `v1`) |
| Media | Cloudflare R2 — bucket: `colinmcquilkin-media` |
| Media URL base | `https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev` |

### R2 upload command
```bash
npx wrangler r2 object put "colinmcquilkin-media/filename.mp4" --file "C:\path\to\file.mp4" --content-type "video/mp4" --remote
```

### Wrangler login (if token expires)
```bash
npx wrangler login
```

---

## CMS System

Content is stored in Cloudflare KV as flat JSON under key `v1`.

- `functions/api/content.js` — GET returns content, POST (Bearer token) saves it
- `src/shared.js → getContent()` — fetches `/api/content?_={timestamp}`, applies `data-ck` attributes to DOM
- `public/admin.html` — CMS admin UI (tabbed, password protected)
- Any element with `data-ck="key-name"` gets its text replaced from KV on page load

---

## Key Rules (always follow)

1. **ALL redesign work on the `redesign` branch** — never commit redesign changes to `main`
2. **Never touch the live site** unless the user explicitly says to
3. **Never ask the user to build or deploy** — do it silently
4. Build: `npx vite build`
5. Deploy redesign: `git push origin redesign` (fallback: wrangler direct deploy above)
6. Deploy live: `git push origin main`

---

## Where We Are (last updated: 2026-06-11)

Full redesign underway on the `redesign` branch. New design system implemented across all 6 pages — dark editorial aesthetic, Cormorant Garamond + Barlow typography, gold accents. Content wired to CMS via `data-ck` attributes. Media (videos/images) still needs to be connected from R2.
