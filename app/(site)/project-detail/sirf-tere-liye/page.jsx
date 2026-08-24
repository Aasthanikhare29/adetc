import { pageMetadata } from '@/lib/seo';

const IMAGE = '/assets/images/operator-setting-his-camera-before-shooting-PURRF9Y.jpg';
const PATH = '/project-detail/sirf-tere-liye';
const DESCRIPTION =
  'A humorous advertising film for Pollie Drain Cleaner built around a familiar household dynamic and the promise that cleaning a blocked drain does not have to mean hard work — produced by AdEtc Studios.';

export const metadata = pageMetadata({
  title: 'Pollie Drain Cleaner - Sirf Tere Liye!',
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
              <h2>Pollie Drain Cleaner</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <a href="/project" className="breadcrumb-item">Portfolio</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Pollie Drain Cleaner</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Project Detail Section */}
  <section className="section">
    <div className="hero-container">
      <div className="project-detail-content-container">
        <div className="project-detail-video-container">
                  <div className="project-video-bg" data-video-id="ZWAD2GoK7II" id="video-bg-1"></div>
                  <div className="project-detail-video-spacer"></div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-5">
            <div className="heading-container">
                          <h2>Sirf Tere Liye!</h2>
            </div>
          </div>
          <div className="col col-lg-7">
            <div className="d-flex flex-column gspace-2 justify-content-end h-100">
                          <h3>About the Project</h3>
                          <p>A humorous advertising film for Pollie Drain Cleaner built around a familiar household dynamic and a simple promise: cleaning a blocked drain doesn't have to mean hard work.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-80">
          <div className="col col-lg-4">
            <div className="card card-project-detail">
                          <h5>Client: Pollie Drain Cleaner</h5>
                          <h5>Industry: Home Care / Cleaning Products</h5>
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
                                      <h5>Set & Location Filming</h5>
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
                      <p>The film opens with the maid busy taking a selfie when the wife approaches her about cleaning the drain. Before she can even be asked, the maid protests that everyone else dumps things into the drain and she is the one who has to clean it.</p>
                      <p>The wife's raised eyebrow says more than words could—before she offers a much easier solution: Pollie Drain Cleaner. Just empty the sachet, add water, and the job is done. The wife's final reassurance that the product is "specially for you" carries a playful, sarcastic edge, turning a simple product demonstration into a humorous exchange between the two characters. The film keeps the product benefit clear while letting the character dynamics drive the entertainment.</p>
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