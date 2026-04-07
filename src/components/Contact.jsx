import React from 'react';
import { Mail, Phone, MapPin, Languages } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'deya.meme.08@gmail.com',
      link: 'mailto:deya.meme.08@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Teléfono',
      info: '+51 919 629 135',
      link: 'tel:+51919629135'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Ubicación',
      info: 'Av. San Martin 167\nChincha, Ica, Perú',
      link: null
    },
    {
      icon: <Languages size={24} />,
      title: 'Idiomas',
      info: 'Español (Nativo)\nInglés (Intensivo NV-IV)',
      link: null
    }
  ];

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-grid">
          {contactInfo.map((contact, index) => {
            const Content = (
              <>
                <div className="contact-icon">{contact.icon}</div>
                <div>
                  <h3>{contact.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{contact.info}</p>
                </div>
              </>
            );

            return contact.link ? (
              <a key={index} href={contact.link} className="contact-item">
                {Content}
              </a>
            ) : (
              <div key={index} className="contact-item">
                {Content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;