import React from "react";
import Hero from "../Hero";
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";
import useScrollAnimations from "../../hooks/useScrollAnimations";
import RecruitmentForm from "../../components/RecruitmentForm"; 

const Rejoindre = () => {
  useGlobalTitleAnimations();
  useScrollAnimations();

  return (
    <>
      <section className='hero'>
        <img src="/assets/img/hero3.webp" alt="hero-image" />
      </section>

      <section className="join">

        <div className="join1">
          <p className="title2">Politique RH et recrutement</p>

          <div className="join1-elements">
            {/* ÉLÉMENT 1 */}
            <div className="join1-element">
              <div className="join1-element-img slide-in">
                <img src="/assets/service-check.svg" />
              </div>
              <div className="join1-element-text">
                <p className="slide-in-delay">Décision de recrutement</p>
                <p className="slide-in-delay">
                  La SCLOG élabore ses recrutements en prenant en compte les besoins identifiés par chaque direction et les objectifs budgétaires. Toute demande est validée par la Direction Générale avant d'être mise en œuvre.
                </p>
              </div>
            </div>

            {/* ÉLÉMENT 2 */}
            <div className="join1-element">
              <div className="join1-element-img slide-in-delay">
                <img src="/assets/service-check.svg" />
              </div>
              <div className="join1-element-text">
                <p className="slide-in-delay">Processus de recrutement</p>
                <p className="slide-in-delay">
                  Les offres d'emploi sont soigneusement rédigées et publiées via divers canaux. La sélection inclut des tests écrits et des entretiens. Les candidats retenus effectuent une période d'essai de 6 mois avant l'embauche définitive, suivie d'une intégration complète.
                </p>
              </div>
            </div>

            {/* ÉLÉMENT 3 */}
            <div className="join1-element">
              <div className="join1-element-img slide-in-delay">
                <img src="/assets/service-check.svg" />
              </div>
              <div className="join1-element-text">
                <p className="slide-in-delay">Intégration</p>
                <p className="slide-in-delay">
                  Chaque agent embauché reçoit le livret d'accueil de la SCLOG, comprenant notre code éthique et le règlement intérieur en lieu. La SCLOG assure également les démarches auprès de la CNSS et de l'ACPE pour la conformité administrative.
                </p>
              </div>
            </div>
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
