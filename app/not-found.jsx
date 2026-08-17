export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
  {/* Banner 404 Section */}
  <section className="section banner-inner banner-notfound notfound-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-notfound-container">
              <span className="notfound-heading">404</span>
              <h2>Ooops! Page Not Found</h2>
              <p className="notfound-description">We're sorry, but the page you're looking for doesn't exist or has been moved. Let us help you get back on track with the right business solutions.</p>
              <a href="/" className="btn btn-accent">Click Here</a>
      </div>
    </div>
  </section>
    </>
  );
}
