// Per-post completeness for the three optimization tracks, as a 0–4 stage:
//   0 red (not started) · 1 orange · 2 yellow · 3 green · 4 blue (complete)
// Server-safe (no client deps). Used by the /admin/posts table indicators.

export const STAGE_COLORS = ['#dc2626', '#f97316', '#eab308', '#16a34a', '#2563eb'];
export const STAGE_LABELS = ['Not started', 'Basic', 'Fair', 'Good', 'Complete'];

function stage(checks) {
  const total = checks.length;
  const passed = checks.filter(Boolean).length;
  const ratio = total ? passed / total : 0;
  let s = 0;
  if (passed === total) s = 4;
  else if (ratio >= 0.75) s = 3;
  else if (ratio >= 0.5) s = 2;
  else if (ratio >= 0.25) s = 1;
  return { stage: s, passed, total };
}

// post: a raw DB row (snake_case). authorSet: boolean (site author configured).
export function segScores(post, authorSet = false) {
  const html = post.content_html || '';
  const words = html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  const hasH2 = /<h2[\s>]/i.test(html);
  const faqLen = Array.isArray(post.faq) ? post.faq.length : 0;
  const tags = post.tags || [];
  const sk = post.secondary_keywords || [];

  return {
    // SEO — classic on-page
    s: stage([
      !!post.meta_title,
      !!post.meta_description,
      !!post.focus_keyword,
      !!post.image_alt,
      tags.length > 0,
    ]),
    // GEO — generative engines / E-E-A-T / depth
    g: stage([
      !!post.tldr,
      authorSet,
      sk.length > 0,
      words >= 600,
      faqLen > 0,
    ]),
    // AEO — answer engines / structured answers
    e: stage([
      faqLen > 0,
      !!post.meta_description,
      hasH2,
      !!post.tldr,
      !!post.focus_keyword,
    ]),
  };
}
