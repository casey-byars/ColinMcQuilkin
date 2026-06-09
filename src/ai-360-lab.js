import './style.css'
import './ai-360-lab.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="py-4 px-4">
    <h1 class="page-title mb-4" data-ck="ai-title" data-ck-fs="ai-title-fs">360 AI LAB</h1>
    <p class="page-subtitle" data-ck="ai-subtitle" data-ck-hide>Education &nbsp;·&nbsp; Immersive &nbsp;·&nbsp; Interactive</p>
  </section>

  <div class="px-4">

    <!-- HERO: text left, video right -->
    <div class="ai-hero">
      <div class="ai-hero-text">
        <div class="ai-section-label">
          <span class="ai-section-num">01</span>
          <span data-ck="ai-01-label"></span>
        </div>
        <h2 class="ai-hero-heading" data-ck="ai-hero-heading"></h2>
        <p class="ai-hero-desc" data-ck="ai-hero-desc"></p>
        <div class="ai-info-blocks">
          <div class="ai-info-block">
            <div class="ai-info-icon">⌂</div>
            <div>
              <div class="ai-info-label" data-ck="ai-info-1-label"></div>
              <div class="ai-info-text" data-ck="ai-info-1-text"></div>
            </div>
          </div>
          <div class="ai-info-block">
            <div class="ai-info-icon">◷</div>
            <div>
              <div class="ai-info-label" data-ck="ai-info-2-label"></div>
              <div class="ai-info-text" data-ck="ai-info-2-text"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="ai-hero-video">
        <img id="ai-hero-img" src="https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/ai-lab-hero.png" alt="360 AI Lab" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
        <div class="ai-play-btn">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span class="ai-watch-label">Click to Watch</span>
      </div>
    </div>

    <!-- BOTTOM GRID: sections 02–07 with divider image between 04 and 05 -->
    <div class="ai-grid">

      <div class="ai-cell ai-cell--wide">
        <div class="ai-cell-label"><span class="ai-cell-num">02</span> <span data-ck="ai-02-label"></span></div>
        <img class="ai-02-logos" src="https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/uploads/AI-Logos.jpg" alt="AI tools">
        <div class="ai-tool-row" id="ai-02-tools">
          <span class="ai-tool">ChatGPT</span>
          <span class="ai-tool">Midjourney</span>
          <span class="ai-tool">Pika</span>
          <span class="ai-tool">Suno/Udio</span>
          <span class="ai-tool">Resolume</span>
          <span class="ai-tool">TouchDesigner</span>
        </div>
        <p class="ai-cell-desc" data-ck="ai-02-desc"></p>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">03</span> <span data-ck="ai-03-label"></span></div>
        <p class="ai-cell-desc" data-ck="ai-03-desc"></p>
        <ul class="ai-checklist" id="ai-03-list"></ul>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">04</span> <span data-ck="ai-04-label"></span></div>
        <p class="ai-cell-desc" data-ck="ai-04-desc"></p>
        <ul class="ai-checklist" id="ai-04-list"></ul>
      </div>

      <!-- Divider image cell -->
      <div class="ai-divider-cell" id="ai-divider-wrap">
        <img id="ai-divider-img" src="https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/uploads/light-man-low-resolution-2x.jpeg" alt="">
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">05</span> <span data-ck="ai-05-label"></span></div>
        <ul class="ai-checklist" id="ai-05-list"></ul>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">06</span> <span data-ck="ai-06-label"></span></div>
        <p class="ai-cell-desc" data-ck="ai-06-desc"></p>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">07</span> <span data-ck="ai-07-label"></span></div>
        <ul class="ai-checklist" id="ai-07-list"></ul>
      </div>

    </div>

    <!-- QUOTE -->
    <div class="ai-quote">
      <span class="ai-quote-mark ai-quote-mark--left">&ldquo;</span>
      <p class="ai-quote-text" id="ai-quote-text">Experience is the bridge between imagination and understanding.<br>Together, we learn, create, and explore new realities.</p>
      <span class="ai-quote-mark ai-quote-mark--right">&rdquo;</span>
    </div>

  </div>

  <!-- ── Video Modal ── -->
  <div id="ai-modal" role="dialog" aria-modal="true">
    <div id="ai-modal-backdrop"></div>
    <div id="ai-modal-box">
      <button id="ai-modal-close" aria-label="Close">✕</button>
      <div id="ai-modal-video-wrap">
        <video id="ai-modal-video" playsinline controls disablePictureInPicture disableremoteplayback style="pointer-events:auto;"></video>
      </div>
      <div id="ai-modal-vol">
        <button id="ai-vol-btn" aria-label="Toggle mute">
          <svg id="ai-vol-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path id="ai-vol-wave1" d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path id="ai-vol-wave2" d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        </button>
        <input type="range" id="ai-vol-slider" min="0" max="1" step="0.01" value="0.8" aria-label="Volume">
        <span id="ai-vol-pct">80%</span>
      </div>
    </div>
  </div>

  ${footerHTML}
