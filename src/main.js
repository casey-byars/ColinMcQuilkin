import './style.css'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

document.querySelector('#app').innerHTML = `
  <!-- NAV -->
  <nav class="border-b border-neutral-800">
    <div class="flex items-center justify-between px-6 md:px-10 py-6">
      <div class="text-xl tracking-[0.3em] font-light">CMDESIGN</div>
      <!-- Hamburger -->
      <button id="menu-toggle" class="md:hidden flex flex-col gap-1.5 p-2">
        <span class="block w-6 h-px bg-white transition-all"></span>
        <span class="block w-6 h-px bg-white transition-all"></span>
        <span class="block w-6 h-px bg-white transition-all"></span>
      </button>
      <!-- Desktop nav -->
      <div class="hidden md:flex gap-10 text-xs tracking-[0.2em] text-neutral-400 uppercase">
        <a href="#" class="hover:text-white transition-colors">Experiences</a>
        <a href="#" class="hover:text-white transition-colors">Creative Collective</a>
        <a href="#" class="hover:text-white transition-colors">Platforms</a>
        <a href="#" class="hover:text-white transition-colors">Immersive Systems</a>
        <a href="#" class="hover:text-white transition-colors">AI 360 Lab</a>
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobile-menu" class="hidden md:hidden flex-col px-6 pb-6 gap-5 text-xs tracking-[0.2em] text-neutral-400 uppercase">
      <a href="#" class="hover:text-white transition-colors">Experiences</a>
      <a href="#" class="hover:text-white transition-colors">Creative Collective</a>
      <a href="#" class="hover:text-white transition-colors">Platforms</a>
      <a href="#" class="hover:text-white transition-colors">Immersive Systems</a>
      <a href="#" class="hover:text-white transition-colors">AI 360 Lab</a>
    </div>
  </nav>

  <!-- HERO TAGLINE -->
  <section class="text-center py-12 px-4">
    <h1 class="text-4xl md:text-5xl tracking-[0.25em] font-extralight mb-3">
      IMAGINATION <span class="text-neutral-600 mx-1">×</span> INNOVATION <span class="text-neutral-600 mx-1">×</span> ILLUMINATION
    </h1>
    <p class="text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
      Immersive Design, Projection, Interactive Art, and Live Environments.
    </p>
  </section>

  <!-- PROJECT GRID -->
  <section class="px-4 pb-4 grid grid-cols-1 md:grid-cols-6 gap-[3px]">

    <!-- ROW 1 -->
    <a href="#" class="project-card col-span-1 aspect-video md:aspect-[90/91]">
      <video class="card-video" src="${R2}/hype-hotel-mazda.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">MAZDA</span>
        <span class="card-title">MUSIC IN DIFFERENT LIGHT</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-3 md:aspect-[3/1]">
      <video class="card-video" src="${R2}/starlight-final-four.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">COCA-COLA</span>
        <span class="card-title">STARLIGHT FINAL FOUR</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[2/1]">
      <video class="card-video" src="${R2}/spectrum-analyzer.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">MAZDA</span>
        <span class="card-title">SPECTRUM ANALYZER</span>
      </div>
    </a>

    <!-- ROW 2-3 -->
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" src="${R2}/grid-4-nike-fuel-band.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">NIKE</span>
        <span class="card-title">FUEL BAND</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" src="${R2}/grid-5-silent-light.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">WALTER ANDERSON</span>
        <span class="card-title">SILENT LIGHT</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:aspect-auto md:col-span-2 md:row-span-2" style="background-image: url('${R2}/grid-6-ai-lab.jpg'); background-size: cover; background-position: left center;">
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">IMMERSION 360 AI LAB</span>
      </div>
    </a>

    <!-- ROW 3 -->
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" src="${R2}/grid-7-trampled.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">TRAMPLED FABRICATION</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" src="${R2}/grid-g-pods.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">G-PODS</span>
      </div>
    </a>

    <!-- ROW 4 -->
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-4 md:aspect-[4/1]">
      <video class="card-video" src="${R2}/grid-under-the-oaks.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">LAUREN RODGERS MUSEUM OF ART</span>
        <span class="card-title">UNDER THE OAKS</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[2/1]" style="background-image: url('${R2}/grid-10-public-art.png'); background-size: cover; background-position: center;">
      <div class="card-overlay">
        <span class="card-client">COLIN MCQUILKIN DESIGN</span>
        <span class="card-title">CMDESIGN PUBLIC ART</span>
      </div>
    </a>

  </section>
`

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu')
  menu.classList.toggle('hidden')
  menu.classList.toggle('flex')
})

const isMobile = () => window.innerWidth < 768

// Intersection observer for mobile autoplay
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target.querySelector('.card-video')
    if (!video) return
    if (entry.isIntersecting) {
      video.play()
    } else {
      video.pause()
      video.currentTime = 0.001
    }
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
