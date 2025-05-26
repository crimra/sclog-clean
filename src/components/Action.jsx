import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Action = () => {

  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }, {
      threshold: 0.5,
      rootMargin: '0px',
    });

    const chartRef = document.querySelector('.chart');
    observer.observe(chartRef);

    return () => {
      observer.unobserve(chartRef);
    };
  }, []);

  return (
    <div className="action">
      <p className="title2 animated">{t('action.title')}</p><br />
      <p>{t('action.intro')}</p>

      <div className={`chart ${animate ? 'animate' : ''}`}>
        <img src="/assets/C1.png" alt="" />
      </div>
    </div>
  );

};

export default Action;