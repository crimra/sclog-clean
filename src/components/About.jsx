import React, { useEffect, useRef } from 'react';

const Tabs = () => {
  const [active, setActive] = React.useState(1);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useEffect(() => {
    // Animation pour title1
    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer1.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (title1Ref.current) {
      observer1.observe(title1Ref.current);
    }

    // Animation pour title2
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated');
            observer2.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (title2Ref.current) {
      observer2.observe(title2Ref.current);
    }

    return () => {
      if (title1Ref.current) observer1.unobserve(title1Ref.current);
      if (title2Ref.current) observer2.unobserve(title2Ref.current);
    };
  }, []);

  return (
    <section className="about" id="presentation">
      <p ref={title1Ref} className="title1 outfit">
        A propos
      </p>
      <p ref={title2Ref} className="title2 outfit">
        Découvrez notre histoire, notre vision et nos valeurs
      </p>
      <div className="tabs jost">
        {/* Présentation */}
        <div style={{ display: active === 1 ? 'block' : 'none' }} className="card">
          <div className="tabs-header outfit">
            <div className="tab-header-text">
              <div
                onClick={() => {
                  setActive(1);
                }}
                className={`tab-item ${active === 1 ? 'active' : ''}`}
              >
                Présentation
              </div>
              <div
                onClick={() => {
                  setActive(2);
                }}
                className={`tab-item ${active === 2 ? 'active' : ''}`}
              >
                Vision
              </div>
              <p className="slide-in">
                SCLOG assure le stockage et le transport en masse des hydrocarbures liquides à travers
                l'ensemble de la République du Congo, tout en respectant les normes de sécurité et de
                qualité les plus strictes, attestées par ses certifications ISSSRS Niveau 3 et JIG.
              </p>
            </div>
            <div className="img-container">
              <img src="/assets/img/presentation.jpg" alt="Présentation" />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div style={{ display: active === 2 ? 'block' : 'none' }} className="card">
          <div className="tabs-header outfit">
            <div className="tab-header-text">
              <div
                onClick={() => {
                  setActive(1);
                }}
                className={`tab-item ${active === 1 ? 'active' : ''}`}
              >
                Présentation
              </div>
              <div
                onClick={() => {
                  setActive(2);
                }}
                className={`tab-item ${active === 2 ? 'active' : ''}`}
              >
                Vision
              </div>
              <p className="slide-in">
                Être la référence en termes d'excellence opérationnelle et d'innovation dans le secteur
                du stockage et de la logistique des produits pétroliers liquides au Congo et en Afrique
                centrale.
              </p>
            </div>
            <div className="img-container">
              <img src="/assets/img/team.jpg" alt="Vision" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;