import React from 'react';
import { Code, Monitor, Layers, Database, Globe, FileText, Share2, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      icon: <Code size={24} />,
      title: 'Lenguajes de Programación',
      skills: ['JavaScript', 'Python', 'Java', 'Kotlin', 'PHP']
    },
    {
      icon: <Monitor size={24} />,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'React', 'Bootstrap', 'CDNJS  ', 'jQuery', 'Angular']
    },
    {
      icon: <Layers size={24}/>,
      title: 'Frameworks',
      skills: ['CodeIgniters']
    },
    {
      icon: <Database size={24}/>,
      title: 'Bases de Datos',
      skills: ['MySQL', 'MariaDB', 'Oracle Database', 'SQL browser']
    },
    {
      icon: <Globe size={24}/>,
      title: 'APIs y Servicios',
      skills: ['Consumo de REST API', 'Postman', 'JSON', 'AJAX', 'Fetch API']
    },
    {
      icon: <FileText size={24}/>,
      title: 'Ofimatica',
      skills: ['Word', 'Excel', 'PowerPoint', 'Power BI']
    },
    {
      icon: <Share2 size={24}/>,
      title: 'Manejo en redes sociales',
      skills: ['Facebook', 'Instragram', 'Webs', 'Twitter', 'Telegram']
    },
    {
      icon: <Users size={24} />,
      title: 'Habilidades Blandas',
      skills: ['Trabajo en equipo', 'Liderazgo', 'Comunicación', 'Adaptabilidad', 'Innovación', 'Responsabilidad']
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                <span className="skill-icon">{category.icon}</span>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;