# Colin McQuilkin Portfolio — Project Instructions

## Build & Deploy

**Always build and deploy automatically. Never ask the user to run commands.**

- After any code change, always run `npx vite build` then `npx wrangler pages deploy dist --project-name colinmcquilkin --commit-dirty=true`
- The `dist/video` folder is frequently locked by Dropbox. Before building, run `cmd /c "rd /s /q dist\video" 2>nul` to clear it, then wait 2 seconds before building.
- Never prompt the user to deploy or run PowerShell commands themselves.

## Stack

- Vite + Tailwind CSS v4, multi-page build
- Cloudflare Pages + Pages Functions (`functions/api/*.js`)
- Cloudflare R2 bucket (`colinmcquilkin-media`, public URL: `https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev`)
- Cloudflare KV namespace (`CONTENT` binding, key `v1`)
- `ADMIN_PASSWORD` env var for API auth
- Deploy: `npx wrangler pages deploy dist --project-name colinmcquilkin --commit-dirty=true`
