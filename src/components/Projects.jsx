import React from 'react'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";



const Projects = () => {

  

  return (
    <section id='projects' className='projets'>
        <h2 className='title2'>Project</h2>
        <h1 className=''>Réalisés</h1>
      <div className='content'>
        <div className='left' >
          
        </div>
        <div className='right'>

            <div className='card slide-in'>
              <div className='small-img'>
              
              </div>
              <p>Construction d’un réservoir double paroi gazole R04 (15000 m3) à Pointe-Noire </p>
            </div>

            <div className='card slide-in'>
              <div className='small-img'>
               
              </div>
              <p>Construction des défenses contre incendie (DCI) dans les dépôts de Brazzaville, Pointe-Noire, Ouesso et Oyo.</p>
            </div>

            <div className='card slide-in'>
              <div className='small-img'>
             
              </div>
              <p>Installation de vannes motorisées pour la gestion sécurisée et optimisée des opérations de transfert et de stockage du produit.</p>
            </div>

            <div className='card slide-in'>
              <div className='small-img'>
             
              </div>
              <p>Réhabilitation des réservoirs dans tous les dépôts SCLOG.</p>
            </div>

            <div className='card slide-in'>
              <div className='small-img'>
           
              </div>
              <p>Modernisation du système de comptage à Pointe-Noire et Ouesso.</p>
            </div>

            <div className='card slide-in'>
              <div className='small-img'>
            
              </div>
              <p>Modernisation d’une pomperie et poste de chargement camion, redimensionnement de la tuyauterie – Dépôt d’Impfondo.</p>
            </div>


          </div>
        </div>


        {/* In Progress */}

        <div className='in-progress'>
          <h1>En cours...</h1>

          <div className='content'>
            <h3>Construction d’un réservoir double paroi super – R05 (15000 m3) à Pointe-Noire.</h3>
            <div className='main-card'>

              <FaArrowLeft className='projects-arrows'/>
              <div className='card'><img src="/assets/img/pro.jpeg" alt="" srcset="" /></div>
              <div className='card'><img src="/assets/img/pro2.jpeg" alt="" srcset="" /></div>
              <div className='card'><img src="/assets/img/pro3.jpeg" alt="" srcset="" /></div>

              <FaArrowRight className='projects-arrows'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects
