import VideoModal from '@/components/VideoModal';

export const metadata = {
  title: 'Portfolio - AdEtc Studios',
};

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
                                  <div className="project-video-bg" id="video-bg-1" data-video-id="vplPZf2uxb8"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/vplPZf2uxb8">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">KD Hospital</a>
                  </h3>
                  {/* <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Music Video</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-2" data-video-id="TcYx1AGZFWc"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/TcYx1AGZFWc">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/madhav-aishwaryam">Madhav Aishwaryam</a>
                  </h3>
                  {/* <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Commercial Add</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-12 w-100">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100 w-100">
                <div className="project-video-container project-video-container--wide">
                                  <div className="project-video-bg" id="video-bg-3" data-video-id="tlapIbTVRnQ"></div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="request-loader" data-video="https://youtu.be/tlapIbTVRnQ">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Cure Site Laser Center</a>
                  </h3>
                  {/* <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Travel Documentary</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-4" data-video-id="z3G3d2CPWFM"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/z3G3d2CPWFM">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Pollie</a>
                  </h3>
                  {/* <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Short Film</a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2">
                <div className="project-video-container project-video-container--tall">
                                  <div className="project-video-bg" id="video-bg-5" data-video-id="hZpeOppxfR0"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/hZpeOppxfR0">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail">Kadam Pakka Rang</a>
                  </h3>
                  {/* <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-circle-dot accent-color"></i>
                                      <a href="#" className="project-category">Product Teaser</a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Modal Video Section */}
  <div className="section p-0">
    <VideoModal />
  </div>
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
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" /></div>
      </div>
    </div>
  </section>
    </>
  );
}
