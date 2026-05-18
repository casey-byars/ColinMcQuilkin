import './style.css'
import './creative-collective.css'
import { navHTML, initPage } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-16 px-4">
    <h1 class="cc-page-title mb-4">CREATIVE COLLECTIVE</h1>
    <p class="text-[11px] tracking-[0.4em] text-neutral-500 uppercase">
      Concept &nbsp;·&nbsp; Design &nbsp;·&nbsp; Execution
    </p>
  </section>

  <section class="px-4 pb-4 flex flex-col gap-[3px]">

    <div class="cc-row">
      <div class="cc-media">
        <!-- replace src with actual image/video -->
        <div class="cc-placeholder"></div>
      </div>
      <div class="cc-text">
        <h2 class="cc-project-title">Liquid Borders</h2>
        <p class="cc-description">An immersive installation exploring the relationship between natural systems and human interaction through movement, sound, and generative visuals.</p>
        <a href="#" class="cc-link">VIEW PROJECT &nbsp;→</a>
      </div>
    </div>

    <div class="cc-row">
      <div class="cc-media">
        <div class="cc-placeholder"></div>
      </div>
      <div class="cc-text">
        <h2 class="cc-project-title">Form in Flux</h2>
        <p class="cc-description">A study in material balance and light. This sculptural installation transforms space, reflects scale and shadows, and the passage of time.</p>
        <a href="#" class="cc-link">VIEW PROJECT &nbsp;→</a>
      </div>
    </div>

  </section>
`

initPage('creative-collective')
