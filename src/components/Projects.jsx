import React from 'react'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";



const Projects = () => {

  

  return (
    <section id='projects'>
        <h2 className='title2'>Project</h2>
        <h3 className=''>Réalisés</h3>
      <div className='content'>
        <div className='left' >

        </div>
        <div className='right'>

            <div className='card'>
              <div className='small-img'>
              
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
            </div>

            <div className='card'>
              <div className='small-img'>
               
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
            </div>

            <div className='card'>
              <div className='small-img'>
             
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
            </div>

            <div className='card'>
              <div className='small-img'>
             
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
            </div>

            <div className='card'>
              <div className='small-img'>
           
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
            </div>

            <div className='card'>
              <div className='small-img'>
            
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, laudantium.</p>
            </div>


          </div>
        </div>


        {/* In Progress */}

        <div className='in-progress'>
          <h2>En cours...</h2>

          <div className='content'>
            <h3>Mise en place d'un programme environnemental</h3>
            <div className='main-card'>

              <FaArrowLeft className='projects-arrows'/>
              <div className='card'></div>
              <div className='card'></div>
              <div className='card'></div>

              <FaArrowRight className='projects-arrows'/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Projects
