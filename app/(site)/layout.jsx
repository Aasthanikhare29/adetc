import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: {
    default: 'AdEtc Studios',
    template: '%s',
  },
  description:
    'AdEtc Studios is a full-service film production studio delivering bold visuals and powerful narratives.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="web icon" href="/assets/images/favicon.ico" />
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
