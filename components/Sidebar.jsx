export default function Sidebar() {
  return (
  <aside>
      <div className="sidebar-overlay"></div>
    <div className="sidebar">
      <div className="sidebar-header">
              <div className="logo"><img src="/assets/images/adetc-logo.png" className="logo" alt="Logo" /></div>
        <button className="close-btn">
                  <span>X</span>
        </button>
      </div>
      <ul className="menu">
        <li>
                  <a href="/">Home</a>
        </li>
        <li>
                  <a href="/about">About Us</a>
        </li>
        {/* <li className="sidebar-dropdown">
          <div className="dropdown-header">
                      <a href="#">Services</a>
            <button className="sidebar-dropdown-btn">
                          <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <ul className="sidebar-dropdown-menu">
            <li>
                          <a href="/services">Service Overview</a>
            </li>
            <li>
                          <a href="/service-detail">Service Detail</a>
            </li>
            <li>
                          <a href="/pricing">Pricing</a>
            </li>
          </ul>
        </li> */}
        <li>
                  <a href="/services">Services</a>
        </li>
        {/* <li className="sidebar-dropdown">
          <div className="dropdown-header">
                      <a href="#">Portfolio</a>
            <button className="sidebar-dropdown-btn">
                          <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <ul className="sidebar-dropdown-menu">
            <li>
                          <a href="/project">Showreel</a>
            </li>
            <li>
                          <a href="/project-detail">Project Detail</a>
            </li>
          </ul>
        </li> */}
        <li>
                  <a href="/project">Portfolio</a>
        </li>
        {/* <li className="sidebar-dropdown">
          <div className="dropdown-header">
                      <a href="#">Pages</a>
            <button className="sidebar-dropdown-btn">
                          <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <ul className="sidebar-dropdown-menu">
            <li>
                          <a href="/team">Crew</a>
            </li>
            <li>
                          <a href="/testimonial">Testimonials</a>
            </li>
            <li>
                          <a href="/blog">Blog</a>
            </li>
            <li>
                          <a href="/single-post">Single Post</a>
            </li>
            <li>
                          <a href="/#">404</a>
            </li>
          </ul>
        </li> */}
        <li>
                  <a href="/blog">Blog</a>
        </li>
        <li className="below-dropdown">
                  <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  </aside>
  );
}
