'use client';

import { useState } from 'react';

export default function Footer() {
  const [notifyActive, setNotifyActive] = useState(false);

  return (
    <footer>
      <div className="section-footer">
        <div className="hero-container">
          <div className="footer-container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-3">
              <div className="col col-lg-3 col-md-6">
                <div className="d-flex flex-column gspace-2">
                  <h3>adetc - Film & Video Production</h3>
                  <div className="d-flex flex-column gspace-1">
                    <h5>Our Office</h5>
                    <div className="footer-info-container">
                      <span className="footer-info">314, Judges Bunglow Rd, Suryapooja Block B, Vastrapur, Ahmedabad, Gujarat 380015</span>
                    </div>
                    <div className="footer-info-container">
                      <h5>Contact Us</h5>
                      <span className="footer-info"> +91 9727000197</span>
                      <span className="footer-info"> +91 9909901116</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-3 col-md-6">
                <div className="d-flex flex-column gspace-3">
                  <h4>Navigation</h4>
                  <ul className="chevron-circle-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/project">Portfolio</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col col-lg-6 col-md-12">
                <div className="footer-newsletter-container">
                  <h5 className="container-title">Subscribe to our newsletter for the latest updates</h5>

                  <p id="newsletter-success" className="newsletter-thank-you hidden">Thank you for subscribing!</p>

                  <form
                    id="newsletter-form"
                    className={`form footer-newsletter-form${notifyActive ? ' active' : ''}`}
                    action="/assets/php/submit-newsletter.php"
                    method="post"
                  >
                    <input
                      type="email"
                      id="newsletter"
                      name="newsletter"
                      className="newsletter-input"
                      placeholder="user@gmail.com"
                    />
                    <button
                      type="submit"
                      className="btn btn-accent-primary"
                      onClick={(event) => {
                        if (!notifyActive) {
                          event.preventDefault();
                          setNotifyActive(true);
                        }
                      }}
                    >
                      {notifyActive ? 'Subscribe Now' : 'Subscribe to newsletter'}
                    </button>
                  </form>

                  <div className="d-flex flex-row gspace-1 align-items-center w-100 justify-content-between flex-wrap">
                    <h5>Social Media</h5>
                    <div className="social-footer-container">
                      <a href="https://www.instagram.com/" className="footer-icon"><i className="fa-brands fa-instagram"></i></a>
                      <a href="https://www.facebook.com/" className="footer-icon"><i className="fa-brands fa-facebook"></i></a>
                      <a href="https://www.x.com/" className="footer-icon"><i className="fa-brands fa-x-twitter"></i></a>
                      <a href="https://www.youtube.com/" className="footer-icon"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-title-container">
              <span className="footer-title">adetc Studio</span>
            </div>

            <div className="footer-copyright-container">
              <a href="#" className="legallink">Privacy Policy</a>
              <span className="copyright">© 2025 adetc Studio. All rights reserved.</span>
              <a href="#" className="legallink">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
