export const POSTS_PER_PAGE = 6;

export const blogPosts = [
  {
    href: '/single-post',
    title: 'Ad Film Makers: How Creative Advertising Films Bring Brands to Life',
    image: '/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg',
    date: 'July 19, 2025',
    category: 'Creative Direction',
    excerpt: 'Behind every memorable campaign is a group of creative experts turning ideas into powerful stories…',
  },
  {
    href: '/brand-video',
    title: 'Brand Video: How Powerful Visual Storytelling Builds Lasting Brands',
    image: '/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg',
    date: 'July 19, 2025',
    category: 'Creative Direction',
    excerpt: 'Discover how a compelling branded video helps your business build trust and connect with audiences…',
  },
  {
    href: '/tvc-format',
    title: 'TVC Format: Understanding Commercial Duration, Script Structure and Production',
    image: '/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Explore the TVC format, common durations, script structure, production process, and what makes an effective television commercial…',
  },
  {
    href: '/video-production-company',
    title: 'Video Production Company in Ahmedabad: What to Look for Before You Hire One',
    image: '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Learn what a video production company in Ahmedabad does, from concept and scripting to filming, editing, and delivering videos for brands…',
  },
  {
    href: '/single-post',
    title: 'Choosing the Right Lenses for Storytelling',
    image: '/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Explore how lens choice shapes emotion, perspective, and the visual language of every single scene…',
  },
  {
    href: '/single-post',
    title: "Beginner's Guide to Filmmaking with Minimal Budget",
    image: '/assets/images/photographers-setting-cameras-before-shooting-65ME2DS.jpg',
    date: 'July 19, 2025',
    category: 'Filmmaking Tips',
    excerpt: 'Practical tip for creating cinematic content without expensive gear, from planning your final edit…',
  },
  {
    href: '/single-post',
    title: 'Post-Production Workflow: From Rough Cut to Final Render',
    image: '/assets/images/photographer-capture-the-essence-of-the-opening-ce-TU8TLN7.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: "A step-by-step look at editing, colour grading, sound design, and delivering a polished final film…",
  },
  {
    href: '/single-post',
    title: 'Lighting Techniques That Set the Mood',
    image: '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: "Discover how lighting shapes atmosphere and guides the audience's emotional response to every shot…",
  },
  {
    href: '/single-post',
    title: 'How to Master the Art of Storyboarding for Short Films',
    image: '/assets/images/male-video-editor-working-on-his-personal-computer-HQHD8ZL.jpg',
    date: 'July 19, 2025',
    category: 'Filmmaking Tips',
    excerpt: 'Learn how storyboards plan every frame, keep your crew aligned, and bring your vision onto the set…',
  },
  {
    href: '/single-post',
    title: 'Essential Gear Checklist for Your Next Shoot',
    image: '/assets/images/film-industry-7ZLFY7L.jpg',
    date: 'July 19, 2025',
    category: 'Production Insights',
    excerpt: 'Everything you need to pack for a smooth production day, from cameras and lenses to battery backup…',
  },
  {
    href: '/single-post',
    title: 'From Vision to Screen: How We Plan Every Shot',
    image: '/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg',
    date: 'July 19, 2025',
    category: 'Creative Direction',
    excerpt: 'Inside our process of turning a concept into a shot list and executing it with great creative care…',
  },
  {
    href: '/single-post',
    title: '5 Cinematic Camera Angles Every Director Should Know',
    image: '/assets/images/cameraman-filming-music-video-CD7JKUM.jpg',
    date: 'July 19, 2025',
    category: 'Filmmaking Tips',
    excerpt: 'Master the camera angles that add depth, drama, and powerful storytelling to each frame you direct…',
  },
];

export function getPaginatedPosts(page) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return blogPosts.slice(start, start + POSTS_PER_PAGE);
}

export const TOTAL_PAGES = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
