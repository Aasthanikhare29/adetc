import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Video Production Company in Ahmedabad',
  description:
    'How AdEtc Studios delivers end-to-end video production in Ahmedabad — from concept, scripting and shooting to editing and final delivery for brands.',
  path: '/service-detail',
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner service-detail-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Video Production Company in Ahmedabad</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Service Detail</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Hero + Introduction Section */}
  <section className="section">
    <div className="hero-container">
      <div className="service-detail-content-container">
        <div className="heading-container">
                    <h2>Video Production Company in Ahmedabad That Creates Stories People Remember</h2>
              </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="d-flex flex-column gspace-3">
              <div className="d-flex flex-column gspace-2">
                    <p>Your brand deserves more than just a video, it deserves a story that inspires action. At AdEtc Studios, we help businesses transform ideas into compelling visual experiences through strategic storytelling and cinematic production. As a trusted Video Production Company in Ahmedabad, we produce high-quality brand films, corporate videos, commercials, documentaries, product shoots, and promotional videos tailored to your business goals.</p>
                    <p>From concept development and scriptwriting to filming, video editing, motion graphics, and post-production, our team manages every stage of the creative journey. Whether you're launching a new product, strengthening your brand identity, or creating impactful marketing campaigns, we deliver videos that connect with audiences and drive measurable business outcomes.</p>
                    <p className="mb-0">Ready to bring your vision to life? Let's create a video that elevates your brand.</p>
                <div>
                    <a href="/contact" className="btn btn-accent">
                                      <i className="fa-solid fa-calendar-check"></i>
                                            Book Your Discovery Call
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="image-container service-detail-image">
                          <img src="/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg" alt="Behind the Scenes at AdEtc Studios" className="img-fluid" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Main Content + Sidebar Section */}
  <section className="section pt-0">
    <div className="hero-container">
      <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
        <div className="col col-lg-8">
          <ul className="nav service-detail-tabs" id="serviceTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="service-detail-tab active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="service-detail-tab" id="whatwedo-tab" data-bs-toggle="tab" data-bs-target="#whatwedo" type="button" role="tab" aria-controls="whatwedo" aria-selected="false">What We Do</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="service-detail-tab" id="process-tab" data-bs-toggle="tab" data-bs-target="#process" type="button" role="tab" aria-controls="process" aria-selected="false">Our Process</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="service-detail-tab" id="faq-tab" data-bs-toggle="tab" data-bs-target="#faqs" type="button" role="tab" aria-controls="faqs" aria-selected="false">FAQ</button>
            </li>
          </ul>
          <div className="tab-content" id="serviceTabContent">
            {/* Overview Pane */}
            <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Why Choose AdEtc Studios as Your Video Production Company in Ahmedabad?</h2>
                  </div>
                  <div className="service-title-description">
                            <p>Every business has a unique story, but only the right creative partner can tell it in a way that captures attention and builds trust. At AdEtc Studios, we combine creativity, strategy, and technical expertise to produce videos that not only look stunning but also support your marketing strategy.</p>
                            <p>Unlike a traditional production house, we begin by understanding your audience, your objectives, and the message you want to communicate. This collaborative approach allows us to create videos that align with your brand, engage viewers, and inspire action across digital platforms.</p>
                            <p>Our team handles everything from ideation and scripting to filming, video editing services, colour grading, sound design, visual effects, and post-production ensuring a seamless experience from start to finish.</p>
                            <p className="mb-0">Whether you're a startup, an established enterprise, or a growing organisation in Ahmedabad, we create videos designed to strengthen your brand presence and support long-term growth.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Industries We Work With</h3>
                            <p>As a trusted video production company in Ahmedabad, we work with businesses across diverse industries, creating videos that connect with their target audiences.</p>
                            <p>We regularly produce content for:</p>
                            <p className="mb-0">Whether you're introducing a new product or service, showcasing company culture, or launching a marketing campaign, we create videos tailored to your industry and audience.</p>
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="dot-list">
                                  <li><p>Healthcare &amp; Medical</p></li>
                                  <li><p>Manufacturing &amp; Industrial</p></li>
                                  <li><p>Real Estate</p></li>
                                  <li><p>Hospitality</p></li>
                                  <li><p>Fashion &amp; Lifestyle</p></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="dot-list">
                                  <li><p>Education</p></li>
                                  <li><p>Startups &amp; Technology</p></li>
                                  <li><p>Jewellery &amp; Luxury Brands</p></li>
                                  <li><p>FMCG</p></li>
                                  <li><p>Corporate Enterprises</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Why Brands Trust AdEtc Studios</h3>
                            <p>Choosing the right video production agency is about more than technical expertise; it's about finding a creative partner who understands your vision.</p>
                            <p>At AdEtc Studios, every project is built on collaboration, transparency, and storytelling. Our team works closely with clients to ensure every creative decision supports real business outcomes, not just visual appeal.</p>
                            <h4>What Sets Us Apart</h4>
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Creative-first storytelling</li>
                                  <li>End-to-end production services</li>
                                  <li>Experienced creative and technical team</li>
                                  <li>High-quality production standards</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Seamless project management</li>
                                  <li>Strong portfolio across multiple industries</li>
                                  <li>Focus on measurable marketing impact</li>
                        </ul>
                      </div>
                    </div>
                            <p>We believe every brand has a story worth telling. Our role is to transform that story into impactful videos that build trust, strengthen customer relationships, and inspire action.</p>
                            <p className="mb-0">Whether you're based in Ahmedabad, Vadodara, elsewhere in Gujarat, or another city in India, our team is ready to deliver professional video solutions that make your brand stand out.</p>
                  </div>
                </div>
                <div className="service-detail-stats">
                  <div className="service-detail-stat">
                    <div className="stat-value"><span className="counter" data-target="150">0</span>+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="service-detail-stat">
                    <div className="stat-value">10+</div>
                    <div className="stat-label">Industries Served</div>
                  </div>
                  <div className="service-detail-stat">
                    <div className="stat-value"><span className="counter" data-target="100">0</span>%</div>
                    <div className="stat-label">Client Satisfaction</div>
                  </div>
                  <div className="service-detail-stat">
                    <div className="stat-value">24/7</div>
                    <div className="stat-label">Project Support</div>
                  </div>
                </div>
              </div>
            </div>
            {/* What We Do Pane */}
            <div className="tab-pane fade" id="whatwedo" role="tabpanel" aria-labelledby="whatwedo-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Professional Video Production Services in Ahmedabad</h2>
                  </div>
                  <div className="service-title-description">
                            <p>As a full-service video production company in Ahmedabad, we offer creative production services for businesses across industries.</p>
                  </div>
                </div>
                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Corporate Films</h5>
                      </div>
                                <p>Build trust with professionally produced corporate films that communicate your company's vision, values, culture, and achievements. Whether you need an investor presentation, company profile, recruitment film, or internal communication video, our corporate video production team creates authentic stories that resonate with your audience.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Brand Films</h5>
                      </div>
                                <p>A great brand film does more than showcase your products—it communicates your purpose. We create emotionally engaging films that help businesses establish credibility, build recognition, and create lasting impressions across digital platforms.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Commercial &amp; Promotional Videos</h5>
                      </div>
                                <p>Looking to launch a campaign or promote a product or service? Our promotional videos combine cinematic visuals with strategic messaging to maximise engagement and generate leads. Every project is crafted to support your marketing objectives while maintaining your unique brand identity.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Product Shoots</h5>
                      </div>
                                <p>Highlight every detail with high-quality product photography and video production. Whether it's for e-commerce, advertising, or social media, we produce scroll-stopping visuals that enhance your product presentation and encourage customer action.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Documentary Films</h5>
                      </div>
                                <p>Some stories deserve authenticity above everything else. Our documentary production combines research, storytelling, and cinematic filmmaking to create meaningful narratives that inspire audiences and build credibility.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Music Videos</h5>
                      </div>
                                <p>We transform creative ideas into visually compelling music videos through thoughtful storytelling, creative direction, and professional production techniques that bring every performance to life.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>End-to-End Production Services</h3>
                            <p className="mb-0">From creative ideation to the polished final delivery, AdEtc Studios manages the complete production process, including:</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Creative Strategy</li>
                                  <li>Script Development</li>
                                  <li>Storyboarding</li>
                                  <li>Location Scouting</li>
                                  <li>Professional Filming</li>
                                  <li>Drone Cinematography</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Video Editing</li>
                                  <li>Motion Graphics</li>
                                  <li>Visual Effects</li>
                                  <li>Colour Grading</li>
                                  <li>Sound Design</li>
                                  <li>Post-Production</li>
                        </ul>
                    </div>
                  </div>
                </div>
                <p>With one experienced team managing every stage, you receive a seamless production experience and consistently exceptional results.</p>
              </div>
            </div>
            {/* Process Pane */}
            <div className="tab-pane fade" id="process" role="tabpanel" aria-labelledby="process-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Our Video Production Process</h2>
                  </div>
                  <div className="service-title-description">
                            <p>Creating exceptional videos requires more than a camera—it requires a structured production process backed by creativity, planning, and technical expertise. As a professional video production company, AdEtc Studios follows industry best practices to ensure every project is delivered on time and aligned with your business goals.</p>
                  </div>
                </div>
                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">01</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Discovery &amp; Strategy</h5>
                        </div>
                                <p className="mb-0">Every successful project begins with understanding your brand, audience, objectives, and project scope. We collaborate with your team to identify the right creative direction and define how the video will support your marketing strategy.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">02</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Concept Development &amp; Script</h5>
                        </div>
                                <p className="mb-0">Once the strategy is clear, our creative team develops concepts, prepares the script, and builds storyboards that bring your vision to life. Every idea is designed to communicate your message with clarity while reflecting your brand identity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">03</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Production</h5>
                        </div>
                                <p className="mb-0">Our experienced crew manages every aspect of the shoot—from lighting and cinematography to directing talent and capturing high-quality visuals. Whether it's corporate video production, a commercial video, or promotional content, we ensure every frame supports your business objectives.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">04</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Editing &amp; Post-Production</h5>
                        </div>
                                <p className="mb-0">This is where the story truly comes alive. Our video editing services include colour grading, sound design, motion graphics, 3D animation, and visual effects where required. Through expert editing and post-production, we deliver polished videos ready for websites, social media, presentations, and digital campaigns.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ Pane */}
            <div className="tab-pane fade" id="faqs" role="tabpanel" aria-labelledby="faq-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Frequently Asked Questions</h2>
                  </div>
                  <div className="service-title-description">
                            <p>Got questions about our video production services? We've got answers to help you get started with your next film or video project.</p>
                  </div>
                </div>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">What types of videos does AdEtc Studios create?</button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>We produce corporate films, brand videos, commercial advertisements, promotional videos, documentaries, product videos, music videos, and customised video content for businesses across industries.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">How long does a video production project take?</button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Project timelines depend on the complexity of the shoot, scripting, approvals, filming, and post-production. Most corporate and promotional videos are completed within a few weeks after finalising the creative brief.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">Do you provide scriptwriting and creative direction?</button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. Our team manages concept development, script writing, storyboarding, filming, video editing, and post-production, providing complete video production services under one roof.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Can you create videos for social media and digital marketing?</button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Absolutely. We create videos optimised for websites, YouTube, Instagram, LinkedIn, Facebook, and other digital platforms, helping businesses improve engagement and strengthen their online presence.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Do you offer services outside Ahmedabad?</button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. While this page focuses on video production in Ahmedabad, AdEtc Studios works with brands across Gujarat and throughout India. We also travel for production requirements based on project needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">Why should I choose AdEtc Studios?</button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Our combination of creative storytelling, professional execution, and collaborative planning allows us to create videos that don't just look impressive—they support your marketing strategy, strengthen your brand, and contribute to long-term business growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <a href="/contact" className="btn btn-accent">Free Consultation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
          <div className="service-detail-sidebar">
            <div className="service-sidebar-card">
              <div className="image-container service-sidebar-image">
                <img src="/assets/images/two-confident-coworkers-indian-bearded-businessman-QHK94WX.jpg" alt="AdEtc Studios Team" className="img-fluid" loading="lazy" decoding="async" />
              </div>
              <ul className="service-facts">
                <li>
                  <span>Service</span>
                  <p>Video Production</p>
                </li>
                <li>
                  <span>Location</span>
                  <p>Ahmedabad, Gujarat</p>
                </li>
                <li>
                  <span>Typical Duration</span>
                  <p>2 - 4 Weeks</p>
                </li>
                <li>
                  <span>Deliverables</span>
                  <p>Film, Edits &amp; Post Production</p>
                </li>
              </ul>
            </div>
            <div className="service-sidebar-card service-sidebar-cta">
              <h4>Get Your Free Quote</h4>
              <p className="mb-0">Tell us about your project and we'll craft a video that moves your audience.</p>
              <a href="/contact" className="btn btn-accent">Get a Quote</a>
              <a href="tel:+919999999999" className="btn btn-accent-primary">Call Now</a>
            </div>
            <div className="service-sidebar-card">
              <h4>Related Services</h4>
              <ul className="related-service-list">
                <li><a href="/service-detail">Ad Films <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/service-detail">Brand Films <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/service-detail">Corporate Videos <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/service-detail">Product Shoots <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/service-detail">Documentaries <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/service-detail">Music Videos <i className="fa-solid fa-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact CTA Section */}
  <section className="section pt-0">
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