export const POSTS_PER_PAGE = 6;

// Post shape:
//   slug     unique url segment (also the /blog/[slug] route param)
//   href     OPTIONAL. If set, the post lives at a hand-built page (legacy
//            bespoke articles). If absent, the post is rendered data-driven by
//            app/blog/[slug]/page.jsx from its `body` blocks.
//   draft    true = excluded from listing, pagination, sitemap. Use for cards
//            that don't have real article content yet (write them, then flip).
//   body     OPTIONAL blocks for the [slug] renderer. See app/blog/[slug].
//
// The 5 real articles currently live at bespoke pages (href set). The 8 draft
// posts have no article yet — give them a `body` and remove `draft` to publish.
export const blogPosts = [
  {
    slug: 'ad-film-makers-bring-brands-to-life',
    href: '/single-post',
    title: 'Ad Film Makers: How Creative Advertising Films Bring Brands to Life',
    image: '/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg',
    date: 'July 19, 2025',
    category: 'Creative Direction',
    excerpt: 'Behind every memorable campaign is a group of creative experts turning ideas into powerful stories…',
  },
  {
    slug: 'brand-video-visual-storytelling',
    href: '/brand-video',
    title: 'Brand Video: How Powerful Visual Storytelling Builds Lasting Brands',
    image: '/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg',
    date: 'July 19, 2025',
    category: 'Creative Direction',
    excerpt: 'Discover how a compelling branded video helps your business build trust and connect with audiences…',
  },
  {
    slug: 'tvc-format-guide',
    href: '/tvc-format',
    title: 'TVC Format: Understanding Commercial Duration, Script Structure and Production',
    image: '/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Explore the TVC format, common durations, script structure, production process, and what makes an effective television commercial…',
  },
  {
    slug: 'video-production-company-ahmedabad',
    href: '/video-production-company',
    title: 'Video Production Company in Ahmedabad: What to Look for Before You Hire One',
    image: '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Learn what a video production company in Ahmedabad does, from concept and scripting to filming, editing, and delivering videos for brands…',
  },
  {
    slug: 'choosing-right-lenses-storytelling',
    draft: true,
    title: 'Choosing the Right Lenses for Storytelling',
    image: '/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Explore how lens choice shapes emotion, perspective, and the visual language of every single scene…',
  },
  {
    slug: 'beginners-guide-filmmaking-minimal-budget',
    draft: true,
    title: "Beginner's Guide to Filmmaking with Minimal Budget",
    image: '/assets/images/photographers-setting-cameras-before-shooting-65ME2DS.jpg',
    date: 'July 19, 2025',
    category: 'Filmmaking Tips',
    excerpt: 'Practical tip for creating cinematic content without expensive gear, from planning your final edit…',
  },
  {
    slug: 'post-production-workflow',
    draft: true,
    title: 'Post-Production Workflow: From Rough Cut to Final Render',
    image: '/assets/images/photographer-capture-the-essence-of-the-opening-ce-TU8TLN7.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: "A step-by-step look at editing, colour grading, sound design, and delivering a polished final film…",
  },
  {
    slug: 'lighting-techniques-set-mood',
    draft: true,
    title: 'Lighting Techniques That Set the Mood',
    image: '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: "Discover how lighting shapes atmosphere and guides the audience's emotional response to every shot…",
  },
  {
    slug: 'storyboarding-short-films',
    draft: true,
    title: 'How to Master the Art of Storyboarding for Short Films',
    image: '/assets/images/male-video-editor-working-on-his-personal-computer-HQHD8ZL.jpg',
    date: 'July 19, 2025',
    category: 'Filmmaking Tips',
    excerpt: 'Learn how storyboards plan every frame, keep your crew aligned, and bring your vision onto the set…',
  },
  {
    slug: 'essential-gear-checklist',
    draft: true,
    title: 'Essential Gear Checklist for Your Next Shoot',
    image: '/assets/images/film-industry-7ZLFY7L.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Everything you need to pack for a smooth production day, from cameras and lenses to battery backup…',
  },
  {
    slug: 'vision-to-screen-plan-every-shot',
    draft: true,
    title: 'From Vision to Screen: How We Plan Every Shot',
    image: '/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg',
    date: 'July 19, 2025',
    category: 'Creative Direction',
    excerpt: 'Inside our process of turning a concept into a shot list and executing it with great creative care…',
  },
  {
    slug: 'five-cinematic-camera-angles',
    draft: true,
    title: '5 Cinematic Camera Angles Every Director Should Know',
    image: '/assets/images/cameraman-filming-music-video-CD7JKUM.jpg',
    date: 'July 19, 2025',
    category: 'Filmmaking Tips',
    excerpt: 'Master the camera angles that add depth, drama, and powerful storytelling to each frame you direct…',
  },
];

// Only published posts appear in listings, pagination and the sitemap.
export const publishedPosts = blogPosts.filter((p) => !p.draft);

// Canonical URL for a post card: bespoke page if `href` set, else the [slug] route.
export function postUrl(post) {
  return post.href || `/blog/${post.slug}`;
}

export function getPaginatedPosts(page) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return publishedPosts.slice(start, start + POSTS_PER_PAGE);
}

export const TOTAL_PAGES = Math.max(1, Math.ceil(publishedPosts.length / POSTS_PER_PAGE));

// Posts served by app/blog/[slug] (data-driven: have a body, not a bespoke page).
export const slugPosts = publishedPosts.filter((p) => p.body && !p.href);

export function getPostBySlug(slug) {
  return slugPosts.find((p) => p.slug === slug) || null;
}
