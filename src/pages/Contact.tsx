"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import "./Contact.css"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
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
    console.log("Form submitted:", formData)
    // Here you would typically send the form data to your backend
    setFormSubmitted(true)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions about our services or want to discuss your cybersecurity needs? Reach out to our team of
          experts.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <div>
                <h3>Our Location</h3>
                <p>123 Cyber Security Street</p>
                <p>Tech City, TC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <div>
                <h3>Phone</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <div>
                <h3>Email</h3>
                <p>info@cybersc.ca</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {formSubmitted ? (
            <div className="form-success">
              <h3>Thank you for your message!</h3>
              <p>We'll get back to you as soon as possible.</p>
              <button className="btn btn-primary" onClick={() => setFormSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
                  <option value="">Select a subject</option>
                  <option value="Information Security Training">Information Security Training</option>
                  <option value="Data Privacy Training">Data Privacy Training</option>
                  <option value="Cyber Security Workshops">Cyber Security Workshops</option>
                  <option value="Audit Preparation">Audit Preparation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
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
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Contact
