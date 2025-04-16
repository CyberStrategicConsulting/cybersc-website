import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Securing Your Digital Future</h1>
          <p>
            Cyber Strategic Consulting provides expert cybersecurity solutions to protect your organization's most
            valuable assets.
          </p>
          <div className="hero-btns">
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-services">
        <div className="section-heading">
          <h2>Our Services</h2>
          <p>Comprehensive cybersecurity solutions tailored to your needs</p>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Information Security & Data Privacy Training</h3>
            <p>
              Comprehensive training programs to educate your team on best practices for information security and data
              privacy compliance.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Cyber Security Workshops</h3>
            <p>
              Specialized workshops covering critical areas like cloud security, network protection, and threat
              intelligence.
            </p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-user-lock"></i>
            </div>
            <h3>Data Privacy & Audit Preparation</h3>
            <p>
              Expert guidance to ensure your organization is prepared for security audits and compliant with data
              privacy regulations.
            </p>
          </div>
        </div>
        <div className="services-cta">
          <Link to="/services" className="btn btn-secondary">
            View All Services
          </Link>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <h2>Why Choose Cyber Strategic Consulting?</h2>
          <p>
            With years of experience in cybersecurity and data privacy, our team of experts provides strategic solutions
            to protect your organization from evolving threats.
          </p>
          <Link to="/about" className="btn btn-outline">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
