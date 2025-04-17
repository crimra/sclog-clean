import React from 'react'
import Hero from '../Hero'
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";

const Rejoindre = () => {
  useGlobalTitleAnimations();
  return (
    <>
      <Hero />
      

          <section className="join">

            <div className="join1">

                
            <p className='title2'>Politique RH et recrutement</p>


            <div className="join1-elements">

            <div className='join1-element'>

            <div className="join1-element-img">
              <img src="src/assets/service-check.svg" />
            </div>

            <div className="join1-element-text">
              <p>Décision de recrutement</p>
              <p>

              La SCLOG élabore ses recrutements en prenant en compte les besoins identifiés par chaque direction et les objectifs budgétaires. Toute demande est validée par la Direction Générale avant d'être mise en œuvre.
              </p>
            </div>

            </div>

            <div className='join1-element'>

            <div className="join1-element-img">
              <img src="src/assets/service-check.svg"  />
            </div>

            <div className="join1-element-text">
              <p>Processus de recrutement</p>
              <p>

              Les offres d'emploi sont soigneusement rédigées et publiées via divers canaux. La sélection inclut des tests écrits et des entretiens. Les candidats retenus effectuent une période d'essai de 6 mois avant l'embauche définitive, suivie d'une intégration complète.
              </p>
            </div>

            </div>

            <div className='join1-element'>

            <div className="join1-element-img">
            <img src="src/assets/service-check.svg" />
            </div>

            <div className="join1-element-text">
            <p>Intégration</p>
            <p>

Chaque agent embauché reçoit le livret d'accueil de la SCLOG, comprenant notre code éthique et le règlement intérieur en lieu. La SCLOG assure également les démarches auprès de la CNSS et de l'ACPE pour la conformité administrative.

            </p>
            </div>

            </div>

            </div>

            </div>


          </section>


    </>
  )
}

export default Rejoindre
