'use client';

import { useState } from 'react';

const OPTIONS = [
  { value: 'commercial', label: 'Commercial' },
  { value: 'short-film', label: 'Short Film' },
  { value: 'music-video', label: 'Music Video' },
  { value: 'event', label: 'Event' },
  { value: 'other', label: 'Other' },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', company: '' });
  const [projectType, setProjectType] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // { ok, text }

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const selectedLabel = OPTIONS.find((o) => o.value === projectType)?.label || 'Project Type';

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMsg(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, projectType }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg({ ok: true, text: data.message || 'Thank you! Your message has been sent.' });
        setForm({ name: '', email: '', phone: '', subject: '', message: '', company: '' });
        setProjectType('');
      } else {
        setMsg({ ok: false, text: data.error || 'Something went wrong.' });
      }
    } catch {
      setMsg({ ok: false, text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card-contact-form">
      <h3>Send us a Message</h3>

      {msg && (
        <p className={`newsletter-thank-you${msg.ok ? '' : ' newsletter-error'}`} style={{ marginBottom: 12 }}>
          {msg.text}
        </p>
      )}

      <form id="contact-form" className="form" onSubmit={submit}>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-2">
          <div className="col"><input type="text" name="name" placeholder="Full Name" value={form.name} onChange={set('name')} required /></div>
          <div className="col"><input type="email" name="email" placeholder="Email Address" value={form.email} onChange={set('email')} required /></div>
          <div className="col"><input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={set('phone')} /></div>
          <div className="col"><input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={set('subject')} /></div>

          <div className="col col-lg-12">
            <div className="dropdown-container">
              <div className="dropdown-select" onClick={() => setOpen((v) => !v)}>
                <div className="d-flex flex-row align-items-center gap-3">
                  <span className="selected-text">{selectedLabel}</span>
                </div>
                <i className="fa-solid fa-caret-down"></i>
              </div>
              {open && (
                <div className="dropdown-list" style={{ display: 'block' }}>
                  {OPTIONS.map((o) => (
                    <div
                      key={o.value}
                      className="dropdown-option"
                      onClick={() => { setProjectType(o.value); setOpen(false); }}
                    >
                      {o.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col col-lg-12">
            <textarea name="message" rows="6" placeholder="Message" value={form.message} onChange={set('message')} required></textarea>
          </div>
        </div>

        {/* honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={set('company')} aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />

        <div>
          <button type="submit" className="btn btn-accent" disabled={loading}>
            <span>{loading ? 'Sending…' : 'Send Message'}</span>
            <i className="fa-solid fa-chevron-circle-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
