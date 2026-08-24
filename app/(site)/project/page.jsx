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
                </div>
              </div>
            </div>
            <div className="col-12 w-100">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100 w-100">
                <div className="project-video-container project-video-container--wide">
                                  <div className="project-video-bg" id="video-bg-3" data-video-id="Ym0n7iTqDis"></div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="request-loader" data-video="https://youtu.be/Ym0n7iTqDis">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/cure-sight-laser-center">Change Your Story Now</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-4" data-video-id="-vl1RXXV9AU"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/-vl1RXXV9AU">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/vijeta-kaun">Vijeta Kaun?</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-5" data-video-id="khDQF5S1jhQ"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/khDQF5S1jhQ">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/chor-police">Chor-Police</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-6" data-video-id="wyoMwNQcC2w"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/wyoMwNQcC2w">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/swayam-bhagwan">Swayam Bhagwan</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-7" data-video-id="z3G3d2CPWFM"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/z3G3d2CPWFM">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/ye-saaf-hai">Ye Saaf Hai?</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 w-100">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100 w-100">
                <div className="project-video-container project-video-container--wide">
                                  <div className="project-video-bg" id="video-bg-8" data-video-id="hZpeOppxfR0"></div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="request-loader" data-video="https://youtu.be/hZpeOppxfR0">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/khushiyon-ka-pakka-vaada">Khushiyon Ka Pakka Vaada</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-9" data-video-id="tlapIbTVRnQ"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/tlapIbTVRnQ">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/ms-bose">Ms. Bose</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100">
                <div className="project-video-container">
                                  <div className="project-video-bg" id="video-bg-10" data-video-id="9R6rRLU-Agc"></div>
                  <div>
                    <button className="request-loader" data-video="https://youtu.be/9R6rRLU-Agc">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/health-aapki-zimmedari-hamari">Health Aapki, Zimmedari Hamari</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 w-100">
              <div className="d-flex flex-column gspace-2 justify-content-center align-items-center h-100 w-100">
                <div className="project-video-container project-video-container--wide">
                                  <div className="project-video-bg" id="video-bg-11" data-video-id="ZWAD2GoK7II"></div>
                  <div className="w-100 d-flex justify-content-center">
                    <button className="request-loader" data-video="https://youtu.be/ZWAD2GoK7II">
                                          <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row gspace-2 justify-content-between align-items-center flex-wrap w-100">
                  <h3 className="project-title">
                                      <a href="/project-detail/sirf-tere-liye">Sirf Tere Liye!</a>
                  </h3>
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