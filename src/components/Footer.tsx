import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/cyberSC_logo_alpha.png" alt="Cyber Strategic Consulting Logo" />
          <h3>Cyber Strategic Consulting</h3>
        </div>

        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Navigation</h2>
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-link-items">
              <h2>Services</h2>
              <Link to="/services">Information Security</Link>
              <Link to="/services">Data Privacy Training</Link>
              <Link to="/services">Cyber Security Workshops</Link>
              <Link to="/services">Audit Preparation</Link>
            </div>
          </div>
        </div>

        <div className="social-media">
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="website-rights">
        <p>© {year} Cyber Strategic Consulting. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
