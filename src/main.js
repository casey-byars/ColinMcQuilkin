import './style.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- HERO TAGLINE -->
  <section class="py-4 px-4">
    <h1 class="page-title mb-4" data-ck="experiences-title" data-ck-fs="experiences-title-fs">IMAGINATION × INNOVATION × ILLUMINATION</h1>
    <p class="page-subtitle" data-ck="experiences-subtitle" data-ck-hide>Immersive Design, Projection, Interactive Art, and Live Environments.</p>
  </section>

  <!-- PROJECT GRID -->
  <section class="px-4 pb-4 grid grid-cols-1 md:grid-cols-6 gap-[25px]">

    <!-- ROW 1 -->
    <a href="#" id="exp-card-1" class="project-card col-span-1 aspect-video md:aspect-auto md:min-h-[260px]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/hype-hotel-mazda.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-1-client"></span>
        <span class="card-title" data-ck="exp-1-title"></span>
      </div>
    </a>
    <a href="#" id="exp-card-2" class="project-card col-span-1 aspect-video md:col-span-3 md:aspect-auto md:min-h-[260px]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/starlight-final-four.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-2-client"></span>
        <span class="card-title" data-ck="exp-2-title"></span>
      </div>
    </a>
    <a href="#" id="exp-card-3" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-auto md:min-h-[260px]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/spectrum-analyzer.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-3-client"></span>
        <span class="card-title" data-ck="exp-3-title"></span>
      </div>
    </a>

    <!-- ROW 2-3 -->
    <a href="#" id="exp-card-4" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/grid-4-nike-fuel-band.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-4-client"></span>
        <span class="card-title" data-ck="exp-4-title"></span>
      </div>
    </a>
    <a href="#" id="exp-card-5" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/grid-5-silent-light.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-5-client"></span>
        <span class="card-title" data-ck="exp-5-title"></span>
      </div>
    </a>
    <a href="#" id="exp-card-6" class="project-card col-span-1 aspect-video md:aspect-auto md:col-span-2 md:row-span-2" style="background-image: url('${R2}/grid-6-ai-lab.jpg'); background-size: cover; background-position: left center;">
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-6-client"></span>
        <span class="card-title" data-ck="exp-6-title"></span>
      </div>
    </a>

    <!-- ROW 3 -->
    <a href="#" id="exp-card-7" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/grid-7-trampled.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-7-client"></span>
        <span class="card-title" data-ck="exp-7-title"></span>
      </div>
    </a>
    <a href="#" id="exp-card-8" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/grid-g-pods.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-8-client"></span>
        <span class="card-title" data-ck="exp-8-title"></span>
      </div>
    </a>

    <!-- ROW 4 -->
    <a href="#" id="exp-card-9" class="project-card col-span-1 aspect-video md:col-span-4 md:aspect-[4/1]">
      <video class="card-video" disablePictureInPicture disableremoteplayback style="pointer-events:none;" src="${R2}/grid-under-the-oaks.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-9-client"></span>
        <span class="card-title" data-ck="exp-9-title"></span>
      </div>
    </a>
    <a href="#" id="exp-card-10" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[2/1]" style="background-image: url('${R2}/grid-10-public-art.png'); background-size: cover; background-position: center;">
      <div class="card-overlay">
        <span class="card-client" data-ck="exp-10-client"></span>
        <span class="card-title" data-ck="exp-10-title"></span>
      </div>
    </a>

  </section>

  ${footerHTML}
`

initPage('experiences')

// Load CMS overrides for experience card media
function isVideo(url) { return /\.(mp4|webm|mov|ogg)(\?|$)/i.test(url) }

async function loadExpMedia() {
  try {
    const data = await getContent()
    const mobile = window.innerWidth < 768
    for (let i = 1; i <= 10; i++) {
      const card = document.getElementById(`exp-card-${i}`)
      if (!card) continue

      // Poster / thumbnail image (shows by default, fades on hover)
      const posterUrl = data[`exp-${i}-poster`]
      if (posterUrl) {
        let posterEl = card.querySelector('.card-poster-img')
        if (!posterEl) {
          posterEl = document.createElement('img')
          posterEl.className = 'card-poster-img'
          posterEl.alt = ''
          const overlay = card.querySelector('.card-overlay')
          if (overlay) card.insertBefore(posterEl, overlay)
          else card.appendChild(posterEl)
        }
        posterEl.src = posterUrl
      }

      const url = data[`exp-${i}-media`]
      if (!url) continue

      if (isVideo(url)) {
        card.style.backgroundImage = ''
        let vid = card.querySelector('.card-video')
        if (!vid) {
          vid = document.createElement('video')
          vid.className = 'card-video'
          vid.muted = true; vid.loop = true; vid.playsInline = true
          vid.disablePictureInPicture = true; vid.disableRemotePlayback = true
          vid.style.pointerEvents = 'none'
          card.prepend(vid)
        }
        vid.src = url
        vid.preload = 'metadata'
        vid.addEventListener('loadedmetadata', () => { vid.currentTime = 0.001 }, { once: true })
        if (mobile) {
          new IntersectionObserver(([e]) => {
            const poster = card.querySelector('.card-poster-img')
            if (e.isIntersecting) {
              vid.play()
              if (poster) poster.style.opacity = '0'
            } else {
              vid.pause(); vid.currentTime = 0.001
              if (poster) poster.style.opacity = '1'
            }
          }, { threshold: 0.5 }).observe(card)
        } else {
          card.addEventListener('mouseenter', () => vid.play())
          card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0.001 })
        }
      } else {
        const vid = card.querySelector('.card-video')
        if (vid) { vid.pause(); vid.remove() }
        card.style.backgroundImage = `url('${url}')`
        card.style.backgroundSize = 'cover'
        card.style.backgroundPosition = 'center'
      }
    }
  } catch { /* fall back to hardcoded media */ }
}
loadExpMedia()
