export const metadata = {
  title: 'This is what we do - AdEtc Studios',
};

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner service-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>This is what we do</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Services</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Service Section */}
  <section className="section service-content-banner">
    <div className="hero-container">
      <div className="d-flex flex-column gspace-5">
        <div className="service-title-wrapper">
          <div className="service-title-heading">
                      <h2>This is what we do</h2>
          </div>
          <div className="service-title-description">{/* <p>
                                  AdEtc Studios, 2 years young with 15 years of filmmaking expertise behind every creation.
                              </p> */}</div>
        </div>
        <div className="accordion" id="serviceAccordion">
          <div className="accordion-item service-acc-1">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service1">Ad Films</button>
            </h2>
            <div id="service1" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
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
                                                      <span className="service-tag">TV commercials</span>
                                                      <span className="service-tag">digital ads</span>
                          </div>
                        </div>
                      </div>
                      <div className="col col-md-3">
                        <div className="d-flex flex-column align-items-end justify-content-center h-100">
                                                  <a href="/ad-film-makers" className="btn btn-accent">View Details</a>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service2">DVC's</button>
            </h2>
            <div id="service2" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-2" data-start="20" data-end="40"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our social media campaigns connect with your audience. We create engaging content and strategies that drive brand awareness, increase website traffic, and generate leads. From content creation to community management, we help you maximize your social media presence.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">DVC'ss</span>
                                                      <span className="service-tag">social media</span>
                                                      <span className="service-tag">brand awareness</span>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service3">TVC's</button>
            </h2>
            <div id="service3" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-3" data-start="40" data-end="60"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our TVC's showcase your brand's story. We produce professional videos that enhance your company's image, engage stakeholders, and drive business growth. From brand films to explainer videos, we deliver clear and impactful communication.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">TVC's</span>
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
          <div className="accordion-item service-acc-4">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service4">Brand Films</button>
            </h2>
            <div id="service4" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-4" data-start="60" data-end="80"></div>
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
          <div className="accordion-item service-acc-7">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service7">End-To-End Production</button>
            </h2>
            <div id="service7" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-7" data-start="120" data-end="140"></div>
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
  {/* Experience Section */}
  <section className="section">
    <div className="hero-container">
      <div className="d-flex flex-column gspace-5">
        <div className="service-title-wrapper">
          <div className="service-title-heading">
                      <h2>Our Experience</h2>
          </div>
          <div className="service-title-description">
              <p>AdEtc Studios may be two years young, but the expertise behind every frame comes from 15 years of filmmaking experience. Over the years, our team has worked across creative direction, production, cinematography, and post-production, developing a deep understanding of what it takes to turn an idea into a compelling visual story.</p>
              <p>As a video production company in Ahmedabad, we bring together fresh creative thinking and years of hands-on production expertise to create films that are visually engaging and strategically purposeful. From corporate films and brand films to DVCs, TVCs, ad films, and promotional videos, we approach every project with the same attention to detail and commitment to quality.</p>
              <p>Our experience extends beyond simply creating beautiful visuals. We understand how to translate a brand's message into a story that connects with its audience, whether the goal is brand building, communication, marketing, or lead generation.</p>
              <p>From the first creative concept to the final edit, our team works collaboratively to ensure every production is thoughtfully planned, professionally executed, and true to the brand.</p>
              <p>15 years of filmmaking expertise. One young studio. Endless stories to tell.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials Section
          <section class="section">
              <div class="hero-container">
                  <div class="d-flex flex-column gspace-5">
                      <div class="service-title-wrapper">
                          <div class="service-title-heading">
                              <h2>What Our Clients Say</h2>
                          </div>
                      </div>
                      <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-3">
                          <div class="col">
                              <div class="card">
                                  <div class="d-flex flex-column gspace-2">
                                      <p>"AdEtc Studios brought a lot of heart and style into our shoot. They understood the emotional value of what Kadam stands for and captured it with real warmth."</p>
                                      <div class="d-flex flex-column gspace-1">
                                          <h5>Aniq Nurani</h5>
                                          <span>Kadam</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card">
                                  <div class="d-flex flex-column gspace-2">
                                      <p>"What I loved most about working with AdEtc was how invested they were."</p>
                                      <div class="d-flex flex-column gspace-1">
                                          <h5>Siddiqa Nurani</h5>
                                          <span>Pollie</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card">
                                  <div class="d-flex flex-column gspace-2">
                                      <p>"From the very first mood-board, AdEtc Studios just got it."</p>
                                      <div class="d-flex flex-column gspace-1">
                                          <h5>Yash Shah</h5>
                                          <span>ZerobyZ</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card">
                                  <div class="d-flex flex-column gspace-2">
                                      <p>"AdEtc Studios brought a level of professionalism and calm..."</p>
                                      <div class="d-flex flex-column gspace-1">
                                          <h5>Parimal Desai</h5>
                                          <span>Cure Sight Lasik Centre</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card">
                                  <div class="d-flex flex-column gspace-2">
                                      <p>"Working with AdEtc Studios felt effortless."</p>
                                      <div class="d-flex flex-column gspace-1">
                                          <h5>Sanjana Desai</h5>
                                          <span>Concept Diagnostics</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
  {/* Contact CTA Section */}
  <section className="section-cta-contact" style={{ paddingBottom: '50px' }}>
    <div className="hero-container">
      <div className="contact-cta-banner">
        <div className="contact-cta-title-container">
                  <h2 className="contact-cta-title heading-fill">Let's Turn Your Vision Into Cinematic Reality</h2>
                  <h2 className="contact-cta-title heading-stroke">Let's Turn Your Vision Into Cinematic Reality</h2>
        </div>
        <div className="contact-cta-text-container">
                  <p>"Many a small thing has been made large by the right kind of advertising." – Mark Twain</p>
          <div>
                      <a href="/contact" className="btn btn-accent-primary">Free Consultation</a>
          </div>
        </div>
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" /></div>
      </div>
    </div>
  </section>
  {/* Pricing Section */}
  {/* <section class="section">
              <div class="hero-container">
                  <div class="pricing-content-container">
                      <h2 class="pricing-content-title">Choose a Plan That Fits Your Vision</h2>
                      <div class="heading-highlight-container">
                          <span class="pricing-heading-highlight">Pricing Plants</span>
                      </div>
                      <div class="row row-cols-lg-3 row-cols-1 grid-spacer-3">
                          <div class="col">
                              <div class="card card-pricing">
                                  <div class="d-flex flex-row gspace-2 align-items-center justify-content-between">
                                      <div class="d-flex flex-column gspace-1">
                                          <h4>Basic Plan</h4>
                                          <p class="pricing-description">Ideal for social media & promos lorem ipsum dolor</p>
                                      </div>
  
                                      <span class="price">
                                          $299
                                      </span>
                                  </div>
                                  <div class="pricing-divider"></div>
                                  <a href="#" class="btn btn-accent btn-pricing">Get Started</a>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus lu ullamcorper mattis pulvinar dapibus leo.</p>
                                  <ul class="pricing-detail-list">
                                      <li>Up to 1-minute video</li>
                                      <li>1 shooting location</li>
                                      <li>1 revision round</li>
                                      <li>Basic editing & color correction</li>
                                      <li>Royalty-free background music</li>
                                  </ul>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card card-pricing">
                                  <div class="d-flex flex-row gspace-2 align-items-center justify-content-between">
                                      <div class="d-flex flex-column gspace-1">
                                          <h4>Standard Plan</h4>
                                          <p class="pricing-description">Best for commercials & brand videos lorem ipsum</p>
                                      </div>
  
                                      <span class="price">
                                          $299
                                      </span>
                                  </div>
                                  <div class="pricing-divider"></div>
                                  <a href="#" class="btn btn-accent btn-pricing">Get Started</a>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus lu ullamcorper mattis pulvinar dapibus leo.</p>
                                  <ul class="pricing-detail-list">
                                      <li>Up to 3-minute video</li>
                                      <li>Up to 2 locations</li>
                                      <li>2 revision rounds</li>
                                      <li>Scriptwriting support</li>
                                      <li>Licensed music included</li>
                                  </ul>
                              </div>
                          </div>
                          <div class="col">
                              <div class="card card-pricing">
                                  <div class="d-flex flex-row gspace-2 align-items-center justify-content-between">
                                      <div class="d-flex flex-column gspace-1">
                                          <h4>Premium Plan</h4>
                                          <p class="pricing-description">For cinematic projects & full campaigns lorem</p>
                                      </div>
  
                                      <span class="price">
                                          $299
                                      </span>
                                  </div>
                                  <div class="pricing-divider"></div>
                                  <a href="#" class="btn btn-accent btn-pricing">Get Started</a>
                                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus lu ullamcorper mattis pulvinar dapibus leo.</p>
                                  <ul class="pricing-detail-list">
                                      <li>Up to 1-minute video</li>
                                      <li>1 shooting location</li>
                                      <li>1 revision round</li>
                                      <li>Basic editing & color correction</li>
                                      <li>Royalty-free background music</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
    </>
  );
}
