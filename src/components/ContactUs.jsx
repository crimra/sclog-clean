import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState({ status: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: t('contact.sending') });

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus({ status: 'success', message: t('contact.success') });
        e.target.reset();
      } else {
        setFormStatus({ status: 'error', message: t('contact.error') });
      }
    } catch (error) {
      setFormStatus({ status: 'error', message: t('contact.error') });
    }
  };

  return (
    <section className="contact-us">
      <div className="contact-info">
        <p className="title2 animated">{t('contact.title')}</p>
        <p dangerouslySetInnerHTML={{ __html: t('contact.intro') }} />
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="input-box">
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t('contact.name')}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t('contact.email')}
              required
            />
          </div>
          <div className="input-box">
            <textarea
              id="message"
              name="message"
              placeholder={t('contact.message')}
              rows={4}
              required
            ></textarea>
          </div>
          {formStatus.message && (
            <div className={`message ${formStatus.status}`}>
              {formStatus.message}
            </div>
          )}
          <button 
            type="submit" 
            className="submit-button"
            disabled={formStatus.status === 'loading'}
          >
            {formStatus.status === 'loading' ? t('contact.sending') : t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
