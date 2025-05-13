import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-us">
      <div className="contact-info">
        <p className="title2">{t('contact.title')}</p>
        <p dangerouslySetInnerHTML={{ __html: t('contact.intro') }} />
      </div>
      <div className="contact-form">
        <form action="" className="flex flex-col gap-4">
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
          <button type="submit" className="submit-button">
            {t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
