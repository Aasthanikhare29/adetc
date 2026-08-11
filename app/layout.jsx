import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: {
    default: 'adetc',
    template: '%s',
  },
  description:
    'adetc is a full-service film production studio delivering bold visuals and powerful narratives.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="web icon" href="/assets/images/favicon.ico" />
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
