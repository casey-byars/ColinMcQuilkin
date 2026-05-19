import './style.css'
import './immersive-systems.css'
import { navHTML, footerHTML, initPage } from './shared.js'

function card(num, title, tag, desc, specs) {
  const n = parseInt(num)
  const specItems = specs.map(s => `<span class="is-spec">${s}</span>`).join('')
  return `
    <div class="is-card">
      <div class="is-image" id="is-img-${n}"></div>
      <div class="is-body">
        <div class="is-num-row">
          <span class="is-num">${num}</span>
          <span class="is-num-line"></span>
          <span class="is-num-dot"></span>
        </div>
        <div class="is-title" data-ck="is-${n}-title">${title}</div>
        <div class="is-tag"   data-ck="is-${n}-tag">${tag}</div>
        <p class="is-desc"    data-ck="is-${n}-desc">${desc}</p>
        <div class="is-specs" id="is-specs-${n}">${specItems}</div>
        <a href="#" class="is-link">VIEW SYSTEM DETAILS &nbsp;→</a>
      </div>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-16 px-4">
    <h1 class="is-page-title mb-6">IMMERSIVE SYSTEMS</h1>
    <p class="is-subtitle">
      Projection-mapped environments, inflatable architecture, interactive art systems, silent disco, and branded photo experiences.
    </p>
  </section>

  <section class="px-4 pb-4">
    <div class="is-grid">

      ${card('01', 'Inflatable Sphere', 'Immersive Dome Environments',
        'High-impact inflatable structures engineered for 360° projection, spatial audio, and environmental control. Fast deploy, scalable, and adaptable to any site.',
        ['360° Projection', 'Modular Structure', 'Spatial Audio', 'Weather Adaptive'])}

      ${card('02', 'Silent Disco', 'Wireless Audio Experiences',
        'Scalable silent disco systems with multi-channel audio, programmable lighting, and immersive production. Perfect for festivals, activations, and private events.',
        ['Multi-Channel Audio', 'RF Transmission', 'LED & Lighting Sync', 'Crowd Scalable'])}

      ${card('03', 'Projection Mapping', 'Architectural Storytelling',
        'Precision projection systems that transform architecture into dynamic canvases. Designed for museums, landmarks, brand activations, and large-scale events.',
        ['High Brightness', 'Edge Blending', 'Pixel-Mapped Precision', 'Media Server Control'])}

      ${card('04', 'Interactive Environments', 'Responsive & Generative Spaces',
        'Sensor-driven systems that respond to presence, motion, and interaction. We design custom environments that blur the line between audience and experience.',
        ['Motion Tracking', 'Real-Time Generative', 'Interactive Lighting', 'Custom Software'])}

      ${card('05', 'Branded Photo Experience', 'Capture. Share. Elevate.',
        'Premium photo capture experiences that combine cinematic lighting, branded design, and instant sharing. Perfect for brand activations, product launches, and VIP events.',
        ['Cinematic Lighting', 'Instant Sharing', 'Custom Branding', 'Data Capture'])}

      ${card('06', 'Water Projections', 'Liquid Light Environments',
        'Immersive water-based projection experiences that turn fountains, mist, and water screens into dynamic canvases. Perfect for events, installations, and destination experiences.',
        ['Fountain FX', 'Architectural Water', 'Projection Surfaces', 'Live Event Ready'])}

    </div>
  </section>

  ${footerHTML}
`

initPage('immersive-systems')

function isVideo(url) { return /\.(mp4|webm|mov|ogg)(\?|$)/i.test(url) }

async function loadPageContent() {
  try {
    const data = await fetch('/api/content').then(r => r.json())

    // Text fields
    document.querySelectorAll('[data-ck]').forEach(el => {
      const val = data[el.dataset.ck]
      if (val !== undefined) el.textContent = val
    })

    for (let i = 1; i <= 6; i++) {
      // Specs — stored as comma-separated string
      const specs = data[`is-${i}-specs`]
      if (specs) {
        const el = document.getElementById(`is-specs-${i}`)
        if (el) el.innerHTML = specs.split(',').map(s =>
          `<span class="is-spec">${s.trim()}</span>`).join('')
      }

      // Image / video
      const url = data[`is-${i}-image`]
      if (!url) continue
      const container = document.getElementById(`is-img-${i}`)
      if (!container) continue
      container.innerHTML = isVideo(url)
        ? `<video src="${url}" muted loop playsinline preload="metadata" style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
        : `<img src="${url}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">`
    }
  } catch { /* fall back to hardcoded content */ }
}
loadPageContent()
