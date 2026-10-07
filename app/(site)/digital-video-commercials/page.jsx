import { pageMetadata, serviceLd, localBusinessLd, breadcrumbLd, faqLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const IMAGE = '/assets/images/male-video-editor-working-on-his-personal-computer-HQHD8ZL.jpg';
const PATH = '/digital-video-commercials';
const DESCRIPTION =
  'Create digital video commercials that capture attention through strategic storytelling, professional production, and platform-ready content.';

const FAQ = [
  { q: 'What are digital video commercials?', a: 'Digital video commercials are advertising films created for online and digital platforms such as YouTube, social media, websites, OTT platforms, and digital advertising campaigns.' },
  { q: 'What does a digital video commercial include?', a: 'A commercial can include concept development, scriptwriting, storyboarding, casting, production, cinematography, editing, sound design, colour grading, motion graphics, and final delivery.' },
  { q: 'How long should a digital video commercial be?', a: 'There is no fixed duration. The ideal length depends on the platform, audience, campaign objective, and creative concept.' },
  { q: 'Can you create commercials for Instagram and YouTube?', a: 'Yes. We create commercial content in formats suitable for Instagram, YouTube, Facebook, websites, and other digital channels.' },
  { q: 'Can one shoot produce multiple commercial formats?', a: 'Yes. A production can be planned to create multiple versions, including horizontal, vertical, square, short-form, teaser, and cut-down edits.' },
  { q: 'Do you provide scriptwriting and creative direction?', a: 'Yes. Our team can manage concept development, creative direction, scriptwriting, and storyboarding before production begins.' },
  { q: 'How much does a digital video commercial cost?', a: 'The cost depends on factors such as concept complexity, cast, locations, production days, crew, equipment, visual effects, and post-production requirements. We provide project-specific estimates based on your brief.' },
];

export const metadata = pageMetadata({
  title: 'Digital Video Commercials',
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: 'Digital Video Commercials',
            serviceType: 'Digital Video Commercials',
            description: DESCRIPTION,
            image: IMAGE,
            path: PATH,
          }),
          localBusinessLd(),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Digital Video Commercials', path: PATH },
          ]),
          faqLd(FAQ),
        ]}
      />
  {/* Banner Inner Section */}
  <section className="section banner-inner service-detail-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h1>Digital Video Commercials</h1>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <a href="/services" className="breadcrumb-item">Services</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Digital Video Commercials</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Hero + Introduction Section */}
  <section className="section">
    <div className="hero-container">
      <div className="service-detail-content-container">
        <div className="heading-container">
                    <h2>Digital Video Commercials That Capture Attention and Drive Action</h2>
              </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="d-flex flex-column gspace-3">
              <div className="d-flex flex-column gspace-2">
                    <p>Your brand has seconds to make an impression online.</p>
                    <p>At AdEtc Studios, we create digital video commercials that combine creative storytelling, cinematic production, and platform-focused execution to help brands communicate their message and connect with audiences. From concept development and scripting to filming, editing, sound design, and final delivery, we manage the complete production process under one roof.</p>
                    <p>Whether you're launching a product, promoting a service, building brand awareness, or running a digital campaign, we create commercials designed for the way audiences watch, scroll, and engage today.</p>
                    <p className="mb-0">Ready to turn your idea into a commercial people remember?</p>
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
                          <img src={IMAGE} alt="Editor working on a digital video commercial at AdEtc Studios" className="img-fluid" loading="lazy" decoding="async" />
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
                            <h2>Why Choose AdEtc Studios for Digital Video Commercials?</h2>
                  </div>
                  <div className="service-title-description">
                            <p>A digital commercial needs more than attractive visuals. It needs a strong idea, a clear message, and creative execution that works for the platform where your audience sees it.</p>
                            <p>At AdEtc Studios, we combine creative direction, production expertise, and marketing understanding to create commercials that support your campaign objectives.</p>
                            <p>From the first creative discussion to the final export, our team manages the complete workflow from concept development and scripting to filming, editing, colour grading, sound design, and post-production.</p>
                            <p className="mb-0">We also consider where the commercial will be used, whether it's YouTube, Instagram, Facebook, websites, OTT platforms, or digital advertising campaigns.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Platform-Specific Commercial Production</h3>
                            <p>A commercial created for television doesn't always work the same way on a social media feed.</p>
                            <p>Digital platforms require brands to consider attention, aspect ratio, pacing, sound, captions, duration, and viewing behaviour from the beginning.</p>
                            <p>That's why we consider the intended platform during the creative and production stages rather than simply resizing the finished video afterward.</p>
                            <p className="mb-0">Depending on your campaign, we can create:</p>
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>16:9 YouTube commercials</li>
                                  <li>9:16 vertical ads</li>
                                  <li>1:1 social media videos</li>
                                  <li>Short cut-downs</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Teaser edits</li>
                                  <li>Product-focused versions</li>
                                  <li>Multiple campaign variations</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mb-0">This allows one production to generate a wider range of commercial assets for different digital touchpoints.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Industries We Create Digital Commercials For</h3>
                            <p>Our production approach can be adapted to different industries, audiences, and campaign objectives.</p>
                            <p className="mb-0">We create commercial content for:</p>
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="dot-list">
                                  <li><p>FMCG &amp; Consumer Brands</p></li>
                                  <li><p>Food &amp; Beverage</p></li>
                                  <li><p>Fashion &amp; Lifestyle</p></li>
                                  <li><p>Jewellery &amp; Luxury</p></li>
                                  <li><p>Real Estate</p></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="dot-list">
                                  <li><p>Healthcare</p></li>
                                  <li><p>Technology &amp; Startups</p></li>
                                  <li><p>Retail &amp; E-commerce</p></li>
                                  <li><p>Hospitality</p></li>
                                  <li><p>Corporate Enterprises</p></li>
                        </ul>
                      </div>
                    </div>
                            <p className="mb-0">Whether you're launching a product, promoting a service, introducing a new brand, or running a seasonal campaign, we develop the visual approach around your audience and objective.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h4>What Sets Us Apart</h4>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Creative-First Storytelling</h5>
                        </div>
                                  <p>We start with the idea, not the equipment. Every production decision is designed to support the story and campaign objective.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>End-to-End Production</h5>
                        </div>
                                  <p>From concept and script to filming, editing, sound, and delivery, everything is managed through one experienced production team.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Cinematic Visuals</h5>
                        </div>
                                  <p>Our team focuses on cinematography, lighting, composition, movement, and visual details that make every commercial polished and professional.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Platform-Aware Execution</h5>
                        </div>
                                  <p>We consider how and where the commercial will be consumed, helping us create content suited to different digital viewing environments.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Experienced Creative &amp; Technical Team</h5>
                        </div>
                                  <p>Our creative and production teams work together to manage both the storytelling and technical aspects of the project.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Focus on Brand &amp; Business Objectives</h5>
                        </div>
                                  <p>We don't create visuals for the sake of visuals. Every creative decision is aligned with your brand message, audience, and campaign goals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* What We Do Pane */}
            <div className="tab-pane fade" id="whatwedo" role="tabpanel" aria-labelledby="whatwedo-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Professional Digital Video Commercials in Ahmedabad</h2>
                  </div>
                  <div className="service-title-description">
                            <p className="mb-0">As a full-service production studio, we create commercial videos for brands that need compelling visual communication across digital platforms.</p>
                  </div>
                </div>
                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Brand Commercials</h5>
                      </div>
                                <p>Tell your brand story through a commercial that communicates your identity, positioning, values, and message. We combine cinematic visuals with strategic storytelling to create memorable brand communication.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Product Commercials</h5>
                      </div>
                                <p>Showcase your product through engaging visuals, product demonstrations, lifestyle storytelling, and creative concepts designed to capture attention and communicate value.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Social Media Commercials</h5>
                      </div>
                                <p>Create short-form commercial content designed for fast-moving social feeds. We focus on strong hooks, concise messaging, engaging visuals, and platform-friendly pacing.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>YouTube Video Ads</h5>
                      </div>
                                <p>Create commercials for YouTube campaigns with storytelling, editing, and formats suited to online viewing. We can develop different versions and durations based on campaign requirements.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Promotional Commercials</h5>
                      </div>
                                <p>Whether you're launching an offer, service, event, or new product, we create promotional videos that combine clear messaging with compelling visuals.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Digital Campaign Films</h5>
                      </div>
                                <p>For larger campaigns, we develop commercial films that can serve as the creative foundation for multiple digital assets, including cut-downs, teasers, social versions, and campaign edits.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>End-to-End Digital Commercial Production Services</h3>
                            <p className="mb-0">From the first idea to the final commercial, AdEtc Studios manages the complete production journey under one roof.</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Creative Concept &amp; Strategy</li>
                                  <li>Scriptwriting &amp; Storyboarding</li>
                                  <li>Pre-Production &amp; Planning</li>
                                  <li>Professional Filming &amp; Cinematography</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Video Editing &amp; Motion Graphics</li>
                                  <li>Colour Grading &amp; Sound Design</li>
                                  <li>Post-Production &amp; Final Delivery</li>
                        </ul>
                      </div>
                  </div>
                  <p className="mb-0">With one experienced team managing the complete process, you don't have to coordinate with multiple vendors for creative development, filming, editing, and post-production.</p>
                </div>
              </div>
            </div>
            {/* Process Pane */}
            <div className="tab-pane fade" id="process" role="tabpanel" aria-labelledby="process-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Our Digital Video Commercial Production Process</h2>
                  </div>
                  <div className="service-title-description">
                            <p className="mb-0">Creating an effective commercial starts long before the camera starts rolling. Our structured process keeps the creative direction, production requirements, and business objectives aligned.</p>
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
                                <p className="mb-0">We begin by understanding your brand, target audience, campaign objective, key message, and distribution platforms. This helps us establish the right creative direction for the commercial.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">02</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Concept Development</h5>
                        </div>
                                <p className="mb-0">Our creative team develops concepts around your campaign objective. We explore the story, visual direction, tone, product integration, and overall creative approach.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">03</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Scriptwriting &amp; Storyboarding</h5>
                        </div>
                                <p className="mb-0">Once the concept is approved, we develop the script and storyboard. This gives the production team a clear understanding of the scenes, dialogue, visuals, product moments, and key messaging.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">04</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Pre-Production</h5>
                        </div>
                                <p className="mb-0">We manage the practical details required to execute the concept, including casting, locations, props, wardrobe, crew planning, equipment, scheduling, and shot planning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">05</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Production</h5>
                        </div>
                                <p className="mb-0">Our production team brings the concept to life through professional cinematography, lighting, direction, sound, and performance. Every shot is planned around the creative direction and final platform requirements.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">06</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Editing &amp; Post-Production</h5>
                        </div>
                                <p className="mb-0">The footage is shaped into the final commercial through editing, colour grading, sound design, motion graphics, and visual effects where required.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">07</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Final Delivery</h5>
                        </div>
                                <p className="mb-0">We prepare the completed commercial according to the specifications of your campaign, including the required aspect ratios, durations, and platform-ready versions.</p>
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
                            <p className="mb-0">Got questions about our digital video commercials? These answers cover formats, timelines, deliverables, and costs so you can plan your next campaign with confidence.</p>
                  </div>
                </div>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">What are digital video commercials?</button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Digital video commercials are advertising films created for online and digital platforms such as YouTube, social media, websites, OTT platforms, and digital advertising campaigns.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">What does a digital video commercial include?</button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>A commercial can include concept development, scriptwriting, storyboarding, casting, production, cinematography, editing, sound design, colour grading, motion graphics, and final delivery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">How long should a digital video commercial be?</button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>There is no fixed duration. The ideal length depends on the platform, audience, campaign objective, and creative concept.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Can you create commercials for Instagram and YouTube?</button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. We create commercial content in formats suitable for Instagram, YouTube, Facebook, websites, and other digital channels.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Can one shoot produce multiple commercial formats?</button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. A production can be planned to create multiple versions, including horizontal, vertical, square, short-form, teaser, and cut-down edits.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">Do you provide scriptwriting and creative direction?</button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. Our team can manage concept development, creative direction, scriptwriting, and storyboarding before production begins.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">How much does a digital video commercial cost?</button>
                    </h2>
                    <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>The cost depends on factors such as concept complexity, cast, locations, production days, crew, equipment, visual effects, and post-production requirements. We provide project-specific estimates based on your brief.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                    <a href="/contact" className="btn btn-accent">Book Your Discovery Call</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
          <div className="service-detail-sidebar">
            <div className="service-sidebar-card">
              <div className="image-container service-sidebar-image">
                <img src="/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg" alt="Filming a digital video commercial at AdEtc Studios" className="img-fluid" loading="lazy" decoding="async" />
              </div>
              <ul className="service-facts">
                <li>
                  <span>Service</span>
                  <p>Digital Video Commercials</p>
                </li>
                <li>
                  <span>Location</span>
                  <p>Ahmedabad, Gujarat</p>
                </li>
                <li>
                  <span>Typical Duration</span>
                  <p>1 - 3 Weeks</p>
                </li>
                <li>
                  <span>Deliverables</span>
                  <p>Platform-Ready Cutdowns &amp; Masters</p>
                </li>
              </ul>
            </div>
            <div className="service-sidebar-card service-sidebar-cta">
              <h4>Get Your Free Quote</h4>
              <p className="mb-0">Tell us about your campaign and we'll craft a commercial that stops the scroll.</p>
              <a href="/contact" className="btn btn-accent">Get a Quote</a>
              <a href="tel:+919727000197" className="btn btn-accent-primary">Call Now</a>
            </div>
            <div className="service-sidebar-card">
              <h4>Related Services</h4>
              <ul className="related-service-list">
                <li><a href="/ad-film-makers-in-ahmedabad">Ad Films <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/end-to-end-production">End-to-End Production <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/video-production-company-in-ahmedabad">Corporate Videos <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/services">TVC's <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/services">Brand Films <i className="fa-solid fa-arrow-right"></i></a></li>
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
                  <h2 className="contact-cta-title heading-fill">Let's Create a Commercial Your Audience Remembers</h2>
                  <h2 className="contact-cta-title heading-stroke">Let's Create a Commercial Your Audience Remembers</h2>
        </div>
        <div className="contact-cta-text-container">
                  <p>Your audience is scrolling, watching, comparing, and making decisions every day. Make those few seconds count. At AdEtc Studios, we combine strategic thinking, creative storytelling, and professional production to create digital commercials that help brands communicate with impact. Whether you have a fully developed campaign or just an initial idea, our team can take it from concept to final commercial.</p>
          <div>
                      <a href="/contact" className="btn btn-accent-primary">Book a Discovery Call</a>
          </div>
        </div>
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" loading="lazy" decoding="async" /></div>
      </div>
    </div>
  </section>
    </>
  );
}
