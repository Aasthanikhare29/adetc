import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us - Ad Etc Studios',
};

export default function Page() {
  return (
    <>
  {/* Banner Inner Section */}
  <section className="section banner-inner contact-banner">
      <div className="banner-overlay"></div>
    <div className="hero-container">
      <div className="banner-inner-container">
              <h2>Contact Us</h2>
        <nav className="breadcrumb">
                  <a href="/" className="breadcrumb-item">Home</a>
                  <span className="separator">/</span>
                  <span className="breadcrumb-item current">Contact Us</span>
        </nav>
      </div>
    </div>
  </section>
  {/* Contact Section */}
  <section className="section">
    <div className="hero-container">
      <div className="contact-content-wrapper">
        <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
          <div className="col">
            <div className="heading-container">
                          <h2 className="contact-content-heading">Want To Work With US? Leave Us a Message!</h2>
            </div>
          </div>
          <div className="col">
            <div className="contact-description-container">
                          <p>"The most powerful element in advertising is the Truth" – Bill Bernbach</p>
                          <p>Whether you're ready to start a project or just exploring your options, we're here to help. Reach out and let's make something amazing together.</p>
                          <h4>Ready To Elevate Your Brand? Contact Us Today!</h4>
            </div>
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 grid-spacer-2">
          <div className="col col-lg-4 col-md-6">
            <div className="d-flex flex-column gspace-5">
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Phone Number</span>
                              <h4>+91 9727000197</h4>
                              <h4>+91 9909901116</h4>
               </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Email Address</span>
                              <h4>hello@adetcstudios.com</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Bussiness Hours</span>
                              <h4>Mon - Fri: 9AM - 6PM</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Studio Location</span>
                              <h4>314, Shivalik Shilp 2, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Social Media</span>
                <div className="d-flex flex-row gspace-2 align-items-center">
                  <a href="https://www.instagram.com/adetc_studios/" className="social-icon">
                                      <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61578905199852" className="social-icon">
                                      <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://x.com/AdEtcstudios" className="social-icon">
                                      <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a href="https://www.linkedin.com/company/adetc-studios/" className="social-icon">

                    <i className="fa-brands fa-linkedin"></i>

                  </a>
                  <a href="https://www.youtube.com/@AdEtcStudios" className="social-icon">
                                      <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-8 col-md-6">
            <div className="d-flex flex-column gspace-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Maps Section */}
  <section className="section p-0">
      <iframe loading="lazy" className="maps" src="https://maps.google.com/maps?q=Ad Etc+Studios%2C+314%2C+Shivalik+Shilp+2%2C+Judges+Bunglow+Rd%2C+Suryapooja+Block+B%2C+Vastrapur%2C+Ahmedabad%2C+Gujarat+380015&amp;ll=23.0288856%2C72.5295082&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="Ad Etc Studios, 314, Shivalik Shilp 2, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015" aria-label="Ad Etc Studios, 314, Shivalik Shilp 2, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015"></iframe>
  </section>
  {/* Faq Section */}
  <div className="section">
    <div className="hero-container">
      <div className="faq-contact-wrapper">
        <div className="faq-heading-container">
                  <h2>Frequently Asked Question</h2>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 grid-spacer-2">
          <div className="col">
            <div className="accordion" id="faqAccordion1">
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">How long does it take to get a response after I submit?</button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                                      <p>We typically respond within 24 hours on business days. If your request is urgent, feel free to call us directly for faster communication.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">Can I schedule a meeting before discussing project details?</button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                                      <p>Absolutely! We offer free initial consultations to better understand your goals and guide you through the creative process. You can schedule a meeting via our contact form or calendar link.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">What information should I include in my message?</button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion1">
                  <div className="accordion-body">
                                      <p>Please provide as much detail as possible — including your project type, timeline, budget range, and any creative references. This helps us tailor our response and quote accurately.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="accordion" id="faqAccordion2">
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">Where is your studio located and can I visit in person?</button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                                      <p>Our studio is based in Vastrapur, Ahmedabad. In-person meetings are available by appointment only. We also offer virtual meetings for clients across India and beyond.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Do you work with clients outside Ahmedabad?</button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                                      <p>Yes, we collaborate with brands, artists, and companies across Gujarat, India, and beyond. Our team is fully equipped to manage productions both remotely and on-location.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">How do I follow up if I haven't received a response?</button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                                      <p>If you haven't heard from us within 48 hours, please check your spam folder or reach out to us directly via email at hello@adetcstudios.com.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact Dialogue Box */}
  <div id="contact-dialog-overlay" className="contact-dialog-overlay">
    <div className="contact-dialog">
      <span className="contact-dialog-close" id="contact-dialog-close">
        <i className="fa-solid fa-xmark"></i>
      </span>
      <div className="contact-dialog-icon success hidden" id="contact-dialog-icon-success">
        <i className="fa-solid fa-circle-check"></i>
      </div>
      <div className="contact-dialog-icon error hidden" id="contact-dialog-icon-error">
        <i className="fa-solid fa-circle-xmark"></i>
      </div>
      <h3 className="contact-dialog-title" id="contact-dialog-title">Message Sent</h3>
      <p className="contact-dialog-message" id="contact-dialog-message"></p>
      <button type="button" className="btn btn-accent" id="contact-dialog-ok">OK</button>
    </div>
  </div>
    </>
  );
}
