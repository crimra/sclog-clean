import React from 'react'
import Hero from '../Hero'
  
const Rse = () => {
  return (
    <>
      <Hero />
      <section className="rse">

                <div className="rse1">

                    
          <p className='title2'>Notre engagement sociétal</p>
          <p>
            Chez SCLOG, nous croyons fermement que notre succès va de pair avec notre engagement envers la communauté et l'environnement. Nos initiatives RSE sont conçues pour contribuer positivement au développement durable et au bien-être des populations locales:
          </p>


          <div className="rse1-elements">

            <div className='rse1-element'>

                <div className="rse1-element-img">
                  <img src="src/assets/service-check.svg" />
                </div>

                <div className="rse1-element-text">
                  <p>Education</p>
                  <p>

                    Réhabilitation et construction de salles de classe à Loutété (2020-2022)
                    Remise de kits scolaires et inauguration de nouvelles infrastructures à l’école Antoine MILANDOU de Ouesso en 2025.
                  </p>
                </div>
              
            </div>

            <div className='rse1-element'>

                <div className="rse1-element-img">
                  <img src="src/assets/service-check.svg"  />
                </div>

                <div className="rse1-element-text">
                  <p>Santé</p>
                  <p>

                    Don de kits pharmaceutiques et de matériel médical à l’hôpital de base d'Impfondo en 2023.
                    Soutien de causes en faveur de la lutte contre le diabète (Association MCPLC) et la promotion du Sport et de la santé
                  </p>
                </div>
              
            </div>

            <div className='rse1-element'>

              <div className="rse1-element-img">
                <img src="src/assets/service-check.svg" />
              </div>

              <div className="rse1-element-text">
                <p>Solidarité</p>
                <p>

                Dons annuels aux hospices et orphelinats, incluant des actions comme la distribution de jouets et de vivres en 2024.

                </p>
              </div>
              
            </div>

          </div>

          <p>
            Chaque action reflète notre engagement à bâtir un avenir solidaire et responsable.
          </p>

          </div>


      </section>
    </>
  )
}

export default Rse
