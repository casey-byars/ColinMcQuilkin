// Cloudflare Pages Middleware
// Intercepts HTML requests and injects SEO meta tags from KV
// so Google and social scrapers always see the latest values.

const PAGE_MAP = {
  '/':                        'home',
  '/index.html':              'home',
  '/platforms.html':          'platforms',
  '/creative-collective.html':'cc',
  '/immersive-systems.html':  'is',
  '/ai-360-lab.html':         'ai',
  '/contact.html':            'contact',
}

export async function onRequest({ request, env, next }) {
  const response = await next()

  // Only process HTML responses
  const ct = response.headers.get('content-type') || ''
  if (!ct.includes('text/html')) return response

  // Determine page key
  const path = new URL(request.url).pathname
  const pageKey = PAGE_MAP[path]
  if (!pageKey) return response

  // Load SEO data from KV
  let seo = {}
  if (env.CONTENT) {
    try {
      const stored = await env.CONTENT.get('v1')
      if (stored) {
        const all = JSON.parse(stored)
        seo = {
          title: all[`seo-${pageKey}-title`] || '',
          desc:  all[`seo-${pageKey}-desc`]  || '',
          image: all[`seo-${pageKey}-image`] || '',
        }
      }
    } catch {}
  }

  // Nothing to override — return as-is
  if (!seo.title && !seo.desc && !seo.image) return response

  let html = await response.text()

  if (seo.title) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(seo.title)}</title>`)
    html = html.replace(/(<meta property="og:title"\s+content=")[^"]*(")/g,         `$1${esc(seo.title)}$2`)
    html = html.replace(/(<meta name="twitter:title"\s+content=")[^"]*(")/g,        `$1${esc(seo.title)}$2`)
  }

  if (seo.desc) {
    html = html.replace(/(<meta name="description"\s+content=")[^"]*(")/g,          `$1${esc(seo.desc)}$2`)
    html = html.replace(/(<meta property="og:description"\s+content=")[^"]*(")/g,   `$1${esc(seo.desc)}$2`)
    html = html.replace(/(<meta name="twitter:description"\s+content=")[^"]*(")/g,  `$1${esc(seo.desc)}$2`)
  }

  if (seo.image) {
    html = html.replace(/(<meta property="og:image"\s+content=")[^"]*(")/g,         `$1${esc(seo.image)}$2`)
    html = html.replace(/(<meta name="twitter:image"\s+content=")[^"]*(")/g,        `$1${esc(seo.image)}$2`)
  }

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  })
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
}
