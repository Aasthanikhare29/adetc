import { pageMetadata, faqLd, breadcrumbLd } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

export const metadata = pageMetadata({
  title: 'Pricing & Packages',
  description:
    'Explore AdEtc Studios video production packages — flexible options for ad films, brand videos and TVCs, scoped to your budget, timeline and creative goals.',
  path: '/pricing',
});

const FAQ = [
  { q: "What's included in each pricing plan?", a: 'Each plan includes pre-production consultation, filming with professional equipment, editing, color grading, and final delivery. Higher-tier packages offer advanced features like drone footage, scriptwriting, and multiple shooting days.' },
  { q: 'Can I customize a plan based on my project needs?', a: "Absolutely! We understand that every story is unique. Reach out to us and we'll tailor a custom package that fits your creative goals and budget." },
  { q: 'Do you offer revisions after the final delivery?', a: 'Yes. All our plans include up to 2 rounds of revisions. Premium plans offer more flexibility for feedback and fine-tuning.' },
  { q: 'How long does it take to complete a video project?', a: "Project timelines vary based on complexity, but most videos are completed within 2-4 weeks. We'll give you a detailed schedule during the onboarding process." },
  { q: 'Are there any hidden fees?', a: "No hidden charges. All costs are clearly outlined in your chosen package. If any additional services are required, we'll communicate them upfront." },
  { q: 'Do you provide voiceovers, music licensing, and subtitles?', a: 'Yes. Voiceovers, royalty-free music licensing, and subtitle options are available depending on your plan. We also offer these as add-ons if needed.' },
];

export default function Page() {
  return (
    <>
  <JsonLd
    data={[
      faqLd(FAQ),
      breadcrumbLd([
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' },
      ]),
    ]}
  />
  {/* Banner Inner Section */}
  <section className="section banner-inner pricing-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Pricing Plan</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Packages</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Pricing Section */}
  <section className="section">
    <div className="hero-container">
      <div className="pricing-content-container">
              <h2 className="pricing-content-title">Choose a Plan That Fits Your Vision</h2>
        <div className="heading-highlight-container">
                  <span className="pricing-heading-highlight">Pricing Plants</span>
        </div>
        <div className="row row-cols-lg-3 row-cols-1 grid-spacer-3">
          <div className="col">
            <div className="card card-pricing">
              <div className="d-flex flex-row gspace-2 align-items-center">
                <div className="d-flex flex-column gspace-1">
                                  <h4>Basic Plan</h4>
                                  <p className="pricing-description">Ideal for social media & promos lorem ipsum dolor</p>
                </div>
                              <span className="price">$299</span>
              </div>
                          <div className="pricing-divider"></div>
                          <a href="#" className="btn btn-accent btn-pricing">Get Started</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus lu ullamcorper mattis pulvinar dapibus leo.</p>
              <ul className="pricing-detail-list">
                              <li>Up to 1-minute video</li>
                              <li>1 shooting location</li>
                              <li>1 revision round</li>
                              <li>Basic editing & color correction</li>
                              <li>Royalty-free background music</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card card-pricing">
              <div className="d-flex flex-row gspace-2 align-items-center">
                <div className="d-flex flex-column gspace-1">
                                  <h4>Standard Plan</h4>
                                  <p className="pricing-description">Best for commercials & brand videos lorem ipsum</p>
                </div>
                              <span className="price">$299</span>
              </div>
                          <div className="pricing-divider"></div>
                          <a href="#" className="btn btn-accent btn-pricing">Get Started</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus lu ullamcorper mattis pulvinar dapibus leo.</p>
              <ul className="pricing-detail-list">
                              <li>Up to 3-minute video</li>
                              <li>Up to 2 locations</li>
                              <li>2 revision rounds</li>
                              <li>Scriptwriting support</li>
                              <li>Licensed music included</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card card-pricing">
              <div className="d-flex flex-row gspace-2 align-items-center">
                <div className="d-flex flex-column gspace-1">
                                  <h4>Premium Plan</h4>
                                  <p className="pricing-description">For cinematic projects & full campaigns lorem</p>
                </div>
                              <span className="price">$299</span>
              </div>
                          <div className="pricing-divider"></div>
                          <a href="#" className="btn btn-accent btn-pricing">Get Started</a>
                          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus lu ullamcorper mattis pulvinar dapibus leo.</p>
              <ul className="pricing-detail-list">
                              <li>Up to 1-minute video</li>
                              <li>1 shooting location</li>
                              <li>1 revision round</li>
                              <li>Basic editing & color correction</li>
                              <li>Royalty-free background music</li>
              </ul>
            </div>
          </div>
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
                          your vision into visual magic. Choose a plan and let's start crafting 
                          something unforgettable.</p>
        <div>
                  <a href="/contact" className="btn btn-accent">Get Started Today</a>
        </div>
      </div>
    </div>
  </section>
  {/* FAQs Section */}
  <div className="section">
    <div className="hero-container">
      <div className="faq-content-wrapper">
        <div className="d-flex flex-column flex-md-row flex-lg-column gspace-2 align-items-center justify-content-between h-100">
                  <h2>Frequently Asked question</h2>
          <div className="d-flex flex-column gspace-2">
                      <p>Got questions about our pricing? We've got answers to help you choose the perfect plan for your next film or video project.</p>
            <div>
                          <a href="#" className="btn btn-accent">Free Consultation</a>
            </div>
          </div>
        </div>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">What's included in each pricing plan?</button>
            </h2>
            <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Each plan includes pre-production consultation, filming with professional equipment, editing, color grading, and final delivery. Higher-tier packages offer advanced features like drone footage, scriptwriting, and multiple shooting days.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">Can I customize a plan based on my project needs?</button>
            </h2>
            <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Absolutely! We understand that every story is unique. Reach out to us and we'll tailor a custom package that fits your creative goals and budget.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">Do you offer revisions after the final delivery?</button>
            </h2>
            <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Yes. All our plans include up to 2 rounds of revisions. Premium plans offer more flexibility for feedback and fine-tuning.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">How long does it take to complete a video project?</button>
            </h2>
            <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Project timelines vary based on complexity, but most videos are completed within 2-4 weeks. We'll give you a detailed schedule during the onboarding process.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Are there any hidden fees?</button>
            </h2>
            <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>No hidden charges. All costs are clearly outlined in your chosen package. If any additional services are required, we'll communicate them upfront.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header faq-accordion-header">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">Do you provide voiceovers, music licensing, and subtitles?</button>
            </h2>
            <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                              <p>Yes. Voiceovers, royalty-free music licensing, and subtitle options are available depending on your plan. We also offer these as add-ons if needed.</p>
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
