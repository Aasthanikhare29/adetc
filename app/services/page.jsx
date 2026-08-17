import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Our Services',
  description:
    'Video production services from AdEtc Studios in Ahmedabad — ad films, brand videos, TVCs, corporate films, and full post-production from concept to final delivery.',
  path: '/services',
});

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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service2">Campaign Film</button>
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
                                                      <span className="service-tag">campaign films</span>
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
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service3">Corporate Films</button>
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
          <div className="accordion-item service-acc-4">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service4">Documentary Films</button>
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
          <div className="accordion-item service-acc-5">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service5">Music Videos</button>
            </h2>
            <div id="service5" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-5" data-start="80" data-end="100"></div>
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
          <div className="accordion-item service-acc-6">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service6">Product Shoot</button>
            </h2>
            <div id="service6" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-6" data-start="100" data-end="120"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">Our product shoots highlight your products in the best light. We capture stunning visuals that showcase your products' unique features and benefits. From simple product shots to complex lifestyle photography, we deliver high-quality images that drive sales.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">product shoots</span>
                                                      <span className="service-tag">lifestyle photography</span>
                                                      <span className="service-tag">commercial imagery</span>
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
          <div className="accordion-item service-acc-8">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service8">Feature Film</button>
            </h2>
            <div id="service8" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-8" data-start="140" data-end="160"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">We create films rooted in emotion and authenticity. Every frame is thoughtfully designed to move, inspire, and stay with the audience.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">feature films</span>
                                                      <span className="service-tag">cinematic storytelling</span>
                                                      <span className="service-tag">emotional narratives</span>
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
          <div className="accordion-item service-acc-9">
            <h2 className="accordion-header service-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#service9">Creative Consulting</button>
            </h2>
            <div id="service9" className="accordion-collapse collapse" data-bs-parent="#serviceAccordion">
              <div className="accordion-body">
                <div className="service-content-container">
                                  <div className="service-video-bg" data-video-id="pVA0G01aDfk" id="service-video-9" data-start="160" data-end="180"></div>
                  <div className="service-video-content">
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                      <div className="col col-md-9">
                        <div className="d-flex flex-column-reverse flex-lg-row gspace-2 justify-content-between w-100">
                          <div className="service-description-content">
                                                      <p className="mb-0">AdEtc Studios offers expert Creative Consulting to help you refine and execute your vision. We provide strategic insights, from brainstorming to brand positioning, ensuring your creative projects stand out and connect with your audience effectively.</p>
                          </div>
                          <div className="service-tag-container">
                                                      <span className="service-tag">creative consulting</span>
                                                      <span className="service-tag">brand positioning</span>
                                                      <span className="service-tag">strategic insights</span>
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
                      <p>AdEtc Studios, 2 years young with 15 years of filmmaking expertise behind every creation.</p>
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
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" loading="lazy" decoding="async" /></div>
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
