import './style.css'
import { navHTML, footerHTML, initPage, loadContent } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- HERO TAGLINE -->
  <section class="text-center py-12 px-4">
    <h1 class="font-display text-xl md:text-2xl tracking-[0.25em] font-extralight mb-3">
      IMAGINATION <span class="text-neutral-600 mx-1">×</span> INNOVATION <span class="text-neutral-600 mx-1">×</span> ILLUMINATION
    </h1>
    <p class="text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
      <span data-ck="experiences-subtitle">Immersive Design, Projection, Interactive Art, and Live Environments.</span>
    </p>
  </section>

  <!-- PROJECT GRID -->
  <section class="px-4 pb-4 grid grid-cols-1 md:grid-cols-6 gap-[3px]">

    <!-- ROW 1 -->
    <a href="#" class="project-card col-span-1 aspect-video md:aspect-[90/91]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/hype-hotel-mazda.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">MAZDA</span>
        <span class="card-title">MUSIC IN DIFFERENT LIGHT</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-3 md:aspect-[3/1]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/starlight-final-four.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">COCA-COLA</span>
        <span class="card-title">STARLIGHT FINAL FOUR</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[2/1]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/spectrum-analyzer.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">MAZDA</span>
        <span class="card-title">SPECTRUM ANALYZER</span>
      </div>
    </a>

    <!-- ROW 2-3 -->
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/grid-4-nike-fuel-band.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">NIKE</span>
        <span class="card-title">FUEL BAND</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/grid-5-silent-light.mp4" muted loop playsinline></video>
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
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/grid-7-trampled.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">TRAMPLED FABRICATION</span>
      </div>
    </a>
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-2 md:aspect-[4/3]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/grid-g-pods.mp4" muted loop playsinline></video>
      <div class="card-overlay">
        <span class="card-client">CMD</span>
        <span class="card-title">G-PODS</span>
      </div>
    </a>

    <!-- ROW 4 -->
    <a href="#" class="project-card col-span-1 aspect-video md:col-span-4 md:aspect-[4/1]">
      <video class="card-video" disablePictureInPicture style="pointer-events:none;" src="${R2}/grid-under-the-oaks.mp4" muted loop playsinline></video>
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

  ${footerHTML}
`

initPage('experiences')
loadContent()
