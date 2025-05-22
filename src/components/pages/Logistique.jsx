import React from 'react'
import { useTranslation } from 'react-i18next';
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";
import useScrollAnimations from "../../hooks/useScrollAnimations";

const Logistique = () => {
  const { t } = useTranslation();
  useGlobalTitleAnimations();
  useScrollAnimations();
  return (
    <>
      <section className='hero ' loading="eager">
        <img src='/assets/img/hero.jpg' alt="hero-image" loading="eager"/>
      </section>
      <section className='logistique'>
        <div className="logistique-section">
          <p className='title2'>{t('logistique.title')}</p>
          <div className="items">
            <div className="item">
              <img src="/assets/img/paysage2.jpg" className='slide-in animated'/>
              <p className='slide-in-delay animated'>
                {t('logistique.section1')}
              </p>
            </div>
            <div className="item">
              <img src="/assets/img/paysage7.jpg" className='slide-in-delay animated' />
              <p className='slide-in animated'>
                {t('logistique.section2')}
              </p>
            </div>
            <div className="item">
              <img src="/assets/img/paysage6.jpg" className='slide-in animated'/>
              <p className='slide-in-delay animated'>
                {t('logistique.section3')}
              </p>
            </div>
          </div>
        </div>

        <div className="logistique-schema">
          <p>{t('logistique.schemaTitle')}</p>
          <div className="schema"></div>
        </div>

        <div className="big-carte">
          <p className='title2'>{t('logistique.carteTitle')}</p>
          <div className="carte">
            <div>
              <img src="/assets/carte.svg" className="slide-in animated" />
            </div>
            <div className='carte-right'>
              <div>
                <img src="/assets/route.svg" className="slide-in-delay animated" />
                <p className='slide-in-delay animated'>{t('logistique.route')}</p>
              </div>
              <div>
                <img src="/assets/rail.svg" className="slide-in-delay animated" />
                <p className='slide-in-delay animated'>{t('logistique.rail')}</p>
              </div>
              <div>
                <img src="/assets/fluvial.svg" className="slide-in-delay animated" />
                <p className='slide-in-delay animated'>{t('logistique.fluvial')}</p>
              </div>
              <div>
                <img src="/assets/depot.svg" className="slide-in-delay animated" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Logistique
