'use client';

import { Check, X, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

function textOf(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}
function imageAlts(html) {
  return [...String(html || '').matchAll(/<img[^>]*\balt="([^"]*)"/gi)].map((m) => m[1]);
}
function hasImagesMissingAlt(html) {
  const imgs = [...String(html || '').matchAll(/<img[^>]*>/gi)].map((m) => m[0]);
  return imgs.some((t) => !/\balt="[^"]+"/i.test(t));
}

// Live, RankMath-style checks. Returns [{ok, warn, label}].
function analyze({ title, slug, contentHtml, metaTitle, metaDescription, focusKeyword, featuredAlt }) {
  const kw = (focusKeyword || '').trim().toLowerCase();
  const text = textOf(contentHtml);
  const words = text ? text.split(' ').length : 0;
  const firstChunk = text.slice(0, Math.max(120, Math.floor(text.length * 0.1))).toLowerCase();
  const alts = [...imageAlts(contentHtml), featuredAlt || ''].join(' ').toLowerCase();
  const has = (h) => h && kw && h.toLowerCase().includes(kw);
  const density = kw && words ? (text.toLowerCase().split(kw).length - 1) / words * 100 : 0;

  const out = [];
  const push = (ok, label, warn = false) => out.push({ ok, warn, label });

  if (kw) {
    push(has(title || metaTitle), 'Focus keyword in title');
    push((slug || '').toLowerCase().includes(kw.replace(/\s+/g, '-')), 'Focus keyword in URL slug');
    push(has(metaDescription), 'Focus keyword in meta description');
    push(firstChunk.includes(kw), 'Focus keyword early in content');
    push(alts.includes(kw), 'Focus keyword in an image alt');
    push(density >= 0.3 && density <= 2.5, `Keyword density ${density.toFixed(1)}% (0.3–2.5%)`, density > 0 && (density < 0.3 || density > 2.5));
  } else {
    push(false, 'Set a focus keyword', true);
  }
  push(words >= 300, `Content length ${words} words (≥300)`, words > 0 && words < 300);
  push((metaTitle || '').length >= 30 && (metaTitle || '').length <= 60, 'Meta title 30–60 chars', true);
  push((metaDescription || '').length >= 120 && (metaDescription || '').length <= 160, 'Meta description 120–160 chars', true);
  push(/<h2[\s>]/i.test(contentHtml || ''), 'Has at least one H2 subheading', true);
  push(/<a\s[^>]*href=/i.test(contentHtml || ''), 'Has at least one link', true);
  push(!hasImagesMissingAlt(contentHtml), 'All inline images have alt text');
  return out;
}

export function seoScore(props) {
  const checks = analyze(props);
  const passed = checks.filter((c) => c.ok).length;
  return Math.round((passed / checks.length) * 100);
}

export default function SeoAnalysis(props) {
  const checks = analyze(props);
  const passed = checks.filter((c) => c.ok).length;
  const score = Math.round((passed / checks.length) * 100);
  const scoreTone = score >= 80 ? 'tone-success' : score >= 50 ? 'tone-warning' : 'tone-danger';

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">SEO score</span>
        <span className={cn('rounded-[4px] px-2 py-0.5 text-xs font-semibold tabular-nums', scoreTone)}>
          {score}/100
        </span>
      </div>
      <ul className="space-y-1.5">
        {checks.map((c, i) => (
          <li key={i} className="flex items-start gap-2 text-xs">
            <span
              className={cn(
                'mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full',
                c.ok ? 'tone-success' : c.warn ? 'tone-warning' : 'tone-danger'
              )}
            >
              {c.ok ? <Check className="size-3" /> : c.warn ? <Minus className="size-3" /> : <X className="size-3" />}
            </span>
            <span className={c.ok ? 'text-muted-foreground' : 'text-foreground'}>{c.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
