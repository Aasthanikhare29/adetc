/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      // Old demo/slug paths → keyword landing pages (preserve SEO equity).
      { source: '/service-detail', destination: '/video-production-company-in-ahmedabad', permanent: true },
      { source: '/video-production-company', destination: '/video-production-company-guide', permanent: true },
      { source: '/ad-film-makers', destination: '/ad-film-makers-in-ahmedabad', permanent: true },
    ];
  },
};

export default nextConfig;
