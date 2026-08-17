import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'Meet AdEtc Studios — an Ahmedabad-based film and video production team turning brand ideas into bold, cinematic stories across ad films, TVCs and branded content.',
  path: '/about',
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner about-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>About Us</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">About Us</span>
        </nav>
      </div>
    </div>
  </section>
  {/* About Section */}
  <section className="section">
    <div className="hero-container">
      <div className="row grid-spacer-3">
        <div className="col-12 col-md-4">
          <div className="d-flex flex-column gspace-2 align-items-center align-items-md-start justify-content-between w-100 h-100">
                      <span className="about-tagline">Bringing Stories to Life Through Film & Emotion</span>
            <div className="about-circle-logo-container">
              <div className="about__circle-logo">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="circleLogoTitle">
                                  <title id="circleLogoTitle">adetc Film Studio Logo</title>
                  <defs>
                                      <path id="textcircle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"></path>
                  </defs>
                                  <circle cx="100" cy="100" r="95"></circle>
                  <text dy="5">
                                      <textPath href="#textcircle" className="about__circle-logo-title" startOffset="0%">• adetc FILM AND VIDEO PRODUCTION STUDIO • BRINGING IDEAS TO LIFE ON SCREEN</textPath>
                  </text>
                  <g transform="translate(100 100)">
                                      <image href="/assets/images/Gp-1.png" className="about__circle-logo-image" width="160" height="160" x="-80" y="-80" preserveAspectRatio="xMidYMid meet"></image>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <div className="d-flex flex-column gspace-2">
                      <h3>At AdEtc Studios, our journey began with a simple yet profound idea: that storytelling through visuals is more than a profession — it's a passion,</h3>
                      <p>We believe filmmaking is a craft that thrives on innovation, creativity, and a deep love for the process. It's not about chasing the next big thing or mimicking popular templates; it's about understanding the heart of a story and bringing it to life in a way that feels fresh, genuine, and powerful. At AdEtc Studios, we aim to keep the soul of filmmaking alive by prioritizing quality over quantity, substance over gimmicks, and storytelling over shortcuts.</p>
  {/* <p>
                                  This philosophy drives us to push boundaries and challenge ourselves with every project. Whether we're creating an ad film, a documentary, or a music video, we approach it with the same unwavering dedication to originality and excellence. We seek to connect with audiences on a deeper level, not by following trends but by setting them, ensuring that every frame we produce reflects the essence of the story we're telling.
                              </p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Achievement Section */}
  <section className="section pt-0">
    <div className="hero-container">
      <div className="achievement-container">
        <div className="achievement-content">
          <div className="achievement-stat-container">
                      <span className="achievement-stat counter" data-target="120">00</span>
                      <span className="achievement-suffix">+</span>
          </div>
                  <h5>Project Delivered</h5>
        </div>
        <div className="achievement-content">
          <div className="achievement-stat-container">
                      <span className="achievement-stat counter" data-target="10">00</span>
                      <span className="achievement-suffix">+</span>
          </div>
                  <h5>Award Won</h5>
        </div>
        <div className="achievement-content">
          <div className="achievement-stat-container">
                      <span className="achievement-stat counter" data-target="25000000">00</span>
                      <span className="achievement-suffix">+</span>
          </div>
                  <h5>Video Views</h5>
        </div>
        <div className="achievement-content">
          <div className="achievement-stat-container">
                      <span className="achievement-stat counter" data-target="90">00</span>
                      <span className="achievement-suffix">+</span>
          </div>
                  <h5>Happy Clients</h5>
        </div>
      </div>
    </div>
  </section>
  {/* Our Way of Work Section */}
  <section className="section">
    <div className="hero-container">
      <div className="d-flex flex-column gspace-3">
        {/* Section Heading */}
        <div className="d-flex flex-column gspace-2 text-center align-items-center mb-4">
                  <h2>Our Way of Work</h2>
          <p>A simple, structured process to bring your vision to life —
                      from idea to final cut.</p>
        </div>
        {/* Cards */}
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-3">
          {/* Card 01 */}
          <div className="col">
            <div className="card card-trust-us">
              <div className="card-number-wrapper">
                              <div className="card-number">01</div>
              </div>
                          <div className="trust-us-icon"></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>Pre-Production: Planning & Concept Development</h4>
                <p>We kick off with a thorough briefing to understand
                                  your brand and goals, then develop a creative
                                  concept and script. Once approved, we finalize the
                                  budget, casting, locations, and production schedule.</p>
              </div>
            </div>
          </div>
          {/* Card 02 */}
          <div className="col">
            <div className="card card-trust-us">
              <div className="card-number-wrapper">
                              <div className="card-number">02</div>
              </div>
                          <div className="trust-us-icon"></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>Production: Shoot Day</h4>
                <p>On shoot day, our experienced crew manages every
                                  aspect—from directing talent and capturing visuals
                                  to handling lighting, sound, and camera operations—
                                  ensuring a smooth and professional production.</p>
              </div>
            </div>
          </div>
          {/* Card 03 */}
          <div className="col">
            <div className="card card-trust-us">
              <div className="card-number-wrapper">
                              <div className="card-number">03</div>
              </div>
                          <div className="trust-us-icon"></div>
              <div className="d-flex flex-column gspace-2">
                              <h4>Post-Production: Editing & Final Delivery</h4>
                <p>After filming, we edit the footage with professional
                                  color grading, sound design, motion graphics, and
                                  visual effects before delivering the final video in
                                  the format best suited for your platform.</p>
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
                          <img src="/assets/images/cameraman-filming-music-video-CD7JKUM.jpg" alt="" className="trust-us-hover-image" loading="lazy" decoding="async" />
              <div className="card-number-wrapper">
                              <div className="card-number">01</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon3.png" alt="Trust Us Icon" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                          <img src="/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg" alt="" className="trust-us-hover-image" loading="lazy" decoding="async" />
              <div className="card-number-wrapper">
                              <div className="card-number">02</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon4.png" alt="Trust Us Icon" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                          <img src="/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg" alt="" className="trust-us-hover-image" loading="lazy" decoding="async" />
              <div className="card-number-wrapper">
                              <div className="card-number">03</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon5.png" alt="Trust Us Icon" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                          <img src="/assets/images/young-guy-enjoying-taking-photos-3UJ8HB8.png" alt="" className="trust-us-hover-image" loading="lazy" decoding="async" />
              <div className="card-number-wrapper">
                              <div className="card-number">04</div>
              </div>
                          <div className="trust-us-icon"><img src="/assets/images/icon7.png" alt="Trust Us Icon" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                          <img src="/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg" alt="" className="trust-us-hover-image" loading="lazy" decoding="async" />
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
  {/* Team Section */}
  <section className="section">
    <div className="d-flex flex-column gspace-2 text-start text-lg-center align-items-start align-items-lg-center">
          <h2>Meet the Founders Behind the Lense</h2>
          <p className="mb-0">Our team is led by a collective of visionary directors, cinematographers, editors, and storytellers who turn concepts into cinematic experiences.</p>
      <div style={{ marginBottom: '50px' }}>
              <a href="/team" className="btn btn-accent">View All Team</a>
      </div>
    </div>
    <div className="hero-container">
      <div className="row row-cols-md-3 row-cols-1 grid-spacer-3">
            <div className="col">
              <div className="team-container">
                <div className="image-container team-image">
                  <img src="/assets/images/chirag.jpeg" alt="Chirag Sharma" className="img-fluid" loading="lazy" decoding="async" />
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
                  <img src="/assets/images/chinmay.jpeg" alt="Chinmay Parmar" className="img-fluid" loading="lazy" decoding="async" />
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
                  <img src="/assets/images/krutika.jpeg" alt="Krutika Sharma" className="img-fluid" loading="lazy" decoding="async" />
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
  <section className="section p-0">
    <div className="hero-container overflow-hidden">
      <div className="partners-container">
              <h5 className="partnership-title-content">Trusted by Industry Leaders & Creative Brands</h5>
        <div className="overflow-hidden">
          <div className="swiper swiperpartner partner-marquee">
            <div className="swiper-wrapper">
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-7.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-5.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-1.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-2.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-7.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-5.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-1.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-2.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
                          <div className="swiper-slide"><img src="/assets/images/Client-6.png" alt="Partner" className="partner-image" loading="lazy" decoding="async" /></div>
            </div>
                      <div className="swiper-pagination"></div>
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
                              <div className="testimonial-image"><img src="/assets/images/composite-collage-of-people-expressing-positive-em-JJYFLK3.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-5.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-13.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-12.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-6.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/composite-collage-of-people-expressing-positive-em-JJYFLK3.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-5.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-13.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-12.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                              <div className="testimonial-image"><img src="/assets/images/Photo-6.jpg" alt="Testimonial" className="img-fluid" loading="lazy" decoding="async" /></div>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service1">Video Production</button>
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
                                                      <p className="mb-0">We handle every step of the film production process from concept development, scripting, casting, location scouting, to on-set direction and cinematography.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">film production</span>
                                                      <span className="service-tag">video shooting</span>
                                                      <span className="service-tag">creative film studio</span>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service2">Video Editing</button>
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
                                                      <p className="mb-0">With cutting-edge editing suites, we handle everything from rough cuts to final polish color grading, audio mixing, VFX, transitions, and pacing to deliver visually.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">video editing</span>
                                                      <span className="service-tag">video shooting</span>
                                                      <span className="service-tag">post-production studio</span>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service3">Script Writing</button>
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
                                                      <p className="mb-0">Every powerful video starts with a compelling script. Our writers and visual artists craft clear narratives and detailed storyboards to guide your production.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">script writing</span>
                                                      <span className="service-tag">storyboard</span>
                                                      <span className="service-tag">creative direction</span>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service4">Motion Graphics</button>
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
                                                      <p className="mb-0">We handle every step of the film production process from concept development, scripting, casting, location scouting, to on-set direction and cinematography.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">film production</span>
                                                      <span className="service-tag">video shooting</span>
                                                      <span className="service-tag">creative film studio</span>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service5">Sound Design</button>
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
                                                      <p className="mb-0">We handle every step of the film production process from concept development, scripting, casting, location scouting, to on-set direction and cinematography.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">film production</span>
                                                      <span className="service-tag">video shooting</span>
                                                      <span className="service-tag">creative film studio</span>
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
  {/* Contact CTA Section */}
  <section className="section">
    <div className="hero-container">
      <div className="contact-cta-banner">
        <div className="contact-cta-title-container">
                  <h2 className="contact-cta-title heading-fill">Let's Turn Your Vision Into Cinematic Reality</h2>
                  <h2 className="contact-cta-title heading-stroke">Let's Turn Your Vision Into Cinematic Reality</h2>
        </div>
        <div className="contact-cta-text-container">
                  <p className="mb-2" style={{ fontStyle: 'italic', fontSize: '1.1em' }}>"If it doesn't sell, it isn't creative." – David Ogilvy</p>
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
