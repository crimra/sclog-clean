import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../Hero";
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import RecruitmentForm from "../../components/RecruitmentForm"; 

const Rejoindre = () => {
  useGlobalTitleAnimations();
  useScrollAnimations();
  const { t } = useTranslation();
  const steps = t('join.steps', { returnObjects: true });

  return (
    <>
      <section className='hero' loading="eager">
        <img src="/assets/img/hero3.webp" alt="hero-image" loading="eager"/>
      </section>

      <section className="join">
        <div className="join1">
          <p className="title2">{t('join.title')}</p>
          <div className="join1-elements">
            {steps.map((step, idx) => (
              <div className="join1-element" key={idx}>
                <div className="join1-element-img slide-in-delay">
                  <img src="/assets/service-check.svg" alt="" />
                </div>
                <div className="join1-element-text">
                  <p className="slide-in-delay">{step.title}</p>
                  <p className="slide-in-delay">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ FORMULAIRE DANS .form */}
        <div className="form p-6 bg-white rounded-xl shadow-md mt-10">
          <RecruitmentForm />
        </div>
      </section>
    </>
  );
};

export default Rejoindre;
