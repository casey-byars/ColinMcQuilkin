// Cloudflare Pages Function — /api/content
// GET  → returns current content JSON (public)
// POST → updates content (requires Authorization: Bearer <ADMIN_PASSWORD>)
//
// Setup in Cloudflare dashboard (Pages → Settings → Functions):
//   KV namespace binding: variable name = CONTENT
//   Environment variable: ADMIN_PASSWORD = (choose a password)

const DEFAULT_CONTENT = {
  // Page subtitles
  'experiences-subtitle': 'Immersive Design, Projection, Interactive Art, and Live Environments.',
  'cc-subtitle': 'Concept · Design · Execution',
  'platforms-subtitle': 'A complete creative production studio for immersive experiences, live events, installations, and branded environments.',
  'is-subtitle': 'Projection-mapped environments, inflatable architecture, interactive art systems, silent disco, and branded photo experiences.',
  'ai-subtitle': 'Education · Immersive · Interactive',
  'contact-subtitle': 'Vision · Collaboration · Execution',

  // Creative Collective projects
  'cc-1-client': 'MAZDA', 'cc-1-title': 'Music in a Different Light',
  'cc-1-desc': 'An immersive brand activation at SXSW Hype Hotel blending projection, lighting, and live performance to transform a venue into a sensory experience.',
  'cc-2-client': 'COCA-COLA', 'cc-2-title': 'Starlight Final Four',
  'cc-2-desc': 'A large-scale immersive environment for Coca-Cola at the NCAA Final Four, combining projection mapping, lighting design, and interactive brand moments.',
  'cc-3-client': 'WALTER ANDERSON MUSEUM OF ART', 'cc-3-title': 'Silent Light',
  'cc-3-desc': "A meditative projection installation that brings Walter Anderson's iconic artwork to life through light, motion, and sound inside the museum's gallery space.",
  'cc-4-client': 'NIKE', 'cc-4-title': 'Fuel Band SXSW',
  'cc-4-desc': 'An interactive brand activation for Nike at SXSW, featuring real-time data visualization and immersive environments celebrating the FuelBand launch.',
  'cc-5-client': 'CMD', 'cc-5-title': 'Immersion 360 AI Lab',
  'cc-5-desc': 'A projection-mapped dome experience merging artificial intelligence, live visuals, and participatory storytelling into an immersive education platform.',
  'cc-6-client': 'MAZDA', 'cc-6-title': 'SXSW Hype Hotel',
  'cc-6-desc': 'Full environmental design and production for the Mazda presence at the SXSW Hype Hotel — creating a branded world through light, architecture, and atmosphere.',
  'cc-7-client': 'CMD', 'cc-7-title': 'Luminous Owls',
  'cc-7-desc': 'A custom fabricated and projection-mapped art installation celebrating the spirit of the city through light sculpture and generative visuals.',
  'cc-8-client': 'ASYMMETRIC', 'cc-8-title': 'Work4Hire SXSW',
  'cc-8-desc': 'An immersive branded environment for Asymmetric at SXSW, integrating custom fabrication, video content, and interactive lighting design.',
  'cc-9-client': 'CMD', 'cc-9-title': 'Trampled By Owls',
  'cc-9-desc': "Custom scenic fabrication and stage design for Trampled By Owls, building an environment that amplifies the band's sonic identity through visual space.",
  'cc-10-client': 'LAUREN RODGERS MUSEUM OF ART', 'cc-10-title': 'Under the Oaks',
  'cc-10-desc': 'A large-scale outdoor projection event transforming the museum grounds into a living canvas — celebrating art, nature, and community through immersive light.',
  'cc-11-client': 'BIG GIGANTIC', 'cc-11-title': 'Big Gigantic',
  'cc-11-desc': 'Full production design including video content, lighting systems, and stage environment — creating an immersive concert experience for the touring act.',
  'cc-12-client': 'CMD', 'cc-12-title': 'CMD Fabrication',
  'cc-12-desc': "In-house scenic fabrication showcasing CMD's custom build capabilities — from concept and 3D design to finished installation-ready environments.",
  'cc-13-client': 'MAZDA', 'cc-13-title': 'Spectrum Analyzer',
  'cc-13-desc': 'A real-time audio-reactive spectrum visualization installation created for Mazda at SXSW Hype Hotel, turning music into a dynamic light and projection experience.',

  // 360 AI Lab hero
  'ai-hero-heading': 'A Modular Immersive Education Platform',
  'ai-hero-desc': 'The 360 AI LAB blends art, technology, and AI to create immersive, participatory learning experiences. Inside a projection-mapped dome, we explore creativity, systems thinking, and storytelling through live visuals, sound, and audience interaction.',

  // Contact
  'contact-desc': 'Projection, AI, and interactive systems for live environments—creating immersive experiences for education, museums, brands, and corporate events.',
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
}

export async function onRequest({ request, env }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: CORS })
  }

  if (request.method === 'GET') {
    let content = DEFAULT_CONTENT
    if (env.CONTENT) {
      const stored = await env.CONTENT.get('v1')
      if (stored) content = JSON.parse(stored)
    }
    return Response.json(content, { headers: CORS })
  }

  if (request.method === 'POST') {
    if (!env.ADMIN_PASSWORD) {
      return new Response('ADMIN_PASSWORD not set in environment', { status: 500, headers: CORS })
    }
    const auth = request.headers.get('Authorization') || ''
    if (auth !== `Bearer ${env.ADMIN_PASSWORD}`) {
      return new Response('Unauthorized', { status: 401, headers: CORS })
    }
    if (!env.CONTENT) {
      return new Response('KV namespace CONTENT not bound', { status: 500, headers: CORS })
    }
    const body = await request.json()
    await env.CONTENT.put('v1', JSON.stringify({ ...DEFAULT_CONTENT, ...body }))
    return Response.json({ ok: true }, { headers: CORS })
  }

  return new Response('Method not allowed', { status: 405 })
}
