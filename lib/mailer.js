import nodemailer from 'nodemailer';

// SMTP transport from env. If SMTP isn't configured, mailer is a no-op so the
// contact/subscribe endpoints keep working (they already persist to the DB).
const {
  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE,
  MAIL_FROM, MAIL_TO,
} = process.env;

let transporter = null;
if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: String(SMTP_SECURE) === 'true' || Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export const mailerReady = Boolean(transporter);
export const OWNER_TO = MAIL_TO || SMTP_USER || '';
const FROM = MAIL_FROM || SMTP_USER || '';

// Never throws — returns true if sent, false otherwise (logs on failure).
export async function sendMail({ to, subject, text, html, replyTo }) {
  if (!transporter) return false;
  const recipient = to || OWNER_TO;
  if (!recipient) return false;
  try {
    await transporter.sendMail({ from: FROM, to: recipient, subject, text, html, replyTo });
    return true;
  } catch (err) {
    console.error('sendMail failed:', err?.message || err);
    return false;
  }
}

export function esc(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
