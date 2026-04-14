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
      skills: ['HTML', 'CSS', 'jQuery']
    },
    {
      icon: <Layers size={24}/>,
      title: 'Frameworks & Librerias',
      skills: ['CodeIgniters', 'React', 'Angular', 'Bootstrap']
    },
    {
      icon: <Database size={24}/>,
      title: 'Bases de Datos',
      skills: ['MySQL', 'MariaDB', 'Oracle', 'SQL Server']
    },
    {
      icon: <Globe size={24}/>,
      title: 'APIs & Desarrollo',
      skills: ['REST API', 'Postman', 'JSON', 'AJAX', 'Fetch API', 'Git']
    },
    {
      icon: <FileText size={24}/>,
      title: 'Ofimatica',
      skills: ['Word', 'Excel', 'PowerPoint', 'Power BI']
    },
    {
      icon: <Users size={24} />,
      title: 'Habilidades Blandas',
      skills: ['Trabajo en equipo', 'Liderazgo', 'Comunicación', 'Adaptabilidad', 'Innovación', 'Responsabilidad']
    },
    {
      icon: <Share2 size={24}/>,
      title: 'Otros',
      skills: ['Facebook', 'Instragram', 'Webs', 'Twitter', 'Telegram']
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