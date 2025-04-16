import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Cyber Strategic Consulting</h1>
        <p>
          Dedicated to providing expert cybersecurity solutions and strategic guidance to organizations of all sizes.
        </p>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Cyber Strategic Consulting, our mission is to empower organizations with the knowledge, tools, and
            strategies needed to protect their digital assets and navigate the complex landscape of cybersecurity and
            data privacy.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <i className="fas fa-shield-alt value-icon"></i>
            <h3>Excellence</h3>
            <p>
              We are committed to delivering the highest quality cybersecurity services and solutions that exceed
              industry standards and client expectations.
            </p>
          </div>
          <div className="value-card">
            <i className="fas fa-users value-icon"></i>
            <h3>Partnership</h3>
            <p>
              We build lasting relationships with our clients, working collaboratively to understand their unique needs
              and develop tailored security strategies.
            </p>
          </div>
          <div className="value-card">
            <i className="fas fa-lightbulb value-icon"></i>
            <h3>Innovation</h3>
            <p>
              We continuously evolve our approaches and methodologies to stay ahead of emerging threats and provide
              cutting-edge cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Our Expert Team</h2>
        <p>
          Our team consists of certified cybersecurity professionals with extensive experience across various industries
          and specialized domains within information security and data privacy.
        </p>
        <div className="team-expertise">
          <div className="expertise-item">
            <h3>Certified Information Security Professionals</h3>
            <p>
              Our team holds industry-recognized certifications including CISSP, CISM, and CEH, ensuring the highest
              level of expertise in cybersecurity.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Data Privacy Specialists</h3>
            <p>
              Experts in global data privacy regulations including GDPR, CCPA, and industry-specific compliance
              requirements.
            </p>
          </div>
          <div className="expertise-item">
            <h3>Security Architects</h3>
            <p>
              Skilled professionals who design and implement robust security frameworks tailored to each organization's
              unique infrastructure and requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="approach-content">
          <h2>Our Approach</h2>
          <p>
            We believe in a holistic approach to cybersecurity that combines technical expertise, strategic planning,
            and human-centered training to create comprehensive security solutions that protect organizations at every
            level.
          </p>
          <div className="approach-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Assess</h3>
                <p>Thorough evaluation of current security posture and identification of vulnerabilities</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>Strategize</h3>
                <p>Development of tailored security strategies aligned with business objectives</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Implement</h3>
                <p>Execution of security measures and training programs</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div className="step-content">
                <h3>Monitor</h3>
                <p>Continuous evaluation and improvement of security measures</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
