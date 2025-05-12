import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInProgressIndex, setCurrentInProgressIndex] = useState(0);

  const projects = [
    "Construction d’un réservoir double paroi gazole R04 (15000 m3) à Pointe-Noire",
    "Construction des défenses contre incendie (DCI) dans les dépôts de Brazzaville, Pointe-Noire, Ouesso et Oyo.",
    "Installation de vannes motorisées pour la gestion sécurisée et optimisée des opérations de transfert et de stockage du produit.",
    "Réhabilitation des réservoirs dans tous les dépôts SCLOG.",
    "Modernisation du système de comptage à Pointe-Noire et Ouesso.",
    "Modernisation d’une pomperie et poste de chargement camion, redimensionnement de la tuyauterie – Dépôt d’Impfondo.",
  ];

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
      <h2 className="title2">Projets</h2>
      <h1 className="title3">Réalisés</h1>

      <div className="slider">
        <FaArrowLeft className="projects-arrows" onClick={handlePrev} />
        <div className="slider-content">
          <div className="card">
            <div className="card-content">
              <div className="small-img">
                <img
                  src={`/assets/img/project${currentIndex + 1}.jpg`}
                  alt={`Projet ${currentIndex + 1}`}
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
        <h1 className="title3">En cours...</h1>
        <div className="content">
          <h3>Construction d’un réservoir double paroi super – R05 (15000 m3) à Pointe-Noire.</h3>
          <div className="main-card">
            {/*<FaArrowLeft className="projects-arrows" onClick={handleInProgressPrev} />*/}
            {inProgressImages.map((img, index) => (
              <div key={index} className="card">
                <img
                  src={`/assets/img/${img}.jpeg`}
                  alt={`Projet en cours ${index + 1}`}
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
