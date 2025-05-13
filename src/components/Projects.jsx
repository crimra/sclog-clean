import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const projects = t('projects.list', { returnObjects: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInProgressIndex, setCurrentInProgressIndex] = useState(0);

  const inProgressImages = ["pro", "pro2", "pro3"];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleInProgressPrev = () => {
    setCurrentInProgressIndex((prevIndex) =>
      prevIndex === 0 ? inProgressImages.length - 1 : prevIndex - 1
    );
  };

  const handleInProgressNext = () => {
    setCurrentInProgressIndex((prevIndex) =>
      prevIndex === inProgressImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects" className="projects">
      <h2 className="title2">{t('projects.title')}</h2>
      <h1 className="title3">{t('projects.done')}</h1>

      <div className="slider">
        <FaArrowLeft className="projects-arrows" onClick={handlePrev} />
        <div className="slider-content">
          <div className="card">
            <div className="card-content">
              <div className="small-img">
                <img
                  src={`/assets/img/project${currentIndex + 1}.jpg`}
                  alt={`Project ${currentIndex + 1}`}
                />
              </div>
              <div className="card-text">
                <p>{projects[currentIndex]}</p>
              </div>
            </div>
          </div>
        </div>
        <FaArrowRight className="projects-arrows" onClick={handleNext} />
      </div>

      {/* Section "En cours" */}
      <div className="in-progress">
        <h1 className="title3">{t('projects.inProgress')}</h1>
        <div className="content">
          <h3>{t('projects.inProgressTitle')}</h3>
          <div className="main-card">
            {/*<FaArrowLeft className="projects-arrows" onClick={handleInProgressPrev} />*/}
            {inProgressImages.map((img, index) => (
              <div key={index} className="card">
                <img
                  src={`/assets/img/${img}.jpeg`}
                  alt={`In progress project ${index + 1}`}
                />
              </div>
            ))}
            {/*<FaArrowRight className="projects-arrows" onClick={handleInProgressNext} />*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
