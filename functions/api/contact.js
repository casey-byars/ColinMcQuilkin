// Cloudflare Pages Function — /api/contact
// Sends contact form submissions via Resend (resend.com)
//
// Setup in Cloudflare dashboard → Pages → Settings → Environment Variables:
//   RESEND_API_KEY  = re_xxxxxxxxxxxx   (from resend.com)
//   CONTACT_TO      = colinmcquilkin@yahoo.com  (where to deliver)
//   CONTACT_FROM    = CMDESIGN <hello@yourdomain.com>  (verified sender)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function onRequestOptions() {
  return new Response(null, { headers: CORS })
}

export async function onRequestPost({ request, env }) {
  if (!env.RESEND_API_KEY) {
    return Response.json({ ok: false, error: 'Email service not configured' }, { status: 500, headers: CORS })
  }

  let name, email, project_type, budget, message
  const ct = request.headers.get('Content-Type') || ''

  if (ct.includes('application/json')) {
    const body = await request.json()
    ;({ name, email, project_type, budget, message } = body)
  } else {
    const fd = await request.formData()
    name         = fd.get('name')
    email        = fd.get('email')
    project_type = fd.get('project_type')
    budget       = fd.get('budget')
    message      = fd.get('message')
  }

  if (!name || !email) {
    return Response.json({ ok: false, error: 'Name and email are required' }, { status: 400, headers: CORS })
  }

  const to   = env.CONTACT_TO   || 'colinmcquilkin@yahoo.com'
  const from = env.CONTACT_FROM || 'CMDESIGN Contact Form <onboarding@resend.dev>'

  const html = `
    <div style="font-family:sans-serif;max-width:600px;color:#222;">
      <h2 style="margin-bottom:0.25rem;">New Project Inquiry</h2>
      <p style="color:#666;margin-top:0;font-size:13px;">Submitted via CMDESIGN contact form</p>
      <hr style="border:none;border-top:1px solid #eee;margin:1.25rem 0;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#888;width:130px;">Name</td><td style="padding:6px 0;font-weight:600;">${esc(name)}</td></tr>
        <tr><td style="padding:6px 0;color:#888;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        ${project_type ? `<tr><td style="padding:6px 0;color:#888;">Project Type</td><td style="padding:6px 0;">${esc(project_type)}</td></tr>` : ''}
        ${budget ? `<tr><td style="padding:6px 0;color:#888;">Budget</td><td style="padding:6px 0;">${esc(budget)}</td></tr>` : ''}
      </table>
      ${message ? `<hr style="border:none;border-top:1px solid #eee;margin:1.25rem 0;"><p style="font-size:14px;line-height:1.7;white-space:pre-wrap;">${esc(message)}</p>` : ''}
    </div>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry from ${name}${project_type ? ` — ${project_type}` : ''}`,
      html,
    }),
  })

  if (res.ok) {
    return Response.json({ ok: true }, { headers: CORS })
  }

  const err = await res.text()
  console.error('Resend error:', err)
  return Response.json({ ok: false, error: `Resend ${res.status}: ${err}` }, { status: 500, headers: CORS })
}

function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')
}
