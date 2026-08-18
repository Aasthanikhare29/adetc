// Section-block registry for the page builder. Each type has a label and the
// default shape of its data. Used by the admin BlockEditor + public renderer.

export const BLOCK_TYPES = [
  { type: 'hero', label: 'Hero', defaults: { heading: '', subheading: '', image: '', ctaLabel: '', ctaHref: '' } },
  { type: 'richtext', label: 'Rich text', defaults: { html: '' } },
  { type: 'image', label: 'Image', defaults: { src: '', alt: '', caption: '' } },
  { type: 'cards', label: 'Card grid', defaults: { heading: '', columns: 3, items: [] } },
  { type: 'faq', label: 'FAQ', defaults: { heading: 'Frequently asked questions', items: [] } },
  { type: 'cta', label: 'Call to action', defaults: { heading: '', text: '', buttonLabel: '', buttonHref: '' } },
];

export const BLOCK_LABEL = Object.fromEntries(BLOCK_TYPES.map((b) => [b.type, b.label]));

export function newBlock(type) {
  const def = BLOCK_TYPES.find((b) => b.type === type);
  return { type, ...structuredClone(def?.defaults || {}) };
}

// Collect FAQ items across all faq blocks (for FAQPage schema).
export function collectFaq(blocks) {
  return (blocks || [])
    .filter((b) => b.type === 'faq')
    .flatMap((b) => (b.items || []).filter((it) => it.q && it.a));
}
