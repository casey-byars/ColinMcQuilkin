// Cloudflare Pages Function — /api/upload
// POST → uploads image to R2, returns public URL
//
// Setup in Cloudflare dashboard (Pages → Settings → Functions → Bindings):
//   R2 bucket binding: variable name = MEDIA_BUCKET → colinmcquilkin-media
//   (ADMIN_PASSWORD env var already set from content.js setup)

const R2_PUBLIC = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization',
}

export async function onRequestOptions() {
  return new Response(null, { headers: CORS })
}

export async function onRequestPost({ request, env }) {
  // Auth
  const auth = request.headers.get('Authorization') || ''
  if (!env.ADMIN_PASSWORD || auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return new Response('Unauthorized', { status: 401, headers: CORS })
  }

  if (!env.MEDIA_BUCKET) {
    return new Response('R2 bucket MEDIA_BUCKET not bound', { status: 500, headers: CORS })
  }

  // Parse multipart
  let formData
  try {
    formData = await request.formData()
  } catch {
    return new Response('Invalid form data', { status: 400, headers: CORS })
  }

  const file = formData.get('file')
  const key  = formData.get('key')   // e.g. "platforms/card-1.jpg"

  if (!file || !key) {
    return new Response('Missing file or key', { status: 400, headers: CORS })
  }

  // Sanitize key — only allow alphanumeric, dash, underscore, dot, slash
  const safeKey = key.replace(/[^a-zA-Z0-9\-_.\/]/g, '')

  const arrayBuffer = await file.arrayBuffer()
  await env.MEDIA_BUCKET.put(safeKey, arrayBuffer, {
    httpMetadata: { contentType: file.type || 'application/octet-stream' },
  })

  const url = `${R2_PUBLIC}/${safeKey}`
  return Response.json({ ok: true, url, key: safeKey }, { headers: CORS })
}
