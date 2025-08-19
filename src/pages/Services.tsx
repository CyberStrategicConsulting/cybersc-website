import { useTranslation } from "react-i18next"
import "./Services.css"

const Services = () => {
  const { t } = useTranslation()

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>{t("services.hero.title")}</h1>
        <p>{t("services.hero.subtitle")}</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3>{t("services.infoSecurity.title")}</h3>
          <p>{t("services.infoSecurity.description")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <h3>{t("services.dataPrivacy.title")}</h3>
          <p>{t("services.dataPrivacy.description")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-laptop-code"></i>
          </div>
          <h3>{t("services.cloudSecurity.title")}</h3>
          <p>{t("services.cloudSecurity.description")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-network-wired"></i>
          </div>
          <h3>{t("services.networkSecurity.title")}</h3>
          <p>{t("services.networkSecurity.description")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-user-lock"></i>
          </div>
          <h3>{t("services.compliance.title")}</h3>
          <p>{t("services.compliance.description")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-clipboard-check"></i>
          </div>
          <h3>{t("services.auditPrep.title")}</h3>
          <p>{t("services.auditPrep.description")}</p>
        </div>
      </section>

      <section className="custom-solutions">
        <div className="custom-solutions-content">
          <h2>{t("services.custom.title")}</h2>
          <p>{t("services.custom.description")}</p>
          <a href="/#/contact" className="btn btn-primary">
            {t("services.custom.contact")}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services
