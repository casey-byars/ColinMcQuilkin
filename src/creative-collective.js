import './style.css'
import './creative-collective.css'
import { navHTML, initPage, loadContent } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

function row(idx, videoKey, posterKey, client, title, desc) {
  const poster = posterKey ? `poster="${R2}/${posterKey}"` : ''
  return `
    <div class="cc-row">
      <div class="cc-media">
        <video class="cc-video" src="${R2}/${videoKey}" ${poster} muted loop playsinline preload="metadata"></video>
      </div>
      <div class="cc-text">
        <span class="cc-client" data-ck="cc-${idx}-client">${client}</span>
        <h2 class="cc-project-title" data-ck="cc-${idx}-title">${title}</h2>
        <p class="cc-description" data-ck="cc-${idx}-desc">${desc}</p>
        <a href="#" class="cc-link">VIEW PROJECT &nbsp;→</a>
      </div>
    </div>
  `
}

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-16 px-4">
    <h1 class="cc-page-title mb-4">CREATIVE COLLECTIVE</h1>
    <p class="text-[11px] tracking-[0.4em] text-neutral-500 uppercase">
      <span data-ck="cc-subtitle">Concept &nbsp;·&nbsp; Design &nbsp;·&nbsp; Execution</span>
    </p>
  </section>

  <section class="px-4 pb-4 flex flex-col gap-[3px]">

    ${row(1, 'hype-hotel-mazda.mp4', null, 'MAZDA', 'Music in a Different Light',
      'An immersive brand activation at SXSW Hype Hotel blending projection, lighting, and live performance to transform a venue into a sensory experience.')}

    ${row(2, 'starlight-final-four.mp4', null, 'COCA-COLA', 'Starlight Final Four',
      'A large-scale immersive environment for Coca-Cola at the NCAA Final Four, combining projection mapping, lighting design, and interactive brand moments.')}

    ${row(3, 'grid-5-silent-light.mp4', null, 'WALTER ANDERSON MUSEUM OF ART', 'Silent Light',
      'A meditative projection installation that brings Walter Anderson\'s iconic artwork to life through light, motion, and sound inside the museum\'s gallery space.')}

    ${row(4, 'grid-4-nike-fuel-band.mp4', 'cc-nike-cover.jpg', 'NIKE', 'Fuel Band SXSW',
      'An interactive brand activation for Nike at SXSW, featuring real-time data visualization and immersive environments celebrating the FuelBand launch.')}

    ${row(5, 'cc-5-ai-lab.mp4', 'cc-5-ai-lab-cover.jpg', 'CMD', 'Immersion 360 AI Lab',
      'A projection-mapped dome experience merging artificial intelligence, live visuals, and participatory storytelling into an immersive education platform.')}

    ${row(6, 'cc-6-mazda-hype-hotel.mp4', null, 'MAZDA', 'SXSW Hype Hotel',
      'Full environmental design and production for the Mazda presence at the SXSW Hype Hotel — creating a branded world through light, architecture, and atmosphere.')}

    ${row(7, 'cc-7-luminous-owls.mp4', 'cc-7-luminous-owls-cover.jpg', 'CMD', 'Luminous Owls',
      'A custom fabricated and projection-mapped art installation celebrating the spirit of the city through light sculpture and generative visuals.')}

    ${row(8, 'cc-8-work4hire.mp4', null, 'ASYMMETRIC', 'Work4Hire SXSW',
      'An immersive branded environment for Asymmetric at SXSW, integrating custom fabrication, video content, and interactive lighting design.')}

    ${row(9, 'grid-7-trampled.mp4', 'cc-trampled-cover.jpg', 'CMD', 'Trampled By Owls',
      'Custom scenic fabrication and stage design for a Trampled By Owls performance, building an environment that amplifies the band\'s sonic identity through visual space.')}

    ${row(10, 'grid-under-the-oaks.mp4', null, 'LAUREN RODGERS MUSEUM OF ART', 'Under the Oaks',
      'A large-scale outdoor projection event transforming the museum grounds into a living canvas — celebrating art, nature, and community through immersive light.')}

    ${row(11, 'cc-11-big-gigantic.mp4', null, 'BIG GIGANTIC', 'Big Gigantic',
      'Full production design for Big Gigantic including video content, lighting systems, and stage environment — creating an immersive concert experience for the touring act.')}

    ${row(12, 'cc-12-cmd-fabrication.mp4', null, 'CMD', 'CMD Fabrication',
      'In-house scenic fabrication showcasing CMD\'s custom build capabilities — from concept and 3D design to finished installation-ready environments.')}

    ${row(13, 'spectrum-analyzer.mp4', 'cc-spectrum-cover.jpg', 'MAZDA', 'Spectrum Analyzer',
      'A real-time audio-reactive spectrum visualization installation created for Mazda at SXSW Hype Hotel, turning music into a dynamic light and projection experience.')}

  </section>
`

initPage('creative-collective')
loadContent()

// Video hover play (desktop) / intersection play (mobile)
const isMobile = () => window.innerWidth < 768
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const v = entry.target.querySelector('.cc-video')
    if (!v) return
    if (entry.isIntersecting) v.play()
    else { v.pause(); v.currentTime = 0.001 }
  })
}, { threshold: 0.4 })

document.querySelectorAll('.cc-row').forEach(row => {
  const v = row.querySelector('.cc-video')
  if (!v) return
  v.addEventListener('loadedmetadata', () => { v.currentTime = 0.001 })
  if (isMobile()) {
    observer.observe(row)
  } else {
    row.addEventListener('mouseenter', () => v.play())
    row.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0.001 })
  }
})
