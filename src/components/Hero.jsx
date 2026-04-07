import React from 'react';
import { Mail, Download } from 'lucide-react';

const Hero = () => {
  // Define la ruta del CV
  const cvFilePath = '/assets/docs/CV_DEYANIRA_CHACALIAZA_ARIAS_26.pdf';

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-img">
              <img src={`${process.env.PUBLIC_URL}/assets/img/img-profile.png`} alt="Deyanira Chacaliaza" className="profile-img-photo" />
              {/* <div className="profile-placeholder">💜</div> */}
            </div>
          </div>

          <div className="hero-text">
            <h1>Deyanira Yamilet Chacaliaza Arias</h1>
            <p className="subtitle">Ingeniera de Software con Inteligencia Artificial</p>
            <p className="hero-description">
              Soy una persona con ganas de experimentar cosas nuevas en la tecnología,
              con amplios conocimientos en desarrollo de backend y frontend.
              Soy una persona con gran capacidad para aprender rápidamente. Motivada por
              la innovación y el compromiso con la excelencia.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <Mail size={18} />
                ¡Contáctame!
              </a>
              {/* RUTA DEL CV ACTUALIZADA */}
              <a href={cvFilePath} className="btn btn-secondary" download="CV_DEYANIRA_CHACALIAZA_ARIAS_26.pdf">
                <Download size={18} />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;