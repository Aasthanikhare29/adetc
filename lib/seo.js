// Central SEO/GEO/AEO config + helpers.
// metadataBase (set in app/layout.jsx) resolves the relative paths below to absolute URLs.

export const SITE = {
  name: 'AdEtc Studios',
  legalName: 'adetc Studio',
  url: 'https://adetcstudios.com',
  logo: 'https://adetcstudios.com/assets/images/adetc-logo.png',
  ogImage: '/assets/images/adetc-logo.png',
  description:
    'AdEtc Studios is a full-service film and video production company in Ahmedabad, delivering ad films, brand videos, TVCs and post-production with bold visuals and powerful storytelling.',
  phones: ['+919727000197', '+919909901116'],
  email: '',
  updated: '2026-08-17', // bump when content is meaningfully refreshed (dateModified)
  services: [
    'Video Production',
    'Video Editing',
    'Script Writing',
    'Motion Graphics',
    'Sound Design',
  ],
  address: {
    street: '314, Judges Bunglow Rd, Suryapooja Block B, Vastrapur',
    city: 'Ahmedabad',
    region: 'Gujarat',
    postalCode: '380015',
    country: 'IN',
  },
  // Real social/profile URLs strengthen the brand's knowledge-graph entity.
  sameAs: [
    'https://www.instagram.com/adetc_studios/',
    'https://www.facebook.com/profile.php?id=61578905199852',
    'https://x.com/AdEtcstudios',
    'https://www.youtube.com/@AdEtcStudios',
    'https://www.linkedin.com/company/adetc-studios/',
  ],
};

// Build a page's Next.js `metadata` object with canonical + OpenGraph + Twitter.
// Omit `title` for the home page so the layout's default title is used.
export function pageMetadata({ title, description, path = '/', image } = {}) {
  const meta = {
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      url: path,
      title: title ? `${title} | ${SITE.name}` : undefined,
      description,
      images: [{ url: image || SITE.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title || SITE.name,
      description,
      images: [image || SITE.ogImage],
    },
  };
  if (title) meta.title = title; // string title → layout template adds "| AdEtc Studios"
  return meta;
}

// ---- JSON-LD builders (return plain objects; render via <JsonLd data={...} />) ----

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: SITE.logo,
    description: SITE.description,
    address: postalAddress,
    telephone: SITE.phones[0],
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    image: SITE.logo,
    url: SITE.url,
    telephone: SITE.phones[0],
    priceRange: '$$',
    address: postalAddress,
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Video Production Services',
      itemListElement: SITE.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s, provider: { '@id': `${SITE.url}/#organization` } },
      })),
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

// Service page schema — commercial intent, provided by the org, served in Ahmedabad.
export function serviceLd({ name, description, path, image, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}${path}#service`,
    name,
    serviceType: serviceType || name,
    description,
    ...(image ? { image: `${SITE.url}${image}` } : {}),
    url: `${SITE.url}${path}`,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
    ],
  };
}

// items: [{ q, a }]
export function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

// items: [{ name, path }] in order, root first.
export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

// Resolve a stored image (Supabase absolute URL, or a site-relative path) to
// an absolute URL for schema/OpenGraph.
export function absUrl(u) {
  if (!u) return undefined;
  if (/^https?:\/\//i.test(u)) return u;
  return `${SITE.url}${u.startsWith('/') ? '' : '/'}${u}`;
}

// Person entity for E-E-A-T (author byline). Falls back to the Organization
// when no author is configured.
function authorLd(author) {
  if (!author?.author_name) {
    return { '@type': 'Organization', name: SITE.name, url: SITE.url };
  }
  return {
    '@type': 'Person',
    name: author.author_name,
    url: author.author_url || undefined,
    jobTitle: author.author_title || undefined,
    description: author.author_bio || undefined,
    image: absUrl(author.author_photo),
    sameAs: (author.author_sameas || []).filter(Boolean).length ? author.author_sameas : undefined,
  };
}

// Full AEO/GEO schema for a blog post: BlogPosting + BreadcrumbList (+ FAQPage
// when the post has FAQ). Regenerated on every render, so publish/update always
// emits fresh schema. `post` is the mapped post; `author` is the settings row.
export function buildPostSchema({ post, author, wordCount }) {
  const path = `/blog/${post.slug}`;
  const keywords = [post.focusKeyword, ...(post.secondaryKeywords || []), ...(post.tags || [])]
    .filter(Boolean);

  const blog = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: (post.metaTitle || post.title || '').slice(0, 110),
    description: post.metaDescription || post.excerpt,
    image: absUrl(post.ogImage || post.image) || SITE.logo,
    datePublished: post.publishedAt || post.dateISO,
    dateModified: post.updatedAt || post.publishedAt || post.dateISO,
    author: authorLd(author),
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${path}` },
    inLanguage: 'en',
    articleSection: post.category || undefined,
    keywords: keywords.length ? keywords.join(', ') : undefined,
    wordCount: wordCount || undefined,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'article p'] },
  };

  const out = [
    blog,
    breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path },
    ]),
  ];
  if (Array.isArray(post.faq) && post.faq.length) out.push(faqLd(post.faq));
  return out;
}

// Schema for a builder page: WebPage + BreadcrumbList (+ FAQPage when it has FAQ).
export function buildPageSchema({ page, faq }) {
  const path = `/${page.slug}`;
  const out = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.metaTitle || page.title,
      description: page.metaDescription || undefined,
      url: `${SITE.url}${path}`,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE.url}/#website` },
      primaryImageOfPage: absUrl(page.ogImage) || undefined,
      dateModified: page.updatedAt || page.publishedAt || undefined,
      datePublished: page.publishedAt || undefined,
    },
    breadcrumbLd([
      { name: 'Home', path: '/' },
      { name: page.title, path },
    ]),
  ];
  if (faq?.length) out.push(faqLd(faq));
  return out;
}

export function articleLd({ headline, description, image, datePublished, dateModified, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? `${SITE.url}${image}` : SITE.logo,
    datePublished,
    dateModified: dateModified || SITE.updated || datePublished,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@id': `${SITE.url}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}${path}` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', 'article p'],
    },
  };
}
