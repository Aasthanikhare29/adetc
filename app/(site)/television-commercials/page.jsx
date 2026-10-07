import { pageMetadata, serviceLd, localBusinessLd, breadcrumbLd, faqLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const IMAGE = '/assets/images/film-industry-7ZLFY7L.jpg';
const PATH = '/television-commercials';
const DESCRIPTION =
  'Television commercials that turn brand stories into memorable ads — concept, TVC scriptwriting, casting, filming, editing, sound design and final delivery under one roof.';

const FAQ = [
  { q: 'What is a television commercial?', a: 'A television commercial, or TVC, is a short advertising film created to promote a brand, product, service, or campaign through television.' },
  { q: 'What does TVC stand for?', a: 'TVC stands for Television Commercial.' },
  { q: 'What types of television commercials does AdEtc Studios produce?', a: 'We create brand commercials, product advertisements, FMCG commercials, promotional TVCs, regional and multilingual commercials, and campaign films for television and digital platforms.' },
  { q: 'How long is a television commercial?', a: 'Common commercial durations include 10, 20, 30, and 60 seconds. The ideal duration depends on the creative concept, campaign objective, and media requirements.' },
  { q: 'Do you provide TVC scriptwriting and creative direction?', a: 'Yes. Our team manages concept development, creative direction, scriptwriting, storyboarding, and the complete production process.' },
  { q: 'Can a television commercial be used on digital platforms?', a: 'Yes. A television commercial can be adapted into different versions for YouTube, OTT, Instagram, Facebook, websites, and digital advertising campaigns.' },
  { q: 'How much does television commercial production cost?', a: 'Production costs depend on the concept, cast, locations, production scale, shoot duration, crew, equipment, VFX, and post-production requirements. We provide project-specific estimates based on your brief.' },
  { q: 'How long does TVC production take?', a: 'The timeline depends on the complexity of the concept, approvals, casting, pre-production, filming, and post-production. A production schedule is established before the shoot.' },
];

export const metadata = pageMetadata({
  title: 'Television Commercials',
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
            name: 'Television Commercials',
            serviceType: 'Television Commercial Production',
            description: DESCRIPTION,
            image: IMAGE,
            path: PATH,
          }),
          localBusinessLd(),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Television Commercials', path: PATH },
          ]),
          faqLd(FAQ),
        ]}
      />
  {/* Banner Inner Section */}
  <section className="section banner-inner service-detail-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h1>Television Commercials</h1>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <a href="/services" className="breadcrumb-item">Services</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Television Commercials</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Hero + Introduction Section */}
  <section className="section">
    <div className="hero-container">
      <div className="service-detail-content-container">
        <div className="heading-container">
                    <h2>Television Commercials That Turn Brand Stories Into Memorable Ads</h2>
              </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="d-flex flex-column gspace-3">
              <div className="d-flex flex-column gspace-2">
                    <p>A great television commercial does more than promote a product. It captures attention, communicates a clear message, and creates a memorable connection with the audience.</p>
                    <p>At AdEtc Studios, we create television commercials that combine strategic storytelling, creative direction, and cinematic production to help brands communicate with impact. From concept development and TVC scriptwriting to casting, filming, editing, sound design, and final delivery, we manage the complete production process under one roof.</p>
                    <p>Whether you're launching a product, introducing a new campaign, building brand awareness, or promoting a service, we create commercials tailored to your brand, audience, and communication goals.</p>
                    <p className="mb-0">Ready to bring your advertising idea to life?</p>
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
                          <img src={IMAGE} alt="Television commercial shoot in progress at AdEtc Studios" className="img-fluid" loading="lazy" decoding="async" />
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
                            <h2>Why Choose AdEtc Studios for Television Commercials?</h2>
                  </div>
                  <div className="service-title-description">
                            <p>A successful television commercial needs more than high-quality visuals. It needs a strong creative idea, compelling storytelling, clear messaging, and professional execution.</p>
                            <p>At AdEtc Studios, we combine creative direction, production expertise, and technical capabilities to create commercials that represent your brand and communicate your message effectively.</p>
                            <p>From the initial concept to the final commercial, our team manages the complete production journey, including scripting, casting, pre-production, filming, editing, colour grading, sound design, and post-production.</p>
                            <p className="mb-0">We also plan commercials with their broader campaign requirements in mind, allowing the final film to be adapted for digital platforms, social media, YouTube, OTT, and other marketing channels where required.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Industries We Create Television Commercials For</h3>
                            <p>Our production approach can be adapted to different industries, audiences, and campaign objectives.</p>
                            <p className="mb-0">We create commercials for:</p>
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="dot-list">
                                  <li><p>Real Estate</p></li>
                                  <li><p>Healthcare</p></li>
                                  <li><p>Automotive</p></li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="dot-list">
                                  <li><p>Manufacturing</p></li>
                                  <li><p>Technology &amp; Startups</p></li>
                                  <li><p>Retail &amp; E-commerce</p></li>
                        </ul>
                      </div>
                    </div>
                            <p className="mb-0">Whether you're launching a product, entering a new market, promoting a service, or building long-term brand awareness, we develop the commercial around your audience and communication goals.</p>
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
                                  <p>We begin with the idea and the message. Every creative decision is designed to support your campaign objective and make the commercial memorable.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>End-to-End Production</h5>
                        </div>
                                  <p>From concept and scriptwriting to filming, editing, sound, and final delivery, our team manages the complete production journey.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Cinematic Visuals</h5>
                        </div>
                                  <p>We focus on cinematography, lighting, composition, production design, and visual details to create polished advertising films.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Experienced Creative &amp; Technical Team</h5>
                        </div>
                                  <p>Our creative and technical teams work together to manage both the storytelling and production requirements of every project.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>TV &amp; Digital Adaptability</h5>
                        </div>
                                  <p>We create commercials that can be adapted into suitable versions for television, OTT, YouTube, social media, and other digital platforms.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Focus on Brand &amp; Business Objectives</h5>
                        </div>
                                  <p>Every commercial is created with your brand, audience, communication goals, and campaign objectives in mind—not just visual appeal.</p>
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
                            <h2>Professional Television Commercial Production Services</h2>
                  </div>
                  <div className="service-title-description">
                            <p className="mb-0">We create television commercials for different brands, products, industries, and campaign objectives.</p>
                  </div>
                </div>
                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Brand Television Commercials</h5>
                      </div>
                                <p>Communicate your brand identity, positioning, values, and story through a memorable commercial. We combine visual storytelling with creative direction to create advertising films that strengthen brand recognition.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Product Television Commercials</h5>
                      </div>
                                <p>Showcase your product through compelling visuals, product demonstrations, lifestyle situations, and creative storytelling that communicates its value to the audience.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>FMCG Commercials</h5>
                      </div>
                                <p>Create engaging advertising films for consumer brands with relatable storytelling, strong product integration, and memorable creative concepts designed for mass audiences.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Promotional Television Commercials</h5>
                      </div>
                                <p>Promote a new product, service, offer, event, or campaign with a commercial that delivers your key message clearly while maintaining your brand identity.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Regional &amp; Multilingual Commercials</h5>
                      </div>
                                <p>Reach different audiences with commercials adapted for regional markets and languages while maintaining the core creative idea and visual identity of the campaign.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>TV &amp; Digital Campaign Films</h5>
                      </div>
                                <p>Create a master commercial that can be adapted into multiple campaign assets, including television versions, digital cut-downs, social media edits, teasers, and promotional content.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>End-to-End TVC Production Services</h3>
                            <p className="mb-0">From the first creative idea to the final commercial, AdEtc Studios manages the complete production journey.</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Creative Concept &amp; TVC Strategy</li>
                                  <li>TVC Scriptwriting &amp; Storyboarding</li>
                                  <li>Casting, Locations &amp; Pre-Production</li>
                                  <li>Professional Filming &amp; Direction</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Editing, VFX &amp; Motion Graphics</li>
                                  <li>Colour Grading &amp; Sound Design</li>
                                  <li>Final Delivery &amp; Digital Adaptation</li>
                        </ul>
                      </div>
                  </div>
                  <p className="mb-0">With one experienced team managing every stage, you get a consistent creative and production experience from concept to final delivery.</p>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Television Commercial Production for TV &amp; Digital</h3>
                            <p>A television commercial can become more than a single broadcast asset.</p>
                            <p>With the right production approach, the master commercial can be adapted into multiple formats for different campaign touchpoints, including:</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Television</li>
                                  <li>YouTube</li>
                                  <li>OTT platforms</li>
                                  <li>Instagram</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Facebook</li>
                                  <li>Websites</li>
                                  <li>Digital advertising</li>
                                  <li>Short-form social content</li>
                        </ul>
                      </div>
                  </div>
                  <p>We consider these requirements during production so that the commercial can be adapted without losing its core creative message.</p>
                  <p className="mb-0">Depending on the platform, we can develop different durations, aspect ratios, cut-downs, teasers, and campaign versions.</p>
                </div>
              </div>
            </div>
            {/* Process Pane */}
            <div className="tab-pane fade" id="process" role="tabpanel" aria-labelledby="process-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Our Television Commercial Production Process</h2>
                  </div>
                  <div className="service-title-description">
                            <p className="mb-0">Creating a memorable television commercial requires a structured process that keeps the creative idea, production, and campaign objectives aligned.</p>
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
                                <p className="mb-0">We begin by understanding your brand, audience, campaign objective, key message, and communication requirements. This helps establish the creative direction for the commercial.</p>
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
                                <p className="mb-0">Our creative team develops concepts based on your campaign goals. We explore the story, visual style, tone, characters, product integration, and overall creative approach.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">03</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>TVC Scriptwriting &amp; Storyboarding</h5>
                        </div>
                                <p className="mb-0">Once the concept is approved, we develop the TVC script and storyboard. This defines the narrative, dialogue, voice-over, visual sequences, product moments, and key messaging.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">04</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Casting &amp; Pre-Production</h5>
                        </div>
                                <p className="mb-0">We manage the planning required to bring the concept to life, including casting, location scouting, props, wardrobe, set requirements, crew planning, equipment, scheduling, and shot planning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="service-step-number">05</div>
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                  <i className="fa-solid fa-circle accent-color"></i>
                                  <h5>Production &amp; Direction</h5>
                        </div>
                                <p className="mb-0">Our production team brings the approved concept to life through professional direction, cinematography, lighting, sound, performances, and production design.</p>
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
                                <p className="mb-0">The footage is shaped into the final commercial through editing, colour grading, sound design, music, motion graphics, VFX, and other finishing requirements.</p>
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
                                <p className="mb-0">Once approved, we prepare the final commercial according to the required delivery specifications. Where needed, we can also create shorter versions and adaptations for digital platforms.</p>
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
                            <p className="mb-0">Got questions about television commercial production? These answers cover formats, timelines, deliverables, and costs so you can plan your campaign with confidence.</p>
                  </div>
                </div>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">What is a television commercial?</button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>A television commercial, or TVC, is a short advertising film created to promote a brand, product, service, or campaign through television.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">What does TVC stand for?</button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>TVC stands for Television Commercial.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">What types of television commercials does AdEtc Studios produce?</button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>We create brand commercials, product advertisements, FMCG commercials, promotional TVCs, regional and multilingual commercials, and campaign films for television and digital platforms.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">How long is a television commercial?</button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Common commercial durations include 10, 20, 30, and 60 seconds. The ideal duration depends on the creative concept, campaign objective, and media requirements.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Do you provide TVC scriptwriting and creative direction?</button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. Our team manages concept development, creative direction, scriptwriting, storyboarding, and the complete production process.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">Can a television commercial be used on digital platforms?</button>
                    </h2>
                    <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Yes. A television commercial can be adapted into different versions for YouTube, OTT, Instagram, Facebook, websites, and digital advertising campaigns.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">How much does television commercial production cost?</button>
                    </h2>
                    <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>Production costs depend on the concept, cast, locations, production scale, shoot duration, crew, equipment, VFX, and post-production requirements. We provide project-specific estimates based on your brief.</p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header faq-accordion-header">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">How long does TVC production take?</button>
                    </h2>
                    <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                                <p>The timeline depends on the complexity of the concept, approvals, casting, pre-production, filming, and post-production. A production schedule is established before the shoot.</p>
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
                <img src="/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg" alt="Crew preparing a camera for a television commercial shoot" className="img-fluid" loading="lazy" decoding="async" />
              </div>
              <ul className="service-facts">
                <li>
                  <span>Service</span>
                  <p>Television Commercials</p>
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
                  <p>TV Masters &amp; Digital Adaptations</p>
                </li>
              </ul>
            </div>
            <div className="service-sidebar-card service-sidebar-cta">
              <h4>Get Your Free Quote</h4>
              <p className="mb-0">Tell us about your campaign and we'll craft a commercial your audience remembers.</p>
              <a href="/contact" className="btn btn-accent">Get a Quote</a>
              <a href="tel:+919727000197" className="btn btn-accent-primary">Call Now</a>
            </div>
            <div className="service-sidebar-card">
              <h4>Related Services</h4>
              <ul className="related-service-list">
                <li><a href="/ad-film-makers-in-ahmedabad">Ad Films <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/digital-video-commercials">Digital Video Commercials <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/end-to-end-production">End-to-End Production <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/video-production-company-in-ahmedabad">Corporate Videos <i className="fa-solid fa-arrow-right"></i></a></li>
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
                  <h2 className="contact-cta-title heading-fill">Let's Create a Television Commercial Your Audience Remembers</h2>
                  <h2 className="contact-cta-title heading-stroke">Let's Create a Television Commercial Your Audience Remembers</h2>
        </div>
        <div className="contact-cta-text-container">
                  <p>A memorable television commercial doesn't just sell a product. It builds recognition, creates emotion, and gives audiences a reason to remember your brand. At AdEtc Studios, we combine strategic thinking, creative storytelling, and professional filmmaking to turn advertising ideas into compelling television commercials. Whether you have a complete campaign brief or an idea that needs to be developed, our team can take it from concept to final commercial.</p>
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
