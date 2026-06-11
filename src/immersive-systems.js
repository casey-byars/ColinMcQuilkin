import './redesign-base.css'
import './immersive-systems.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- SYSTEMS INTRO -->
  <div class="systems-intro">
    <div>
      <div class="eyebrow" data-ck="sys-eyebrow">Rental &amp; Production Systems</div>
      <h1 class="display" data-ck="sys-heading">Immersive<br><em>Rentals</em></h1>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:flex-end">
      <p style="font-family:var(--condensed);font-size:15px;letter-spacing:0.06em;color:var(--grey);line-height:1.8;margin-bottom:28px" data-ck="sys-sub">A complete ecosystem of production-ready immersive technology &mdash; available for rent with full operator support. Every system ships with a trained technician.</p>
      <a href="/contact.html" class="btn-ghost btn-arrow" data-ck="sys-cta">Request Pricing</a>
    </div>
  </div>

  <!-- SYSTEMS GRID -->
  <div class="systems-grid">
    <!-- 360 Dome -->
    <div class="system-card">
      <div class="system-thumb">
        <div class="system-thumb-bg sys-dome"></div>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
          <span style="font-family:var(--display);font-style:italic;font-size:48px;font-weight:300;color:rgba(0,212,204,0.15)">360&deg;</span>
        </div>
        <div class="cinema-label">Signature System</div>
      </div>
      <div class="system-body">
        <div class="system-name" data-ck="sys-1-name">360&deg; AI Dome</div>
        <div class="system-tagline" data-ck="sys-1-tagline">Generative AI Immersive Experience</div>
        <div class="system-specs">
          <div class="spec-item"><div class="spec-val">40ft</div><div class="spec-key">Diameter</div></div>
          <div class="spec-item"><div class="spec-val">90</div><div class="spec-key">Capacity</div></div>
          <div class="spec-item"><div class="spec-val">4-6h</div><div class="spec-key">Setup</div></div>
          <div class="spec-item"><div class="spec-val">120V</div><div class="spec-key">Power</div></div>
        </div>
        <div class="system-actions">
          <a href="/contact.html" class="sys-btn primary">Book Now</a>
          <button class="sys-btn">Spec Sheet</button>
        </div>
      </div>
    </div>
    <!-- Silent Disco -->
    <div class="system-card">
      <div class="system-thumb">
        <div class="system-thumb-bg sys-disco"></div>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
          <span style="font-family:var(--display);font-style:italic;font-size:32px;font-weight:300;color:rgba(180,50,201,0.2)">Silent</span>
        </div>
        <div class="cinema-label">Production System</div>
      </div>
      <div class="system-body">
        <div class="system-name" data-ck="sys-2-name">Silent Disco</div>
        <div class="system-tagline" data-ck="sys-2-tagline">Multi-Channel Wireless Audio</div>
        <div class="system-specs">
          <div class="spec-item"><div class="spec-val">3ch</div><div class="spec-key">Channels</div></div>
          <div class="spec-item"><div class="spec-val">500+</div><div class="spec-key">Headsets</div></div>
          <div class="spec-item"><div class="spec-val">1h</div><div class="spec-key">Setup</div></div>
          <div class="spec-item"><div class="spec-val">Indoor / Outdoor</div><div class="spec-key">Deployment</div></div>
        </div>
        <div class="system-actions">
          <a href="/contact.html" class="sys-btn primary">Request Pricing</a>
          <button class="sys-btn">Spec Sheet</button>
        </div>
      </div>
    </div>
    <!-- Projection Systems -->
    <div class="system-card">
      <div class="system-thumb">
        <div class="system-thumb-bg sys-proj"></div>
        <div class="cinema-label">Production System</div>
      </div>
      <div class="system-body">
        <div class="system-name" data-ck="sys-3-name">Projection Systems</div>
        <div class="system-tagline" data-ck="sys-3-tagline">High-Lumen Event Projection</div>
        <div class="system-specs">
          <div class="spec-item"><div class="spec-val">30K+</div><div class="spec-key">Lumens</div></div>
          <div class="spec-item"><div class="spec-val">4K</div><div class="spec-key">Resolution</div></div>
          <div class="spec-item"><div class="spec-val">Laser</div><div class="spec-key">Technology</div></div>
          <div class="spec-item"><div class="spec-val">Indoor/Out</div><div class="spec-key">Deploy</div></div>
        </div>
        <div class="system-actions">
          <a href="/contact.html" class="sys-btn primary">Request Pricing</a>
          <button class="sys-btn">Spec Sheet</button>
        </div>
      </div>
    </div>
    <!-- Interactive Systems -->
    <div class="system-card">
      <div class="system-thumb">
        <div class="system-thumb-bg sys-interact"></div>
        <div class="cinema-label">Production System</div>
      </div>
      <div class="system-body">
        <div class="system-name" data-ck="sys-4-name">Interactive Systems</div>
        <div class="system-tagline" data-ck="sys-4-tagline">Touch, Motion &amp; Sensor-Driven</div>
        <div class="system-specs">
          <div class="spec-item"><div class="spec-val">Real-time</div><div class="spec-key">Response</div></div>
          <div class="spec-item"><div class="spec-val">Multi-user</div><div class="spec-key">Capability</div></div>
          <div class="spec-item"><div class="spec-val">Custom</div><div class="spec-key">Content</div></div>
          <div class="spec-item"><div class="spec-val">Any Scale</div><div class="spec-key">Deploy</div></div>
        </div>
        <div class="system-actions">
          <a href="/contact.html" class="sys-btn primary">Request Pricing</a>
          <button class="sys-btn">Spec Sheet</button>
        </div>
      </div>
    </div>
    <!-- Water Projection -->
    <div class="system-card">
      <div class="system-thumb">
        <div class="system-thumb-bg sys-water"></div>
        <div class="cinema-label">Specialty System</div>
      </div>
      <div class="system-body">
        <div class="system-name" data-ck="sys-5-name">Water Projection</div>
        <div class="system-tagline" data-ck="sys-5-tagline">Mist Screen &mdash; 12ft to 50ft Wide</div>
        <div class="system-specs">
          <div class="spec-item"><div class="spec-val">12-50ft</div><div class="spec-key">Screen Width</div></div>
          <div class="spec-item"><div class="spec-val">Outdoor</div><div class="spec-key">Deploy</div></div>
          <div class="spec-item"><div class="spec-val">Walk-Through</div><div class="spec-key">Format</div></div>
          <div class="spec-item"><div class="spec-val">Stunning</div><div class="spec-key">Effect</div></div>
        </div>
        <div class="system-actions">
          <a href="/contact.html" class="sys-btn primary">Request Pricing</a>
          <button class="sys-btn">Spec Sheet</button>
        </div>
      </div>
    </div>
    <!-- Photo Systems -->
    <div class="system-card">
      <div class="system-thumb">
        <div class="system-thumb-bg sys-photo"></div>
        <div class="cinema-label">Experiential System</div>
      </div>
      <div class="system-body">
        <div class="system-name" data-ck="sys-6-name">Photo Systems</div>
        <div class="system-tagline" data-ck="sys-6-tagline">Immersive Photo Experiences</div>
        <div class="system-specs">
          <div class="spec-item"><div class="spec-val">360&deg;</div><div class="spec-key">Capture</div></div>
          <div class="spec-item"><div class="spec-val">Instant</div><div class="spec-key">Delivery</div></div>
          <div class="spec-item"><div class="spec-val">Social</div><div class="spec-key">Optimized</div></div>
          <div class="spec-item"><div class="spec-val">Custom</div><div class="spec-key">Branding</div></div>
        </div>
        <div class="system-actions">
          <a href="/contact.html" class="sys-btn primary">Request Pricing</a>
          <button class="sys-btn">Spec Sheet</button>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-tagline" data-ck="sys-cta-tagline">Available Now</div>
    <h2 class="cta-heading" data-ck="sys-cta-heading">Every System Ships<br>with a <em>Trained Operator</em></h2>
    <p class="cta-sub" data-ck="sys-cta-sub">All rental systems include full technical production support. We don&rsquo;t just ship equipment &mdash; we show up and make it work.</p>
    <div class="cta-buttons">
      <a href="/contact.html" class="btn-primary btn-arrow" data-ck="sys-cta-btn">Request Pricing &amp; Availability</a>
    </div>
  </section>

  ${footerHTML}
`

initPage('immersive-systems')
getContent()
