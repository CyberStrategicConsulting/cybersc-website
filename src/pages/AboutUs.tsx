import { useTranslation } from "react-i18next"
import "./AboutUs.css"

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>{t("about.hero.title")}</h1>
        <p>{t("about.hero.subtitle")}</p>
      </section>

      <section className="about-mission">
        <div className="mission-content">
          <h2>{t("about.mission.title")}</h2>
          <p>{t("about.mission.description")}</p>
        </div>
      </section>

      <section className="about-values">
        <h2>{t("about.values.title")}</h2>
        <div className="values-container">
          <div className="value-card">
            <i className="fas fa-shield-alt value-icon"></i>
            <h3>{t("about.values.excellence.title")}</h3>
            <p>{t("about.values.excellence.description")}</p>
          </div>
          <div className="value-card">
            <i className="fas fa-users value-icon"></i>
            <h3>{t("about.values.partnership.title")}</h3>
            <p>{t("about.values.partnership.description")}</p>
          </div>
          <div className="value-card">
            <i className="fas fa-lightbulb value-icon"></i>
            <h3>{t("about.values.innovation.title")}</h3>
            <p>{t("about.values.innovation.description")}</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>{t("about.team.title")}</h2>
        <p>{t("about.team.description")}</p>
        <div className="team-expertise">
          <div className="expertise-item">
            <h3>{t("about.team.cissp.title")}</h3>
            <p>{t("about.team.cissp.description")}</p>
          </div>
          <div className="expertise-item">
            <h3>{t("about.team.privacy.title")}</h3>
            <p>{t("about.team.privacy.description")}</p>
          </div>
          <div className="expertise-item">
            <h3>{t("about.team.architects.title")}</h3>
            <p>{t("about.team.architects.description")}</p>
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="approach-content">
          <h2>{t("about.approach.title")}</h2>
          <p>{t("about.approach.description")}</p>
          <div className="approach-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>{t("about.approach.assess.title")}</h3>
                <p>{t("about.approach.assess.description")}</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>{t("about.approach.strategize.title")}</h3>
                <p>{t("about.approach.strategize.description")}</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>{t("about.approach.implement.title")}</h3>
                <p>{t("about.approach.implement.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
