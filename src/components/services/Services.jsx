import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const [camions, setCamions] = useState(0);
  const [wagons, setWagons] = useState(0);
  const [barges, setBarges] = useState(0);
  const numbersRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateNumber = (target, setNumber, duration = 2000) => {
      let start = 0;
      const startTime = Date.now();

      const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * target);

        setNumber(current);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateNumber(145, setCamions);
            animateNumber(125, setWagons);
            animateNumber(5, setBarges);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }

    return () => {
      if (numbersRef.current) {
        observer.unobserve(numbersRef.current);
      }
    };
  }, []);

  const cards = t('services.cards', { returnObjects: true });

  return (
    <section className="services">
      <article>
        <div className="left">
          <p className="title1 animated">{t('services.title1')}</p>
          <p className="title2 animated">{t('services.title2')}</p>
          <p className="title3 slide-in">{t('services.title3')}</p>
          <p className="slide-in">
            {t('services.intro')}
          </p>
        </div>
        <div className="right jost" ref={numbersRef}>
          <div>
            <p className="huge-num">{camions}</p>
            <p>{t('services.camions')}</p>
          </div>
          <div>
            <p className="huge-num">{wagons}</p>
            <p>{t('services.wagons')}</p>
          </div>
          <div>
            <p className="huge-num">{barges.toString().padStart(2, '0')}</p>
            <p>{t('services.barges')}</p>
          </div>
        </div>
      </article>

      <article>
        {cards.map((card, idx) => (
          <div className={`service-card slide-down${idx % 2 === 1 ? ' slide-delay' : ''}`} key={idx}>
            <span>
              <img src="/assets/service-check.svg" alt="check icon" />
            </span>
            <p className="title3">{card.title}</p>
            <p>{card.desc}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Services;