`

initPage('ai-360-lab')

// ── Modal logic ─────────────────────────────────────────────────────────────
const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'
let aiVideoUrl = `${R2}/cc-5-ai-lab.mp4`

const aiVolSlider = document.getElementById('ai-vol-slider')
const aiVolPct    = document.getElementById('ai-vol-pct')
const aiVolBtn    = document.getElementById('ai-vol-btn')
const aiVolWave1  = document.getElementById('ai-vol-wave1')
const aiVolWave2  = document.getElementById('ai-vol-wave2')

function applyAIVolume(vol) {
  const vid = document.getElementById('ai-modal-video')
  vid.volume = vol
  vid.muted  = vol === 0
  aiVolSlider.value = vol
  aiVolPct.textContent = Math.round(vol * 100) + '%'
  const pct = vol * 100
  aiVolSlider.style.background = `linear-gradient(to right, white ${pct}%, #2a2a2a ${pct}%)`
  aiVolWave1.style.opacity = vol > 0 ? '1' : '0'
  aiVolWave2.style.opacity = vol > 0.4 ? '1' : '0'
}

aiVolSlider.addEventListener('input', e => applyAIVolume(parseFloat(e.target.value)))
aiVolBtn.addEventListener('click', () => {
  const vid = document.getElementById('ai-modal-video')
  applyAIVolume(vid.muted || vid.volume === 0 ? 0.8 : 0)
})

function openAIModal() {
  if (!aiVideoUrl) return
  const modal = document.getElementById('ai-modal')
  const vid   = document.getElementById('ai-modal-video')
  applyAIVolume(0.8)
  vid.src = aiVideoUrl
  vid.load()
  vid.play().catch(() => {})
  modal.classList.add('is-open')
  document.body.style.overflow = 'hidden'
}

function closeAIModal() {
  const modal = document.getElementById('ai-modal')
  const vid   = document.getElementById('ai-modal-video')
  vid.pause()
  vid.src = ''
  modal.classList.remove('is-open')
  document.body.style.overflow = ''
}

document.getElementById('ai-modal-close').addEventListener('click', closeAIModal)
document.getElementById('ai-modal-backdrop').addEventListener('click', closeAIModal)
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAIModal() })

document.querySelector('.ai-hero-video').addEventListener('click', openAIModal)

function renderAIList(id, items, type) {
  const ul = document.getElementById(id)
  if (!ul) return
  ul.className = type === 'dot' ? 'ai-dotlist' : 'ai-checklist'
  ul.innerHTML = items.split('\n').filter(s => s.trim()).map(s => `<li>${s.trim()}</li>`).join('')
}

async function loadAIMedia() {
  try {
    const data = await getContent()

    // Hero image + popup video
    const imgUrl = data['ai-hero-image']
    if (imgUrl) { const img = document.getElementById('ai-hero-img'); if (img) img.src = imgUrl }
    if (data['ai-hero-video']) aiVideoUrl = data['ai-hero-video']

    // Divider image between 04 and 05
    if (data['ai-divider-image']) {
      const el = document.getElementById('ai-divider-img')
      if (el) el.src = data['ai-divider-image']
    }

    // Tools row (comma-separated)
    if (data['ai-02-tools']) {
      const row = document.getElementById('ai-02-tools')
      if (row) row.innerHTML = data['ai-02-tools'].split(',').map(t => `<span class="ai-tool">${t.trim()}</span>`).join('')
    }

    // Lists (sections 03–05, 07)
    ;[3, 4, 5, 7].forEach(n => {
      const key = `ai-0${n}-list`
      const typeKey = `ai-0${n}-list-type`
      if (data[key]) renderAIList(`ai-0${n}-list`, data[key], data[typeKey] || 'check')
    })

    // Quote text (newlines → <br>)
    if (data['ai-quote-text']) {
      const el = document.getElementById('ai-quote-text')
      if (el) el.innerHTML = data['ai-quote-text'].replace(/\n/g, '<br>')
    }
  } catch {}
}
loadAIMedia()
