import { pageMetadata, articleLd, breadcrumbLd, faqLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const IMAGE = '/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg';
const DESCRIPTION =
  'AdEtc Studios creates impactful ad films in Ahmedabad, from concept and scripting to filming, direction, editing, and post-production.';

const FAQ = [
  { q: 'What types of ad films does AdEtc Studios produce?', a: 'We create television commercials, digital advertising films, brand films, promotional videos, product films, corporate films, documentary-style advertising, and campaign content.' },
  { q: 'How does your ad film production process work?', a: 'Our process generally includes discovery, concept development, scriptwriting, pre-production, filming, editing, post-production, and final delivery.' },
  { q: 'Do you provide scriptwriting and creative direction?', a: 'Yes. Our team can support concept development, scriptwriting, visual treatment, direction, and complete creative execution.' },
  { q: 'Do you produce TV commercials?', a: 'Yes. We develop and produce TVCs from the initial concept through filming, post-production, and final delivery.' },
  { q: 'Can you create digital ads for social media?', a: 'Yes. We create platform-ready advertising content for YouTube, Instagram, OTT, websites, and other digital channels.' },
  { q: 'How much does an ad film cost?', a: 'The cost depends on the concept, production scale, cast, locations, crew, shoot duration, equipment, production design, and post-production requirements.' },
  { q: 'Do you work with advertising agencies?', a: 'Yes. We collaborate with advertising agencies, creative agencies, and brands to execute commercial and campaign productions.' },
  { q: 'Do you only work with clients in Ahmedabad?', a: "AdEtc Studios is based in Ahmedabad and works with clients across Gujarat, India, and other markets depending on the project's production requirements." },
  { q: 'How do I start an ad film project?', a: 'Share your campaign objective, product or service, target audience, preferred platform, timeline, budget range, and any initial creative references. Our team can then recommend the right production approach.' },
];

export const metadata = pageMetadata({
  title: 'Ad Film Makers in Ahmedabad',
  description: DESCRIPTION,
  path: '/ad-film-makers',
  image: IMAGE,
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            headline: 'Ad Film Makers in Ahmedabad',
            description: DESCRIPTION,
            image: IMAGE,
            datePublished: '2025-07-19',
            path: '/ad-film-makers',
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: 'Ad Film Makers', path: '/ad-film-makers' },
          ]),
          faqLd(FAQ),
        ]}
      />
      {/* Banner Inner Section */}
      <section className="section banner-inner service-detail-banner">
        <div className="banner-overlay"></div>
        <div className="hero-container">
          <div className="banner-inner-container">
            <h2>Ad Film Makers in Ahmedabad</h2>
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
              <h2>Ad Film Makers in Ahmedabad Creating Advertising Films That Connect</h2>
            </div>
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
              <div className="col">
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                    <p>Your brand deserves an advertisement that does more than sell. It should capture attention, communicate your message, and leave a lasting impression.</p>
                    <p>At AdEtc Studios, we create high-impact ad films that bring ideas, products, and brand stories to life. As experienced ad film makers in Ahmedabad, we combine creative thinking, strategic storytelling, cinematic visuals, and end-to-end production to develop films built around your campaign objectives.</p>
                    <p>From concept development and scriptwriting to direction, filming, editing, and final delivery, our team manages every stage of the production journey.</p>
                    <p className="mb-0">Whether you're launching a product, introducing a new campaign, building brand awareness, or communicating a powerful message, we create advertising films designed to connect with your audience. Have an idea for your next campaign? Let's bring it to the screen.</p>
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
                  <img src="/assets/images/cameraman-filming-music-video-CD7JKUM.jpg" alt="Ad Film Production at AdEtc Studios" className="img-fluid" loading="lazy" decoding="async" />
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
                        <h2>Why Choose AdEtc Studios as Your Ad Film Maker in Ahmedabad?</h2>
                      </div>
                      <div className="service-title-description">
                        <p>A memorable advertisement begins with a strong idea but turning that idea into an effective film requires the right creative and production expertise.</p>
                        <p className="mb-0">At AdEtc Studios, we begin by understanding your brand, audience, campaign objective, and communication challenge. This allows us to develop a creative direction that is aligned with your business rather than simply creating visually impressive content.</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>Our Approach Brings Together</h3>
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                          <div className="col">
                            <ul className="service-detail-list">
                              <li>Creative concept development</li>
                              <li>Scriptwriting and storytelling</li>
                              <li>Film direction</li>
                              <li>Cinematography</li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="service-detail-list">
                              <li>Production planning</li>
                              <li>Professional filming</li>
                              <li>Editing and post-production</li>
                              <li>Sound design and colour grading</li>
                            </ul>
                          </div>
                        </div>
                        <p className="mb-0">As a full-service production house, we manage the entire process in one place, creating a smoother experience for brands, agencies, and creative teams.</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>What Makes a Great Ad Film?</h3>
                        <p>Creating a successful commercial isn't simply about using high-end cameras or impressive locations.</p>
                        <p className="mb-0">It starts with the idea. Our creative team focuses on making every element of the film support the message.</p>
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                          <div className="col">
                            <ul className="service-detail-list">
                              <li>Strong storytelling that gives the audience a reason to watch and remember</li>
                              <li>Clear communication of the core message without overwhelming the viewer</li>
                              <li>Powerful visual direction through lighting, composition, movement, and cinematography</li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="service-detail-list">
                              <li>Natural brand integration so your brand feels part of the story</li>
                              <li>Purposeful production where every decision contributes to the campaign objective</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>Industries We Create Advertising Films For</h3>
                        <p>Different industries require different storytelling approaches.</p>
                        <p className="mb-0">Our team develops campaigns for businesses across sectors, including:</p>
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                          <div className="col">
                            <ul className="dot-list">
                              <li><p>FMCG</p></li>
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
                              <li><p>Jewellery &amp; Luxury</p></li>
                              <li><p>Automotive</p></li>
                              <li><p>Consumer Products</p></li>
                              <li><p>Corporate Enterprises</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>Why Brands Work With AdEtc Studios</h3>
                        <p className="mb-0">Choosing the right ad film production house is about more than technical capability. It is about finding a team that understands your idea and can turn it into a finished film without losing the purpose behind it. At AdEtc Studios, we bring together creative thinking, production expertise, and a collaborative working style.</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>What Sets Us Apart</h3>
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                          <div className="col">
                            <ul className="service-detail-list">
                              <li>Creative-first storytelling — we begin with the idea, not the equipment</li>
                              <li>End-to-end production with everything staying connected</li>
                              <li>Experienced creative team across direction, cinematography, and editing</li>
                              <li>Cinematic execution focused on visual storytelling and detail</li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="service-detail-list">
                              <li>Flexible production capabilities for every campaign size</li>
                              <li>Multi-platform thinking for television, digital, and social</li>
                              <li>Collaborative process with brands and advertising agencies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>Ad Film Production for Different Campaign Goals</h3>
                        <p className="mb-0">Not every advertising project needs the same creative approach. We tailor the treatment according to the objective.</p>
                        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                          <div className="col">
                            <ul className="dot-list">
                              <li><p>Product Launches — build excitement and communicate value clearly</p></li>
                              <li><p>Brand Awareness — improve recognition through strong visual identity</p></li>
                              <li><p>Digital Campaigns — content built for fast-moving digital environments</p></li>
                              <li><p>Product Demonstrations — show how your offering works</p></li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="dot-list">
                              <li><p>Seasonal &amp; Festive Campaigns — culturally relevant campaigns</p></li>
                              <li><p>Corporate Communication — company capabilities, culture, and vision</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
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
                </div>
                {/* What We Do Pane */}
                <div className="tab-pane fade" id="whatwedo" role="tabpanel" aria-labelledby="whatwedo-tab">
                  <div className="service-detail-pane">
                    <div className="service-title-wrapper service-title-wrapper-left">
                      <div className="service-title-heading">
                        <h2>Professional Ad Film Production Services in Ahmedabad</h2>
                      </div>
                      <div className="service-title-description">
                        <p className="mb-0">Every campaign has a different objective, audience, and creative requirement. Our production services are designed to accommodate different formats and storytelling styles.</p>
                      </div>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Television Commercials</h5>
                          </div>
                          <p className="mb-0">Create memorable TV commercials that communicate your message within seconds. From concept and scripting to casting, direction, filming, and post-production, we manage the complete process to create commercials ready for television and other broadcast environments.</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Digital Advertising Films</h5>
                          </div>
                          <p className="mb-0">Modern campaigns need content that works across digital platforms. We produce short-form and long-form advertising films for YouTube, OTT, Instagram, social media, websites, and digital campaigns, with versions adapted to different formats and placements.</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Brand Films</h5>
                          </div>
                          <p className="mb-0">A brand film allows you to communicate more than a product feature. We create cinematic stories that highlight your purpose, personality, values, people, and vision while building a stronger emotional connection with your audience.</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Product Advertising Films</h5>
                          </div>
                          <p className="mb-0">Your product needs to look as good on screen as it does in real life. Our product-focused productions use professional lighting, cinematography, art direction, and post-production to highlight features, details, functionality, and visual appeal.</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Promotional Films</h5>
                          </div>
                          <p className="mb-0">Whether you're launching an offer, introducing a service, or supporting a campaign, our promotional video productions combine creative storytelling with clear communication to support your marketing objectives.</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Corporate Films</h5>
                          </div>
                          <p className="mb-0">Corporate advertising can communicate company capabilities, expertise, culture, achievements, and vision in a more engaging format. Our corporate film productions are designed for businesses looking to strengthen credibility with customers, partners, employees, or investors.</p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="d-flex flex-row align-items-center gspace-1">
                            <i className="fa-solid fa-circle accent-color"></i>
                            <h5>Documentary-Style Advertising</h5>
                          </div>
                          <p className="mb-0">Some campaigns are better told through real people and real experiences. Our documentary-led approach combines authenticity, research, direction, and cinematic filmmaking to create advertising that feels credible and emotionally engaging.</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column gspace-3">
                      <div className="d-flex flex-column gspace-2">
                        <h3>End-to-End Ad Film Production Services</h3>
                        <p className="mb-0">From the first idea to the final master, AdEtc Studios manages the complete filmmaking journey.</p>
                      </div>
                      <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                        <div className="col">
                          <ul className="service-detail-list">
                            <li>Creative strategy</li>
                            <li>Concept development</li>
                            <li>Scriptwriting</li>
                            <li>Storyboarding</li>
                            <li>Casting</li>
                            <li>Location scouting</li>
                            <li>Production design</li>
                            <li>Film direction</li>
                            <li>Cinematography</li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="service-detail-list">
                            <li>Professional filming</li>
                            <li>Drone cinematography</li>
                            <li>Product shoots</li>
                            <li>Video editing</li>
                            <li>Motion graphics</li>
                            <li>Colour grading</li>
                            <li>Sound design</li>
                            <li>Post-production</li>
                            <li>Final delivery</li>
                          </ul>
                        </div>
                      </div>
                      <p className="mb-0">With one connected team handling the production, brands get a consistent creative direction across every stage.</p>
                    </div>
                  </div>
                </div>
                {/* Process Pane */}
                <div className="tab-pane fade" id="process" role="tabpanel" aria-labelledby="process-tab">
                  <div className="service-detail-pane">
                    <div className="service-title-wrapper service-title-wrapper-left">
                      <div className="service-title-heading">
                        <h2>Our Ad Film Production Process</h2>
                      </div>
                      <div className="service-title-description">
                        <p className="mb-0">Great ad film making requires creative thinking, detailed planning, and seamless execution. Our process takes every project from the initial brief to the final screen.</p>
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
                            <p className="mb-0">We start by understanding your brand, target audience, campaign objective, product or service, communication challenge, timeline, and media requirements. This gives the creative team a clear foundation for developing the project.</p>
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
                            <p className="mb-0">Our creative team develops ideas around the brief and identifies the strongest storytelling direction. We may work on creative treatments, references, moodboards, story concepts, and initial visual approaches before moving into scripting.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="service-step-number">03</div>
                          <div className="d-flex flex-column gspace-2">
                            <div className="d-flex flex-row align-items-center gspace-1">
                              <i className="fa-solid fa-circle accent-color"></i>
                              <h5>Scriptwriting &amp; Pre-Production</h5>
                            </div>
                            <p className="mb-0">Once the concept is approved, we develop the script and plan the production in detail. This can include script development, storyboarding, casting, location scouting, production design, scheduling, crew planning, and equipment planning.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="service-step-number">04</div>
                          <div className="d-flex flex-column gspace-2">
                            <div className="d-flex flex-row align-items-center gspace-1">
                              <i className="fa-solid fa-circle accent-color"></i>
                              <h5>Production &amp; Direction</h5>
                            </div>
                            <p className="mb-0">The approved concept comes to life on set. Our ad film director, cinematographer, crew, and production team work together to capture performances, visuals, atmosphere, and product details while maintaining the creative direction of the campaign.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="service-step-number">05</div>
                          <div className="d-flex flex-column gspace-2">
                            <div className="d-flex flex-row align-items-center gspace-1">
                              <i className="fa-solid fa-circle accent-color"></i>
                              <h5>Editing &amp; Post-Production</h5>
                            </div>
                            <p className="mb-0">The raw footage is transformed into the final story through professional editing and post-production. Our capabilities include video editing, colour grading, sound design, motion graphics, voiceover integration, and final mastering.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-service-detail-include">
                          <div className="service-step-number">06</div>
                          <div className="d-flex flex-column gspace-2">
                            <div className="d-flex flex-row align-items-center gspace-1">
                              <i className="fa-solid fa-circle accent-color"></i>
                              <h5>Final Delivery</h5>
                            </div>
                            <p className="mb-0">Once the film is approved, we prepare the required versions for the intended channels. These may include television masters, digital commercials, social media cutdowns, vertical edits, OTT versions, and other campaign assets.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="image-container post-inner-image">
                      <img src="/assets/images/video-production-backstage-behind-the-scenes-of-cr-L3RXVKA.jpg" alt="Ad film shoot behind the scenes" className="img-fluid" loading="lazy" decoding="async" />
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
                        <p className="mb-0">Got questions about our ad film production services? We've got answers to help you get started with your next campaign.</p>
                      </div>
                    </div>
                    <div className="accordion" id="faqAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">What types of ad films does AdEtc Studios produce?</button>
                        </h2>
                        <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>We create television commercials, digital advertising films, brand films, promotional videos, product films, corporate films, documentary-style advertising, and campaign content.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">How does your ad film production process work?</button>
                        </h2>
                        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>Our process generally includes discovery, concept development, scriptwriting, pre-production, filming, editing, post-production, and final delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">Do you provide scriptwriting and creative direction?</button>
                        </h2>
                        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>Yes. Our team can support concept development, scriptwriting, visual treatment, direction, and complete creative execution.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Do you produce TV commercials?</button>
                        </h2>
                        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>Yes. We develop and produce TVCs from the initial concept through filming, post-production, and final delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Can you create digital ads for social media?</button>
                        </h2>
                        <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>Yes. We create platform-ready advertising content for YouTube, Instagram, OTT, websites, and other digital channels.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">How much does an ad film cost?</button>
                        </h2>
                        <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>The cost depends on the concept, production scale, cast, locations, crew, shoot duration, equipment, production design, and post-production requirements.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">Do you work with advertising agencies?</button>
                        </h2>
                        <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>Yes. We collaborate with advertising agencies, creative agencies, and brands to execute commercial and campaign productions.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">Do you only work with clients in Ahmedabad?</button>
                        </h2>
                        <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>AdEtc Studios is based in Ahmedabad and works with clients across Gujarat, India, and other markets depending on the project's production requirements.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq9">How do I start an ad film project?</button>
                        </h2>
                        <div id="faq9" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                          <div className="accordion-body">
                            <p>Share your campaign objective, product or service, target audience, preferred platform, timeline, budget range, and any initial creative references. Our team can then recommend the right production approach.</p>
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
                      <p>Ad Film Production</p>
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
                  <p className="mb-0">Tell us about your campaign and we'll craft an ad film that connects with your audience.</p>
                  <a href="/contact" className="btn btn-accent">Get a Quote</a>
                  <a href="tel:+919999999999" className="btn btn-accent-primary">Call Now</a>
                </div>
                <div className="service-sidebar-card">
                  <h4>Related Services</h4>
                  <ul className="related-service-list">
                    <li><a href="/service-detail">Video Production <i className="fa-solid fa-arrow-right"></i></a></li>
                    <li><a href="/ad-film-makers">Ad Films <i className="fa-solid fa-arrow-right"></i></a></li>
                    <li><a href="/brand-video">Brand Films <i className="fa-solid fa-arrow-right"></i></a></li>
                    <li><a href="/service-detail">Corporate Videos <i className="fa-solid fa-arrow-right"></i></a></li>
                    <li><a href="/service-detail">Product Shoots <i className="fa-solid fa-arrow-right"></i></a></li>
                    <li><a href="/service-detail">Documentaries <i className="fa-solid fa-arrow-right"></i></a></li>
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