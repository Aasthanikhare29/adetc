import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Project Detail',
  description:
    'A closer look at an AdEtc Studios production — the concept, creative direction, shoot and post-production behind the final film.',
  path: '/project-detail',
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner project-detail-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Urban Soul</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Project Details</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Project Detail Section */}
  <section className="section">
    <div className="hero-container">
      <div className="project-detail-content-container">
        <div className="project-detail-video-container">
          {/* YouTube clip range: data-start / data-end use seconds. Example: start="5" end="12" → plays 00:05 to 00:12 in a loop. */}
                  <div className="project-video-bg" data-video-id="Go8gUX_HZAY" id="video-bg-1"></div>
                  <div className="project-detail-video-spacer"></div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-5">
            <div className="heading-container">
                          <h2>Genre Driven Visuals for a New Age Music Movement</h2>
            </div>
          </div>
          <div className="col col-lg-7">
            <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                          <h3>About the Project</h3>
                          <p>Urban Soul” is a high-energy music video collaboration with independent artist Jayverra, blending gritty city aesthetics with smooth R&B vibes. Set in the heart of downtown L.A., this project captures the raw essence of street life and transforms it into an emotionally driven visual narrative.</p>
                          <p>We worked closely with the artist to develop a video concept that reflects the emotions of the lyrics, the tempo of the beat, and the visual identity of the track — resulting in a production that feels both cinematic and personal.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="card card-project-detail">
                          <h5>Client: Jayverra (Independent Music Artist)</h5>
                          <h5>Project Title: Urban Soul</h5>
                          <h5>Category: Music Video</h5>
                          <h5>Location: Downtown Los Angeles, USA</h5>
                          <h5>Duration: 3 minutes 45 seconds</h5>
                          <h5>Delivery Format: 4K, optimized for YouTube</h5>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="d-flex flex-column gspace-2">
                          <h3>Our Role</h3>
              <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Concept Development & Storyboarding</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Location Scouting & Set Design</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Cinematography & Drone Shots</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Lighting & Direction</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Video Editing & Motion Graphics</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Color Grading for a Neo-Noir Look</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="heading-container">
                          <h2>Behind the Scenes</h2>
            </div>
          </div>
          <div className="col col-lg-8">
                      <p>We filmed across 3 different urban backdrops, incorporating elements of neon lighting, handheld camera movements, and slow-motion scenes to amplify the emotional core of the track. With a limited production window of 2 days, our team managed to maximize every frame using strategic lighting and dynamic camera setups.</p>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="heading-container">
                          <h2>Creative Direction</h2>
            </div>
          </div>
          <div className="col col-lg-8">
                      <p>The visual tone of Urban Soul was inspired by neo-soul aesthetics, mixing deep contrast lighting and urban textures to evoke emotion. We applied a cool-toned color grade to balance warmth from the performance scenes, bringing contrast and emotional weight to the final cut.</p>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="heading-container">
                          <h2>Results & Reach</h2>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
              <div className="col">
                <div className="card card-project-detail">
                  <p className="project-result">
                                      <a href="#" className="result-link">30K+</a>
                     views in the first week of release
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card card-project-detail">
                  <p className="project-result">
                    Featured on 
                                      <a href="#" className="result-link">IndieVibes</a>
                     Music Blog
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card card-project-detail">
                  <p className="project-result">
                    Shared widely on 
                                      <a href="#" className="result-link">TikTok & Instagram</a>
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card card-project-detail">
                  <p className="project-result">
                    Boost artist's subscriber count by 
                                      <a href="#" className="result-link">25%</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="heading-container">
                          <h2>Gallery</h2>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
              <div className="col">
                              <div className="image-container"><img src="/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg" alt="Project Detail" className="img-fluid" loading="lazy" decoding="async" /></div>
              </div>
              <div className="col">
                              <div className="image-container"><img src="/assets/images/woman-operating-video-camera-in-neon-lights-NNLG5VA.jpg" alt="Project Detail" className="img-fluid" loading="lazy" decoding="async" /></div>
              </div>
              <div className="col">
                              <div className="image-container"><img src="/assets/images/photographers-setting-cameras-before-shooting-65ME2DS.jpg" alt="Project Detail" className="img-fluid" loading="lazy" decoding="async" /></div>
              </div>
              <div className="col">
                              <div className="image-container"><img src="/assets/images/cameraman-operating-equipment-in-studio-T3LZ2B2.jpg" alt="Project Detail" className="img-fluid" loading="lazy" decoding="async" /></div>
              </div>
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
