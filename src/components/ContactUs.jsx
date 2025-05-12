import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-info">
        <p className="title2">Prenez contact</p>
        <p>
          Vous avez un projet en tête ? <br />
          Nous serions ravis d'en discuter avec vous.
        </p>
      </div>
      <div className="contact-form">
        <form action="" className="flex flex-col gap-4">
          <div className="input-box">
        
            <input type="text" id="name" name="name" placeholder="Votre nom" required />
          </div>
          <div className="input-box">
            
            <input type="email" id="email" name="email" placeholder="Votre email" required />
          </div>
          <div className="input-box">
            
            <textarea
              id="message"
              name="message"
              placeholder="Votre message"
              rows={4}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
