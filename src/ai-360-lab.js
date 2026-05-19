import './style.css'
import './ai-360-lab.css'
import { navHTML, initPage } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-16 px-4">
    <h1 class="ai-page-title mb-5">360 AI LAB</h1>
    <p class="ai-subtitle">Education &nbsp;·&nbsp; Immersive &nbsp;·&nbsp; Interactive</p>
  </section>

  <div class="px-4">

    <!-- HERO: text left, video right -->
    <div class="ai-hero">
      <div class="ai-hero-text">
        <div class="ai-section-label">
          <span class="ai-section-num">01</span>
          WHAT IS THE 360 AI LAB
        </div>
        <h2 class="ai-hero-heading">A Modular Immersive<br>Education Platform</h2>
        <p class="ai-hero-desc">
          The 360 AI LAB blends art, technology, and AI to create immersive, participatory learning experiences. Inside a projection-mapped dome, we explore creativity, systems thinking, and storytelling through live visuals, sound, and audience interaction.
        </p>
        <div class="ai-info-blocks">
          <div class="ai-info-block">
            <div class="ai-info-icon">⌂</div>
            <div>
              <div class="ai-info-label">Where It Happens</div>
              <div class="ai-info-text">Inside the dome, in projection environments, galleries, exhibitions, or on a stage.</div>
            </div>
          </div>
          <div class="ai-info-block">
            <div class="ai-info-icon">◷</div>
            <div>
              <div class="ai-info-label">How It's Structured</div>
              <div class="ai-info-text">Single sessions, intensive multi-day programs, residencies, or public-program add-ons.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="ai-hero-video">
        <img src="https://pub-2978629bd67943adbfc351e6dbcc0f6f.r2.dev/ai-lab-hero.png" alt="360 AI Lab" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
        <div class="ai-play-btn">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <span class="ai-watch-label">Click to Watch</span>
      </div>
    </div>

    <!-- BOTTOM GRID: sections 02–07 -->
    <div class="ai-grid">

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">02</span> AI Creative Workflow</div>
        <div class="ai-tool-row">
          <span class="ai-tool">ChatGPT</span>
          <span class="ai-tool">Midjourney</span>
          <span class="ai-tool">Pika</span>
          <span class="ai-tool">Suno/Udio</span>
          <span class="ai-tool">Resolume</span>
          <span class="ai-tool">TouchDesigner</span>
        </div>
        <p class="ai-cell-desc">Explore the essential AI and creative tools used across our experiences — from idea generation to visual storytelling.</p>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">03</span> AI Thinking Lab</div>
        <p class="ai-cell-desc">Explore peer-to-frame, image-to-motion, and interactive creation.</p>
        <ul class="ai-checklist">
          <li>Immersive Storytelling Experience</li>
          <li>Participatory Worldbuilding Studio</li>
          <li>Performance + Talkback Hybrid</li>
        </ul>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">04</span> Immersive Educational Modules</div>
        <p class="ai-cell-desc">Modular learning units for schools, museums, and institutions.</p>
        <ul class="ai-checklist">
          <li>AI Literacy</li>
          <li>Creative Technology</li>
          <li>Systems Thinking</li>
          <li>Environmental Storytelling</li>
        </ul>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">05</span> Real-Time Visual Systems</div>
        <ul class="ai-checklist">
          <li>Projection Mapping</li>
          <li>Interactive Systems</li>
          <li>Motion-Based Response</li>
          <li>Live Visual Control</li>
          <li>Immersive Storytelling</li>
        </ul>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">06</span> Participatory Learning</div>
        <p class="ai-cell-desc">We believe the best learning happens together. Our programs invite audiences to imagine, build, respond, and shape the experience in real time.</p>
      </div>

      <div class="ai-cell">
        <div class="ai-cell-label"><span class="ai-cell-num">07</span> Who It's For</div>
        <ul class="ai-who-list">
          <li>Schools &amp; Universities</li>
          <li>Museums &amp; Cultural Institutions</li>
          <li>Youth Programs &amp; Camps</li>
          <li>Arts Organizations</li>
          <li>Conferences &amp; Festivals</li>
          <li>Innovation Labs &amp; Studios</li>
        </ul>
      </div>

    </div>

    <!-- QUOTE -->
    <div class="ai-quote">
      <div class="flex justify-center gap-8 mb-4">
        <span class="ai-quote-marks">"</span>
        <p class="ai-quote-text">
          Experience is the bridge between imagination and understanding.<br>
          Together, we learn, create, and explore new realities.
        </p>
        <span class="ai-quote-marks">"</span>
      </div>
    </div>

  </div>
`

initPage('ai-360-lab')
