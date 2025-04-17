import "./Services.css"

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
        Tailored cybersecurity training that empowers your personnel to safeguard digital assets, maintain regulatory compliance,
        and prepare for advanced audit services like penetration tests and data privacy audits.
        </p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>Information Security Training</h3>
          <p>
            Comprehensive training programs designed to educate your team on the latest information security threats and
            best practices for prevention and response.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <h3>Data Privacy Training</h3>
          <p>
            Specialized training on data privacy regulations such as Law 25, GDPR, and industry-specific requirements to
            ensure your organization maintains compliance.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>Cloud Security Workshops</h3>
          <p>
            Hands-on workshops focused on securing cloud environments, including AWS, Azure, and Google Cloud, with
            practical implementation of security controls.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-network-wired"></i>
          </div>
          <h3>Network Security Workshops</h3>
          <p>
            Technical workshops covering network security architecture, threat detection, and implementation of robust
            security controls for your infrastructure (e.g. DiD, WAF, HoneyPots).
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-user-lock"></i>
          </div>
          <h3>Data Privacy Compliance</h3>
          <p>
            Expert guidance on implementing data privacy frameworks and ensuring ongoing compliance with evolving
            regulations across different jurisdictions.
          </p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3>Advanced Audit Preparation</h3>
          <p>
            Comprehensive preparation services for security audits, including gap analysis and remediation planning.
          </p>
        </div>
      </section>

      <section className="custom-solutions">
        <div className="custom-solutions-content">
          <h2>Need a Customized Solution?</h2>
          <p>
            Our team of experts can develop tailored cybersecurity and data privacy solutions specific to your
            organization's unique requirements and challenges.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us for Custom Solutions
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
