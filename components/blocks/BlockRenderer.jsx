// Public renderer for page-builder blocks. Server component. Styled with
// self-contained .pb-* classes (see main.css) so pages look consistent.

function Hero({ b }) {
  return (
    <section className="pb-hero" style={b.image ? { backgroundImage: `url(${b.image})` } : undefined}>
      <div className="pb-hero-overlay" />
      <div className="hero-container pb-hero-inner">
        {b.heading && <h1>{b.heading}</h1>}
        {b.subheading && <p>{b.subheading}</p>}
        {b.ctaLabel && <a href={b.ctaHref || '#'} className="pb-btn">{b.ctaLabel}</a>}
      </div>
    </section>
  );
}

function RichText({ b }) {
  return (
    <section className="section">
      <div className="hero-container">
        <div className="pb-richtext" dangerouslySetInnerHTML={{ __html: b.html || '' }} />
      </div>
    </section>
  );
}

function ImageBlock({ b }) {
  if (!b.src) return null;
  return (
    <section className="section">
      <div className="hero-container">
        <figure className="pb-figure">
          <img src={b.src} alt={b.alt || ''} loading="lazy" decoding="async" />
          {b.caption && <figcaption>{b.caption}</figcaption>}
        </figure>
      </div>
    </section>
  );
}

function Cards({ b }) {
  const cols = [2, 3, 4].includes(Number(b.columns)) ? Number(b.columns) : 3;
  return (
    <section className="section">
      <div className="hero-container">
        {b.heading && <h2 className="pb-section-heading">{b.heading}</h2>}
        <div className="pb-cards" style={{ '--pb-cols': cols }}>
          {(b.items || []).map((it, i) => (
            <div key={i} className="pb-card">
              {it.image && <img src={it.image} alt={it.title || ''} loading="lazy" decoding="async" />}
              {it.title && <h3>{it.title}</h3>}
              {it.text && <p>{it.text}</p>}
              {it.href && <a href={it.href} className="pb-card-link">Learn more</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ b }) {
  if (!(b.items || []).length) return null;
  return (
    <section className="section">
      <div className="hero-container">
        {b.heading && <h2 className="pb-section-heading">{b.heading}</h2>}
        <div className="pb-faq">
          {b.items.map((it, i) => (
            <details key={i} className="pb-faq-item">
              <summary>{it.q}</summary>
              <p>{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta({ b }) {
  return (
    <section className="section">
      <div className="hero-container">
        <div className="pb-cta">
          {b.heading && <h2>{b.heading}</h2>}
          {b.text && <p>{b.text}</p>}
          {b.buttonLabel && <a href={b.buttonHref || '#'} className="pb-btn">{b.buttonLabel}</a>}
        </div>
      </div>
    </section>
  );
}

function Stats({ b }) {
  if (!(b.items || []).length) return null;
  return (
    <section className="section">
      <div className="hero-container">
        {b.heading && <h2 className="pb-section-heading">{b.heading}</h2>}
        <div className="pb-stats">
          {b.items.map((it, i) => (
            <div key={i} className="pb-stat">
              <div className="pb-stat-value">{it.value}{it.suffix}</div>
              {it.label && <div className="pb-stat-label">{it.label}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials({ b }) {
  if (!(b.items || []).length) return null;
  return (
    <section className="section">
      <div className="hero-container">
        {b.heading && <h2 className="pb-section-heading">{b.heading}</h2>}
        <div className="pb-testimonials">
          {b.items.map((it, i) => (
            <figure key={i} className="pb-testimonial">
              <blockquote>{it.quote}</blockquote>
              <figcaption>
                {it.avatar && <img src={it.avatar} alt={it.name || ''} loading="lazy" />}
                <span>
                  <strong>{it.name}</strong>
                  {it.role && <em>{it.role}</em>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team({ b }) {
  if (!(b.members || []).length) return null;
  return (
    <section className="section">
      <div className="hero-container">
        {b.heading && <h2 className="pb-section-heading">{b.heading}</h2>}
        {b.subheading && <p className="pb-section-sub">{b.subheading}</p>}
        <div className="pb-team">
          {b.members.map((m, i) => {
            const inner = (
              <>
                {m.image && <img src={m.image} alt={m.name || ''} loading="lazy" />}
                <div className="pb-team-meta">
                  <strong>{m.name}</strong>
                  {m.designation && <span>{m.designation}</span>}
                </div>
              </>
            );
            return m.url
              ? <a key={i} className="pb-team-member" href={m.url} target="_blank" rel="noreferrer">{inner}</a>
              : <div key={i} className="pb-team-member">{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

function Logos({ b }) {
  const logos = b.logos || [];
  if (!logos.length) return null;
  // duplicate the row for a seamless CSS marquee loop
  const row = [...logos, ...logos];
  return (
    <section className="section">
      <div className="hero-container">
        {b.heading && <h2 className="pb-section-heading">{b.heading}</h2>}
        <div className="pb-marquee">
          <div className="pb-marquee-track">
            {row.map((l, i) => (
              <img key={i} src={l.image} alt={l.alt || ''} loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MAP = {
  hero: Hero, richtext: RichText, image: ImageBlock, cards: Cards, faq: Faq, cta: Cta,
  stats: Stats, testimonials: Testimonials, team: Team, logos: Logos,
};

export default function BlockRenderer({ blocks }) {
  return (
    <>
      {(blocks || []).map((b, i) => {
        const C = MAP[b.type];
        return C ? <C key={i} b={b} /> : null;
      })}
    </>
  );
}
