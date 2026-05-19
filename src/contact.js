import './style.css'
import './contact.css'
import { navHTML, footerHTML, initPage, loadContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="text-center py-16 px-4">
    <h1 class="contact-page-title mb-5">BEGIN A PROJECT</h1>
    <p class="contact-subtitle" data-ck="contact-subtitle">Vision &nbsp;·&nbsp; Collaboration &nbsp;·&nbsp; Execution</p>
  </section>

  <div class="px-4 pb-16">
    <div class="contact-panel">

      <!-- LEFT: info -->
      <div class="contact-left">
        <div class="contact-section-label">Begin a Project</div>
        <div class="contact-divider"></div>
        <p class="contact-desc">
          <span data-ck="contact-desc">Projection, AI, and interactive systems for live environments—creating immersive experiences for education, museums, brands, and corporate events.</span>
        </p>
        <hr class="contact-hr">
        <div class="contact-name">Colin McQuilkin</div>
        <div class="contact-role">Creative Director, CMDESIGN</div>
        <hr class="contact-hr">
        <div class="contact-info-list">
          <a href="mailto:colinmcquilkin@yahoo.com" class="contact-info-item">
            <svg class="contact-info-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
            </svg>
            colinmcquilkin@yahoo.com
          </a>
          <a href="tel:5046286400" class="contact-info-item">
            <svg class="contact-info-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1z"/>
            </svg>
            504-628-6400
          </a>
          <a href="https://instagram.com/colinmcquilkindesign" target="_blank" class="contact-info-item">
            <svg class="contact-info-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            @colinmcquilkindesign
          </a>
        </div>
      </div>

      <!-- RIGHT: form -->
      <div class="contact-right">
        <span class="contact-form-label">Project Inquiry</span>
        <!-- To receive submissions, replace action="#" with your Formspree endpoint -->
        <form class="contact-form" action="#" method="POST">
          <div class="contact-row">
            <input class="contact-input" type="text" name="name" placeholder="Name" required>
            <input class="contact-input" type="email" name="email" placeholder="Email" required>
          </div>
          <select class="contact-select" name="project_type" onchange="this.classList.toggle('has-value', this.value !== '')">
            <option value="">Project Type</option>
            <option>Interactive Experiences</option>
            <option>Projection Mapping</option>
            <option>Immersive Systems</option>
            <option>Concert Production</option>
            <option>Set Design & Fabrication</option>
            <option>360 AI Lab</option>
            <option>Consulting</option>
            <option>Other</option>
          </select>
          <select class="contact-select" name="budget" onchange="this.classList.toggle('has-value', this.value !== '')">
            <option value="">Budget Range</option>
            <option>Under $10K</option>
            <option>$10K – $25K</option>
            <option>$25K – $50K</option>
            <option>$50K – $100K</option>
            <option>$100K+</option>
          </select>
          <textarea class="contact-textarea" name="message" placeholder="Message"></textarea>
          <button type="submit" class="contact-submit">
            Start a Project &nbsp;→
          </button>
        </form>
      </div>

    </div>

  </div>

  ${footerHTML}
`

initPage('contact')
loadContent()
