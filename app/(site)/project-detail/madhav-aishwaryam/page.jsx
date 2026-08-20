import { pageMetadata } from '@/lib/seo';

const IMAGE = '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg';
const PATH = '/project-detail/madhav-aishwaryam';
const DESCRIPTION =
  'A creative real-estate campaign film for Madhav Aishwaryam, produced end-to-end by AdEtc Studios — concept, direction, cinematography, lighting, talent coordination and post-production.';

export const metadata = pageMetadata({
  title: 'Madhav Aishwaryam - Real Estate Film',
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner project-detail-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Madhav Aishwaryam</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <a href="/project" className="breadcrumb-item">Portfolio</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Madhav Aishwaryam</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Project Detail Section */}
  <section className="section">
    <div className="hero-container">
      <div className="project-detail-content-container">
        <div className="project-detail-video-container">
                  <div className="project-video-bg" data-video-id="TcYx1AGZFWc" id="video-bg-1"></div>
                  <div className="project-detail-video-spacer"></div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-5">
            <div className="heading-container">
                          <h2>Modu Na Thayi Jaye</h2>
            </div>
          </div>
          <div className="col col-lg-7">
            <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                          <h3>About the Project</h3>
                          <p>A creative real-estate campaign for Madhav Aishwaryam, created to introduce its premium residential offering in Sargasan, Gandhinagar.</p>
                          <p className="mb-0">The campaign takes a deliberately self-aware approach to real-estate advertising, placing two actors on a visible studio set for a conversation about a property worth exploring — giving the film a distinctive, conversational character.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="card card-project-detail">
                          <h5>Client: Madhav Aishwaryam</h5>
                          <h5>Industry: Real Estate</h5>
                          <h5>Agency: Abhik</h5>
                          <h5>Location: Sargasan, Gandhinagar</h5>
                          <h5>Role: Full Production</h5>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="d-flex flex-column gspace-2">
                          <h3>Our Role</h3>
              <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Full Production</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Direction</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Cinematography</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Lighting</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Talent Coordination</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Post-production</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="heading-container">
                          <h2>The Creative Approach</h2>
            </div>
          </div>
          <div className="col col-lg-8">
                      <p>The campaign takes a deliberately self-aware approach to real-estate advertising. Two actors are presented on a visible studio set, engaging in a conversation about a property worth exploring. The set itself becomes part of the creative idea, creating curiosity and giving the film a distinctive, conversational character rather than following a conventional property-advertising format.</p>
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
              <div className="contact-cta-image"><img src="/assets/images/envato-labs-image-edit-1-e1752829112223.png" alt="Contact CTA" className="img-fluid" /></div>
      </div>
    </div>
  </section>
    </>
  );
}