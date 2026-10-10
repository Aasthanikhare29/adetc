import sanitizeHtml from 'sanitize-html';
import { SITE } from './seo';

const SITE_HOST = new URL(SITE.url).hostname.replace(/^www\./, '');

// Relative/mailto URLs and our own domain stay in the same tab; other sites open a new one.
function isInternal(href) {
  if (!/^https?:\/\//i.test(href || '')) return true;
  try {
    return new URL(href).hostname.replace(/^www\./, '') === SITE_HOST;
  } catch {
    return false;
  }
}

// Whitelist for Tiptap rich-text output. Runs server-side on every save so a
// compromised/edited payload can't store XSS, and again at render (blog/[slug])
// so link rules apply to posts saved before they changed.
export function cleanHtml(dirty) {
  return sanitizeHtml(String(dirty || ''), {
    allowedTags: [
      'p', 'br', 'strong', 'em', 'u', 's', 'blockquote', 'code', 'pre',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'img', 'hr',
    ],
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: (tagName, { target, rel, ...attribs }) => ({ // eslint-disable-line no-unused-vars
        tagName,
        attribs: isInternal(attribs.href)
          ? attribs
          : { ...attribs, target: '_blank', rel: 'noopener noreferrer' },
      }),
    },
  });
}
