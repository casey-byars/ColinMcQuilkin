import './style.css'
import './platforms.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

function card(num, mediaKey = null) {
  const n = parseInt(num)
  const media = mediaKey
    ? `<video src="${R2}/${mediaKey}" muted loop playsinline preload="metadata" disablePictureInPicture disableremoteplayback style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;"></video>`
    : ''
  return `
    <div class="plat-card" data-plat="${n}">
      <div class="plat-text">
        <div class="plat-frame">
          <span class="plat-number">${num}</span>
          <div class="plat-title" data-ck="plat-${n}-title"></div>
          <p class="plat-desc" data-ck="plat-${n}-desc"></p>
          <span class="plat-view-link">VIEW GALLERY &nbsp;↗</span>
        </div>
      </div>
      <div class="plat-image" id="plat-img-${n}">${media}</div>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="py-4 px-4">
    <h1 class="page-title mb-4" data-ck="platforms-title" data-ck-fs="platforms-title-fs">PLATFORMS</h1>
    <p class="page-subtitle" data-ck="platforms-subtitle" data-ck-hide>A complete creative production studio for immersive experiences, live events, installations, and branded environments.</p>
  </section>

  <section class="px-4 pb-4">
    <div class="plat-grid">
      ${card('01', 'platform-1.mp4')}
      ${card('02', 'platform-2.mp4')}
      ${card('03')}
      ${card('04')}
      ${card('05')}
      ${card('06')}
      ${card('07')}
      ${card('08')}
    </div>
  </section>

  <!-- ── Platform Popup Modal ── -->
  <div id="plat-modal" role="dialog" aria-modal="true">
    <div id="plat-modal-backdrop"></div>
    <div id="plat-modal-box">
      <button id="plat-modal-close" aria-label="Close">✕</button>

      <!-- Slideshow panel -->
      <div id="plat-slideshow-wrap">
        <div id="plat-slideshow-inner">
          <img id="plat-slide-img" alt="" />
          <button class="plat-arrow" id="plat-prev-btn" aria-label="Previous">&#8249;</button>
          <button class="plat-arrow" id="plat-next-btn" aria-label="Next">&#8250;</button>
        </div>
        <div id="plat-slide-footer">
          <div id="plat-slide-dots"></div>
          <span id="plat-slide-counter"></span>
        </div>
      </div>

      <!-- Video panel -->
      <div id="plat-video-wrap">
        <video id="plat-modal-video" playsinline controls disablePictureInPicture disableremoteplayback style="pointer-events:auto;"></video>
        <div id="plat-modal-vol">
          <button id="plat-vol-btn" aria-label="Toggle mute">
            <svg id="plat-vol-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path id="plat-vol-wave1" d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path id="plat-vol-wave2" d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          </button>
          <input type="range" id="plat-vol-slider" min="0" max="1" step="0.01" value="0.8" aria-label="Volume">
          <span id="plat-vol-pct">80%</span>
        </div>
      </div>

    </div>
  </div>

  ${footerHTML}
`

initPage('platforms')

// ── Popup state ──────────────────────────────────────────────────────────────
const platPopupData = {}
let currentSlides = []
let currentSlideIdx = 0

// ── Volume control ───────────────────────────────────────────────────────────
const platVolSlider = document.getElementById('plat-vol-slider')
const platVolPct    = document.getElementById('plat-vol-pct')
const platVolBtn    = document.getElementById('plat-vol-btn')
const platVolWave1  = document.getElementById('plat-vol-wave1')
const platVolWave2  = document.getElementById('plat-vol-wave2')

function applyPlatVolume(vol) {
  const vid = document.getElementById('plat-modal-video')
  vid.volume = vol
  vid.muted  = vol === 0
  platVolSlider.value = vol
  platVolPct.textContent = Math.round(vol * 100) + '%'
  const pct = vol * 100
  platVolSlider.style.background = `linear-gradient(to right, white ${pct}%, #2a2a2a ${pct}%)`
  platVolWave1.style.opacity = vol > 0 ? '1' : '0'
  platVolWave2.style.opacity = vol > 0.4 ? '1' : '0'
}

platVolSlider.addEventListener('input', e => applyPlatVolume(parseFloat(e.target.value)))
platVolBtn.addEventListener('click', () => {
  const vid = document.getElementById('plat-modal-video')
  applyPlatVolume(vid.muted || vid.volume === 0 ? 0.8 : 0)
})

// ── Slideshow ────────────────────────────────────────────────────────────────
function renderSlide(idx) {
  if (!currentSlides.length) return
  currentSlideIdx = Math.max(0, Math.min(idx, currentSlides.length - 1))
  const img = document.getElementById('plat-slide-img')
  img.style.opacity = '0'
  img.onload = () => { img.style.opacity = '1' }
  img.src = currentSlides[currentSlideIdx]

  document.getElementById('plat-slide-counter').textContent =
    `${currentSlideIdx + 1} / ${currentSlides.length}`

  const dotsEl = document.getElementById('plat-slide-dots')
  dotsEl.innerHTML = currentSlides.map((_, i) =>
    `<span class="plat-dot${i === currentSlideIdx ? ' active' : ''}"></span>`
  ).join('')
  dotsEl.querySelectorAll('.plat-dot').forEach((dot, i) => {
    dot.addEventListener('click', () => renderSlide(i))
  })

  const showDots = currentSlides.length > 1
  dotsEl.style.display = showDots ? 'flex' : 'none'
  document.getElementById('plat-prev-btn').style.opacity = currentSlideIdx > 0 ? '1' : '0.2'
  document.getElementById('plat-next-btn').style.opacity = currentSlideIdx < currentSlides.length - 1 ? '1' : '0.2'
  document.getElementById('plat-prev-btn').style.display = showDots ? 'flex' : 'none'
  document.getElementById('plat-next-btn').style.display = showDots ? 'flex' : 'none'
}

document.getElementById('plat-prev-btn').addEventListener('click', () => renderSlide(currentSlideIdx - 1))
document.getElementById('plat-next-btn').addEventListener('click', () => renderSlide(currentSlideIdx + 1))

// ── Modal open / close ───────────────────────────────────────────────────────
function openPlatModal(popup) {
  const slideshowWrap = document.getElementById('plat-slideshow-wrap')
  const videoWrap     = document.getElementById('plat-video-wrap')
  slideshowWrap.style.display = 'none'
  videoWrap.style.display     = 'none'

  if (popup.type === 'slideshow' && popup.slides.length) {
    currentSlides = popup.slides
    slideshowWrap.style.display = 'flex'
    renderSlide(0)
  } else if (popup.type === 'video' && popup.url) {
    videoWrap.style.display = 'flex'
    const vid = document.getElementById('plat-modal-video')
    applyPlatVolume(0.8)
    vid.src = popup.url
    vid.load()
    vid.play().catch(() => {})
  } else {
    return
  }

  document.getElementById('plat-modal').classList.add('is-open')
  document.body.style.overflow = 'hidden'
}

function closePlatModal() {
  const vid = document.getElementById('plat-modal-video')
  vid.pause(); vid.src = ''
  document.getElementById('plat-modal').classList.remove('is-open')
  document.body.style.overflow = ''
}

document.getElementById('plat-modal-close').addEventListener('click', closePlatModal)
document.getElementById('plat-modal-backdrop').addEventListener('click', closePlatModal)
document.addEventListener('keydown', e => {
  if (!document.getElementById('plat-modal').classList.contains('is-open')) return
  if (e.key === 'Escape')      closePlatModal()
  if (e.key === 'ArrowLeft')   renderSlide(currentSlideIdx - 1)
  if (e.key === 'ArrowRight')  renderSlide(currentSlideIdx + 1)
})

// ── Background video hover play ──────────────────────────────────────────────
const isMobile = () => window.innerWidth < 768
function isVideo(url) { return /\.(mp4|webm|mov|ogg)(\?|$)/i.test(url) }

function attachVideoPlay(vid, card) {
  vid.disablePictureInPicture = true
  vid.disableRemotePlayback = true
  vid.addEventListener('loadedmetadata', () => { vid.currentTime = 0.001 })
  const getPoster = () => card.querySelector('.plat-poster')

  if (isMobile()) {
    new IntersectionObserver(([e]) => {
      const poster = getPoster()
      if (e.isIntersecting) {
        vid.play().catch(() => {})
        if (poster) { vid.style.opacity = '1'; poster.style.opacity = '0' }
      } else {
        if (poster) { vid.style.opacity = '0'; poster.style.opacity = '1' }
        setTimeout(() => { vid.pause(); vid.currentTime = 0.001 }, 500)
      }
    }, { threshold: 0.5 }).observe(card)
  } else {
    card.addEventListener('mouseenter', () => {
      const poster = getPoster()
      vid.play().catch(() => {})
      if (poster) { vid.style.opacity = '1'; poster.style.opacity = '0' }
    })
    card.addEventListener('mouseleave', () => {
      const poster = getPoster()
      if (poster) {
        // Fade video out and poster back in simultaneously
        vid.style.opacity = '0'
        poster.style.opacity = '1'
        // Pause and reset only after the fade-out finishes
        setTimeout(() => { vid.pause(); vid.currentTime = 0.001 }, 500)
      } else {
        vid.pause(); vid.currentTime = 0.001
      }
    })
  }
}

// ── Card registration (click + hover) ────────────────────────────────────────
function registerPlatCard(cardEl) {
  cardEl.addEventListener('click', () => {
    const n = parseInt(cardEl.dataset.plat)
    const popup = platPopupData[n]
    if (popup) openPlatModal(popup)
  })
  const v = cardEl.querySelector('video')
  if (v) attachVideoPlay(v, cardEl)
}

document.querySelectorAll('.plat-card').forEach(registerPlatCard)

// ── Create extra cards dynamically (beyond the 8 hardcoded) ──────────────────
function createExtraCard(n) {
  const grid = document.querySelector('.plat-grid')
  grid.insertAdjacentHTML('beforeend', `
    <div class="plat-card" data-plat="${n}">
      <div class="plat-text">
        <div class="plat-frame">
          <span class="plat-number">${String(n).padStart(2,'0')}</span>
          <div class="plat-title" data-ck="plat-${n}-title"></div>
          <p class="plat-desc" data-ck="plat-${n}-desc"></p>
          <span class="plat-view-link">VIEW GALLERY &nbsp;↗</span>
        </div>
      </div>
      <div class="plat-image" id="plat-img-${n}"></div>
    </div>
  `)
  registerPlatCard(grid.querySelector(`[data-plat="${n}"]`))
}

// ── CMS content loader ───────────────────────────────────────────────────────
async function loadPageContent() {
  try {
    const data = await getContent()
    const platCount = Math.max(8, parseInt(data['plat-count'] || '8'))

    // Create extra cards beyond the 8 hardcoded ones
    for (let n = 9; n <= platCount; n++) {
      if (!document.querySelector(`[data-plat="${n}"]`)) createExtraCard(n)
    }

    // Text fields (covers all cards including extras)
    document.querySelectorAll('[data-ck]').forEach(el => {
      const val = data[el.dataset.ck]
      if (val !== undefined) el.textContent = val
    })

    // Apply saved card order
    if (data['plat-order']) {
      const grid = document.querySelector('.plat-grid')
      data['plat-order'].split(',').forEach(i => {
        const card = document.querySelector(`[data-plat="${i.trim()}"]`)
        if (card) grid.appendChild(card)
      })
    }

    // Hide deleted cards
    for (let i = 1; i <= platCount; i++) {
      if (data[`plat-${i}-deleted`] === '1') {
        const card = document.querySelector(`[data-plat="${i}"]`)
        if (card) card.style.display = 'none'
      }
    }

    // Card background media
    for (let i = 1; i <= platCount; i++) {
      if (data[`plat-${i}-deleted`] === '1') continue
      const url = data[`plat-${i}-image`]
      if (!url) continue
      const container = document.getElementById(`plat-img-${i}`)
      if (!container) continue
      const existing = container.querySelector('video')
      if (existing) existing.pause()

      if (isVideo(url)) {
        container.innerHTML = `<video src="${url}" muted loop playsinline preload="metadata" disablePictureInPicture disableremoteplayback style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;"></video>`
        const vid  = container.querySelector('video')
        const c    = container.closest('.plat-card')
        if (vid && c) attachVideoPlay(vid, c)
      } else {
        container.innerHTML = `<img src="${url}" alt="" style="width:100%;height:100%;object-fit:cover;display:block;pointer-events:none;">`
      }
    }

    // Thumbnail posters — overlaid on top of video, fades out on hover
    for (let i = 1; i <= platCount; i++) {
      if (data[`plat-${i}-deleted`] === '1') continue
      const thumbUrl = data[`plat-${i}-thumb`]
      const container = document.getElementById(`plat-img-${i}`)
      if (!container) continue
      // Remove any existing poster first
      const old = container.querySelector('.plat-poster')
      if (old) old.remove()
      if (thumbUrl) {
        const img = document.createElement('img')
        img.src = thumbUrl
        img.alt = ''
        img.className = 'plat-poster'
        container.appendChild(img)
        // Hide the video underneath so thumbnail is the default visible state
        const underVid = container.querySelector('video')
        if (underVid) underVid.style.opacity = '0'
      }
    }

    // Popup data
    for (let i = 1; i <= platCount; i++) {
      if (data[`plat-${i}-deleted`] === '1') continue
      const type = data[`plat-${i}-popup-type`]
      if (!type || type === 'none') continue
      if (type === 'slideshow') {
        const slidesStr = (data[`plat-${i}-popup-slides`] || '').trim()
        const slides = slidesStr.split(',').map(s => s.trim()).filter(Boolean)
        if (slides.length) platPopupData[i] = { type: 'slideshow', slides }
      } else if (type === 'video') {
        const videoUrl = (data[`plat-${i}-popup-video`] || '').trim()
        if (videoUrl) platPopupData[i] = { type: 'video', url: videoUrl }
      }
    }

  } catch { /* fall back to hardcoded content */ }
}
loadPageContent()
