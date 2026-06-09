import './style.css'
import './creative-collective.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

// Video URL map for modal — can be overridden by CMS
const ccVideos = {}

function row(idx, videoKey, posterKey, client, title, desc) {
  ccVideos[idx] = `${R2}/${videoKey}`
  const reverse   = idx % 2 === 0
  const posterSrc = posterKey ? `${R2}/${posterKey}` : ''

  return `
    <div class="cc-row${reverse ? ' cc-row--reverse' : ''}" id="cc-row-${idx}" data-idx="${idx}" data-modal-desc="">

      <div class="cc-text-panel">
        <div class="cc-frame">
          <h2 class="cc-project-title" data-ck="cc-${idx}-title"></h2>
          <span class="cc-client" data-ck="cc-${idx}-client"></span>
          <p class="cc-desc" data-ck="cc-${idx}-desc"></p>
        </div>
      </div>

      <div class="cc-media-panel" id="cc-thumb-box-${idx}">
        <video class="cc-row-video" muted loop playsinline preload="none"
          disablePictureInPicture disableremoteplayback></video>
        ${posterSrc ? `<img class="cc-row-poster" src="${posterSrc}" alt="">` : ''}
        <div class="cc-play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </div>
      </div>

    </div>
  `
}

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="py-4 px-4">
    <h1 class="page-title mb-4" data-ck="cc-title" data-ck-fs="cc-title-fs">Creative Collections</h1>
    <p class="page-subtitle" data-ck="cc-subtitle" data-ck-hide>IMAGINATION &nbsp;·&nbsp; INNOVATION &nbsp;·&nbsp; ILLUMINATION</p>
  </section>

  <section id="cc-rows" class="px-4 pb-4 flex flex-col gap-[25px]">

    ${row(1,  'hype-hotel-mazda.mp4',      null,                   'MAZDA HYPE HOTEL SXSW',          'Spectrum Analyzer',
      'A real-time audio-reactive spectrum visualization installation created for Mazda at SXSW Hype Hotel, turning music into a dynamic light and projection experience.')}

    ${row(2,  'starlight-final-four.mp4',  null,                   'COCA-COLA',                      'Starlight Interactive Experience',
      'A large-scale immersive environment for Coca-Cola at the NCAA Final Four, combining projection mapping, lighting design, and interactive brand moments.')}

    ${row(3,  'cc-6-mazda-hype-hotel.mp4', null,                   'MAZDA HYPE HOTEL SXSW',          'CX-3 Interactive Light Sculpture',
      'Projection-mapped vehicle transformed into a real-time branded visual installation.')}

    ${row(4,  'grid-4-nike-fuel-band.mp4', 'cc-nike-cover.jpg',    'NIKE SXSW',                      'Frost Tower',
      'Large-scale branded light activation transforming an architectural landmark.')}

    ${row(5,  'grid-under-the-oaks.mp4',   null,                   'LAUREN ROGERS MUSEUM OF ART',    'Animated Collections',
      'Museum artwork transformed into animated projection environments.')}

    ${row(6,  'grid-5-silent-light.mp4',   null,                   'WALTER ANDERSON MUSEUM OF ART',  'Silent Light',
      'A meditative projection installation that brings Walter Anderson\'s iconic artwork to life through light, motion, and sound inside the museum\'s gallery space.')}

    ${row(7,  'cc-5-ai-lab.mp4',           'cc-5-ai-lab-cover.jpg','CMD',                            'Immersion 360 AI Lab',
      'A projection-mapped dome experience merging artificial intelligence, live visuals, and participatory storytelling into an immersive education platform.')}

    ${row(8,  'cc-7-luminous-owls.mp4',    'cc-7-luminous-owls-cover.jpg', 'CMD',                   'Luminous Owls',
      'A custom fabricated and projection-mapped art installation celebrating the spirit of the city through light sculpture and generative visuals.')}

    ${row(9,  'cc-8-work4hire.mp4',        null,                   'ASYMMETRIC',                     'Work4Hire SXSW',
      'An immersive branded environment for Asymmetric at SXSW, integrating custom fabrication, video content, and interactive lighting design.')}

    ${row(10, 'grid-7-trampled.mp4',       'cc-trampled-cover.jpg','CMD',                            'Trampled By Owls',
      'Custom scenic fabrication and stage design for a Trampled By Owls performance, building an environment that amplifies the band\'s sonic identity through visual space.')}

    ${row(11, 'cc-11-big-gigantic.mp4',    null,                   'BIG GIGANTIC',                   'Big Gigantic',
      'Full production design for Big Gigantic including video content, lighting systems, and stage environment — creating an immersive concert experience for the touring act.')}

    ${row(12, 'cc-12-cmd-fabrication.mp4', null,                   'CMD',                            'CMD Fabrication',
      'In-house scenic fabrication showcasing CMD\'s custom build capabilities — from concept and 3D design to finished installation-ready environments.')}

    ${row(13, 'spectrum-analyzer.mp4',     'cc-spectrum-cover.jpg','MAZDA',                          'Spectrum Analyzer SXSW',
      'Music-reactive vehicle installation with projection, LED systems, and real-time visualization.')}

  </section>

  <!-- ── Video Modal ── -->
  <div id="cc-modal" role="dialog" aria-modal="true">
    <div id="cc-modal-backdrop"></div>
    <div id="cc-modal-box">
      <button id="cc-modal-close" aria-label="Close">✕</button>
      <div id="cc-modal-video-wrap">
        <video id="cc-modal-video" muted playsinline controls disablePictureInPicture disableremoteplayback style="pointer-events:auto;"></video>
      </div>
      <div id="cc-modal-vol">
        <button id="cc-vol-btn" aria-label="Toggle mute">
          <svg id="cc-vol-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path id="cc-vol-wave1" d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path id="cc-vol-wave2" d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        </button>
        <input type="range" id="cc-vol-slider" min="0" max="1" step="0.01" value="0" aria-label="Volume">
        <span id="cc-vol-pct">0%</span>
      </div>
      <div id="cc-modal-meta">
        <span id="cc-modal-client"></span>
        <h2 id="cc-modal-title"></h2>
        <p id="cc-modal-desc"></p>
      </div>
    </div>
  </div>

  ${footerHTML}
