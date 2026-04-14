import React from 'react';

const Education = () => {
  const education = [
    {
      date: '2025 - 2026',
      title: 'Ingeniería de Sistemas e Informatica',
      institution: 'Universidad Tecnologica Del Perú',
      description: 'Estudiante en convalidación'
    },
    {
      date: '2022 - 2025',
      title: 'Ingeniería de Software con Inteligencia Artificial',
      institution: 'SENATI - Servicio Nacional de Adiestramiento Industrial',
      description: 'Egresada Superior'
    },
    {
      date: '2018 - 2022',
      title: 'Educación Secundaria',
      institution: 'I.E.P. JEC Simón Bolivar',
      description: 'Formación académica secundaria'
    },
    {
      date: '2012 - 2017',
      title: 'Educación Primaria',
      institution: 'I.E.P. Leonard Euler / I.E.P. 22228 / I. E. P. Melchorita',
      description: 'Formación académica primaria'
    }
  ];

  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Educación</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{edu.date}</div>
              <div className="timeline-title">{edu.title}</div>
              <div className="timeline-company">{edu.institution}</div>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;