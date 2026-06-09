export const footerHTML = `
  <footer class="site-footer">
    <div class="footer-mark">
      <span class="footer-rule">——</span>
      <span class="footer-logo">CMDESIGN</span>
      <span class="footer-rule">——</span>
    </div>
    <nav class="footer-nav">
      <a href="/"><span data-ck="nav-experiences">Experience</span></a>
      <a href="/platforms.html"><span data-ck="nav-platforms">Platforms</span></a>
      <a href="/creative-collective.html"><span data-ck="nav-cc">Creative Collections</span></a>
      <a href="/immersive-systems.html"><span data-ck="nav-is">Immersive Systems</span></a>
      <a href="/ai-360-lab.html"><span data-ck="nav-ai">AI 360 Lab</span></a>
      <a href="/contact.html"><span data-ck="nav-contact">Contact</span></a>
    </nav>
    <div class="footer-copy">
      <a href="mailto:colinmcquilkin@yahoo.com">colinmcquilkin@yahoo.com</a>
      <span class="footer-dot">·</span>
      <span>© ${new Date().getFullYear()} Colin McQuilkin Design</span>
    </div>
    <div style="display:flex;justify-content:center;padding:2rem 1rem 0;">
      <img src="/cdc-logos.png" alt="Client logos" style="max-width:560px;width:100%;opacity:0.45;display:block;">
    </div>
  </footer>
`

export const navHTML = `
  <nav class="border-b border-neutral-800" style="background:#000;">
    <div class="nav-inner">
      <a href="/"><img src="/CMD_logo.png" alt="CMDESIGN" style="display:block;height:52px;width:auto;flex-shrink:0;"></a>
      <button id="menu-toggle" class="nav-hamburger flex flex-col gap-1.5 p-2">
        <span class="block w-6 h-px bg-white transition-all"></span>
        <span class="block w-6 h-px bg-white transition-all"></span>
        <span class="block w-6 h-px bg-white transition-all"></span>
      </button>
      <div id="nav-desktop" class="nav-desktop text-xs tracking-[0.2em] text-neutral-400 uppercase">
        <a href="/" class="nav-link hover:text-white transition-colors" data-page="experiences"><span data-ck="nav-experiences">Experience</span></a>
        <a href="/platforms.html" class="nav-link hover:text-white transition-colors" data-page="platforms"><span data-ck="nav-platforms">Platforms</span></a>
        <a href="/creative-collective.html" class="nav-link hover:text-white transition-colors" data-page="creative-collective"><span data-ck="nav-cc">Creative Collections</span></a>
        <a href="/immersive-systems.html" class="nav-link hover:text-white transition-colors" data-page="immersive-systems"><span data-ck="nav-is">Immersive Systems</span></a>
        <a href="/ai-360-lab.html" class="nav-link hover:text-white transition-colors" data-page="ai-360-lab"><span data-ck="nav-ai">AI 360 Lab</span></a>
        <a href="/contact.html" class="nav-link hover:text-white transition-colors" data-page="contact"><span data-ck="nav-contact">Contact</span></a>
      </div>
    </div>
    <div id="mobile-menu" class="nav-mobile-menu flex-col px-6 pb-6 gap-5 text-xs tracking-[0.2em] text-neutral-400 uppercase">
      <a href="/" class="nav-link hover:text-white transition-colors" data-page="experiences"><span data-ck="nav-experiences">Experience</span></a>
      <a href="/platforms.html" class="nav-link hover:text-white transition-colors" data-page="platforms"><span data-ck="nav-platforms">Platforms</span></a>
      <a href="/creative-collective.html" class="nav-link hover:text-white transition-colors" data-page="creative-collective"><span data-ck="nav-cc">Creative Collections</span></a>
      <a href="/immersive-systems.html" class="nav-link hover:text-white transition-colors" data-page="immersive-systems"><span data-ck="nav-is">Immersive Systems</span></a>
      <a href="/ai-360-lab.html" class="nav-link hover:text-white transition-colors" data-page="ai-360-lab"><span data-ck="nav-ai">AI 360 Lab</span></a>
      <a href="/contact.html" class="nav-link hover:text-white transition-colors" data-page="contact"><span data-ck="nav-contact">Contact</span></a>
    </div>
  </nav>
`

const CACHE_KEY = 'cms_v1'

function applyContentData(data) {
  document.querySelectorAll('[data-ck]').forEach(el => {
    const val = data[el.dataset.ck]
    if (val === undefined) return
    if (val === '' && el.dataset.ckHide !== undefined) {
      el.style.display = 'none'
    } else if (val !== '') {
      el.style.display = ''
      el.textContent = val
    }
  })
  document.querySelectorAll('[data-ck-fs]').forEach(el => {
    const val = data[el.dataset.ckFs]
    if (val) el.style.fontSize = val
  })
}

// Returns fresh data from network; also applies cache immediately to kill the flash.
export async function getContent() {
  // Always fetch fresh — no localStorage cache for structural data (row counts etc.)
  try {
    const abort = new AbortController()
    const timer = setTimeout(() => abort.abort(), 5000)
    const data  = await fetch(`/api/content?_=${Date.now()}`, { signal: abort.signal }).then(r => r.json())
    clearTimeout(timer)
    applyContentData(data)
    return data
  } catch {
    // Fallback to cache only if network completely fails
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const data = JSON.parse(cached)
        applyContentData(data)
        return data
      }
    } catch {}
    return {}
  }
}

export async function loadContent() {
  await getContent()
}

export function initPage(activePage) {
  // Suppress browser media session overlay (Opera/Chrome HUD) for all videos.
  // Fires in capture phase so it catches dynamically-injected videos too.
  if ('mediaSession' in navigator) {
    window.addEventListener('play', e => {
      if (e.target.tagName !== 'VIDEO') return
      navigator.mediaSession.metadata = null
      navigator.mediaSession.playbackState = 'none'
    }, true)
  }

  // Highlight active nav link
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.dataset.page === activePage) {
      a.classList.add('text-white', 'nav-active')
      a.classList.remove('text-neutral-400')
    }
  })

  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu')
    const open = menu.style.display === 'flex'
    menu.style.display = open ? 'none' : 'flex'
  })

  const isMobile = () => window.innerWidth < 768

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('.card-video')
      if (!video) return
      if (entry.isIntersecting) { video.play() }
      else { video.pause(); video.currentTime = 0.001 }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('.card-video')
    if (!video) return
    video.preload = 'metadata'
    video.addEventListener('loadedmetadata', () => { video.currentTime = 0.001 })
    if (isMobile()) {
      observer.observe(card)
    } else {
      card.addEventListener('mouseenter', () => video.play())
      card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0.001 })
    }
  })
}
