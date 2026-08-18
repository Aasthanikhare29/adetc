// Branded, email-client-safe HTML templates (table layout + inline styles).
// Each builder returns { subject, html, text }.

const BRAND = '#fe5100';
const INK = '#0a0a0a';
const MUTED = '#6b6b73';
const BORDER = '#e4e4e7';
const SITE = 'https://adetcstudios.com';
const NAME = 'Ad Etc Studios';

function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Shared shell — 600px card, dark header, accent rule, muted footer.
function shell({ preheader = '', title, bodyHtml }) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:#f4f4f5;">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${BORDER};border-radius:12px;overflow:hidden;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <tr><td style="background:${INK};padding:20px 28px;">
    <span style="color:#fff;font-size:18px;font-weight:700;letter-spacing:.02em;">AD ETC <span style="color:${BRAND};">STUDIOS</span></span>
  </td></tr>
  <tr><td style="height:4px;background:${BRAND};"></td></tr>
  <tr><td style="padding:28px;">${bodyHtml}</td></tr>
  <tr><td style="padding:18px 28px;border-top:1px solid ${BORDER};color:${MUTED};font-size:12px;">
    ${NAME} · Film &amp; Video Production, Ahmedabad<br>
    <a href="${SITE}" style="color:${MUTED};">adetcstudios.com</a>
  </td></tr>
</table>
</td></tr></table></body></html>`;
}

function btn(label, href) {
  return `<a href="${href}" style="display:inline-block;background:${BRAND};color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:11px 22px;border-radius:6px;">${esc(label)}</a>`;
}

// ---- Contact enquiry → studio inbox ----
export function contactEmail({ name, email, phone, subject, projectType, message }) {
  const row = (label, value) =>
    value ? `<tr><td style="padding:6px 0;color:${MUTED};font-size:13px;width:120px;vertical-align:top;">${label}</td><td style="padding:6px 0;color:${INK};font-size:14px;">${esc(value)}</td></tr>` : '';
  const bodyHtml = `
    <h1 style="margin:0 0 6px;font-size:20px;color:${INK};">New enquiry</h1>
    <p style="margin:0 0 20px;color:${MUTED};font-size:14px;">Someone reached out through the contact form.</p>
    <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">
      ${row('Name', name)}
      ${row('Email', email)}
      ${row('Phone', phone)}
      ${row('Subject', subject)}
      ${row('Project type', projectType)}
    </table>
    <div style="margin:18px 0;padding:16px;background:#f7f7f8;border-radius:8px;border:1px solid ${BORDER};color:${INK};font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(message)}</div>
    <div style="margin-top:8px;">${btn('Reply by email', `mailto:${esc(email)}`)}</div>`;
  return {
    subject: `New enquiry: ${subject || projectType || 'Contact form'}`,
    html: shell({ preheader: `${name} — ${subject || projectType || 'contact form'}`, title: 'New enquiry', bodyHtml }),
    text: `New enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nSubject: ${subject || '-'}\nProject type: ${projectType || '-'}\n\n${message}\n`,
  };
}

// ---- Welcome → new subscriber ----
export function subscriberWelcomeEmail() {
  const bodyHtml = `
    <h1 style="margin:0 0 6px;font-size:22px;color:${INK};">You're on the list 🎬</h1>
    <p style="margin:0 0 16px;color:${INK};font-size:15px;line-height:1.6;">
      Thanks for subscribing to ${NAME}. We craft ad films, brand videos and TVCs — and we'll drop you a note whenever we publish new work, behind-the-scenes stories, or production tips worth your time.
    </p>
    <p style="margin:0 0 24px;color:${MUTED};font-size:14px;line-height:1.6;">No spam, just good storytelling.</p>
    ${btn('Explore our work', `${SITE}/project`)}`;
  return {
    subject: `Welcome to ${NAME}`,
    html: shell({ preheader: "You're subscribed — welcome aboard.", title: 'Welcome', bodyHtml }),
    text: `You're on the list!\n\nThanks for subscribing to ${NAME}. We'll email you when we publish new work and stories.\n\nExplore our work: ${SITE}/project\n`,
  };
}

// ---- Notify studio of a new subscriber ----
export function subscriberNotifyEmail(email) {
  const bodyHtml = `
    <h1 style="margin:0 0 6px;font-size:20px;color:${INK};">New subscriber</h1>
    <p style="margin:0 0 8px;color:${INK};font-size:15px;">${esc(email)}</p>
    <p style="margin:0;color:${MUTED};font-size:13px;">just joined the newsletter list.</p>`;
  return {
    subject: 'New newsletter subscriber',
    html: shell({ preheader: email, title: 'New subscriber', bodyHtml }),
    text: `New newsletter subscriber: ${email}\n`,
  };
}
