export const metadata = {
  title: 'Our Team/Crew - adetc',
};

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner team-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Our Crew</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Our Team</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Team Section */}
  <section className="section">
    <div className="hero-container overflow-visible">
      <div className="row row-cols-lg-2 row-cols-1 grid-spacer-y-5 grid-spacer-x-3">
        <div className="col col-lg-4">
          <div className="team-title-container">
                      <h2>Meet The Founders</h2>
                      <p>The visionaries behind every frame at AdEtc Studios.</p>
          </div>
        </div>
        <div className="col col-lg-8">
          <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
            <div className="col">
              <div className="team-container">
                              <div className="image-container team-image"><img src="https://adetcstudios.com/wp-content/uploads/2020/03/Chirag.JPEG-e1755281502673.jpg" alt="Chirag Sharma" className="img-fluid" /></div>
                <div className="d-flex flex-row align-items-center justify-content-between gspace-2">
                  <div className="d-flex flex-column">
                                      <h4>Chirag Sharma</h4>
                                      <p className="team-designation">Co-Founder & Creative Producer</p>
                  </div>
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
            </div>
            <div className="col">
              <div className="team-container">
                              <div className="image-container team-image"><img src="https://adetcstudios.com/wp-content/uploads/2020/03/Chinmay.jpeg-e1755281301146.jpg" alt="Chinmay Parmar" className="img-fluid" /></div>
                <div className="d-flex flex-row align-items-center justify-content-between gspace-2">
                  <div className="d-flex flex-column">
                                      <h4>Chinmay Parmar</h4>
                                      <p className="team-designation">Co-Founder & Creative Director</p>
                  </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Partner Section */}
  <section className="section pt-0">
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
            <div className="card card-trust-us">
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
            <div className="card card-trust-us">
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
            <div className="card card-trust-us">
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
            <div className="card card-trust-us">
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
            <div className="card card-trust-us">
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
    </>
  );
}
