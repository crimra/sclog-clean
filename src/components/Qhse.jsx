import React from 'react';
import 'animate.css';

const Qhse = () => {
  return (
    <div className="qhse" id="h3se">
      <p className="title1">H3SEQ</p>
      <p className="title2">Notre Politique QHSE</p>

      <div className="qhse-elements">
        {[
          "Mise en place d’une politique H3SE",
          "Mise en place de piézomètres dans les dépôts pour assurer le suivi de la qualité des eaux souterraines",
          "Mise en place d’un programme environnemental",
          "Mise en place d’un plan de continuité d’activité (PCA)",
          "Audit JIG tous les 2 ans sur les sites recevant du Jet-A1 (carburant aviation)",
        ].map((text, index) => (
          <div key={index} className="element slide-in">
            <img src="/assets/service-check.svg" alt="Icône de validation" />
            <p>{text}</p>
          </div>
        ))}

        <a href="/assets/documents/Engagement.pdf" download>
          <div className="element cursor-pointer hover:opacity-80 transition">
            <img src="/assets/download.svg" alt="Icône de téléchargement" />
            <p>Télécharger notre engagement H3SE</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Qhse;
