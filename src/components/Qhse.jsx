import React from 'react';
import { useTranslation } from 'react-i18next';
import 'animate.css';

const Qhse = () => {
  const { t } = useTranslation();
  const points = t('qhse.points', { returnObjects: true });

  return (
    <div className="qhse" id="h3se">
      <p className="title1 animated">{t('qhse.title1')}</p>
      <p className="title2 animated">{t('qhse.title2')}</p>

      <div className="qhse-elements">
        {points.map((text, index) => (
          <div key={index} className="element slide-in animated">
            <img src="/assets/service-check.svg" alt="Icône de validation" />
            <p>{text}</p>
          </div>
        ))}

        <a href="/assets/documents/Engagement.pdf" download>
          <div className="element cursor-pointer hover:opacity-80 transition animated">
            <img src="/assets/download.svg" alt="Icône de téléchargement" />
            <p>{t('qhse.download')}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Qhse;
