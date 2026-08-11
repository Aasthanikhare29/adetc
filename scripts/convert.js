const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const routes = {
  'index.html': '/',
  'about.html': '/about',
  'services.html': '/services',
  'service-detail.html': '/service-detail',
  'project.html': '/project',
  'project-detail.html': '/project-detail',
  'blog.html': '/blog',
  'single-post.html': '/single-post',
  'team.html': '/team',
  'testimonial.html': '/testimonial',
  'pricing.html': '/pricing',
  'contact.html': '/contact',
  '404_page.html': '/#',
};

const voidElements = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

const boolAttrs = new Set([
  'disabled', 'required', 'checked', 'selected', 'multiple', 'autoplay',
  'controls', 'loop', 'muted', 'async', 'defer', 'nomodule', 'novalidate',
  'hidden', 'playsinline', 'allowfullscreen', 'default', 'open', 'scoped',
  'reversed', 'itemscope', 'autofocus', 'readonly', 'seamless',
]);

const attrMap = {
  class: 'className',
  for: 'htmlFor',
  contenteditable: 'contentEditable',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  spellcheck: 'spellCheck',
  tabindex: 'tabIndex',
  crossorigin: 'crossOrigin',
  usemap: 'useMap',
  frameborder: 'frameBorder',
  allowfullscreen: 'allowFullScreen',
  playsinline: 'playsInline',
  'http-equiv': 'httpEquiv',
  charset: 'charSet',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  enctype: 'encType',
  formaction: 'formAction',
  inputmode: 'inputMode',
  srcdoc: 'srcDoc',
  draggable: 'draggable',
};

const svgAttrMap = {
  viewbox: 'viewBox',
  preserveaspectratio: 'preserveAspectRatio',
  gradientunits: 'gradientUnits',
  gradienttransform: 'gradientTransform',
  patternunits: 'patternUnits',
  patterntransform: 'patternTransform',
  clippath: 'clipPath',
  clippathunits: 'clipPathUnits',
  fillrule: 'fillRule',
  cliprule: 'clipRule',
  strokelinecap: 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  strokewidth: 'strokeWidth',
  textpath: 'textPath',
  startoffset: 'startOffset',
  'xlink:href': 'xlinkHref',
  'xlink:show': 'xlinkShow',
  'xml:space': 'xmlSpace',
  'xmlns:xlink': 'xmlnsXlink',
  'repeatcount': 'repeatCount',
};

function convertAttrName(name) {
  const lower = name.toLowerCase();
  if (attrMap[lower]) return attrMap[lower];
  if (svgAttrMap[lower]) return svgAttrMap[lower];
  if (lower.startsWith('data-') || lower.startsWith('aria-')) return lower;
  return name;
}

