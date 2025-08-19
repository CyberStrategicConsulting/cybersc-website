"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { useTranslation } from "react-i18next"
import emailjs from "emailjs-com"
import "./Contact.css"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    emailjs
      .send(
        "service_4339ehr",
        "template_5lbjewk",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "38lGUhl1BUGDhzOvp",
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text)
          setFormSubmitted(true)
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        },
        (error) => {
          console.error("Failed to send email:", error.text)
        },
      )
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>{t("contact.hero.title")}</h1>
        <p>{t("contact.hero.subtitle")}</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>{t("contact.getInTouch")}</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div>
                <h3>{t("contact.location.title")}</h3>
                <p>{t("contact.location.address1")}</p>
                <p>{t("contact.location.address2")}</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <div>
                <h3>{t("contact.email.title")}</h3>
                <p>{t("contact.email.address")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>{t("contact.form.title")}</h2>
          {formSubmitted ? (
            <div className="form-success">
              <h3>{t("contact.form.success.title")}</h3>
              <p>{t("contact.form.success.message")}</p>
              <button className="btn btn-primary" onClick={() => setFormSubmitted(false)}>
                {t("contact.form.success.button")}
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("contact.form.name")}</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t("contact.form.email")}</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{t("contact.form.subject")}</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">{t("contact.form.selectSubject")}</option>
                  <option value="Information Security Training">{t("contact.form.subjects.infoSecurity")}</option>
                  <option value="Data Privacy Training">{t("contact.form.subjects.dataPrivacy")}</option>
                  <option value="Cyber Security Workshops">{t("contact.form.subjects.workshops")}</option>
                  <option value="Advanced Audit Preparation">{t("contact.form.subjects.auditPrep")}</option>
                  <option value="Other">{t("contact.form.subjects.other")}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t("contact.form.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                {t("contact.form.send")}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Contact
