import './redesign-base.css'
import './platforms.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- PAGE HERO -->
  <div class="page-hero-slim">
    <div class="eyebrow" data-ck="plat-eyebrow">What We Build</div>
    <h1 class="display" data-ck="plat-heading">Platforms</h1>
    <p style="margin-top:20px;font-family:var(--condensed);font-size:15px;letter-spacing:0.08em;color:var(--grey);max-width:560px;line-height:1.7" data-ck="plat-sub">Eight distinct disciplines, each developed over decades of real-world production. This is what we build.</p>
  </div>

  <!-- PLATFORMS GRID -->
  <div class="platforms-grid">
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#0a0600 0%,#1c0c00 50%,#0a0600 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform i.</div>
        <div class="plat-name" data-ck="plat-1-name">Brand Activations</div>
        <div class="plat-desc" data-ck="plat-1-desc">Full-service experiential production for brand campaigns, product launches, and sponsored cultural events. From concept through install, we build the moments that become the campaign.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#0d0500 0%,#1a0900 50%,#0d0500 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform ii.</div>
        <div class="plat-name" data-ck="plat-2-name">Projection Mapping</div>
        <div class="plat-desc" data-ck="plat-2-desc">Architectural-scale light transformation for buildings, stages, sculptures, and environments. From single-night events to permanent public art.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#001408 0%,#002814 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform iii.</div>
        <div class="plat-name" data-ck="plat-3-name">Interactive Systems</div>
        <div class="plat-desc" data-ck="plat-3-desc">Touch, motion, and sensor-driven environments where the audience shapes the experience in real time.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#001200 0%,#002400 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform iv.</div>
        <div class="plat-name" data-ck="plat-4-name">Concert Production Design</div>
        <div class="plat-desc" data-ck="plat-4-desc">Full touring visual design for live music. Stage design, video content, lighting direction, and scenic fabrication for artists at every scale.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#0e0800 0%,#1c1000 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform v.</div>
        <div class="plat-name" data-ck="plat-5-name">Fabrication &amp; Scenic Design</div>
        <div class="plat-desc" data-ck="plat-5-desc">Custom scenic builds, structural fabrication, and production design for live events, installations, and permanent environments.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#001818 0%,#003030 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform vi.</div>
        <div class="plat-name" data-ck="plat-6-name">Public Art</div>
        <div class="plat-desc" data-ck="plat-6-desc">Site-specific commissions for public spaces, civic environments, and cultural institutions that become part of a community&rsquo;s permanent visual landscape.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#100014 0%,#200028 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform vii.</div>
        <div class="plat-name" data-ck="plat-7-name">Content Creation</div>
        <div class="plat-desc" data-ck="plat-7-desc">Original motion graphics, generative content, and custom visual systems designed specifically for immersive projection environments.</div>
        <div class="plat-link">Explore Platform</div>
      </div>
    </div>
    <div class="platform-card">
      <div class="platform-bg" style="background:linear-gradient(135deg,#000814 0%,#001028 100%)"></div>
      <div class="platform-overlay">
        <div class="plat-num">Platform viii.</div>
        <div class="plat-name" data-ck="plat-8-name">360&deg; AI Lab</div>
        <div class="plat-desc" data-ck="plat-8-desc">A traveling generative AI dome experience. Real-time AI projection, 90-person capacity, 40ft dome, available nationwide for events, education, and cultural programming.</div>
        <div class="plat-link">Explore the Lab</div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-tagline" data-ck="plat-cta-tagline">Let&rsquo;s Collaborate</div>
    <h2 class="cta-heading" data-ck="plat-cta-heading">Which Platform<br>Fits Your <em>Vision</em>?</h2>
    <div class="cta-buttons">
      <a href="/contact.html" class="btn-primary btn-arrow" data-ck="plat-cta-btn">Tell Us About Your Project</a>
    </div>
  </section>

  ${footerHTML}
`

initPage('platforms')
getContent()
