import './redesign-base.css'
import './contact.css'
import { navHTML, footerHTML, initPage, getContent } from './shared.js'

document.querySelector('#app').innerHTML = `
  ${navHTML}

  <!-- CONTACT LAYOUT -->
  <div class="contact-layout">
    <div class="contact-left">
      <div style="max-width:480px">
        <div class="eyebrow" data-ck="contact-eyebrow">Get in Touch</div>
        <h1 class="display" style="margin-bottom:28px" data-ck="contact-heading">Let&rsquo;s Build<br>Something<br><em>Unforgettable</em></h1>
        <div class="gold-rule"></div>
        <p style="font-size:15px;color:var(--light-grey);line-height:1.8;margin-bottom:32px" data-ck="contact-p1">We work with brands, museums, festivals, municipalities, universities, and cultural institutions on projects of all scales. If you&rsquo;re imagining something immersive, we want to hear about it.</p>
        <p style="font-size:14px;color:var(--grey);line-height:1.8;margin-bottom:48px" data-ck="contact-p2">Tell us what you&rsquo;re imagining. We respond to all serious project inquiries within 24 business hours.</p>
        <div style="padding:24px;border:1px solid var(--gold-line);background:var(--gold-dim);margin-bottom:40px">
          <div style="font-family:var(--condensed);font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:var(--gold);margin-bottom:8px">Discovery Call</div>
          <p style="font-size:13px;color:var(--light-grey);line-height:1.6" data-ck="contact-discovery">Prefer to talk first? Book a 30-minute discovery call and we&rsquo;ll discuss your vision, timeline, and budget before any commitment.</p>
          <div style="margin-top:16px">
            <button class="btn-ghost" style="font-size:10px;padding:10px 18px" data-ck="contact-discovery-btn">Schedule a Call &#8594;</button>
          </div>
        </div>
        <div class="contact-info-grid">
          <div class="contact-info-item">
            <div class="ci-label">Studio</div>
            <div class="ci-value" data-ck="contact-studio">New Orleans, Louisiana</div>
          </div>
          <div class="contact-info-item">
            <div class="ci-label">Email</div>
            <div class="ci-value" data-ck="contact-email">hello@colinmcquilkin.design</div>
          </div>
          <div class="contact-info-item">
            <div class="ci-label">Established</div>
            <div class="ci-value" data-ck="contact-established">2000 &mdash; 25+ Years</div>
          </div>
          <div class="contact-info-item">
            <div class="ci-label">Instagram</div>
            <div class="ci-value" data-ck="contact-instagram">@colinmcquilkindesign</div>
          </div>
        </div>
        <!-- Client Logos -->
        <div style="margin-top:48px;padding-top:32px;border-top:1px solid var(--border)">
          <div style="font-family:var(--condensed);font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:var(--grey);margin-bottom:20px">Trusted By</div>
          <div style="display:flex;flex-wrap:wrap;gap:16px">
            <span style="font-family:var(--condensed);font-weight:500;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3)" data-ck="contact-client-1">Nike</span>
            <span style="font-family:var(--condensed);font-weight:500;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3)" data-ck="contact-client-2">Coca-Cola</span>
            <span style="font-family:var(--condensed);font-weight:500;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3)" data-ck="contact-client-3">Mazda</span>
            <span style="font-family:var(--condensed);font-weight:500;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3)" data-ck="contact-client-4">Walter Anderson Museum</span>
            <span style="font-family:var(--condensed);font-weight:500;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.3)" data-ck="contact-client-5">Lauren Rogers Museum</span>
          </div>
        </div>
      </div>
    </div>
    <div class="contact-right">
      <div style="max-width:560px;width:100%">
        <div style="font-family:var(--condensed);font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:var(--grey);margin-bottom:36px;padding-bottom:20px;border-bottom:1px solid var(--border)">Project Inquiry</div>
        <div class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">First Name</label>
              <input class="form-input" type="text" placeholder="Colin">
            </div>
            <div class="form-group">
              <label class="form-label">Last Name</label>
              <input class="form-input" type="text" placeholder="McQuilkin">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Email</label>
              <input class="form-input" type="email" placeholder="you@company.com">
            </div>
            <div class="form-group">
              <label class="form-label">Organization</label>
              <input class="form-input" type="text" placeholder="Your company or institution">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Service Type</label>
            <select class="form-select">
              <option value="" disabled selected>Select a service...</option>
              <option>Projection Mapping</option>
              <option>Interactive Installation</option>
              <option>360&deg; AI Lab - Rental</option>
              <option>360&deg; AI Lab - Custom</option>
              <option>Museum Exhibition</option>
              <option>Concert / Tour Production</option>
              <option>Brand Activation</option>
              <option>Silent Disco Rental</option>
              <option>Public Art Commission</option>
              <option>Scenic Fabrication</option>
              <option>Other / Multiple Services</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Approximate Budget</label>
              <select class="form-select">
                <option value="" disabled selected>Select a range...</option>
                <option>Under $5,000</option>
                <option>$5,000 - $15,000</option>
                <option>$15,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $250,000</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Approximate Timeline</label>
              <select class="form-select">
                <option value="" disabled selected>When do you need this?</option>
                <option>Less than 4 weeks</option>
                <option>1 - 3 months</option>
                <option>3 - 6 months</option>
                <option>6 - 12 months</option>
                <option>Planning for 2027+</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Tell Us About Your Project</label>
            <textarea class="form-textarea" placeholder="What are you building? Where is it? What should it feel like? The more you tell us, the better our response."></textarea>
          </div>
          <div style="display:flex;gap:16px;align-items:center;margin-top:8px">
            <button class="btn-primary" style="flex:1;justify-content:center">Send Inquiry &#8594;</button>
          </div>
          <p style="font-family:var(--condensed);font-size:10px;letter-spacing:0.1em;color:var(--grey);line-height:1.6;margin-top:4px" data-ck="contact-form-note">We respond to all serious project inquiries within 24 business hours.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- FAQ ON CONTACT -->
  <section class="faq-section">
    <div class="section-header" style="margin-bottom:0">
      <div>
        <div class="eyebrow" data-ck="contact-faq-eyebrow">Before You Write</div>
        <h2 class="display" data-ck="contact-faq-heading">Common Questions</h2>
      </div>
    </div>
    <div class="faq-grid" style="margin-top:56px">
      <div class="faq-item">
        <div class="faq-q"><span data-ck="contact-faq-1-q">What happens after I submit an inquiry?</span><span>+</span></div>
        <div class="faq-a" data-ck="contact-faq-1-a">We review every inquiry personally and respond within 24 business hours. If the project sounds like a fit, we&rsquo;ll schedule a 30-minute discovery call to learn more. No pressure, no commitment.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="contact-faq-2-q">Do you take on small projects?</span><span>+</span></div>
        <div class="faq-a" data-ck="contact-faq-2-a">We take on projects starting at $5,000, primarily for single-evening events or equipment rentals. For custom installations and original productions, our typical minimum engagement is $15,000.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="contact-faq-3-q">Do you work outside of Louisiana?</span><span>+</span></div>
        <div class="faq-a" data-ck="contact-faq-3-a">Yes. We deploy throughout the Southeast and take on national projects for touring productions and traveling installations. Travel and logistics are factored into project quotes.</div>
      </div>
      <div class="faq-item">
        <div class="faq-q"><span data-ck="contact-faq-4-q">Can I see work examples before deciding?</span><span>+</span></div>
        <div class="faq-a" data-ck="contact-faq-4-a">Absolutely. Our Case Studies page has detailed documentation of past projects. For specific references relevant to your industry or project type, mention it in your inquiry and we&rsquo;ll pull together targeted examples.</div>
      </div>
    </div>
  </section>

  ${footerHTML}
`

initPage('contact')
getContent()

// Contact form submission
const form = document.querySelector('.contact-form')
if (form) {
  const submitBtn = form.querySelector('.btn-primary')
  if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
      const inputs = form.querySelectorAll('input, select, textarea')
      const data = {}
      inputs.forEach(input => {
        if (input.name) data[input.name] = input.value
      })
      // Basic submission placeholder
      submitBtn.textContent = 'Sending...'
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        if (res.ok) {
          submitBtn.textContent = 'Sent! We’ll be in touch.'
        } else {
          submitBtn.textContent = 'Send Inquiry →'
        }
      } catch {
        submitBtn.textContent = 'Send Inquiry →'
      }
    })
  }
}
