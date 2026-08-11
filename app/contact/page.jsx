export const metadata = {
  title: 'Contact Us - adetc',
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
                              <h4>+1 (234) 567-8901</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Email Address</span>
                              <h4>hello@adetcstudio.com</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Bussiness Hours</span>
                              <h4>Mon - Fri: 9AM - 6PM</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Studio Location</span>
                              <h4>314, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015</h4>
              </div>
              <div className="d-flex flex-column gspace-2">
                              <span className="contact-info-heading">Social Media</span>
                <div className="d-flex flex-row gspace-2 align-items-center">
                  <a href="https://www.instagram.com/" className="social-icon">
                                      <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.facebook.com/" className="social-icon">
                                      <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.x.com/" className="social-icon">
                                      <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://www.youtube.com/" className="social-icon">
                                      <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-lg-8 col-md-6">
            <div className="d-flex flex-column gspace-2">
              <div id="success-message" className="alert success hidden">
                <span className="check-icon">
                                  <i className="fa-solid fa-2xl fa-check"></i>
                </span>
                              <p>Thank you! Form submitted successfully.</p>
              </div>
              <div id="error-message" className="alert error hidden">
                <span className="cross-icon">
                                  <i className="fa-solid fa-2xl fa-xmark"></i>
                </span>
                              <p>Oops! Form submission failed. Please try again.</p>
              </div>
              <div className="card card-contact-form">
                              <h3>Send us a Message</h3>
                <form id="contact-form" action="/assets/php/submit-contact.php" className="form">
                  <div className="row row-cols-lg-2 row-cols-1 grid-spacer-2">
                                      <div className="col"><input type="text" name="name" id="name" placeholder="Full Name" /></div>
                                      <div className="col"><input type="email" name="email" id="email" placeholder="Email Address" /></div>
                                      <div className="col"><input type="tel" name="phone" id="phone" placeholder="Phone Number" /></div>
                                      <div className="col"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
                    <div className="col col-lg-12">
                      <div className="dropdown-container">
                        <div className="dropdown-select">
                          <div className="d-flex flex-row align-items-center gap-3">
                                                      <span className="selected-text">Project Type</span>
                          </div>
                                                  <i className="fa-solid fa-caret-down"></i>
                        </div>
                        <div className="dropdown-list">
                                                  <div className="dropdown-option" data-value="commercial">Commercial</div>
                                                  <div className="dropdown-option" data-value="short-film">Short Film</div>
                                                  <div className="dropdown-option" data-value="music-video">Music Video</div>
                                                  <div className="dropdown-option" data-value="event">Event</div>
                                                  <div className="dropdown-option" data-value="other">Other</div>
                        </div>
                                              <input type="hidden" id="project-type" name="project-type" className="dropdown-value" />
                      </div>
                    </div>
                    <div className="col col-lg-12">
                                          <textarea name="message" rows="6" id="Message" placeholder="Message"></textarea>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-accent">
                                          <span>Send Message</span>
                                          <i className="fa-solid fa-chevron-circle-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Maps Section */}
  <section className="section p-0">
      <iframe loading="lazy" className="maps" src="https://maps.google.com/maps?q=314%2C%20Judges%20Bunglow%20Rd%2C%20Suryapooja%20Block%20B%2C%20Vastrapur%2C%20Ahmedabad%2C%20Gujarat%20380015&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near" title="314, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015" aria-label="314, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015"></iframe>
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
                                      <p>Our studio is based in Los Angeles, CA. In-person meetings are available by appointment only. We also offer virtual meetings for clients worldwide.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">Do you work with clients outside of the US?</button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                                      <p>Yes, we collaborate with brands, artists, and companies globally. Our team is fully equipped to manage international productions, both remotely and on-location.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header faq-accordion-header">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">How do I follow up if I haven't received a response?</button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion2">
                  <div className="accordion-body">
                                      <p>If you haven't heard from us within 48 hours, please check your spam folder or reach out to us directly via email at hello@adetcstudio.com.</p>
                  </div>
                </div>
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
