import './style.css'
import './contact.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <section class="py-4 px-4">
    <h1 class="page-title mb-4" data-ck="contact-title" data-ck-fs="contact-title-fs">BEGIN A PROJECT</h1>
    <p class="page-subtitle" data-ck="contact-subtitle" data-ck-hide>Vision &nbsp;·&nbsp; Collaboration &nbsp;·&nbsp; Execution</p>
  </section>

  <div class="px-4 pb-16">
    <div class="contact-panel">

      <!-- LEFT: info -->
      <div class="contact-left">
        <div class="contact-section-label" data-ck="contact-section-label">Begin a Project</div>
        <div class="contact-divider"></div>
        <p class="contact-desc">
          <span data-ck="contact-desc"></span>
        </p>
        <hr class="contact-hr">
        <div class="contact-name" data-ck="contact-name">Colin McQuilkin</div>
        <div class="contact-role" data-ck="contact-role">Creative Director, CMDESIGN</div>
        <hr class="contact-hr">
        <div class="contact-info-list">
          <a id="contact-email-link" href="mailto:colinmcquilkin@yahoo.com" class="contact-info-item">
            <svg class="contact-info-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
            </svg>
            <span data-ck="contact-email">colinmcquilkin@yahoo.com</span>
          </a>
          <a id="contact-phone-link" href="tel:5046286400" class="contact-info-item">
            <svg class="contact-info-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.58 1 1 0 01-.25 1z"/>
            </svg>
            <span data-ck="contact-phone">504-628-6400</span>
          </a>
          <a id="contact-instagram-link" href="https://instagram.com/colinmcquilkindesign" target="_blank" class="contact-info-item">
            <svg class="contact-info-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
            <span data-ck="contact-instagram">@colinmcquilkindesign</span>
          </a>
        </div>
      </div>

      <!-- RIGHT: form -->
      <div class="contact-right">
        <span class="contact-form-label" data-ck="contact-form-label">Project Inquiry</span>
        <form id="contact-form" class="contact-form" action="#" method="POST">
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
          <button type="submit" class="contact-submit" data-ck="contact-submit-text">Start a Project &nbsp;→</button>
        </form>
      </div>

    </div>

  </div>

  ${footerHTML}
`

initPage('contact')

// ── Form submission ──────────────────────────────────────────────────────────
document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault()
  const form = e.target
  const btn  = form.querySelector('.contact-submit')

  // Clear previous errors
  const existing = form.querySelector('.contact-error')
  if (existing) existing.remove()

  // Disable button while sending
  const originalText = btn.innerHTML
  btn.disabled = true
  btn.innerHTML = 'Sending&nbsp;…'
  btn.style.opacity = '0.4'

  try {
    const res  = await fetch('/api/contact', { method: 'POST', body: new FormData(form) })
    const json = await res.json()

    if (json.ok) {
      // Replace form with success message
      const right = form.closest('.contact-right')
      right.innerHTML = `
        <div class="contact-success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <p class="contact-success-head">Message sent.</p>
          <p class="contact-success-body">Thanks for reaching out — Colin will be in touch shortly.</p>
        </div>
      `
    } else {
      throw new Error(json.error || 'Failed to send')
    }
  } catch (err) {
    const msg = document.createElement('p')
    msg.className = 'contact-error'
    msg.textContent = err.message || 'Something went wrong — please try again.'
    form.appendChild(msg)
    btn.disabled = false
    btn.innerHTML = originalText
    btn.style.opacity = ''
  }
})

async function loadContactContent() {
  const data = await getContent()

  // Update link hrefs that textContent alone can't reach
  if (data['contact-email']) {
    const a = document.getElementById('contact-email-link')
    if (a) a.href = 'mailto:' + data['contact-email'].trim()
  }
  if (data['contact-phone']) {
    const a = document.getElementById('contact-phone-link')
    if (a) a.href = 'tel:' + data['contact-phone'].replace(/\D/g, '')
  }
  if (data['contact-instagram']) {
    const a = document.getElementById('contact-instagram-link')
    const handle = data['contact-instagram'].replace(/^@/, '').trim()
    if (a) a.href = `https://instagram.com/${handle}`
  }
  if (data['contact-form-action']) {
    const form = document.getElementById('contact-form')
    if (form && data['contact-form-action'] !== '#') form.action = data['contact-form-action']
  }
}
loadContactContent()
