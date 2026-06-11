export const navHTML = `
  <nav id="site-nav">
    <a class="nav-logo" href="/"><img src="/CMD_logo.png" alt="CMDESIGN" style="height:40px;width:auto;display:block;"></a>
    <ul class="nav-links">
      <li><a href="/" class="nav-link" data-page="experiences"><span data-ck="nav-experiences">Experience</span></a></li>
      <li><a href="/creative-collective.html" class="nav-link" data-page="creative-collective"><span data-ck="nav-cc">Case Studies</span></a></li>
      <li><a href="/platforms.html" class="nav-link" data-page="platforms"><span data-ck="nav-platforms">Platforms</span></a></li>
      <li><a href="/immersive-systems.html" class="nav-link" data-page="immersive-systems"><span data-ck="nav-is">Immersive Systems</span></a></li>
      <li><a href="/ai-360-lab.html" class="nav-link" data-page="ai-360-lab"><span data-ck="nav-ai">AI 360 Lab</span></a></li>
    </ul>
    <a href="/contact.html" class="nav-cta">Get In Touch</a>
    <div class="mobile-menu-btn" id="mobile-menu-btn">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-nav-open" id="mobile-nav">
    <a href="/" class="nav-link" data-page="experiences"><span data-ck="nav-experiences">Experience</span></a>
    <a href="/creative-collective.html" class="nav-link" data-page="creative-collective"><span data-ck="nav-cc">Case Studies</span></a>
    <a href="/platforms.html" class="nav-link" data-page="platforms"><span data-ck="nav-platforms">Platforms</span></a>
    <a href="/immersive-systems.html" class="nav-link" data-page="immersive-systems"><span data-ck="nav-is">Immersive Systems</span></a>
    <a href="/ai-360-lab.html" class="nav-link" data-page="ai-360-lab"><span data-ck="nav-ai">AI 360 Lab</span></a>
    <a href="/contact.html" class="nav-link" data-page="contact"><span data-ck="nav-contact">Contact</span></a>
  </div>
`

export const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="/CMD_logo.png" alt="CMDESIGN" style="height:36px;width:auto;margin-bottom:16px;"></div>
        <p class="footer-desc" data-ck="footer-desc">The Southeast's leading immersive experience studio. Projection mapping, AI experiences, museum installations, and branded activations. Based in New Orleans. Deployed nationally.</p>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <ul class="footer-links">
          <li><a href="/platforms.html">Projection Mapping</a></li>
          <li><a href="/platforms.html">Interactive Systems</a></li>
          <li><a href="/ai-360-lab.html">360&deg; AI Lab</a></li>
          <li><a href="/platforms.html">Concert Production</a></li>
          <li><a href="/immersive-systems.html">Immersive Rentals</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Studio</div>
        <ul class="footer-links">
          <li><a href="/creative-collective.html">Case Studies</a></li>
          <li><a href="/">Journal</a></li>
          <li><a href="/contact.html">About</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact</div>
        <ul class="footer-links">
          <li><a>New Orleans, Louisiana</a></li>
          <li><a href="mailto:hello@colinmcquilkin.design">hello@colinmcquilkin.design</a></li>
          <li><a>@colinmcquilkindesign</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">&copy; ${new Date().getFullYear()} CMDESIGN &mdash; Colin McQuilkin Design. All rights reserved.</span>
      <div class="footer-social">
        <a class="social-link">Instagram</a>
        <a class="social-link">LinkedIn</a>
        <a class="social-link">Vimeo</a>
      </div>
    </div>
  </footer>
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
      a.classList.add('active')
    }
  })

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn')
  const mobileNav = document.getElementById('mobile-nav')
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open')
    })
  }

  // Scroll-based nav shadow
  const nav = document.getElementById('site-nav')
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.06)'
      } else {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.08)'
      }
    })
  }

  // FAQ toggle
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open')
      const grid = item.closest('.faq-grid')
      if (grid) {
        grid.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open')
          const plus = i.querySelector('.faq-q span:last-child')
          if (plus) plus.textContent = '+'
        })
      }
      if (!isOpen) {
        item.classList.add('open')
        const plus = item.querySelector('.faq-q span:last-child')
        if (plus) plus.textContent = '-'
      }
    })
  })

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const group = this.closest('.filter-group')
      if (group) {
        group.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
      }
      this.classList.add('active')
    })
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
