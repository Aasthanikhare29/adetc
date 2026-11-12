import { pageMetadata, serviceLd, localBusinessLd, breadcrumbLd, faqLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

const IMAGE = '/assets/images/service/corporate%20video.jpeg';
const PATH = '/corporate-video-production-company';
const DESCRIPTION =
  'AdEtc Studios creates corporate videos, company profile films, and brand films through professional video production services.';

const FAQ = [
  { q: 'What does a corporate video production company do?', a: 'A corporate video production company helps businesses create professional videos to communicate their brand identity, services, capabilities, operations, and values. Its services can include concept development, scriptwriting, pre-production, filming, editing, sound design, and final delivery.' },
  { q: 'What types of corporate videos can you produce?', a: 'Corporate video formats include company profile films, corporate brand films, promotional videos, manufacturing and industrial films, leadership interviews, employee culture videos, and corporate explainer videos.' },
  { q: 'What is the difference between a corporate video and a brand film?', a: "A corporate video generally focuses on an organisation, including its background, services, people, infrastructure, and capabilities. A brand film focuses more on the brand's purpose, values, personality, and emotional connection with its audience. Both formats can overlap depending on the creative concept and communication objective." },
  { q: 'How long does it take to produce a corporate video?', a: 'The production timeline depends on the concept, script, number of locations, shooting days, filming requirements, and post-production complexity. A simple company profile video may require less time than a multi-location corporate film with interviews and extensive visual production.' },
  { q: 'How much does corporate video production cost?', a: 'The cost depends on factors such as concept complexity, production crew, equipment, locations, number of shooting days, talent, animation, and post-production requirements. A project-specific estimate can be prepared after understanding the brief and deliverables.' },
  { q: 'Do you provide scripting and creative direction for corporate films?', a: "Yes. Corporate video production can include concept development, creative direction, scriptwriting, and storyboarding before filming begins. These stages help establish the film's narrative and visual direction." },
  { q: 'Can corporate videos be used on websites and social media?', a: 'Yes. Corporate videos can be used on company websites, LinkedIn, YouTube, Instagram, presentations, exhibitions, and other communication channels. The required formats and edits can be planned according to the intended platforms.' },
  { q: 'Why should businesses invest in professional corporate video production?', a: 'Professional corporate videos help businesses present information through structured visual storytelling. They can support brand communication, explain services, showcase operations, and provide audiences with a clearer understanding of the organisation.' },
];

export const metadata = pageMetadata({
  title: 'Corporate Video Production Company',
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
            name: 'Corporate Video Production Company',
            serviceType: 'Corporate Video Production',
            description: DESCRIPTION,
            image: IMAGE,
            path: PATH,
          }),
          localBusinessLd(),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: 'Corporate Video Production Company', path: PATH },
          ]),
          faqLd(FAQ),
        ]}
      />
  {/* Banner Inner Section */}
  <section className="section banner-inner service-detail-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h1>Corporate Video Production Company</h1>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <a href="/services" className="breadcrumb-item">Services</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Corporate Video Production</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Hero + Introduction Section */}
  <section className="section">
    <div className="hero-container">
      <div className="service-detail-content-container">
        <div className="heading-container">
                    <h2>Creating Films That Communicate Your Brand</h2>
              </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="d-flex flex-column gspace-3">
              <div className="d-flex flex-column gspace-2">
                    <p>Your business has a story worth telling. The right corporate film helps you tell it with clarity, creativity, and impact.</p>
                    <p>At AdEtc Studios, we are a corporate video production company creating professional corporate videos, brand films, and business communication films that help organisations showcase their identity, communicate their capabilities, and connect with their audiences.</p>
                    <p>From creative concept development and corporate scriptwriting to filming, cinematography, editing, and post-production, we manage the complete corporate film production process under one roof.</p>
                    <p>Whether you want to introduce your company, showcase your infrastructure, highlight your team's expertise, or create a compelling brand film, we develop video content around your business objectives.</p>
                    <p className="mb-0">Ready to bring your company's story to the screen?</p>
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
                          <img src={IMAGE} alt="Corporate video production crew filming a brand story at AdEtc Studios" className="img-fluid" loading="lazy" decoding="async" />
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
                            <h2>Why Choose AdEtc Studios as Your Corporate Video Production Company?</h2>
                  </div>
                  <div className="service-title-description">
                            <p>A corporate video should do more than introduce your company. It should communicate what makes your business different, establish credibility, and give your audience a clear understanding of your organisation.</p>
                            <p>At AdEtc Studios, we combine creative storytelling, professional cinematography, and structured production planning to create corporate films and brand videos that reflect your business identity.</p>
                            <p>We begin by understanding your organisation, target audience, key messages, and communication objectives. Based on these inputs, our team develops a creative approach that brings your company's story to life.</p>
                            <p>From concept development and scriptwriting to pre-production, filming, editing, colour grading, and sound design, we coordinate every stage of production.</p>
                            <p className="mb-0">Whether your video is intended for your website, LinkedIn, YouTube, corporate presentations, exhibitions, or internal communication, we consider its purpose and distribution requirements throughout the production process.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Professional Corporate Video Production Services</h3>
                            <p className="mb-0">Every business has a different story to communicate. We create corporate videos in different formats depending on your organisation's communication needs.</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Company Profile Video Production</h5>
                        </div>
                                  <p>Introduce your organisation through a professionally produced company profile video. Showcase your business background, vision, mission, services, infrastructure, team, and capabilities in a clear and engaging format.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Corporate Brand Films</h5>
                        </div>
                                  <p>A brand film communicates more than what a company sells. It brings together its purpose, values, personality, and vision through storytelling that builds a meaningful connection with your audience.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Corporate Promotional Videos</h5>
                        </div>
                                  <p>Promote your company's services, business offerings, new initiatives, or important announcements through professionally produced promotional videos developed around your communication objectives.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Manufacturing &amp; Industrial Videos</h5>
                        </div>
                                  <p>Showcase factories, manufacturing facilities, production processes, machinery, infrastructure, and operational capabilities to clients, partners, and stakeholders.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Corporate Interview &amp; Leadership Videos</h5>
                        </div>
                                  <p>Feature founders, directors, management teams, and subject-matter experts sharing business insights, company milestones, leadership perspectives, and organisational goals.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Employee &amp; Corporate Culture Videos</h5>
                        </div>
                                  <p>Showcase your workplace, people, company culture, and working environment to support employer branding, recruitment communication, and internal engagement.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Corporate Explainer Videos</h5>
                        </div>
                                  <p>Simplify complex business services, processes, and technical offerings through structured video storytelling that combines live-action footage, motion graphics, animation, and voiceovers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Corporate Videos for Different Business Requirements</h3>
                            <p>A corporate video can serve different purposes depending on the organisation and its audience.</p>
                            <p className="mb-0">We create corporate films and brand videos for:</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                    <div className="col">
                      <ul className="dot-list">
                                  <li><p><strong>Brand Communication:</strong> Introduce your organisation, brand identity, vision, and values through corporate films and brand storytelling.</p></li>
                                  <li><p><strong>Business Presentations:</strong> Showcase your capabilities during meetings, pitches, and presentations.</p></li>
                                  <li><p><strong>Client &amp; Partner Communication:</strong> Explain your services, infrastructure, processes, and expertise.</p></li>
                                  <li><p><strong>Website &amp; Digital Presence:</strong> Add professional video content to company websites and landing pages.</p></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="dot-list">
                                  <li><p><strong>Exhibitions &amp; Corporate Events:</strong> Present your business through engaging films at trade shows, exhibitions, and industry events.</p></li>
                                  <li><p><strong>Employer Branding:</strong> Communicate your workplace culture, people, and organisational environment.</p></li>
                                  <li><p><strong>Internal Communication:</strong> Share company updates, leadership messages, training information, and organisational initiatives.</p></li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0">We plan the storytelling and production approach according to where the film will be used and what the audience needs to understand.</p>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Industries We Create Corporate Videos For</h3>
                            <p>Different industries have different ways of communicating their capabilities. Our corporate video production approach can be adapted to the nature of your business, audience, and communication requirements.</p>
                            <p className="mb-0">We create corporate video content for:</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                    <div className="col">
                      <ul className="dot-list">
                                  <li><p>Manufacturing &amp; Industrial Companies</p></li>
                                  <li><p>Real Estate &amp; Infrastructure</p></li>
                                  <li><p>Healthcare &amp; Pharmaceuticals</p></li>
                                  <li><p>Technology &amp; IT Companies</p></li>
                                  <li><p>Education &amp; Institutions</p></li>
                                  <li><p>FMCG &amp; Consumer Brands</p></li>
                      </ul>
                    </div>
                    <div className="col">
                      <ul className="dot-list">
                                  <li><p>Food &amp; Beverage</p></li>
                                  <li><p>Fashion &amp; Lifestyle</p></li>
                                  <li><p>Jewellery &amp; Luxury</p></li>
                                  <li><p>Hospitality &amp; Tourism</p></li>
                                  <li><p>Retail &amp; E-commerce</p></li>
                                  <li><p>Corporate Enterprises</p></li>
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0">Whether you want to showcase a manufacturing facility, introduce a new business, present your company profile, or communicate your brand story through a brand film, we develop the creative direction around your requirements.</p>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h4>What Sets AdEtc Studios Apart?</h4>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Storytelling That Starts With Your Business</h5>
                        </div>
                                  <p>We understand your business objectives before developing the creative concept, so the film communicates meaningful information rather than simply presenting attractive visuals.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Complete Production Under One Roof</h5>
                        </div>
                                  <p>From scripting and pre-production to filming, editing, and post-production, our team coordinates the complete corporate film production workflow.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Professional Cinematography</h5>
                        </div>
                                  <p>We focus on camera movement, lighting, composition, framing, and visual details to create polished corporate films that represent your brand professionally.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Creative &amp; Technical Collaboration</h5>
                        </div>
                                  <p>Our creative and production teams work together to balance storytelling with the practical requirements of filming and post-production.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Flexible Production Formats</h5>
                        </div>
                                  <p>From company profile videos and leadership interviews to industrial films, brand films, and promotional videos, we adapt the production approach to the format and purpose of your project.</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-service-detail-include">
                        <div className="d-flex flex-row align-items-center gspace-1">
                                    <i className="fa-solid fa-circle accent-color"></i>
                                    <h5>Focus on Your Brand Identity</h5>
                        </div>
                                  <p>Every organisation has a different story. We build the creative direction around your company's identity, values, audience, and communication goals.</p>
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
                            <h2>End-to-End Corporate Film Production Services</h2>
                  </div>
                  <div className="service-title-description">
                            <p className="mb-0">A successful corporate film requires coordination between creative, production, and technical teams. At AdEtc Studios, we manage the complete corporate video production process under one roof.</p>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Our Corporate Video Production Services Include:</h3>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Creative Concept Development &amp; Strategy</li>
                                  <li>Corporate Scriptwriting &amp; Storyboarding</li>
                                  <li>Brand Film Conceptualisation</li>
                                  <li>Pre-Production Planning &amp; Coordination</li>
                                  <li>Location Scouting &amp; Production Planning</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Professional Filming &amp; Cinematography</li>
                                  <li>Lighting &amp; Sound Recording</li>
                                  <li>Video Editing &amp; Motion Graphics</li>
                                  <li>Colour Grading &amp; Sound Design</li>
                                  <li>Post-Production &amp; Final Delivery</li>
                        </ul>
                      </div>
                  </div>
                  <p className="mb-0">From the initial brief to the final export, our team works across every stage to maintain consistency in creative direction and production quality.</p>
                  <div>
                    <a href="/end-to-end-production" className="btn btn-accent">Explore Our End-to-End Production Services</a>
                  </div>
                </div>
                <div className="d-flex flex-column gspace-3">
                  <div className="d-flex flex-column gspace-2">
                            <h3>Corporate Video Production for Every Platform</h3>
                            <p>A corporate video can become more than a single asset for your business.</p>
                            <p>With the right production approach, the master film can be adapted into multiple formats for different communication touchpoints, including:</p>
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-1">
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Company websites</li>
                                  <li>LinkedIn</li>
                                  <li>YouTube</li>
                                  <li>Corporate presentations</li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="service-detail-list">
                                  <li>Exhibitions &amp; trade shows</li>
                                  <li>Internal communication</li>
                                  <li>Recruitment &amp; employer branding</li>
                                  <li>Social media</li>
                        </ul>
                      </div>
                  </div>
                  <p>We consider these requirements during production so that the film can be adapted without losing its core message.</p>
                  <p className="mb-0">Depending on the platform, we can develop different durations, aspect ratios, resolutions, subtitles, and shorter edits based on the project brief.</p>
                </div>
              </div>
            </div>
            {/* Process Pane */}
            <div className="tab-pane fade" id="process" role="tabpanel" aria-labelledby="process-tab">
              <div className="service-detail-pane">
                <div className="service-title-wrapper service-title-wrapper-left">
                  <div className="service-title-heading">
                            <h2>Our Corporate Video Production Process</h2>
                  </div>
                  <div className="service-title-description">
                            <p className="mb-0">Creating a corporate film involves more than scheduling a shoot. Every stage needs to be planned around the company's message, audience, and intended outcome.</p>
                  </div>
                </div>
                <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3">
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">01</div>
                          <h5>Discovery &amp; Business Understanding</h5>
                        </div>
                                <p className="mb-0">We begin by understanding your organisation, industry, services, target audience, and communication objectives. This helps us identify the key messages the corporate film needs to convey.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">02</div>
                          <h5>Creative Concept Development</h5>
                        </div>
                                <p className="mb-0">Our creative team develops a concept that reflects your brand identity and business requirements. We establish the narrative, visual style, tone, and storytelling approach for the film.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">03</div>
                          <h5>Scriptwriting &amp; Storyboarding</h5>
                        </div>
                                <p className="mb-0">Once the concept is approved, we prepare the script and storyboard where required. This outlines the sequence of scenes, interviews, visuals, voiceovers, and important information to be communicated.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">04</div>
                          <h5>Pre-Production &amp; Planning</h5>
                        </div>
                                <p className="mb-0">We coordinate the practical requirements before filming begins, including location scouting, casting, crew arrangements, equipment, props, scheduling, permissions, and shot planning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">05</div>
                          <h5>Production &amp; Filming</h5>
                        </div>
                                <p className="mb-0">Our production team captures the planned visuals through professional cinematography, lighting, sound recording, and direction—including company facilities, employees, leadership interviews, products, and operational processes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">06</div>
                          <h5>Editing &amp; Post-Production</h5>
                        </div>
                                <p className="mb-0">The captured footage is shaped into the final corporate film through editing, colour grading, sound design, motion graphics, and visual effects where required.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card card-service-detail-include">
                      <div className="d-flex flex-column gspace-2">
                        <div className="d-flex flex-row align-items-center gspace-1">
                          <div className="service-step-number">07</div>
                          <h5>Final Delivery</h5>
                        </div>
                                <p className="mb-0">The completed video is prepared according to the intended platforms and usage requirements, including different aspect ratios, resolutions, durations, subtitles, and shorter edits based on the project brief.</p>
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
                            <p className="mb-0">Got questions about corporate video production? These answers cover formats, timelines, deliverables, and costs so you can plan your corporate film with confidence.</p>
                  </div>
                </div>
                <div className="accordion" id="faqAccordion">
                  {FAQ.map((item, index) => (
                    <div className="accordion-item" key={item.q}>
                      <h2 className="accordion-header faq-accordion-header">
                        <button className={`accordion-button${index === 0 ? '' : ' collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#faq${index + 1}`}>{item.q}</button>
                      </h2>
                      <div id={`faq${index + 1}`} className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`} data-bs-parent="#faqAccordion">
                        <div className="accordion-body">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                <img src="/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg" alt="Crew preparing a camera for a corporate video shoot" className="img-fluid" loading="lazy" decoding="async" />
              </div>
              <ul className="service-facts">
                <li>
                  <span>Service</span>
                  <p>Corporate Video Production</p>
                </li>
                <li>
                  <span>Location</span>
                  <p>Ahmedabad, Gujarat</p>
                </li>
                <li>
                  <span>Typical Duration</span>
                  <p>Project-Based</p>
                </li>
                <li>
                  <span>Deliverables</span>
                  <p>Corporate Films &amp; Brand Videos</p>
                </li>
              </ul>
            </div>
            <div className="service-sidebar-card service-sidebar-cta">
              <h4>Get Your Free Quote</h4>
              <p className="mb-0">Tell us about your organisation and we'll craft a corporate film your audience remembers.</p>
              <a href="/contact" className="btn btn-accent">Get a Quote</a>
              <a href="tel:+919727000197" className="btn btn-accent-primary">Call Now</a>
            </div>
            <div className="service-sidebar-card">
              <h4>Related Services</h4>
              <ul className="related-service-list">
                <li><a href="/ad-film-makers-in-ahmedabad">Ad Films <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/digital-video-commercials">Digital Video Commercials <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/television-commercials">Television Commercials <i className="fa-solid fa-arrow-right"></i></a></li>
                <li><a href="/end-to-end-production">End-to-End Production <i className="fa-solid fa-arrow-right"></i></a></li>
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
