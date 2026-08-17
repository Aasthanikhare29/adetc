import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Portfolio',
  description:
    'View the AdEtc Studios portfolio — ad films, brand videos, TVCs and cinematic branded content produced for clients across industries in Ahmedabad and beyond.',
  path: '/project',
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner project-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Portfolio</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Portfolio</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Project Section */}
  <section className="section section-project bg-accent-color-5">
    <div className="hero-container overflow-visible">
      <div className="project-section-content">
        <div className="project-heading-container">
                  <h2 className="project-section-heading">Featured Project</h2>
        </div>
        <div className="project-content-container">
          <div className="row row-cols-lg-2 row-cols-1 grid-spacer-x-5 grid-spacer-y-120">
            <div className="col">
              <div className="d-flex flex-column gspace-2">
                <div className="project-video-container project-video-container--tall">
                                  <div className="project-video-bg" data-video-id="Go8gUX_HZAY" id="video-bg-1"></div>
                  <div>
                    <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Urban Soul</a>
                  </h3>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Music Video</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" data-video-id="LqTk5IbBxgs" id="video-bg-2"></div>
                  <div>
                    <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Echoes of Fashion</a>
                  </h3>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Commercial Add</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 w-100">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100 w-100">
                <div className="project-video-container project-video-container--wide">
                                  <div className="project-video-bg" data-video-id="Np4EN8ZPMFU" id="video-bg-3"></div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">The Journey</a>
                  </h3>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Travel Documentary</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" data-video-id="DOeuljcKkTI" id="video-bg-4"></div>
                  <div>
                    <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Legacy</a>
                  </h3>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Short Film</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2">
                <div className="project-video-container project-video-container--tall">
                                  <div className="project-video-bg" data-video-id="BCKMzk2rRKo" id="video-bg-5"></div>
                  <div>
                    <button className="request-loader" data-video="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Launch Bold</a>
                  </h3>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Product Teaser</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact CTA Section */}
  <section className="section">
    <div className="hero-container">
      <div className="contact-cta-banner">
        <div className="contact-cta-title-container">
                  <h2 className="contact-cta-title heading-fill">Let's Turn Your Vision Into Cinematic Reality</h2>
                  <h2 className="contact-cta-title heading-stroke">Let's Turn Your Vision Into Cinematic Reality</h2>
        </div>
        <div className="contact-cta-text-container">
                  <p>From concept development to post-production, we craft cinematic experiences that captivate and inspire. Let's create something extraordinary together.</p>
          <div>
                      <a href="/contact" className="btn btn-accent-primary">Free Consultation</a>
          </div>
        </div>
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" loading="lazy" decoding="async" /></div>
      </div>
    </div>
  </section>
    </>
  );
}
