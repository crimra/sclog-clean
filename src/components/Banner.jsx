import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner">
      <div className="banner-elements">
        <div className="element">
          <img src="/assets/banner-element1.svg" alt={t('banner.human')} className="slide-in" />
          <p className="slide-in slide-in-delay">
            <span>{t('banner.human')}</span>
            <span>{t('banner.humanValue')}</span>
          </p>
        </div>
        <div className="element separator"></div>
        <div className="element">
          <img src="/assets/banner-element2.svg" alt={t('banner.sites')} className="slide-in" />
          <p className="slide-in slide-in-delay">
            <span>{t('banner.sites')}</span>
            <span>{t('banner.sitesValue')}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
