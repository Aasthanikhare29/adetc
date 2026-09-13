import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Pricing',
  description:
    'How pricing works at AdEtc Studios. Every film is quoted individually — tell us about your project and get a clear, tailored quote with no hidden costs.',
  path: '/pricing',
});

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner pricing-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Pricing</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Pricing</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Custom Quote Section */}
  <section className="section">
    <div className="hero-container">
      <div className="pricing-content-container">
              <h2 className="pricing-content-title">Pricing Built Around Your Project</h2>
        <div className="heading-highlight-container">
                  <span className="pricing-heading-highlight">Custom Quotes</span>
        </div>
              <p className="text-center" style={{ maxWidth: '760px', margin: '0 auto' }}>Every film is different, so we don&apos;t sell fixed packages. Costs depend on the type of project, its scale, and how much production it needs. Tell us what you have in mind and we&apos;ll send a clear, tailored quote — no obligation.</p>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-3" style={{ marginTop: '40px' }}>
          <div className="col">
            <div className="card card-pricing">
                          <h4>What shapes your quote</h4>
                          <div className="pricing-divider"></div>
              <ul className="pricing-detail-list">
                              <li>Type of project (ad film, DVC, TVC, brand film)</li>
                              <li>Video length and number of deliverables</li>
                              <li>Shoot days, locations, and cast</li>
                              <li>Crew size and equipment</li>
                              <li>Post-production: editing, color, sound, VFX</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card card-pricing">
                          <h4>Always included</h4>
                          <div className="pricing-divider"></div>
              <ul className="pricing-detail-list">
                              <li>Creative consultation and concept development</li>
                              <li>Professional crew and production equipment</li>
                              <li>Editing and color grading</li>
                              <li>Revision rounds agreed upfront</li>
                              <li>Final delivery in the formats you need</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center" style={{ marginTop: '40px' }}>
                  <a href="/contact" className="btn btn-accent-primary btn-pricing">Request a Custom Quote</a>
        </div>
      </div>
    </div>
  </section>
  {/* Cta Highlight Section */}
  <section className="section cta-highlight-banner">
      <div className="cta-highlight-video" data-video-id="fOTgmsqMnQA"></div>
    <div className="hero-container">
      <div className="cta-highlight-content">
              <h2 className="cta-highlight-title">Ready to Bring Your Story to Life?</h2>
        <p className="cta-highlight-text">From commercials to cinematic narratives, our team is here to turn
                          your vision into visual magic. Tell us about your project and let&apos;s start crafting
                          something unforgettable.</p>
        <div>
                  <a href="/contact" className="btn btn-accent">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>
  {/* FAQs Section */}
  <div className="section">
    <div className="hero-container">
      <div className="faq-content-wrapper">
        <div className="d-flex flex-column flex-md-row flex-lg-column gspace-2 align-items-center justify-content-between h-100">
                  <h2>Frequently Asked Questions</h2>
          <div className="d-flex flex-column gspace-2">
                      <p>Got questions about how our pricing works? Here&apos;s what most clients ask before starting a project.</p>
            <div>
                          <a href="/contact" className="btn btn-accent">Free Consultation</a>
            </div>
          </div>
        </div>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">How does your pricing work?</button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>We quote each project individually. Once we understand your brief — the type of video, length, shoot requirements, and post-production — we send a detailed quote with a clear breakdown and no hidden costs.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">Can you work to my budget?</button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Often, yes. Tell us your budget range and goals, and we&apos;ll recommend the best approach to get the most out of it. Every story is unique, so we tailor the plan to fit your creative goals.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">Do you offer revisions?</button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Yes. Every project includes revision rounds, which we agree on upfront so expectations are clear from the start.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">How long does a video project take?</button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Timelines vary with complexity, but most projects are completed within 2-4 weeks. We&apos;ll share a detailed schedule during onboarding.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Are there any hidden fees?</button>
            </h2>
            <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>No hidden charges. Every cost is laid out in your quote. If additional services come up during the project, we agree on them with you first.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">Do you provide voiceovers, music licensing, and subtitles?</button>
            </h2>
            <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Yes. Voiceovers, royalty-free music licensing, and subtitles are all available, and we&apos;ll include whatever your project needs in the quote.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
