import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import "./Home.css"

const Home = () => {
  const { t } = useTranslation()

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.subtitle")}</p>
          <div className="hero-btns">
            <Link to="/services" className="btn btn-primary">
              {t("home.hero.ourServices")}
            </Link>
            <Link to="/contact" className="btn btn-outline">
              {t("home.hero.contactUs")}
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-services">
        <div className="section-heading">
          <h2>{t("home.services.title")}</h2>
          <p>{t("home.services.subtitle")}</p>
        </div>
        <div className="services-container">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>{t("home.services.infoSecurity.title")}</h3>
            <p>{t("home.services.infoSecurity.description")}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>{t("home.services.workshops.title")}</h3>
            <p>{t("home.services.workshops.description")}</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-user-lock"></i>
            </div>
            <h3>{t("home.services.auditPrep.title")}</h3>
            <p>{t("home.services.auditPrep.description")}</p>
          </div>
        </div>
        <div className="services-cta">
          <Link to="/services" className="btn btn-secondary">
            {t("home.services.viewAll")}
          </Link>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-content">
          <h2>{t("home.about.title")}</h2>
          <p>{t("home.about.description")}</p>
          <Link to="/about" className="btn btn-outline">
            {t("home.about.learnMore")}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