function rewriteUrl(value) {
  const v = String(value);
  if (v.startsWith('assets/')) return '/' + v;
  if (v.startsWith('s/')) return '/' + v;
  if (v.startsWith('./assets/')) return '/' + v.slice(2);
  if (v.startsWith('./s/')) return '/' + v.slice(2);
  const m = v.match(/^(?:\.\.\/)*([^/?#]+\.html?)([?#].*)?$/);
  if (m) {
    const page = m[1];
    const suffix = m[2] || '';
    if (routes[page] !== undefined) return routes[page] + suffix;
  }
  return v;
}

function rewriteSrcset(value) {
  return String(value)
    .split(',')
    .map((part) => {
      const t = part.trim();
      const m = t.match(/^(\S+)(\s+.*)?$/);
      if (m && (m[1].startsWith('assets/') || m[1].startsWith('s/'))) {
        return '/' + m[1] + (m[2] || '');
      }
      return t;
    })
    .join(', ');
}

function cssPropCamel(p) {
  if (p.startsWith('--')) return p;
  let s = p.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
  if (/^-\w/.test(p)) {
    s = s.charAt(0).toUpperCase() + s.slice(1);
    if (s.startsWith('Ms')) s = 'ms' + s.slice(2);
  }
  return s;
}

function styleToJs(styleStr) {
  const entries = [];
  for (let decl of styleStr.split(';')) {
    const i = decl.indexOf(':');
    if (i === -1) continue;
    const key = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!key || !val) continue;
    entries.push(
      `${cssPropCamel(key)}: '${val.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
    );
  }
  if (!entries.length) return null;
  return entries.join(', ');
}

function escapeAttr(v) {
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function escapeText(t) {
  return t
    .replace(/\{/g, "{'{'}")
    .replace(/\}/g, "{'}'}");
}

function attrString(node) {
  const attribs = node.attribs || {};
  let out = '';
  for (const [rawName, rawVal] of Object.entries(attribs)) {
    const lower = rawName.toLowerCase();
    const name = convertAttrName(rawName);

    if (lower === 'style') {
      const js = styleToJs(String(rawVal));
      if (js) out += ` style={{ ${js} }}`;
      continue;
    }

    let val = rawVal;
    if (lower === 'href' || lower === 'src' || lower === 'poster' ||
        lower === 'action' || lower === 'data-src' || lower === 'data-background') {
      val = rewriteUrl(val);
    } else if (lower === 'srcset') {
      val = rewriteSrcset(val);
    }

    if (boolAttrs.has(lower) && val === '') {
      out += ` ${name}`;
      continue;
    }
    out += ` ${name}="${escapeAttr(val)}"`;
  }
  return out;
}

function nodeType(node) {
  if (node.type === 'text' || node.type === 'comment' || node.type === 'tag' ||
      node.type === 'script' || node.type === 'style') {
    return node.type;
  }
  const nn = node.nodeName;
  if (nn === '#comment') return 'comment';
  if (nn === '#text') return 'text';
  return 'tag';
}

const svgTagMap = {
  textpath: 'textPath',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  fegaussianblur: 'feGaussianBlur',
  feoffset: 'feOffset',
  feblend: 'feBlend',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  fecolormatrix: 'feColorMatrix',
  fecomponenttransfer: 'feComponentTransfer',
  feflood: 'feFlood',
  fecomposite: 'feComposite',
  feimage: 'feImage',
  femorphology: 'feMorphology',
  fespotlight: 'feSpotLight',
  fedistantlight: 'feDistantLight',
  fepointlight: 'fePointLight',
  fediffuselighting: 'feDiffuseLighting',
  fespecularlighting: 'feSpecularLighting',
  feturbulence: 'feTurbulence',
  fetile: 'feTile',
  fepanonymized: 'fePanonymized',
};

function nodeTag(node) {
  const raw = (node.tagName || node.name || node.nodeName || 'div').toLowerCase();
  return svgTagMap[raw] || raw;
}

function children($, node) {
  return $(node).contents().toArray();
}

const pad = (n) => '  '.repeat(n);

function jsx($, node, indent) {
  const type = nodeType(node);
  if (type === 'text') {
    const t = escapeText(node.data || node.value || '');
    if (!t.trim()) return '';
    return t;
  }
  if (type === 'comment') {
    const c = (node.data || '').trim();
    if (!c) return '';
    return `{/* ${c.replace(/\*\//g, '* /').replace(/-->/g, '-- >')} */}`;
  }
  if (type === 'script' || type === 'style') {
    return '';
  }

  const tag = nodeTag(node);
  const attr = attrString(node);
  const kids = children($, node);
  const rendered = kids
    .map((k) => jsx($, k, indent + 1))
    .filter((s) => s !== '');

  if (voidElements.has(tag)) {
    return `${pad(indent)}<${tag}${attr} />`;
  }
  if (rendered.length === 0) {
    return `${pad(indent)}<${tag}${attr}></${tag}>`;
  }

  const hasBlockChildren = kids.some(
    (k) => nodeType(k) === 'tag' && !voidElements.has(nodeTag(k))
  );

  if (!hasBlockChildren) {
    // All children are text, comments or void elements -> inline.
    const inner = rendered.map((s) => s.trim()).join(' ');
    return `${pad(indent)}<${tag}${attr}>${inner}</${tag}>`;
  }

  const lines = [pad(indent) + `<${tag}${attr}>`];
  for (const s of rendered) {
    if (s.includes('\n')) {
      lines.push(s);
    } else {
      lines.push(pad(indent + 1) + s);
    }
  }
  lines.push(pad(indent) + `</${tag}>`);
  return lines.join('\n');
}

function extract(html, selector, useInner) {
  const $ = cheerio.load(html);
  const $el = $(selector).first();
  if (!$el.length) throw new Error(`missing selector: ${selector}`);
  const node = $el.get(0);
  if (useInner) {
    return children($, node)
      .map((k) => jsx($, k, 0))
      .filter((s) => s !== '')
      .join('\n');
  }
  return jsx($, node, 0);
}

function pageFile(title, content) {
  const indented = content
    .split('\n')
    .map((l) => '  ' + l)
    .join('\n');
  return `export const metadata = {\n  title: '${title.replace(/'/g, "\\'")}',\n};\n\nexport default function Page() {\n  return (\n    <>\n${indented}\n    </>\n  );\n}\n`;
}

const pages = [
  { file: 'index.html', title: 'adetc', route: '/' },
  { file: 'about.html', title: 'About Us - adetc', route: '/about' },
  { file: 'services.html', title: 'This is what we do - adetc', route: '/services' },
  { file: 'service-detail.html', title: 'Service Detail - adetc', route: '/service-detail' },
  { file: 'project.html', title: 'Portfolio - adetc', route: '/project' },
  { file: 'project-detail.html', title: 'Project Detail - adetc', route: '/project-detail' },
  { file: 'blog.html', title: 'Blog/Journal - adetc', route: '/blog' },
  { file: 'single-post.html', title: 'Single Post - adetc', route: '/single-post' },
  { file: 'team.html', title: 'Our Team/Crew - adetc', route: '/team' },
  { file: 'testimonial.html', title: 'Testimonial - adetc', route: '/testimonial' },
  { file: 'pricing.html', title: 'Pricing/Packages - adetc', route: '/pricing' },
  { file: 'contact.html', title: 'Contact Us - adetc', route: '/contact' },
];

const root = process.cwd();

for (const p of pages) {
  const html = fs.readFileSync(path.join(root, p.file), 'utf8');
  const content = extract(html, 'main', true);
  const outDir = p.route === '/' ? path.join(root, 'app') : path.join(root, 'app', p.route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.jsx'), pageFile(p.title, content));
  console.log('wrote', path.join(outDir, 'page.jsx'));
}

// Components: header, aside (sidebar), footer from index.html
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const headerJsx = extract(indexHtml, 'header', false);
const asideJsx = extract(indexHtml, 'aside', false);
const footerJsx = extract(indexHtml, 'footer', false);

fs.mkdirSync(path.join(root, 'components'), { recursive: true });

function componentFile(name, content) {
  const indented = content
    .split('\n')
    .map((l) => '  ' + l)
    .join('\n');
  return `export default function ${name}() {\n  return (\n${indented}\n  );\n}\n`;
}

fs.writeFileSync(path.join(root, 'components', 'Header.jsx'), componentFile('Header', headerJsx));
fs.writeFileSync(path.join(root, 'components', 'Sidebar.jsx'), componentFile('Sidebar', asideJsx));
fs.writeFileSync(path.join(root, 'components', 'Footer.jsx'), componentFile('Footer', footerJsx));
console.log('wrote components');

// 404 page
const nfHtml = fs.readFileSync(path.join(root, '404_page.html'), 'utf8');
const nfContent = extract(nfHtml, 'main', true);
fs.writeFileSync(path.join(root, 'app', 'not-found.jsx'), pageFile('Not Found - adetc', nfContent));
console.log('wrote app/not-found.jsx');
