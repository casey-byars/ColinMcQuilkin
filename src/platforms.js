import './style.css'
import './platforms.css'
import { navHTML, footerHTML, initPage } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

function card(num, title, tags, desc, mediaKey = null) {
  const n = parseInt(num)
  const media = mediaKey
    ? `<video src="${R2}/${mediaKey}" muted loop playsinline preload="metadata" style="width:100%;height:100%;object-fit:cover;display:block;"></video>`
    : ''
  return `
    <div class="plat-card">
      <div class="plat-text">
        <div class="plat-number">${num}</div>
        <div class="plat-divider"></div>
        <div class="plat-title" data-ck="plat-${n}-title">${title}</div>
        <div class="plat-tags" data-ck="plat-${n}-tags">${tags}</div>
        <p class="plat-desc" data-ck="plat-${n}-desc">${desc}</p>
      </div>
      <div class="plat-image" id="plat-img-${n}">${media}</div>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-16 px-4">
    <h1 class="plat-page-title mb-6">PLATFORMS</h1>
    <p class="plat-subtitle">
      A complete creative production studio for immersive experiences, live events, installations, and branded environments.
    </p>
  </section>

  <section class="px-4 pb-4">
    <div class="plat-grid">

      ${card('01', 'Interactive<br>Experiences',
        'Interactive · Brand Activation · Immersive',
        'Interactive experiences that bring brands, museums, and festivals to life through immersive brand activation, interactive installations, and engaging environments.',
        'platform-1.mp4')}

      ${card('02', 'Projection',
        'Architectural · Environmental · Storytelling',
        'Transforming surfaces into immersive visual experiences. Precision-mapped content designed to tell stories, elevate brands, and engage audiences.',
        'platform-2.mp4')}

      ${card('03', 'Education<br>Immersive<br>Interactive',
        'Video · Lighting · Set Design · Touring',
        'Research and development for immersive learning environments. Video, lighting, set design that inspire, educate, and captivate audiences.')}

      ${card('04', 'Video Content<br>Creation',
        'Concept · Shoot · Edit · Animate',
        'High-impact video content for live shows, installations, and brands. From concept development to final delivery, we bring ideas to life on every screen.')}

      ${card('05', 'Set Design &<br>Fabrication',
        'Design · Engineer · Build',
        'Custom set and scenic design built in-house. From concept and 3D design to fabrication and installation, we build environments that stand out.')}

      ${card('06', 'Concert<br>Production<br>Design',
        'Video · Lighting · Set Design · Touring',
        'Full production design for touring artists and live events. Video, lighting, set design, and touring systems that create unforgettable live experiences. 25+ years on the road with top touring acts.')}

      ${card('07', 'Rentals',
        'Projection · Inflatable Environments · Lighting · Silent Disco',
        'Modular immersive rental systems featuring projection technology, inflatable environments, lighting, and silent disco experiences.')}

      ${card('08', 'Consulting &<br>Systems Design',
        'Plan · Design · Integrate',
        'From initial concept to system integration, we help plan and design solutions that deliver results. Technical expertise. Creative vision.')}

    </div>
  </section>

  ${footerHTML}
`

initPage('platforms')

// Load CMS text + platform card images from KV
async function loadPageContent() {
  try {
    const data = await fetch('/api/content').then(r => r.json())
    // Patch text fields
    document.querySelectorAll('[data-ck]').forEach(el => {
      const val = data[el.dataset.ck]
      if (val !== undefined) el.textContent = val
    })
    // Inject uploaded images (overrides default video if set)
    for (let i = 1; i <= 8; i++) {
      const url = data[`plat-${i}-image`]
      if (!url) continue
      const container = document.getElementById(`plat-img-${i}`)
      if (!container) continue
      // Pause any existing video first
      const vid = container.querySelector('video')
      if (vid) vid.pause()
      container.innerHTML = `<img src="${url}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;">`
    }
  } catch { /* fall back to hardcoded content */ }
}
loadPageContent()

const isMobile = () => window.innerWidth < 768
document.querySelectorAll('.plat-card').forEach(card => {
  const v = card.querySelector('video')
  if (!v) return
  v.addEventListener('loadedmetadata', () => { v.currentTime = 0.001 })
  if (isMobile()) {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play(); else { v.pause(); v.currentTime = 0.001 }
    }, { threshold: 0.5 }).observe(card)
  } else {
    card.addEventListener('mouseenter', () => v.play())
    card.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0.001 })
  }
})
