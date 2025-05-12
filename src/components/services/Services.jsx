import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
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

  return (
    <section className="services">
      <article>
        <div className="left">
          <p className="title1">Services</p>
          <p className="title2">Découvrez les services que nous proposons</p>
          <p className="title3 slide-in">Des solutions logistiques fiables et intégrées</p>
          <p className="slide-in">
            Grâce à son réseau de dépôts répartis et à des moyens logistiques diversifiés, la SCLOG
            assure une gestion fluide, sécurisée et adaptée sur l’ensemble du territoire national.
          </p>
        </div>
        <div className="right jost" ref={numbersRef}>
          <div>
            <p className="huge-num">{camions}</p>
            <p>Camions citernes</p>
          </div>
          <div>
            <p className="huge-num">{wagons}</p>
            <p>Wagons citernes</p>
          </div>
          <div>
            <p className="huge-num">{barges.toString().padStart(2, '0')}</p>
            <p>Barges</p>
          </div>
        </div>
      </article>

      <article>
        <div className="service-card slide-down">
          <span>
            <img src="/assets/service-check.svg" alt="check icon" />
          </span>
          <p className="title3">Stockage</p>
          <p>
            Nous stockons les produits issus de la production de la CORAF et des importations de la
            SNPC et de nos clients pour le compte de ces derniers. Pour cela, nous disposons de 8
            dépôts pétroliers répartis sur l’ensemble du Congo.
          </p>
        </div>

        <div className="service-card slide-down slide-delay">
          <span>
            <img src="/assets/service-check.svg" alt="check icon" />
          </span>
          <p className="title3">Transport massif</p>
          <p>
            Nous réalisons le transfert de produits pétroliers entre nos 8 dépôts grâce à différents
            moyens : les camions citernes, les wagons citernes et les barges.
          </p>
        </div>

        <div className="service-card slide-down">
          <span>
            <img src="/assets/service-check.svg" alt="check icon" />
          </span>
          <p className="title3">Chargement de Camions-citernes</p>
          <p>
            Les produits stockés pour le compte de nos clients sont ensuite chargés par nos soins
            dans des camions citernes à la demande de ces derniers.
          </p>
        </div>

        <div className="service-card slide-down slide-delay">
          <span>
            <img src="/assets/service-check.svg" alt="check icon" />
          </span>
          <p className="title3">Soutage de navires ou barges</p>
          <p>
            Nos prestations s’étendent également à l’activité de soutage sur demande de nos clients
            détenteurs de produits.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Services;