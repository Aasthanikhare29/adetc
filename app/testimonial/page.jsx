import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Client Testimonials',
  description:
    'What clients say about working with AdEtc Studios — real feedback on our ad films, brand videos and production process in Ahmedabad.',
  path: '/testimonial',
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner testimonial-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>What Client Says</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Testimonial</span>
        </nav>
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
  {/* Cta Highlight Section */}
  <section className="section cta-highlight-banner">
      <div className="cta-highlight-video" data-video-id="fOTgmsqMnQA"></div>
    <div className="hero-container">
      <div className="cta-highlight-content">
              <h2 className="cta-highlight-title">Ready to Bring Your Story to Life?</h2>
        <p className="cta-highlight-text">From commercials to cinematic narratives, our team is here to turn 
                          your vision into visual magic. Choose a plan and let's start crafting 
                          something unforgettable.</p>
        <div>
                  <a href="/contact" className="btn btn-accent">Get Started Today</a>
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
                          <div className="image-container blog-image"><img src="/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg" alt="Blog Image" className="img-fluid" loading="lazy" decoding="async" /></div>
              <div className="card-blog-content">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-calendar accent-color"></i>
                                      <span className="meta-data">July 19, 2025</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-folder accent-color"></i>
                                      <span className="meta-data">Creative Direction</span>
                  </div>
                </div>
                              <a href="/single-post" className="blog-title">Ad Film Makers: How Creative Advertising Films Bring Brands to Life</a>
                              <p className="mb-0">Behind every memorable campaign is a team of creative professionals who turn ordinary ideas into powerful visual experiences that connect with people.…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-blog">
                          <div className="image-container blog-image"><img src="/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg" alt="Blog Image" className="img-fluid" loading="lazy" decoding="async" /></div>
              <div className="card-blog-content">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-calendar accent-color"></i>
                                      <span className="meta-data">July 19, 2025</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-folder accent-color"></i>
                                      <span className="meta-data">Creative Direction</span>
                  </div>
                </div>
                              <a href="/brand-video" className="blog-title">Brand Video: How Powerful Visual Storytelling Builds Lasting Brands</a>
                              <p className="mb-0">Discover how a compelling brand video helps businesses build trust, connect with audiences, and tell memorable stories that inspire action.…</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-blog">
                          <div className="image-container blog-image"><img src="/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg" alt="Blog Image" className="img-fluid" loading="lazy" decoding="async" /></div>
              <div className="card-blog-content">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-calendar accent-color"></i>
                                      <span className="meta-data">July 19, 2025</span>
                  </div>
                  <div className="d-flex flex-row gspace-1 align-items-center">
                                      <i className="fa-solid fa-folder accent-color"></i>
                                      <span className="meta-data">Production Insights</span>
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
