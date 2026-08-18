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

const MAP = { hero: Hero, richtext: RichText, image: ImageBlock, cards: Cards, faq: Faq, cta: Cta };

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
