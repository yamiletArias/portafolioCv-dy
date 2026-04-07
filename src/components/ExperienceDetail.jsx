import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const ExperienceDetail = () => {
  const { state: exp } = useLocation();
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!exp) {
    navigate('/');
    return null;
  }

  return (
    <div className="experience-detail">
      <div className="container">

        <button className="btn btn-secondary btn-back" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Volver
        </button>

        <div className="detail-header">
          <span className="timeline-date">{exp.date}</span>
          <h2>{exp.title}</h2>
          <h3>{exp.company}</h3>
          <p>{exp.description}</p>
        </div>

        <div className="gallery-grid">
          {exp.images.map((src, i) => (
            <div key={i} className="gallery-item" onClick={() => setSelectedImg(src)}>
              <img src={src} alt={`${exp.title} - ${i + 1}`} />
            </div>
          ))}
        </div>

        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <button className="lightbox-close"><X size={28} /></button>
            <img src={selectedImg} alt="Vista ampliada" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetail;