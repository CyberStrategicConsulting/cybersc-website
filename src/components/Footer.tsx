import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Footer.css"

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/cyberSC_logo.svg" alt="Cyber Strategic Consulting Logo" />
          <h3>Cyber Strategic Consulting</h3>
        </div>

        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>{t("footer.navigation")}</h2>
              <Link to="/">{t("nav.home")}</Link>
              <Link to="/services">{t("nav.services")}</Link>
              <Link to="/about">{t("nav.about")}</Link>
              <Link to="/contact">{t("nav.contact")}</Link>
            </div>
            <div className="footer-link-items">
              <h2>{t("footer.services")}</h2>
              <Link to="/services">{t("footer.infoSecurity")}</Link>
              <Link to="/services">{t("footer.dataPrivacy")}</Link>
              <Link to="/services">{t("footer.workshops")}</Link>
              <Link to="/services">{t("footer.auditPrep")}</Link>
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
        <p>{t("footer.rights", { year })}</p>
      </div>
    </footer>
  )
}

export default Footer
