import React from 'react'
import Hero from '../Hero'

const Logistique = () => {
  return (
    <>
      <Hero />
      <section className='logistique'>
      
        <div className="logistique-section">

                    <p className='title2'>Logistique Pétrolière du Congo</p>

              <div className="items">
                <div className="item">
                  <img src="src/assets/card.png" class="" />
                  <p>
                  La logistique pétrolière au Congo repose sur un processus structuré garantissant l'approvisionnement en carburants à travers le pays. Les produits proviennent soit de la raffinerie CORAF, soit sont importés par les marketeurs à l’aide de navires et barges par voie maritime ou fluviale. Ces produits pétroliers sont réceptionnés et stockés dans les dépôts d'importation de Pointe-Noire et Brazzaville.
                  </p>
                </div>
                <div className="item">
                  <img src="src/assets/card.png" class="" />
                  <p>
                  La SCLOG assure ensuite leur transfert vers les dépôts intérieurs par camions-citernes, barges ou wagons-citernes. Cette organisation logistique permet de desservir efficacement les différentes régions, garantissant un approvisionnement constant, même dans les zones les plus reculées.
                  </p>
                </div>
                <div className="item">
                  <img src="src/assets/card.png" class="" />
                  <p>
                  À la demande de ses clients (marketeurs) tels que SNPC-D, TotalEnergies, Afric, Puma, X-Oil,… la SCLOG charge les produits dans des camions-citernes.  Ces entreprises prennent en charge la distribution finale vers les stations-service, les clients industriels et d'autres infrastructures stratégiques, garantissant ainsi un approvisionnement constant sur tout le territoire.
                  </p>
                </div>
              </div>

        </div>

        <div className="logistique-schema">

          <p>La logistique pétrolière au CONGO</p>
          <div className="schema"></div>
          
        </div>

        <div className="big-carte">
          
            <p className='title2'>Réseau de dépôts SCLOG</p>
            <div className="carte">
              <div>
                <img src="src/assets/carte.svg" class="" />
              </div>
              <div className='carte-right'>
                <img src="src/assets/carte-legende.svg" class="" />
                <div>
                  <p>Transferts assurés par voie routière</p>
                  <p>Transferts assurés par voie ferroviaire</p>
                  <p>Transferts assurés par voie fluviale</p>
                </div>
              </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Logistique
