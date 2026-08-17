import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE, organizationLd, localBusinessLd, websiteLd } from '@/lib/seo';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Film & Video Production in Ahmedabad`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — Film & Video Production in Ahmedabad`,
    description: SITE.description,
    images: [{ url: SITE.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/assets/images/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="AdEtc Studios — Blog"
          href="/feed.xml"
        />
        {/* Speed up first YouTube embed */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        {/* Vendor + font CSS as parallel <link>s (formerly a serial @import chain in main.css).
            Order preserved: vendors/fonts before main.css so the cascade is unchanged. */}
        <link rel="stylesheet" href="/assets/webfonts/font-family-anton.css" />
        <link rel="stylesheet" href="/assets/webfonts/font-family-poppins.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/vendor/solid.css" />
        <link rel="stylesheet" href="/assets/css/vendor/regular.css" />
        <link rel="stylesheet" href="/assets/css/vendor/brands.css" />
        <link rel="stylesheet" href="/assets/css/vendor/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <JsonLd data={[organizationLd(), localBusinessLd(), websiteLd()]} />
        <Header />
        <Sidebar />
        <main>{children}</main>
        <Footer />
        <Script
          src="/assets/js/bundle.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
