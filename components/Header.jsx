export default function Header() {
  return (
  <header>
    <div className="navbar-container">
      <div className="hero-container">
        <nav className="navbar navbar-expand-lg">
          <div className="navbar-nav-container">
            {/* Logo Container */}
            <div className="logo-container">
                          <a className="navbar-brand fw-bold" href="#"><img src="/assets/images/adetc-logo.png" alt="Logo" className="img-fluid" /></a>
            </div>
            {/* Nav Link Container */}
            <div className="nav-link-container">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                                      <a className="nav-link" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                                      <a className="nav-link" href="/about">About Us</a>
                  </li>
                  <li className="nav-item">
                                      <a className="nav-link" href="/services">Services</a>
  {/* <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="services.html">Service Overview</a></li>
                                          <li><a class="dropdown-item" href="service-detail.html">Service Detail</a></li>
                                          <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                                      </ul> */}
                  </li>
  {/* <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Portfolio <i class="fa-solid fa-chevron-down"></i>
                                      </a>
                                      <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="project.html">Showreel</a></li>
                                          <li><a class="dropdown-item" href="project-detail.html">Project Details</a></li>
                                      </ul>
                                  </li> */}
                  <li>
                                      <a className="nav-link" href="/project">Portfolio</a>
                  </li>
                  <li className="nav-item">
                                      <a className="nav-link" href="/blog">Blog</a>
                  </li>
  {/* <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                          Pages <i class="fa-solid fa-chevron-down"></i>
                                      </a>
                                      <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="team.html">Crew</a></li>
                                          <li><a class="dropdown-item" href="testimonial.html">Testimonials</a></li>
                                          <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                                          <li><a class="dropdown-item" href="single-post.html">Single Post</a></li>
                                          <li><a class="dropdown-item" href="404_page.html">404</a></li>
                                      </ul>
                                  </li> */}
                  <li className="nav-item">
                                      <a className="nav-link" href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="nav-btn" type="button" aria-label="Toggle navigation">
                          <i className="fa-solid fa-bars"></i>
            </button>
            {/* Navbar Social Container */}
            <div className="navbar-cta-container">
              <div>
                              <a href="/contact" className="btn btn-accent">Get a Quote</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  );
}