`

initPage('creative-collective')

// ── Hover-play video in each row ────────────────────────────────────────────
function attachCCRowHover(rowEl) {
  const vid    = rowEl.querySelector('.cc-row-video')
  const idx    = parseInt(rowEl.dataset.idx)
  if (!vid) return

  rowEl.addEventListener('mouseenter', () => {
    const poster = rowEl.querySelector('.cc-row-poster')
    if (!vid.src) {
      vid.src = ccVideos[idx] || ''
      vid.load()
    }
    vid.play().catch(() => {})
    vid.classList.add('is-playing')
    if (poster) poster.style.opacity = '0'
  })

  rowEl.addEventListener('mouseleave', () => {
    const poster = rowEl.querySelector('.cc-row-poster')
    vid.pause()
    vid.currentTime = 0.001
    vid.classList.remove('is-playing')
    if (poster) poster.style.opacity = '1'
  })
}

// Hover-play kept as a utility but not attached — rows show thumbnail statically,
// video only plays inside the popup modal when the row is clicked.

// ── Create extra rows dynamically (beyond the 13 hardcoded) ─────────────────
function createExtraRow(idx) {
  const reverse = idx % 2 === 0
  const section = document.getElementById('cc-rows')
  section.insertAdjacentHTML('beforeend', `
    <div class="cc-row${reverse ? ' cc-row--reverse' : ''}" id="cc-row-${idx}" data-idx="${idx}" data-modal-desc="">
      <div class="cc-text-panel">
        <div class="cc-frame">
          <h2 class="cc-project-title" data-ck="cc-${idx}-title"></h2>
          <span class="cc-client" data-ck="cc-${idx}-client"></span>
          <p class="cc-desc" data-ck="cc-${idx}-desc"></p>
        </div>
      </div>
      <div class="cc-media-panel" id="cc-thumb-box-${idx}">
        <video class="cc-row-video" muted loop playsinline preload="none"
          disablePictureInPicture disableremoteplayback></video>
        <div class="cc-play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        </div>
      </div>
    </div>
  `)
  ccVideos[idx] = ''
}

// ── Volume control ──────────────────────────────────────────────────────────
const volSlider = document.getElementById('cc-vol-slider')
const volPct    = document.getElementById('cc-vol-pct')
const volBtn    = document.getElementById('cc-vol-btn')
const volWave1  = document.getElementById('cc-vol-wave1')
const volWave2  = document.getElementById('cc-vol-wave2')

function applyVolume(vol) {
  const vid = document.getElementById('cc-modal-video')
  vid.volume = vol
  vid.muted  = vol === 0
  volSlider.value = vol
  volPct.textContent = Math.round(vol * 100) + '%'
  const pct = vol * 100
  volSlider.style.background = `linear-gradient(to right, white ${pct}%, #2a2a2a ${pct}%)`
  volWave1.style.opacity = vol > 0 ? '1' : '0'
  volWave2.style.opacity = vol > 0.4 ? '1' : '0'
}

