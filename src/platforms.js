import './style.css'
import { navHTML, initPage } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-12 px-4">
    <h1 class="text-4xl md:text-5xl tracking-[0.25em] font-extralight mb-3">
      PLATFORMS
    </h1>
    <p class="text-[11px] tracking-[0.3em] text-neutral-500 uppercase">
      Interactive Platforms and Digital Environments.
    </p>
  </section>

  <section class="px-4 pb-4 grid grid-cols-1 md:grid-cols-6 gap-[3px]">
    <!-- content coming soon -->
  </section>
`

initPage('platforms')
