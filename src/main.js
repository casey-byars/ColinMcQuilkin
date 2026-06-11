import './redesign-base.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

const R2 = 'https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- HERO -->
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-bg-grid"></div>
    <div class="hero-glow"></div>
    <div class="hero-stats">
      <div class="hero-stat">
        <span class="hero-stat-num" data-ck="home-stat-1-num">25+</span>
        <span class="hero-stat-label" data-ck="home-stat-1-label">Years in Practice</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num" data-ck="home-stat-2-num">40+</span>
        <span class="hero-stat-label" data-ck="home-stat-2-label">Installations</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-num" data-ck="home-stat-3-num">8</span>
        <span class="hero-stat-label" data-ck="home-stat-3-label">Disciplines</span>
      </div>
    </div>
    <div class="hero-content">
      <div class="hero-counter" data-ck="hero-counter">New Orleans &amp; Gulf Coast &mdash; Est. 2000</div>
      <h1 data-ck="hero-h1">We Build <em>Worlds</em><br>Inside Yours</h1>
      <p class="hero-sub" data-ck="hero-sub">Projection mapping. AI experiences. Museum installations. Concert production. Scenic fabrication. Immersive systems for brands, museums, and moments that don&rsquo;t forget you.</p>
      <div class="hero-actions">
        <a href="/contact.html" class="btn-primary btn-arrow" data-ck="hero-cta-primary">Start a Project</a>
        <a href="/creative-collective.html" class="btn-ghost btn-arrow" data-ck="hero-cta-secondary">See Our Work</a>
      </div>
    </div>
    <div class="hero-scroll">
      <div class="hero-scroll-line"></div>
      <span>Scroll</span>
    </div>
  </section>

  <!-- TRUSTED BY -->
  <div class="trusted-by">
    <span class="trusted-label">Trusted By</span>
    <div class="trusted-rule"></div>
    <div class="trusted-logos">
      <span class="trusted-logo" data-ck="trusted-1">Nike</span>
      <span class="trusted-logo" data-ck="trusted-2">Coca-Cola</span>
      <span class="trusted-logo" data-ck="trusted-3">Mazda</span>
      <span class="trusted-logo" data-ck="trusted-4">Walter Anderson Museum</span>
      <span class="trusted-logo" data-ck="trusted-5">Lauren Rogers Museum</span>
      <span class="trusted-logo" data-ck="trusted-6">George Ohr Museum</span>
    </div>
  </div>

  <!-- FEATURED PROJECTS -->
  <section class="projects-section">
    <div class="section-header">
      <div>
        <div class="eyebrow" data-ck="projects-eyebrow">Selected Work</div>
        <h2 class="display" data-ck="projects-heading">Featured Projects</h2>
      </div>
      <a href="/creative-collective.html" class="btn-ghost btn-arrow" data-ck="projects-cta">View All Work</a>
    </div>
    <div class="projects-grid">
      <!-- Card 1: Large -->
      <div class="project-card">
        <div class="project-thumb">
          <div class="project-thumb-bg proj-coca"></div>
          <div class="project-glow proj-coca"></div>
          <div class="project-thumb-inner">
            <span class="project-icon">Starlight</span>
          </div>
          <div class="project-overlay">
            <span class="project-view">View Case Study</span>
          </div>
          <div class="cinema-label">Branded Activation &mdash; 2023</div>
        </div>
        <div class="project-meta">
          <div class="project-client" data-ck="proj-1-client">Coca-Cola Starlight</div>
          <div class="project-service" data-ck="proj-1-service">Projection Mapping &mdash; Brand Activation &mdash; Content Creation</div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="project-card">
        <div class="project-thumb">
          <div class="project-thumb-bg proj-mazda"></div>
          <div class="project-glow proj-mazda"></div>
          <div class="project-thumb-inner">
            <span class="project-icon">Spectrum</span>
          </div>
          <div class="project-overlay">
            <span class="project-view">View Case Study</span>
          </div>
          <div class="cinema-label">Interactive &mdash; 2022</div>
        </div>
        <div class="project-meta">
          <div class="project-client" data-ck="proj-2-client">Mazda Spectrum Analyzer</div>
          <div class="project-service" data-ck="proj-2-service">Interactive Systems &mdash; Experiential</div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="project-card">
        <div class="project-thumb">
          <div class="project-thumb-bg proj-nike"></div>
          <div class="project-glow proj-nike"></div>
          <div class="project-thumb-inner"><span class="project-icon">Nike</span></div>
          <div class="project-overlay"><span class="project-view">View</span></div>
          <div class="cinema-label">Brand &mdash; 2021</div>
        </div>
        <div class="project-meta">
          <div class="project-client" data-ck="proj-3-client">Nike FuelBand</div>
          <div class="project-service" data-ck="proj-3-service">Projection &mdash; Interactive</div>
        </div>
      </div>
      <!-- Card 4 -->
      <div class="project-card">
        <div class="project-thumb">
          <div class="project-thumb-bg proj-silent"></div>
          <div class="project-glow proj-silent"></div>
          <div class="project-thumb-inner"><span class="project-icon">Silent</span></div>
          <div class="project-overlay"><span class="project-view">View</span></div>
          <div class="cinema-label">Museum &mdash; 2023</div>
        </div>
        <div class="project-meta">
          <div class="project-client" data-ck="proj-4-client">Silent Light</div>
          <div class="project-service" data-ck="proj-4-service">Museum Installation</div>
        </div>
      </div>
      <!-- Card 5 -->
      <div class="project-card">
        <div class="project-thumb">
          <div class="project-thumb-bg proj-ai"></div>
          <div class="project-glow proj-ai"></div>
          <div class="project-thumb-inner"><span class="project-icon">360&deg;</span></div>
          <div class="project-overlay"><span class="project-view">View</span></div>
          <div class="cinema-label">AI Lab &mdash; 2024</div>
        </div>
        <div class="project-meta">
          <div class="project-client" data-ck="proj-5-client">360&deg; AI Lab</div>
          <div class="project-service" data-ck="proj-5-service">Generative AI &mdash; Dome Projection</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CAPABILITIES -->
  <section class="capabilities-section">
    <div class="container">
      <div class="section-header" style="margin-bottom:0;padding-bottom:48px">
        <div>
          <div class="eyebrow" data-ck="cap-eyebrow">What We Build</div>
          <h2 class="display" data-ck="cap-heading">Capabilities</h2>
        </div>
        <p style="max-width:380px;font-size:14px;color:var(--grey);line-height:1.7;font-family:var(--condensed);letter-spacing:0.05em" data-ck="cap-desc">Eight disciplines. One studio. From concept to install, we create the full arc of immersive experience.</p>
      </div>
      <div style="height:56px"></div>
      <div class="capabilities-grid">
        <div class="capability-item">
          <div class="capability-num">i.</div>
          <div class="capability-name" data-ck="cap-1-name">Projection Mapping</div>
          <div class="capability-desc" data-ck="cap-1-desc">Architectural-scale projection on any surface. Buildings, sculptures, stages, and environments transformed by light and narrative.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">ii.</div>
          <div class="capability-name" data-ck="cap-2-name">Interactive Installations</div>
          <div class="capability-desc" data-ck="cap-2-desc">Touch, motion, and sensor-driven experiences where audiences become part of the work itself.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">iii.</div>
          <div class="capability-name" data-ck="cap-3-name">Museum Experiences</div>
          <div class="capability-desc" data-ck="cap-3-desc">Permanent and traveling museum installations that transform collections into living, breathing environments.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">iv.</div>
          <div class="capability-name" data-ck="cap-4-name">Concert Production Design</div>
          <div class="capability-desc" data-ck="cap-4-desc">Touring visual design for live music &mdash; from club shows to festival main stages. Synchronized, spectacular, and built to travel.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">v.</div>
          <div class="capability-name" data-ck="cap-5-name">AI Experiences</div>
          <div class="capability-desc" data-ck="cap-5-desc">Real-time generative AI projection and interactive systems. The 360&deg; AI Lab &mdash; our traveling dome &mdash; is the first of its kind in the region.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">vi.</div>
          <div class="capability-name" data-ck="cap-6-name">Public Art</div>
          <div class="capability-desc" data-ck="cap-6-desc">Commissioned installations for public spaces, cultural institutions, and civic environments that create lasting community impact.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">vii.</div>
          <div class="capability-name" data-ck="cap-7-name">Scenic Fabrication</div>
          <div class="capability-desc" data-ck="cap-7-desc">Custom set design, scenic builds, and structural fabrication for live events, permanent installations, and touring productions.</div>
        </div>
        <div class="capability-item">
          <div class="capability-num">viii.</div>
          <div class="capability-name" data-ck="cap-8-name">Immersive Rentals</div>
          <div class="capability-desc" data-ck="cap-8-desc">360&deg; domes, silent disco systems, projection rigs, and interactive technology available for rent &mdash; with full production support.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED CASE STUDIES STRIP -->
  <section class="case-studies-section">
    <div class="section-header">
      <div>
        <div class="eyebrow" data-ck="cs-strip-eyebrow">Case Studies</div>
        <h2 class="display" data-ck="cs-strip-heading">Work That<br><em>Moved</em> People</h2>
      </div>
    </div>
    <div class="case-studies-strip">
      <div class="case-card">
        <div class="case-card-inner">
          <div class="case-card-bg" style="background:linear-gradient(135deg,#1a0a00,#2d1800)"></div>
          <div class="case-overlay-content">
            <div class="case-tag" data-ck="cs-strip-1-tag">Brand Activation</div>
            <div class="case-title" data-ck="cs-strip-1-title">Coca-Cola<br>Starlight</div>
            <div class="case-result" data-ck="cs-strip-1-result">Projection mapping &mdash; New Orleans &mdash; 2023</div>
          </div>
          <div class="case-arrow">&#8594;</div>
        </div>
      </div>
      <div class="case-card">
        <div class="case-card-inner">
          <div class="case-card-bg" style="background:linear-gradient(135deg,#001200,#002800)"></div>
          <div class="case-overlay-content">
            <div class="case-tag" data-ck="cs-strip-2-tag">Concert Production</div>
            <div class="case-title" data-ck="cs-strip-2-title">Widespread<br>Panic</div>
            <div class="case-result" data-ck="cs-strip-2-result">Touring visual design &mdash; National &mdash; 2022</div>
          </div>
          <div class="case-arrow">&#8594;</div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CMD -->
  <section class="why-section">
    <div class="why-content">
      <div class="eyebrow" data-ck="why-eyebrow">Why CMDESIGN</div>
      <h2 class="display" data-ck="why-heading">Southeast Roots.<br><em>National</em> Reach.</h2>
      <div style="height:24px"></div>
      <div class="gold-rule"></div>
      <p style="font-size:15px;color:var(--light-grey);line-height:1.8;max-width:480px;margin-bottom:24px" data-ck="why-p1">We&rsquo;re not a coast-to-coast agency with a satellite office in New Orleans. We&rsquo;re a studio that was built here, that knows the culture, the venues, the festivals, and the institutions that make this region distinct.</p>
      <p style="font-size:15px;color:var(--grey);line-height:1.8;max-width:480px;margin-bottom:40px" data-ck="why-p2">That local depth, combined with the technical infrastructure to deploy nationally, makes us a different kind of production partner.</p>
      <a href="/contact.html" class="btn-ghost btn-arrow" data-ck="why-cta">Talk to Us</a>
    </div>
    <div class="why-stats">
      <div class="why-stat">
        <div class="why-stat-val" data-ck="why-stat-1-val">25+</div>
        <div class="why-stat-label" data-ck="why-stat-1-label">Years in operation</div>
      </div>
      <div class="why-stat">
        <div class="why-stat-val" data-ck="why-stat-2-val">40+</div>
        <div class="why-stat-label" data-ck="why-stat-2-label">Completed projects</div>
      </div>
      <div class="why-stat">
        <div class="why-stat-val" data-ck="why-stat-3-val">8</div>
        <div class="why-stat-label" data-ck="why-stat-3-label">Disciplines</div>
      </div>
      <div class="why-stat">
        <div class="why-stat-val" data-ck="why-stat-4-val">1st</div>
        <div class="why-stat-label" data-ck="why-stat-4-label">AI dome in the Southeast</div>
      </div>
    </div>
  </section>

  <!-- INDUSTRY -->
  <section class="industry-section">
    <div class="section-header">
      <div>
        <div class="eyebrow" data-ck="industry-eyebrow">Industries</div>
        <h2 class="display" data-ck="industry-heading">Who We Serve</h2>
      </div>
    </div>
    <div class="industry-list">
      <div class="industry-item"><span class="industry-name" data-ck="ind-1">Brands &amp; Agencies</span><span class="industry-count">i.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-2">Museums &amp; Cultural Institutions</span><span class="industry-count">ii.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-3">Festivals &amp; Live Events</span><span class="industry-count">iii.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-4">Tourism Organizations</span><span class="industry-count">iv.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-5">Concert Tours</span><span class="industry-count">v.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-6">Corporate Events</span><span class="industry-count">vi.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-7">Universities</span><span class="industry-count">vii.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-8">Municipalities &amp; Public Art</span><span class="industry-count">viii.</span></div>
      <div class="industry-item"><span class="industry-name" data-ck="ind-9">Retail &amp; Hospitality</span><span class="industry-count">ix.</span></div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq-section">
    <div class="section-header" style="margin-bottom:0">
      <div>
        <div class="eyebrow" data-ck="faq-eyebrow">Questions</div>
        <h2 class="display" data-ck="faq-heading">Frequently Asked</h2>
      </div>
    </div>
    <div class="faq-grid">
      <div class="faq-item">
        <div class="faq-q"><span data-ck="faq-1-q">What is projection mapping and how does it work?</span><span>+</span></div>
        <div class="faq-a" data-ck="faq-1-a">Projection mapping uses specialized software to warp and mask video content so it aligns perfectly with any three-dimensional surface &mdash; a building facade, a sculpture, a stage set, or an interior environment. The result is the illusion that the surface itself is alive, animated, or transformed.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="faq-2-q">How much does an immersive experience cost?</span><span>+</span></div>
        <div class="faq-a" data-ck="faq-2-a">Projects range from $5,000 for a single-evening rental up to $250,000 for large-scale custom installations and touring systems. Most brand activations and festival experiences fall in the $15,000&ndash;$75,000 range.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="faq-3-q">Can you rent the 360&deg; AI dome for an event?</span><span>+</span></div>
        <div class="faq-a" data-ck="faq-3-a">Yes. The 360&deg; AI Lab dome is available for rental nationwide. It&rsquo;s a 40-foot diameter dome with real-time generative AI projection, 90-person capacity, standard 120V power, and a 4&ndash;6 hour setup window.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="faq-4-q">Do you work outside of Louisiana?</span><span>+</span></div>
        <div class="faq-a" data-ck="faq-4-a">Yes. While we&rsquo;re headquartered in New Orleans, we regularly deploy throughout the Southeast &mdash; Louisiana, Mississippi, Alabama, Tennessee, Florida, Texas &mdash; and take on national projects for touring productions and traveling installations.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="faq-5-q">How long does a typical project take from brief to install?</span><span>+</span></div>
        <div class="faq-a" data-ck="faq-5-a">For a standard branded activation or event production, expect 6&ndash;12 weeks from initial brief to installation. Museum installations and permanent public art projects typically require 6&ndash;18 months.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="faq-6-q">What makes CMDESIGN different from a general A/V company?</span><span>+</span></div>
        <div class="faq-a" data-ck="faq-6-a">We&rsquo;re a creative production studio, not a rental house. We design, build, and program original experiences &mdash; not just deploy equipment. Our work includes original content creation, custom software development, and structural fabrication alongside technical production.</div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="cta-section">
    <div class="cta-tagline" data-ck="home-cta-tagline">Ready to Begin</div>
    <h2 class="cta-heading" data-ck="home-cta-heading">Let&rsquo;s Build Something<br><em>Unforgettable</em></h2>
    <p class="cta-sub" data-ck="home-cta-sub">Tell us about your project. We respond to all serious inquiries within 24 business hours.</p>
    <div class="cta-buttons">
      <a href="/contact.html" class="btn-primary btn-arrow" data-ck="home-cta-btn">Start a Project</a>
      <a href="/immersive-systems.html" class="btn-ghost" data-ck="home-cta-btn2">Explore Immersive Rentals</a>
    </div>
  </section>

  ${footerHTML}
`

initPage('experiences')
getContent()
