import './redesign-base.css'
import './ai-360-lab.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- AI HERO -->
  <section class="ai-hero">
    <div class="ai-hero-bg"></div>
    <div class="ai-grid-lines"></div>
    <div class="ai-glow-1"></div>
    <div class="ai-glow-2"></div>
    <div class="ai-hero-content">
      <div class="ai-badge"><span class="ai-badge-dot"></span><span data-ck="ai-badge">Now Available for Booking Nationwide</span></div>
      <h1 data-ck="ai-hero-h1">The 360&deg;<br><em>AI</em> <span class="accent-teal">Lab</span></h1>
      <p class="ai-hero-desc" data-ck="ai-hero-desc">A traveling generative AI dome experience. Step inside real-time artificial intelligence. Available for corporate events, festivals, universities, and cultural institutions nationwide.</p>
      <div class="ai-actions">
        <a href="/contact.html" class="btn-teal" data-ck="ai-hero-cta1">Book a Discovery Call &#8594;</a>
        <a href="#ai-overview" class="btn-ghost" data-ck="ai-hero-cta2">Program Overview</a>
      </div>
    </div>
    <div class="ai-specs-bar">
      <div class="ai-spec"><span class="ai-spec-val">40ft</span><span class="ai-spec-key">Dome Diameter</span></div>
      <div class="ai-spec"><span class="ai-spec-val">90</span><span class="ai-spec-key">Person Capacity</span></div>
      <div class="ai-spec"><span class="ai-spec-val">4-6h</span><span class="ai-spec-key">Setup Time</span></div>
      <div class="ai-spec"><span class="ai-spec-val">120V</span><span class="ai-spec-key">Power Required</span></div>
    </div>
  </section>

  <!-- PROGRAM OVERVIEW -->
  <section class="ai-overview" id="ai-overview">
    <div class="ai-dome-visual">
      <div class="ai-dome-ring ai-ring-1"></div>
      <div class="ai-dome-ring ai-ring-2"></div>
      <div class="ai-dome-ring ai-ring-3"></div>
    </div>
    <div>
      <div class="eyebrow" style="color:#00d4cc" data-ck="ai-overview-eyebrow">Program Overview</div>
      <h2 class="display" style="margin-bottom:24px" data-ck="ai-overview-heading">What Is the<br>360&deg; <em>AI Lab</em>?</h2>
      <div class="gold-rule" style="background:#00d4cc"></div>
      <p style="font-size:15px;color:var(--light-grey);line-height:1.8;margin-bottom:20px" data-ck="ai-overview-p1">The 360&deg; AI Lab is the Southeast&rsquo;s first traveling generative AI dome experience. Inside a 40-foot inflatable dome, real-time artificial intelligence generates visual content that responds to audience input, music, and environmental data &mdash; creating a unique, collective experience every time.</p>
      <p style="font-size:15px;color:var(--grey);line-height:1.8;margin-bottom:40px" data-ck="ai-overview-p2">It&rsquo;s part art installation, part technology workshop, part collective experience. Every session is unique &mdash; no two experiences are ever the same.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
        <div style="padding:20px;border:1px solid rgba(0,212,204,0.2);background:rgba(0,212,204,0.03)">
          <div style="font-family:var(--condensed);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#00d4cc;margin-bottom:8px">For Events</div>
          <div style="font-family:var(--condensed);font-size:13px;color:var(--light-grey)" data-ck="ai-for-events">Festivals, corporate events, product launches, galas</div>
        </div>
        <div style="padding:20px;border:1px solid rgba(0,212,204,0.2);background:rgba(0,212,204,0.03)">
          <div style="font-family:var(--condensed);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#00d4cc;margin-bottom:8px">For Education</div>
          <div style="font-family:var(--condensed);font-size:13px;color:var(--light-grey)" data-ck="ai-for-edu">Universities, K-12, museums, workshops</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CURRICULUM -->
  <section class="ai-curriculum">
    <div class="eyebrow" style="color:#00d4cc" data-ck="ai-curriculum-eyebrow">Education Track</div>
    <h2 class="display" data-ck="ai-curriculum-heading">Workshop Curriculum</h2>
    <div class="curriculum-grid">
      <div class="curriculum-module">
        <div class="module-num">Module 01</div>
        <div class="module-name" data-ck="ai-mod-1-name">What Is Generative AI?</div>
        <div class="module-desc" data-ck="ai-mod-1-desc">An accessible introduction to how AI generates visual and spatial content in real time. No technical background required.</div>
      </div>
      <div class="curriculum-module">
        <div class="module-num">Module 02</div>
        <div class="module-name" data-ck="ai-mod-2-name">The Artist &amp; the Algorithm</div>
        <div class="module-desc" data-ck="ai-mod-2-desc">Exploring the creative relationship between human intention and machine generation. What does authorship mean when AI is involved?</div>
      </div>
      <div class="curriculum-module">
        <div class="module-num">Module 03</div>
        <div class="module-name" data-ck="ai-mod-3-name">Inside the Dome</div>
        <div class="module-desc" data-ck="ai-mod-3-desc">Participants experience the AI Lab firsthand &mdash; immersed in a live generative visual environment that responds to collective input.</div>
      </div>
      <div class="curriculum-module">
        <div class="module-num">Module 04</div>
        <div class="module-name" data-ck="ai-mod-4-name">Creative Applications</div>
        <div class="module-desc" data-ck="ai-mod-4-desc">How is AI being used in art, architecture, entertainment, and design today? Practical pathways for creative professionals.</div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq-section" style="background:var(--black)">
    <div class="section-header" style="margin-bottom:0">
      <div>
        <div class="eyebrow" style="color:#00d4cc" data-ck="ai-faq-eyebrow">Questions</div>
        <h2 class="display" data-ck="ai-faq-heading">About the 360&deg; AI Lab</h2>
      </div>
    </div>
    <div class="faq-grid" style="margin-top:56px">
      <div class="faq-item">
        <div class="faq-q"><span data-ck="ai-faq-1-q">What power requirements does the dome need?</span><span>+</span></div>
        <div class="faq-a" data-ck="ai-faq-1-a">The 360&deg; AI Lab runs on standard 120V household/commercial power &mdash; two standard 20-amp circuits. No generator or special electrical infrastructure required, making it suitable for most venues.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="ai-faq-2-q">How much space is needed for the dome?</span><span>+</span></div>
        <div class="faq-a" data-ck="ai-faq-2-a">The dome requires a footprint of approximately 44x44 feet and a ceiling height of at least 20 feet. It can be installed indoors or outdoors on a flat, level surface.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="ai-faq-3-q">How long does setup take?</span><span>+</span></div>
        <div class="faq-a" data-ck="ai-faq-3-a">Full setup takes 4&ndash;6 hours with our two-person crew. We handle all rigging, projection calibration, and AI system configuration. Breakdown takes approximately 2&ndash;3 hours.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="ai-faq-4-q">Can the dome content be customized for our brand or event?</span><span>+</span></div>
        <div class="faq-a" data-ck="ai-faq-4-a">Yes. The AI system can be trained with brand-specific visual parameters, color palettes, and thematic content. Custom branding integration is available as an add-on to standard rental packages.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="ai-faq-5-q">How far does the dome travel?</span><span>+</span></div>
        <div class="faq-a" data-ck="ai-faq-5-a">The system is designed for national deployment. We&rsquo;ve set up in Louisiana, Mississippi, Alabama, Tennessee, and Texas. Travel costs are included in the rental quote for destinations beyond our base radius.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="ai-faq-6-q">Is there an educational curriculum available?</span><span>+</span></div>
        <div class="faq-a" data-ck="ai-faq-6-a">Yes. The 360&deg; AI Lab includes an optional educational track with four curriculum modules covering generative AI fundamentals, creative applications, and the ethics of machine creativity.</div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="ai-badge" style="margin:0 auto 32px;width:fit-content"><span class="ai-badge-dot"></span><span data-ck="ai-cta-badge">Available for Booking</span></div>
    <h2 class="cta-heading" data-ck="ai-cta-heading">Experience AI<br>From the <em>Inside</em></h2>
    <p class="cta-sub" data-ck="ai-cta-sub">Check availability for your event date. We respond to all inquiries within 24 hours.</p>
    <div class="cta-buttons">
      <a href="/contact.html" class="btn-teal" data-ck="ai-cta-btn">Book a Discovery Call &#8594;</a>
      <button class="btn-ghost" data-ck="ai-cta-btn2">Download Brochure</button>
    </div>
  </section>

  ${footerHTML}
`

initPage('ai-360-lab')
getContent()
