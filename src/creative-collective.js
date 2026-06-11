import './redesign-base.css'
import './creative-collective.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- PAGE HERO -->
  <div class="page-hero-slim">
    <div class="eyebrow" data-ck="cc-eyebrow">Our Work</div>
    <h1 class="display" data-ck="cc-heading">Case Studies</h1>
    <p style="margin-top:20px;font-family:var(--condensed);font-size:15px;letter-spacing:0.08em;color:var(--grey);max-width:520px;line-height:1.7" data-ck="cc-sub">Twenty-five years of work. Select projects below &mdash; filtered by discipline, industry, or medium.</p>
  </div>

  <!-- FILTER BAR -->
  <div class="filter-bar">
    <div class="filter-group">
      <button class="filter-btn active">All</button>
      <button class="filter-btn">Brands</button>
      <button class="filter-btn">Museums</button>
      <button class="filter-btn">Concerts</button>
      <button class="filter-btn">Public Art</button>
      <button class="filter-btn">AI / Tech</button>
    </div>
    <div class="filter-group" style="border-left:1px solid var(--border)">
      <button class="filter-btn">Projection Mapping</button>
      <button class="filter-btn">Interactive</button>
      <button class="filter-btn">Fabrication</button>
    </div>
    <div class="filter-search">
      <span class="search-icon">&#9906;</span>
      <input type="text" placeholder="Search projects...">
    </div>
  </div>

  <!-- CASE STUDIES GRID -->
  <div class="case-studies-grid">
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#1a0a00,#2d1800)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Brand</span><span class="cs-tag">Projection</span><span class="cs-tag">Content</span></div>
        <div class="cs-client" data-ck="cc-1-client">Coca-Cola</div>
        <div class="cs-project" data-ck="cc-1-project">Starlight Activation</div>
        <div class="cs-result" data-ck="cc-1-result">Audio-interactive projection mapping for a national brand launch event. <strong>3,000+ attendees &mdash; New Orleans &mdash; 2023</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#000614,#001428)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Brand</span><span class="cs-tag">Interactive</span></div>
        <div class="cs-client" data-ck="cc-2-client">Mazda</div>
        <div class="cs-project" data-ck="cc-2-project">Spectrum Analyzer</div>
        <div class="cs-result" data-ck="cc-2-result">Real-time audio-reactive interactive installation for dealer experience events. <strong>Multi-city &mdash; 2022</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#0a0a0a,#1a1a1a)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Brand</span><span class="cs-tag">Interactive</span></div>
        <div class="cs-client" data-ck="cc-3-client">Nike</div>
        <div class="cs-project" data-ck="cc-3-project">FuelBand Experience</div>
        <div class="cs-result" data-ck="cc-3-result">Interactive projection installation for Nike FuelBand product launch. <strong>New Orleans &mdash; 2021</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#000a14,#001428)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">AI</span><span class="cs-tag">Dome</span></div>
        <div class="cs-client" data-ck="cc-4-client">360&deg; AI Lab</div>
        <div class="cs-project" data-ck="cc-4-project">Generative AI Dome</div>
        <div class="cs-result" data-ck="cc-4-result">Traveling 40ft dome with real-time generative AI projection. <strong>90-person capacity &mdash; Available nationwide</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#001200,#002800)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Concert</span><span class="cs-tag">Touring</span></div>
        <div class="cs-client" data-ck="cc-5-client">Widespread Panic</div>
        <div class="cs-project" data-ck="cc-5-project">Touring Visual Design</div>
        <div class="cs-result" data-ck="cc-5-result">Full touring visual production design for national concert tour. <strong>National Tour &mdash; 2022</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#140010,#280020)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Museum</span><span class="cs-tag">Installation</span></div>
        <div class="cs-client" data-ck="cc-6-client">Walter Anderson Museum</div>
        <div class="cs-project" data-ck="cc-6-project">Silent Light</div>
        <div class="cs-result" data-ck="cc-6-result">Permanent immersive installation interpreting Anderson&rsquo;s paintings through light and projection. <strong>Ocean Springs, MS</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#0a0814,#140c28)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Museum</span><span class="cs-tag">Projection</span></div>
        <div class="cs-client" data-ck="cc-7-client">Lauren Rogers Museum</div>
        <div class="cs-project" data-ck="cc-7-project">Immersive Collection Experience</div>
        <div class="cs-result" data-ck="cc-7-result">Projection-based interpretive experience for permanent collection exhibition. <strong>Laurel, MS</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#0e0800,#1c1000)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Museum</span><span class="cs-tag">Public Art</span></div>
        <div class="cs-client" data-ck="cc-8-client">George Ohr Museum</div>
        <div class="cs-project" data-ck="cc-8-project">Ceramic Light</div>
        <div class="cs-result" data-ck="cc-8-result">Site-specific projection installation responding to Gehry&rsquo;s building architecture. <strong>Biloxi, MS</strong></div>
      </div>
    </div>
    <div class="cs-card">
      <div class="cs-thumb"><div class="cs-thumb-bg" style="background:linear-gradient(135deg,#001814,#002828)"></div></div>
      <div class="cs-body">
        <div class="cs-tags"><span class="cs-tag">Concert</span><span class="cs-tag">Touring</span></div>
        <div class="cs-client" data-ck="cc-9-client">Trampled by Turtles</div>
        <div class="cs-project" data-ck="cc-9-project">Tour Visual Design</div>
        <div class="cs-result" data-ck="cc-9-result">Custom visual content and touring production design. <strong>National Tour &mdash; 2023</strong></div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-tagline" data-ck="cc-cta-tagline">Next Project</div>
    <h2 class="cta-heading" data-ck="cc-cta-heading">Your Project<br>Belongs <em>Here</em></h2>
    <div class="cta-buttons">
      <a href="/contact.html" class="btn-primary btn-arrow" data-ck="cc-cta-btn">Start a Project</a>
    </div>
  </section>

  ${footerHTML}
`

initPage('creative-collective')
getContent()
