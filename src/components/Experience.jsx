import React from 'react';

/* import { ChevronDown, ChevronUp } from 'lucide-react'; */
import { useNavigate } from 'react-router-dom';


const Experience = () => {

  /* const [expandedIndex, setExpandedIndex] = useState(null); */
  const navigate = useNavigate();
  const img = (path) => `${process.env.PUBLIC_URL}${path}`;

  const experiences = [
    {
      id: 'motorpark',
      date: 'Julio - Diciembre | 2025',
      title: 'Desarrolladora - Soporte TI',
      company: 'Motorpark -Yonda',
      description: 'Diseño y implementacion de un sistema de gestion Integral, abarcando la totalidad de las operaciones de cada trabajador.',
      /* images: [
        `${process.env.PUBLIC_URL}/assets/img/img_motorpark/usuario.create.png`,
        `${process.env.PUBLIC_URL}/assets/img/img_motorpark/usuario.index.png`,
      ] */
      images: [
        img('/assets/img/experiences/motorpark/usuario.create.png'),
        img('/assets/img/experiences/motorpark/usuario.index.png'),
        img('/assets/img/experiences/motorpark/registrar.cuentas.png'),
        img('/assets/img/experiences/motorpark/vehiculo.index.png'),
        img('/assets/img/experiences/motorpark/vehiculo.create.png'),
        img('/assets/img/experiences/motorpark/credito.index.png'),
        img('/assets/img/experiences/motorpark/cotizacion.index.png'),
        img('/assets/img/experiences/motorpark/formato.modal.detallerequisitos.vista.png'),
        img('/assets/img/experiences/motorpark/usuario.create.modal.persona.png'),
        img('/assets/img/experiences/motorpark/detallerequisitos.formato.png'),
        img('/assets/img/experiences/motorpark/requisitos.png'),
      ]
    },
    {
      id: 'fix360',
      date: 'Febrero - Junio | 2025',
      title: 'Desarrolladora',
      company: 'Yonda - Motorpark | Fix 360 (Taller automotriz)',
      description: 'Implementación de un Sistema de Gestión Completo enfocado en las necesidades operativas de un taller automotriz.',
      images: [
        img('/assets/img/experiences/fix360/venta.register.png'),
        img('/assets/img/experiences/fix360/productos.register.png'),
        img('/assets/img/experiences/fix360/productos.listar.png'),
        img('/assets/img/experiences/fix360/cotizacion.register.png'),
        img('/assets/img/experiences/fix360/compras.register.png'),
        img('/assets/img/experiences/fix360/colaboradores.register.png'),
        img('/assets/img/experiences/fix360/cliente.register.png'),
        img('/assets/img/experiences/fix360/cliente.asignar.vehiculo.png'),
        img('/assets/img/experiences/fix360/arqueocaja.vista.png'),
      ]
    },
    {
      id: 'vamas',
      date: 'Agosto - Diciembre | 2024',
      title: 'Programadora - TI',
      company: 'VAMAS - Empresa de Tecnología de la Información',
      description: 'Colaboración en el desarrollo de proyectos clave del área de TI y consumos de Apis.',
      images: [
        img('/assets/img/experiences/vamas/index.vista.png'),
        img('/assets/img/experiences/vamas/index.edit.png'),
        img('/assets/img/experiences/vamas/index.update.png'),
        img('/assets/img/experiences/vamas/index.delete.png'),
        img('/assets/img/experiences/vamas/index.caja.eliminado.png'),
      ]
    },
    {
      id: 'creator',
      date: 'Febrero - Junio | 2024',
      title: 'Desarrolladora Web',
      company: 'CREATOR - Empresa de Arquitectura e Implementación de Tecnología',
      description: ' desarrollo e implementación de soluciones tecnológicas, con enfoque en la creación y mantenimiento de páginas web.',
      images: [
        img('/assets/img/experiences/creator/acerca__de.1.png'),
        img('/assets/img/experiences/creator/acerca__de.2.png'),
        img('/assets/img/experiences/creator/acerca__de.3.png'),
        img('/assets/img/experiences/creator/contacto.1.png'),
        img('/assets/img/experiences/creator/contacto.2.png'),
        img('/assets/img/experiences/creator/inicio.1.png'),
        img('/assets/img/experiences/creator/inicio.2.png'),
        img('/assets/img/experiences/creator/proyectos.1.png'),
      ]
    }
  ];

  /* const toggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }; */

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experiencia Laboral</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-title">{exp.title}</div>
              <div className="timeline-company">{exp.company}</div>
              <p>{exp.description}</p>

              <button
                className="btn btn-primary btn-ver-mas"
                onClick={() => navigate(`/experience/${exp.id}`, { state: exp })}
              >
                Ver más
              </button>

              {/* <button
                className="btn-ver-mas" onClick={() => toggle(index)}
              >
                {expandedIndex === index ? (
                  <><ChevronUp size={16} /> Ver menos </>
                ) : (
                  <><ChevronDown size={16} /> Ver mas </>
                )}  
              </button> */}

              {/* {
                expandedIndex === index && (
                  <div className="exp-gallery" >
                    {exp.images.map((img, i) => (
                      <img key={i}
                      src={img}
                      alt={`${exp.title} - imagen ${i + 1}`}
                      className="exp-gallery-img"
                      />
                    ))}
                  </div>
                )
              } */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;