import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './context/LanguageContext';

const translations = {
  en: {
    title: "Send us a Message",
    form: {
      name: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message"
    },
    status: {
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message.",
      serverError: "Server error. Please try again later."
    }
  },
  hi: {
    title: "हमें संदेश भेजें",
    form: {
      name: "पूरा नाम",
      email: "ईमेल",
      subject: "विषय",
      message: "संदेश",
      send: "संदेश भेजें"
    },
    status: {
      sending: "भेज रहे हैं...",
      success: "संदेश सफलतापूर्वक भेजा गया!",
      error: "संदेश भेजने में विफल।",
      serverError: "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।"
    }
  }
};

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending to backend URL:', process.env.REACT_APP_API_URL);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, form);
      console.log('Response from backend:', response);
      if (response.data.success) {
        setStatus(t.status.success);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus(response.data.message || t.status.error);
      }
    } catch (error) {
      console.error('Error details:', error);
      setStatus(t.status.serverError);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | VENKSEN Private Limited</title>
        <meta name="description" content="Get in touch with VENKSEN Private Limited." />
      </Helmet>
      <div>
        <section className="hero-section">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </section>

        <div className="content-section">
          <div className="card">
            <h2 className="section-title">Our Location</h2>
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <b>VENKSEN PRIVATE LIMITED</b><br />
              Plot No.10, Kadapa Road, Muddanur,<br />
              Muddanur, Cuddapah- 516380,<br />
              Andhra Pradesh<br />
              <b>Phone:</b> 9441845502
            </div>
          </div>

          <div className="card">
            <h2 className="section-title">{t.title}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.form.name}</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t.form.email}</label>
                <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">{t.form.subject}</label>
                <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.form.message}</label>
                <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="btn">{t.form.send}</button>
              {status && <p style={{ marginTop: '1rem', fontWeight: status.includes('success') ? 'bold' : 'normal', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;