import React from 'react'
import { useTranslation } from 'react-i18next';
import Hero from '../Hero'
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import EventTabs from '../EventTabs';

const Rse = () => {
  useGlobalTitleAnimations();
  useScrollAnimations();
  const { t } = useTranslation();

  return (
    <>
      <section className='hero' loading="eager">
        <img src="/assets/img/hero2.jpg" alt="hero-image" loading="eager"/>
      </section>
      <section className="rse">

        <div className="rse1">

          <div className="rse1-title">
            <p className='title2'>{t('rse.title')}</p>
            <p className='slide-in animated'>{t('rse.intro')}</p>
            <br /><br />
            <p className='slide-in animated'>{t('rse.conclusion')}</p>
          </div>     

          <div className="rse1-elements">

            <div className='rse1-element slide-in-delay animated'>
              <div className="rse1-element-img">
                <img src="/assets/service-check.svg" />
              </div>
              <div className="rse1-element-text">
                <p>{t('rse.educationTitle')}</p>
                <p>{t('rse.educationText')}</p>
              </div>
            </div>

            <div className='rse1-element slide-in-delay animated'>
              <div className="rse1-element-img">
                <img src="/assets/service-check.svg"  />
              </div>
              <div className="rse1-element-text">
                <p>{t('rse.healthTitle')}</p>
                <p>{t('rse.healthText')}</p>
              </div>
            </div>

            <div className='rse1-element slide-in-delay animated'>
              <div className="rse1-element-img">
                <img src="/assets/service-check.svg" />
              </div>
              <div className="rse1-element-text">
                <p>{t('rse.solidarityTitle')}</p>
                <p>{t('rse.solidarityText')}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="societal">
          <EventTabs />
        </div>

      </section>
    </>
  )
}

export default Rse
