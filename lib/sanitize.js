import sanitizeHtml from 'sanitize-html';

// Whitelist for Tiptap rich-text output. Runs server-side on every save so a
// compromised/edited payload can't store XSS.
export function cleanHtml(dirty) {
  return sanitizeHtml(String(dirty || ''), {
    allowedTags: [
      'p', 'br', 'strong', 'em', 'u', 's', 'blockquote', 'code', 'pre',
      'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li', 'a', 'img', 'hr',
    ],
    allowedAttributes: {
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title'],
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }),
    },
  });
}
