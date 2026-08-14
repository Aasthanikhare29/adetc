export const metadata = {
  title: 'adetc',
};

export default function Page() {
  return (
    <>
  {/* Banner Home Section */}
  <div className="section-banner-home">
      <div id="banner-video-background"></div>
    <div className="banner-home-video">
      <div className="hero-container position-relative z-2">
        <div className="banner-home-content">
          <div className="d-flex flex-column gspace-2 align-items-center">
            <div className="d-flex flex-column flex-md-row gspace-2 justify-content-center justify-content-md-between align-items-center">
              <div className="home-title-container">
                <div className="d-flex flex-row gspace-y-0 gspace-x-1 align-items-center">
                                  <h1>Str</h1>
                  <div className="home-spacer">
                                      <div className="spacer-inner"></div>
                  </div>
                                  <h1>ng</h1>
                </div>
                              <h1>Crafting Visuals</h1>
              </div>
              <div className="home-avatar-container">
                              <div className="d-flex flex-row align-items-center"><img src="/assets/images/Photo-12.jpg" alt="Banner Avatar" className="banner-avatar" /> <img src="/assets/images/Photo-5.jpg" alt="Banner Avatar" className="banner-avatar" /> <img src="/assets/images/composite-collage-of-people-expressing-positive-em-JJYFLK3.jpg" alt="Banner Avatar" className="banner-avatar" /> <img src="/assets/images/Gp-1.png" alt="Banner Avatar" className="banner-avatar" /></div>
                              <p>adetc is a full-service film production studio delivering bold visuals and powerful narratives. From commercials to creative films we bring your vision to life.</p>
              </div>
            </div>
                      <div className="home-divider"></div>
            <div className="d-flex flex-column flex-md-row gspace-2 w-100 align-items-center justify-content-center justify-content-md-between">
              <div>
                <a href="#" className="btn btn-accent">
  
                                          Watch Our Showreel
                                          
                                  <i className="fa-solid fa-film"></i>
                </a>
              </div>
              <div className="d-flex flex-row gspace-2 align-items-center">
                <a href="https://www.instagram.com/" className="social-icon">
                                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" className="social-icon">
                                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.x.com/" className="social-icon">
                                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.youtube.com/" className="social-icon">
                                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Core Service Section */}
  <section className="section-core-service">
    <div className="hero-container overflow-visible">
      <div className="d-flex flex-column gspace-5 position-relative">
        <div className="core-service-heading-container">
          <div className="core-heading-container">
                      <h2 className="core-service-heading heading-fill">Crafting Stories Through Cinematic Frames</h2>
                      <h2 className="core-service-heading heading-stroke">Crafting Stories Through Cinematic Frames</h2>
          </div>
          <div className="core-service-logo-container">
            <div className="core-service__circle-logo">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="circleLogoTitle">
                              <title id="circleLogoTitle">adetc Film Studio Logo</title>
                <defs>
                                  <path id="textcircle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"></path>
                </defs>
                              <circle cx="100" cy="100" r="95"></circle>
                <text dy="5">
                                  <textPath href="#textcircle" className="core-service__circle-logo-title" startOffset="0%">• adetc FILM AND VIDEO PRODUCTION STUDIO • BRINGING IDEAS TO LIFE ON SCREEN</textPath>
                </text>
                <g transform="translate(100 100)">
                                  <image href="/assets/images/Gp-1.png" className="core-service__circle-logo-image" width="160" height="160" x="-80" y="-80" preserveAspectRatio="xMidYMid meet"></image>
                </g>
              </svg>
            </div>
          </div>
        </div>
        {/* Description + Cards */}
        <div className="d-flex flex-column gspace-5">
          <div className="core-service-description">
                      <p>adetc is a creative film and video production studio based on the belief that every story deserves to be told with power, passion, and precision. Whether it's a commercial, documentary, or branded content — we craft visuals that resonate.</p>
          </div>
          <div className="core-service-card-container">
            {/* Card 1 */}
            <div className="card card-core-service">
                          <img src="/assets/images/icon6.png" alt="Creative Film Direction Icon" className="core-service-icon" />
              <div className="d-flex flex-column gspace-2">
                              <h4>Creative Film Direction</h4>
                              <p className="text-center text-md-start">From concept to screen, our directors craft compelling narratives that captivate audiences and bring your vision to life with bold, purposeful storytelling.</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card card-core-service">
                          <img src="/assets/images/icon8.png" alt="Cinematic Visual Style Icon" className="core-service-icon" />
              <div className="d-flex flex-column gspace-2">
                              <h4>Cinematic Visual Style</h4>
                              <p className="text-center text-md-start" style={{ color: '#ffffff' }}>We use industry-grade cameras, lighting, and techniques to create visually stunning content that stands out and elevates your brand.</p>
              </div>
            </div>
            {/* Card 3 (highlighted) */}
            <div className="card card-core-service highlight-core">
                          <img src="/assets/images/Icon-3-1.png" alt="Expert Post Production Icon" className="core-service-icon" />
              <div className="d-flex flex-column gspace-2">
                              <h4 style={{ color: '#ffffff' }}>Expert Post Production</h4>
                              <p className="text-center text-md-start" style={{ color: '#ffffff' }}>With cutting-edge editing suites, we handle everything from rough cuts to final polish, color grading, audio mixing, VFX, and transitions.</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="card card-core-service" style={{ backgroundColor: 'var(--accent-color-3)' }}>
                          <img src="/assets/images/icon2.png" alt="Global Project Reach Icon" className="core-service-icon" />
              <div className="d-flex flex-column gspace-2">
                              <h4 style={{ color: 'black' }}>Global Project Reach</h4>
                              <p className="text-center text-md-start">From local shoots to international productions, our team delivers high-quality content across locations, languages, and formats worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Floating Image */}
          <div className="core-service-image"><img src="/assets/images/young-guy-enjoying-taking-photos-3UJ8HB8.png" alt="Photographer working with camera" className="img-fluid" /></div>
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
                                      <span className="project-category">Music Category</span>
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
  {/* Modal Video Section */}
  <div className="section p-0">
    <div id="modal-overlay" className="modal-overlay">
      <span className="my-close">
              <i className="fa-solid fa-xmark"></i>
      </span>
      <div className="my-modal">
              <iframe id="my-video-frame" allowFullScreen title="Video Player"></iframe>
      </div>
    </div>
  </div>
  {/* Service Section */}
  <section className="section service-content-banner">
    <div className="hero-container">
      <div className="d-flex flex-column gspace-5">
        <div className="service-title-wrapper">
          <div className="service-title-heading">
                      <h2>What We Do Best</h2>
          </div>
          <div className="service-title-description">
                      <p>From cinematic storytelling to post-production mastery, discover how we bring your vision to life.</p>
          </div>
          <div className="service-title-cta">
                      <a href="/services" className="btn btn-accent">Explore All Services</a>
          </div>
        </div>
        <div className="accordion" id="serviceAccordion">
          <div className="accordion-item service-acc-1">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service1">Ad Films</button>
            </h2>
            <div id="service1" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                  {/* YouTube clip range: data-start / data-end use seconds. Example: start="5" end="12" → plays 00:05 to 00:12 in a loop. */}
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-1" data-start="4" data-end="20"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our ad films elevate your brand. We craft compelling visuals that captivate audiences, drive sales, and strengthen your brand identity. From TV commercials to digital ads, we deliver impactful stories that resonate.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">ad films</span>
                                                      <span className="service-tag">tv commercials</span>
                                                      <span className="service-tag">digital ads</span>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-3">
                        <div className="d-flex flex-column align-items-end justify-content-center h-100">
                                                  <a href="/service-detail" className="btn btn-accent">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item service-acc-2">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service2">Corporate Films</button>
            </h2>
            <div id="service2" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                  {/* YouTube clip range: data-start / data-end use seconds. Example: start="5" end="12" → plays 00:05 to 00:12 in a loop. */}
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-2" data-start="20" data-end="40"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our corporate films showcase your brand's story. We produce professional videos that enhance your company's image, engage stakeholders, and drive business growth. From brand films to explainer videos, we deliver clear and impactful communication.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">corporate films</span>
                                                      <span className="service-tag">brand films</span>
                                                      <span className="service-tag">explainer videos</span>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-3">
                        <div className="d-flex flex-column align-items-start align-items-md-end justify-content-center h-100">
                                                  <a href="/service-detail" className="btn btn-accent">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item service-acc-3">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service3">Documentary Films</button>
            </h2>
            <div id="service3" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                  {/* YouTube clip range: data-start / data-end use seconds. Example: start="5" end="12" → plays 00:05 to 00:12 in a loop. */}
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-3" data-start="40" data-end="60"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our documentary films bring stories to life. We craft powerful and immersive documentaries that inform, inspire, and entertain. From historical narratives to social issues, we capture the essence of real-life stories.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">documentary films</span>
                                                      <span className="service-tag">real-life stories</span>
                                                      <span className="service-tag">narratives</span>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-3">
                        <div className="d-flex flex-column align-items-start align-items-md-end justify-content-center h-100">
                                                  <a href="/service-detail" className="btn btn-accent">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item service-acc-4">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service4">Music Videos</button>
            </h2>
            <div id="service4" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                  {/* YouTube clip range: data-start / data-end use seconds. Example: start="5" end="12" → plays 00:05 to 00:12 in a loop. */}
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-4" data-start="60" data-end="80"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our music videos bring your music to life. We create visually stunning and creatively groundbreaking music videos that enhance your artist's brand and engage your audience. From concept to completion, we deliver high-quality music videos that leave a lasting impression.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">music videos</span>
                                                      <span className="service-tag">artist branding</span>
                                                      <span className="service-tag">visual storytelling</span>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-3">
                        <div className="d-flex flex-column align-items-start align-items-md-end justify-content-center h-100">
                                                  <a href="/service-detail" className="btn btn-accent">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item service-acc-5">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service5">End-To-End Production</button>
            </h2>
            <div id="service5" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                  {/* YouTube clip range: data-start / data-end use seconds. Example: start="5" end="12" → plays 00:05 to 00:12 in a loop. */}
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-5" data-start="80" data-end="100"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our end-to-end production services take your project from concept to completion. We handle every stage of the production process, including pre-production, production, and post-production. Our streamlined approach ensures timely delivery and exceptional results.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">end-to-end production</span>
                                                      <span className="service-tag">pre-production</span>
                                                      <span className="service-tag">post-production</span>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-3">
                        <div className="d-flex flex-column align-items-start align-items-md-end justify-content-center h-100">
                                                  <a href="/service-detail" className="btn btn-accent">View Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Why Trust Us Section */}
  <section className="section bg-accent-color-5">
    <div className="d-flex flex-column gspace-2 text-start text-lg-center align-items-start align-items-lg-center">
          <h2>Why Brands Trust adetc</h2>
          <p className="mb-0">From concept to screen, we craft powerful visual experiences. Let your story shine with industry-grade film production.</p>
      <div style={{ marginBottom: '50px' }}>
              <a href="/contact" className="btn btn-accent">Let's Create Together</a>
      </div>
    </div>
    <div className="hero-container">
      <div className="d-flex flex-column gspace-3">
        <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="card card-trust-us trust-us-hover">
                          <img src="/assets/images/cameraman-filming-music-video-CD7JKUM.jpg" alt="" className="trust-us-hover-image" />
              <div className="card-number-wrapper">
                              <div className="card-number">01</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon3.png" alt="Trust Us Icon" className="img-fluid" /></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>Cinematic Excellence</h4>
                              <p>High-end production with film-grade visuals and compelling storytelling. lorem ipsum dolor sit amet.</p>
                <div className="trust-us-cta">
                                  <a href="/about">Learn More</a>
                                  <i className="fa-solid fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-trust-us trust-us-hover">
                          <img src="/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg" alt="" className="trust-us-hover-image" />
              <div className="card-number-wrapper">
                              <div className="card-number">02</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon4.png" alt="Trust Us Icon" className="img-fluid" /></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>Creative Teamwork</h4>
                              <p>A passionate team of directors, editors & cinematographers lorem ipsum dolot sit amet consecteur.</p>
                <div className="trust-us-cta">
                                  <a href="/about">Learn More</a>
                                  <i className="fa-solid fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-md-3 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="card card-trust-us trust-us-hover">
                          <img src="/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg" alt="" className="trust-us-hover-image" />
              <div className="card-number-wrapper">
                              <div className="card-number">03</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon5.png" alt="Trust Us Icon" className="img-fluid" /></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>End to End Services</h4>
                              <p>From scripting to post production all in one place lorem ipsum dolor sit amet consectetur adipiscing.</p>
                <div className="trust-us-cta">
                                  <a href="/about">Learn More</a>
                                  <i className="fa-solid fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-trust-us trust-us-hover">
                          <img src="/assets/images/young-guy-enjoying-taking-photos-3UJ8HB8.png" alt="" className="trust-us-hover-image" />
              <div className="card-number-wrapper">
                              <div className="card-number">04</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon7.png" alt="Trust Us Icon" className="img-fluid" /></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>Client Focused Approach</h4>
                              <p>We listen, adapt, and deliver results that exceed expectations lorem ipsum dolor sit amet consectetur.</p>
                <div className="trust-us-cta">
                                  <a href="/about">Learn More</a>
                                  <i className="fa-solid fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-trust-us trust-us-hover">
                          <img src="/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg" alt="" className="trust-us-hover-image" />
              <div className="d-flex flex-column gspace-2">
                <span className="trust-us-stat-container">
                                  <span className="trust-us-stat counter" data-target="150">0</span>
                                  <span className="trust-us-suffix">+</span>
                </span>
                              <h4>Projects Completed</h4>
                              <p>Every project delivered on schedule without compromising on creative quality lorem ipsum dolor sit.</p>
                <div className="trust-us-cta">
                                  <a href="/about">Learn More</a>
                                  <i className="fa-solid fa-chevron-circle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial Section */}
  <section className="section p-0">
    <div className="testimonial-banner-container">
          <div id="testimonial-video-background"></div>
      <div className="hero-container">
        <div className="testimonial-banner-content">
                  <h2>Trusted by creative agencies, brands & storytellers.</h2>
        </div>
      </div>
    </div>
    <div className="testimonial-card-container">
      <div className="hero-container">
        <div className="testimonial-carousel">
          <button className="testimonial-scroll-btn testimonial-scroll-prev" type="button" aria-label="Previous testimonials">
                      <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="testimonial-scroll-btn testimonial-scroll-next" type="button" aria-label="Next testimonials">
                      <i className="fa-solid fa-chevron-right"></i>
          </button>
          <div className="testimonial-scroll-row" id="testimonialRow">
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Aniq Nurani - Kadam</span>
              </div>
                          <p>“AdEtc Studios brought a lot of heart and style into our shoot. They understood the emotional value of what Kadam stands for and captured it with real warmth. Grateful to have had them on this journey.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/composite-collage-of-people-expressing-positive-em-JJYFLK3.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Aniq Nurani</h6>
                                  <p className="testimonial-designation">Kadam</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Siddiqa Nurani - Pollie</span>
              </div>
                          <p>“What I loved most about working with AdEtc was how invested they were. They treated our cleaners like hero products and found ways to make the everyday look beautiful. Couldn't have asked for a better shoot team.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-5.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Siddiqa Nurani</h6>
                                  <p className="testimonial-designation">Pollie</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Yash Shah - ZerobyZ</span>
              </div>
                          <p>“From the very first mood-board, AdEtc Studios just got it. They knew how to elevate the brand visually without losing our identity. Super sharp team with real creative instinct.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-13.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Yash Shah</h6>
                                  <p className="testimonial-designation">ZerobyZ</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Parimal Desai - Cure Sight Lasik Centre</span>
              </div>
                          <p>“AdEtc Studios brought a level of professionalism and calm that matched our own approach. The team knew exactly how to light and shoot our space in a way that felt honest and premium. It was a seamless experience.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-12.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Parimal Desai</h6>
                                  <p className="testimonial-designation">Cure Sight Lasik Centre</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Sanjana Desai - Concept Diagnostics</span>
              </div>
                          <p>“Working with AdEtc Studios felt effortless. They understood our need for clean, clear visuals and translated medical complexity into something visually engaging. We felt supported every step of the way.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-6.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Sanjana Desai</h6>
                                  <p className="testimonial-designation">Concept Diagnostics</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Aniq Nurani - Kadam</span>
              </div>
                          <p>“AdEtc Studios brought a lot of heart and style into our shoot. They understood the emotional value of what Kadam stands for and captured it with real warmth. Grateful to have had them on this journey.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/composite-collage-of-people-expressing-positive-em-JJYFLK3.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Aniq Nurani</h6>
                                  <p className="testimonial-designation">Kadam</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Siddiqa Nurani - Pollie</span>
              </div>
                          <p>“What I loved most about working with AdEtc was how invested they were. They treated our cleaners like hero products and found ways to make the everyday look beautiful. Couldn't have asked for a better shoot team.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-5.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Siddiqa Nurani</h6>
                                  <p className="testimonial-designation">Pollie</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Yash Shah - ZerobyZ</span>
              </div>
                          <p>“From the very first mood-board, AdEtc Studios just got it. They knew how to elevate the brand visually without losing our identity. Super sharp team with real creative instinct.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-13.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Yash Shah</h6>
                                  <p className="testimonial-designation">ZerobyZ</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Parimal Desai - Cure Sight Lasik Centre</span>
              </div>
                          <p>“AdEtc Studios brought a level of professionalism and calm that matched our own approach. The team knew exactly how to light and shoot our space in a way that felt honest and premium. It was a seamless experience.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-12.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Parimal Desai</h6>
                                  <p className="testimonial-designation">Cure Sight Lasik Centre</p>
                </div>
              </div>
            </div>
            <div className="card card-testimonial">
              <div className="d-flex flex-row align-items-center">
                              <i className="fa-solid fa-quote-right testimonial-icon"></i>
                              <span className="testimonial-heading">Sanjana Desai - Concept Diagnostics</span>
              </div>
                          <p>“Working with AdEtc Studios felt effortless. They understood our need for clean, clear visuals and translated medical complexity into something visually engaging. We felt supported every step of the way.”</p>
              <div className="d-flex flex-row gspace-2 align-items-center">
                              <div className="testimonial-image"><img src="/assets/images/Photo-6.jpg" alt="Testimonial" className="img-fluid" /></div>
                <div className="d-flex flex-column">
                                  <h6>Sanjana Desai</h6>
                                  <p className="testimonial-designation">Concept Diagnostics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-card-wrapper">
                      <div className="spacer"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact CTA Section */}
  <section className="section-cta-contact">
    <div className="hero-container">
      <div className="contact-cta-banner">
        <div className="contact-cta-title-container">
                  <h2 className="contact-cta-title heading-fill">Want To Work With US? Leave Us a Message!</h2>
                  <h2 className="contact-cta-title heading-stroke">Want To Work With US? Leave Us a Message!</h2>
        </div>
        <div className="contact-cta-text-container">
                  <p>“Stopping advertising to save money is like stopping your watch to save time.” – Henry Ford</p>
          <div>
                      <a href="/contact" className="btn btn-accent-primary">Free Consultation</a>
          </div>
        </div>
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" /></div>
      </div>
    </div>
  </section>
  {/* Team Section */}
  <section className="section">
    <div className="d-flex flex-column gspace-2 text-start text-lg-center align-items-start align-items-lg-center">
          <h2>Meet The Founders</h2>
      <div style={{ marginBottom: '50px' }}>
      </div>
    </div>
    <div className="hero-container">
      <div className="row row-cols-md-3 row-cols-1 grid-spacer-3">
            <div className="col">
              <div className="team-container">
                <div className="image-container team-image">
                  <img src="/assets/images/chirag.jpeg" alt="Chirag Sharma" className="img-fluid" />
                  <div className="team-social-overlay">
                    <div className="d-flex flex-row align-items-center gspace-1">
                      <a href="https://www.instagram.com/" className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/" className="social-icon">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="https://www.x.com/" className="social-icon">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column w-100">
                  <h4>Chirag Sharma</h4>
                  <p className="team-designation">Co-Founder & Creative Producer</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-container">
                <div className="image-container team-image">
                  <img src="/assets/images/chinmay.jpeg" alt="Chinmay Parmar" className="img-fluid" />
                  <div className="team-social-overlay">
                    <div className="d-flex flex-row align-items-center gspace-1">
                      <a href="https://www.instagram.com/" className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/" className="social-icon">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="https://www.x.com/" className="social-icon">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column w-100">
                  <h4>Chinmay Parmar</h4>
                  <p className="team-designation">Co-Founder & Creative Director</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="team-container">
                <div className="image-container team-image">
                  <img src="/assets/images/krutika.jpeg" alt="Krutika Sharma" className="img-fluid" />
                  <div className="team-social-overlay">
                    <div className="d-flex flex-row align-items-center gspace-1">
                      <a href="https://www.instagram.com/" className="social-icon">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="https://www.facebook.com/" className="social-icon">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="https://www.x.com/" className="social-icon">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column w-100">
                  <h4>Krutika Sharma</h4>
                  <p className="team-designation">Co-Founder & Head of Marketing</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
  {/* Partner Section */}
  <section className="section-small">
    <div className="hero-container overflow-hidden">
      <div className="partners-container">
              <h5 className="partnership-title-content">Trusted by Industry Leaders & Creative Brands</h5>
        <div className="overflow-hidden">
          <div className="swiper swiperpartner partner-marquee">
            <div className="swiper-wrapper">
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-7.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-5.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-1.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-2.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-7.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-5.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-1.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-2.png" alt="Partner" className="partner-image" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" /></div>
            </div>
                      <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section */}
  <section className="section">
    <div className="hero-container">
      <div className="blog-content-container">
              <h2 className="section-title">Latest Insights in Film, Video & Creativity</h2>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="card card-blog">
                          <div className="image-container blog-image"><img src="/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg" alt="Blog Image" className="img-fluid" /></div>
              <div className="card-blog-content">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-calendar accent-color"></i>
                                      <span className="meta-data">June 15, 2026</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-folder accent-color"></i>
                                      <span className="meta-data">Video Production</span>
                  </div>
                </div>
                              <a href="/single-post" className="blog-title">Ad Film Makers: How Creative Advertising Films Bring Brands to Life</a>
                              <p className="mb-0">Behind every memorable campaign is a team of creative professionals who turn ordinary ideas into powerful visual experiences that connect with people.…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-blog">
                          <div className="image-container blog-image"><img src="/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg" alt="Blog Image" className="img-fluid" /></div>
              <div className="card-blog-content">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-calendar accent-color"></i>
                                      <span className="meta-data">June 15, 2026</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-folder accent-color"></i>
                                      <span className="meta-data">Brand Strategy</span>
                  </div>
                </div>
                              <a href="/brand-video" className="blog-title">Brand Video: How Powerful Visual Storytelling Builds Lasting Brands</a>
                              <p className="mb-0">Discover how a compelling brand video helps businesses build trust, connect with audiences, and tell memorable stories that inspire action.…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-blog">
                          <div className="image-container blog-image"><img src="/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg" alt="Blog Image" className="img-fluid" /></div>
              <div className="card-blog-content">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-calendar accent-color"></i>
                                      <span className="meta-data">June 15, 2026</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-folder accent-color"></i>
                                      <span className="meta-data">Cinematography</span>
                  </div>
                </div>
                              <a href="/single-post" className="blog-title">Choosing the Right Lenses for Storytelling</a>
                              <p className="mb-0">Explore how lens choice shapes emotion, perspective, and the visual language of every scene you direct.…</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
