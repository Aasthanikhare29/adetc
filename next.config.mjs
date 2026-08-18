/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      // Old demo/slug paths → keyword landing pages (preserve SEO equity).
      { source: '/service-detail', destination: '/video-production-company-in-ahmedabad', permanent: true },
      { source: '/ad-film-makers', destination: '/ad-film-makers-in-ahmedabad', permanent: true },
      // Bespoke article pages migrated to data-driven blog posts.
      { source: '/single-post', destination: '/blog/ad-film-makers-bring-brands-to-life', permanent: true },
      { source: '/brand-video', destination: '/blog/brand-video-visual-storytelling', permanent: true },
      { source: '/tvc-format', destination: '/blog/tvc-format-guide', permanent: true },
      { source: '/video-production-company-guide', destination: '/blog/video-production-company-ahmedabad', permanent: true },
      { source: '/video-production-company', destination: '/blog/video-production-company-ahmedabad', permanent: true },
    ];
  },
};

export default nextConfig;
