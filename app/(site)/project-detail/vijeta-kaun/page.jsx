import { pageMetadata } from '@/lib/seo';

const IMAGE = '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg';
const PATH = '/project-detail/vijeta-kaun';
const DESCRIPTION =
  'A playful product film for Kadam Dye Fix built around a friendly visual competition, communicating the importance of keeping colours intact — produced by AdEtc Studios.';

export const metadata = pageMetadata({
  title: 'Kadam Dye Fix - Vijeta Kaun?',
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
              <h2>Kadam Dye Fix</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <a href="/project" className="breadcrumb-item">Portfolio</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Kadam Dye Fix</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Project Detail Section */}
  <section className="section">
    <div className="hero-container">
      <div className="project-detail-content-container">
        <div className="project-detail-video-container">
                  <div className="project-video-bg" data-video-id="-vl1RXXV9AU" id="video-bg-1"></div>
                  <div className="project-detail-video-spacer"></div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-5">
            <div className="heading-container">
                          <h2>Vijeta Kaun?</h2>
            </div>
          </div>
          <div className="col col-lg-7">
            <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                          <h3>About the Project</h3>
                          <p>A playful product film for Kadam Dye Fix built around a friendly visual competition, using the idea of a "winner" to communicate the importance of keeping colours intact.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="card card-project-detail">
                          <h5>Client: Kadam Dye Fix</h5>
                          <h5>Industry: Textile Dyes / Fabric Care</h5>
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
                                      <h5>Product Integration</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-project-detail">
                                      <h5>Product Demonstration</h5>
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
                      <p>The film turns an everyday concern around coloured clothes into a light-hearted contest, creating anticipation around "Vijeta Kaun?" as the story unfolds.</p>
                      <p>Rather than being a product that colours the clothes itself, Dye Fix works after the colouring process—whether the garment is newly bought or freshly dyed—to help lock in the colour and prevent it from fading or washing out after the first wash. The competition gives the product promise a simple narrative hook, with Kadam Dye Fix ultimately emerging as the winner that keeps the colour intact.</p>
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