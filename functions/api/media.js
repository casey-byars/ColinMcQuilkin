// Cloudflare Pages Function — /api/media
// GET → lists all objects in the R2 media bucket (auth required)
// Requires: R2 bucket binding MEDIA_BUCKET, env var ADMIN_PASSWORD

const R2_PUBLIC = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
}

export async function onRequestOptions() {
  return new Response(null, { headers: CORS })
}

export async function onRequestGet({ request, env }) {
  const auth = request.headers.get('Authorization') || ''
  if (!env.ADMIN_PASSWORD || auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return new Response('Unauthorized', { status: 401, headers: CORS })
  }

  if (!env.MEDIA_BUCKET) {
    return Response.json({ items: [] }, { headers: CORS })
  }

  // List up to 1000 objects; for a portfolio site this is plenty
  const listed = await env.MEDIA_BUCKET.list({ limit: 1000 })

  const items = listed.objects
    .map(obj => ({
      key: obj.key,
      url: `${R2_PUBLIC}/${obj.key}`,
      size: obj.size,
      uploaded: obj.uploaded,
    }))
    // Most-recent first
    .sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded))

  return Response.json({ items, truncated: listed.truncated }, { headers: CORS })
}

export async function onRequestDelete({ request, env }) {
  const auth = request.headers.get('Authorization') || ''
  if (!env.ADMIN_PASSWORD || auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
    return new Response('Unauthorized', { status: 401, headers: CORS })
  }

  if (!env.MEDIA_BUCKET) {
    return new Response('R2 bucket not bound', { status: 500, headers: CORS })
  }

  const { key } = await request.json()
  if (!key) return new Response('Missing key', { status: 400, headers: CORS })

  await env.MEDIA_BUCKET.delete(key)
  return Response.json({ ok: true }, { headers: CORS })
}
