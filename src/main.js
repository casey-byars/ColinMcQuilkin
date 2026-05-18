import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- NAV -->
  <nav class="flex items-center justify-between px-10 py-6 border-b border-neutral-800">
    <div class="text-xl tracking-[0.3em] font-light">CMDESIGN</div>
    <div class="flex gap-10 text-xs tracking-[0.2em] text-neutral-400 uppercase">
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
  <section class="px-4 pb-4 grid grid-cols-6 gap-[3px]">

    <!-- ROW 1: 3 equal columns -->
    <a href="#" class="project-card col-span-1 aspect-[90/91]" style="background-image: url('https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/mazda_car.jpeg'); background-size: cover; background-position: center;">
      <video class="card-video" src="https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/spectrum-analyzer.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">MAZDA</span>
        <span class="card-title">MUSIC IN DIFFERENT LIGHT</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-3 aspect-[3/1]">
      <video class="card-video" src="https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/starlight-final-four.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">COCA-COLA</span>
        <span class="card-title">STARLIGHT FINAL FOUR</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-2 aspect-[2/1]">
      <div class="card-overlay">
        <span class="card-client">MAZDA</span>
        <span class="card-title">SPECTRUM ANALYZER</span>
      </div>
    </a>

    <!-- ROW 2-3: Nike + Silent Light on left, AI Lab spanning 2 rows on right -->
    <a href="#" class="project-card col-span-2 aspect-[4/3]">
      <div class="card-overlay">
        <span class="card-client">NIKE</span>
        <span class="card-title">FUEL BAND</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-2 aspect-[4/3]">
      <div class="card-overlay">
        <span class="card-client">WALTER ANDERSON</span>
        <span class="card-title">SILENT LIGHT</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-2 row-span-2">
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">IMMERSION 360 AI LAB</span>
      </div>
    </a>

    <!-- ROW 3: Trampled + G-Pods fill remaining 4 cols -->
    <a href="#" class="project-card col-span-2 aspect-[4/3]">
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">TRAMPLED FABRICATION</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-2 aspect-[4/3]">
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">G-PODS</span>
      </div>
    </a>

    <!-- ROW 4 -->
    <a href="#" class="project-card col-span-4 aspect-[4/1]">
      <div class="card-overlay">
        <span class="card-client">LAUREN RODGERS MUSEUM OF ART</span>
        <span class="card-title">UNDER THE OAKS</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-2 aspect-[2/1]">
      <div class="card-overlay">
        <span class="card-client">COLIN MCQUILKIN DESIGN</span>
        <span class="card-title">CMDESIGN PUBLIC ART</span>
      </div>
    </a>

  </section>
`

document.querySelectorAll('.project-card').forEach(card => {
  const video = card.querySelector('.card-video')
  if (!video) return
  card.addEventListener('mouseenter', () => video.play())
  card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0 })
})
