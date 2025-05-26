import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const doneMedia = [
  [
    { type: 'image', src: '/assets/img/project1.jpg' }
  ],
  [
    { type: 'image', src: '/assets/img/project2.jpg' },
    { type: 'image', src: '/assets/img/project2-1.jpg' },
    { type: 'image', src: '/assets/img/project2-2.jpg' }
  ],
  [
    { type: 'image', src: '/assets/img/project3.jpg' },
    { type: 'image', src: '/assets/img/project3-1.jpg' },
    { type: 'image', src: '/assets/img/project3-2.jpg' },
    { type: 'image', src: '/assets/img/project3-3.jpg' }
  ],
  [
    { type: 'image', src: '/assets/img/project4.jpg' }
  ],
  [
    { type: 'image', src: '/assets/img/project5.jpg' }
  ],
  [
    { type: 'image', src: '/assets/img/project6.jpg' },
    { type: 'image', src: '/assets/img/project6-1.jpg' } 
  ],
];

const inProgressMedia = [
  [
    { type: 'image', src: '/assets/img/pro.jpeg' },
    { type: 'image', src: '/assets/img/pro2.jpeg' },
    { type: 'image', src: '/assets/img/pro3.jpeg' }
  ]
];

const Projects = () => {
  const { t } = useTranslation();
  const doneProjects = t('projects.list', { returnObjects: true });
  const inProgressTexts = t('projects.inProgressList', { returnObjects: true });

  const [doneIndex, setDoneIndex] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);

  const handlePrev = (setter, length) => {
    setter((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleNext = (setter, length) => {
    setter((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="projects">
      <h2 className="title2 animated">{t('projects.title')}</h2>

      {/* Projets Réalisés */}
      <h1 className="title3">{t('projects.done')}</h1>
      <div className="slider">
        <FaArrowLeft className="projects-arrows" onClick={() => handlePrev(setDoneIndex, doneProjects.length)} />
        <div className="slider-content">
          <div className="card">
            <div className="card-content">
              <div className="small-img horizontal-gallery">
                {doneMedia[doneIndex]?.map((media, i) =>
                  media.type === 'image' ? (
                    <img key={i} src={media.src} alt={`done-${i}`} />
                  ) : (
                    <video key={i} src={media.src} controls />
                  )
                )}
              </div>
              <div className="card-text">
                <p>{doneProjects[doneIndex]}</p>
              </div>
            </div>
          </div>
        </div>
        <FaArrowRight className="projects-arrows" onClick={() => handleNext(setDoneIndex, doneProjects.length)} />
      </div>

      {/* Projets En Cours */}
      <h1 className="title3">{t('projects.inProgress')}</h1>
      <div className="slider">
        <FaArrowLeft className="projects-arrows" onClick={() => handlePrev(setProgressIndex, inProgressTexts.length)} />
        <div className="slider-content">
          <div className="card">
            <div className="card-content">
              <div className="small-img horizontal-gallery">
                {inProgressMedia[progressIndex]?.map((media, i) =>
                  media.type === 'image' ? (
                    <img key={i} src={media.src} alt={`progress-${i}`} />
                  ) : (
                    <video key={i} src={media.src} controls />
                  )
                )}
              </div>
              <div className="card-text">
                <p>{inProgressTexts[progressIndex]}</p>
              </div>
            </div>
          </div>
        </div>
        <FaArrowRight className="projects-arrows" onClick={() => handleNext(setProgressIndex, inProgressTexts.length)} />
      </div>
    </section>
  );
};

export default Projects;