volSlider.addEventListener('input', e => applyVolume(parseFloat(e.target.value)))
volBtn.addEventListener('click', () => {
  const vid = document.getElementById('cc-modal-video')
  applyVolume(vid.muted || vid.volume === 0 ? 0.8 : 0)
})

// ── Modal open / close ──────────────────────────────────────────────────────
function openModal(idx) {
  const modal    = document.getElementById('cc-modal')
  const vid      = document.getElementById('cc-modal-video')
  const rowEl    = document.getElementById(`cc-row-${idx}`)
  const titleEl  = document.querySelector(`[data-ck="cc-${idx}-title"]`)
  const clientEl = document.querySelector(`[data-ck="cc-${idx}-client"]`)

  document.getElementById('cc-modal-title').textContent  = titleEl?.textContent  ?? ''
  document.getElementById('cc-modal-client').textContent = clientEl?.textContent ?? ''
  document.getElementById('cc-modal-desc').textContent   = rowEl?.dataset.modalDesc ?? ''

  applyVolume(0.8)
  vid.src = ccVideos[idx] || ''
  vid.load()
  vid.play().catch(() => {})

  modal.classList.add('is-open')
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  const modal = document.getElementById('cc-modal')
  const vid   = document.getElementById('cc-modal-video')
  vid.pause()
  vid.src = ''
  modal.classList.remove('is-open')
  document.body.style.overflow = ''
}

document.getElementById('cc-modal-close').addEventListener('click', closeModal)
document.getElementById('cc-modal-backdrop').addEventListener('click', closeModal)
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() })

// Row click → open modal
document.getElementById('cc-rows').addEventListener('click', e => {
  const r = e.target.closest('.cc-row[data-idx]')
  if (r) openModal(parseInt(r.dataset.idx))
})

// ── Spotlight glow — tracks cursor within each row ────────────────────────
document.getElementById('cc-rows').addEventListener('mousemove', e => {
  const row = e.target.closest('.cc-row')
  if (!row) return
  const rect = row.getBoundingClientRect()
  row.style.setProperty('--glow-x', `${e.clientX - rect.left}px`)
  row.style.setProperty('--glow-y', `${e.clientY - rect.top}px`)
})

// ── CMS loader ──────────────────────────────────────────────────────────────
async function loadCCMedia() {
  try {
    const data = await getContent()
    const ccCount = Math.max(13, parseInt(data['cc-count'] || '13'))

    // Create extra rows beyond the 13 hardcoded ones
    for (let i = 14; i <= ccCount; i++) {
      if (!document.getElementById(`cc-row-${i}`)) createExtraRow(i)
    }

    // Apply saved row order
    if (data['cc-order']) {
      const section = document.getElementById('cc-rows')
      data['cc-order'].split(',').forEach(i => {
        const r = document.getElementById(`cc-row-${i.trim()}`)
        if (r) section.appendChild(r)
      })
    }

    for (let i = 1; i <= ccCount; i++) {
      // Hide deleted rows
      if (data[`cc-${i}-deleted`] === '1') {
        const rowEl = document.getElementById(`cc-row-${i}`)
        if (rowEl) rowEl.style.display = 'none'
        continue
      }

      // Text content (needed for dynamically created rows that missed initPage)
      const textKeys = ['title', 'client', 'desc']
      textKeys.forEach(key => {
        const val = data[`cc-${i}-${key}`]
        if (val !== undefined) {
          const el = document.querySelector(`[data-ck="cc-${i}-${key}"]`)
          if (el) el.textContent = val
        }
      })
      // Popup description stored on the row element, never rendered on the page
      const rowEl = document.getElementById(`cc-row-${i}`)
      if (rowEl && data[`cc-${i}-modal-desc`] !== undefined) {
        rowEl.dataset.modalDesc = data[`cc-${i}-modal-desc`]
      }

      // Poster/thumbnail override
      const thumbUrl = data[`cc-${i}-thumb`]
      if (thumbUrl) {
        const panel = document.getElementById(`cc-thumb-box-${i}`)
        if (panel) {
          let poster = panel.querySelector('.cc-row-poster')
          if (!poster) {
            poster = document.createElement('img')
            poster.className = 'cc-row-poster'
            poster.alt = ''
            panel.appendChild(poster)
          }
          poster.src = thumbUrl
        }
      }

      // Video override — update modal source map; also update row video if already loaded
      const videoUrl = data[`cc-${i}-media`]
      if (videoUrl) {
        ccVideos[i] = videoUrl
        const panel = document.getElementById(`cc-thumb-box-${i}`)
        if (panel) {
          const vid = panel.querySelector('.cc-row-video')
          if (vid && vid.src) vid.src = videoUrl  // update if already lazy-loaded
        }
      }
    }
  } catch { /* fall back to hardcoded content */ }
}
loadCCMedia()
