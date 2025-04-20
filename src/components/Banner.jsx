import React from 'react'

const Banner = () => {

    

  return (
    
    <>
      
        <div className="banner">

            <div className="banner-elements">
                <div className="element">
                    <img src="src/assets/banner-element1.svg" alt=""className='slide-in'/>
                    <p className='slide-in slide-in-delay'>
                        <span>Capital humain</span>
                        <span>Plus de 130 Employés</span>
                    </p>
                </div>
                <div className="element slide-in"></div>
                <div className="element">
                <img src="src/assets/banner-element2.svg" alt="" className='slide-in'/>
                    <p className='slide-in slide-in-delay'>
                        <span>Sites</span>
                        <span>8 dépôts en activités pour un total de 97 000 m3 de capacités</span>
                    </p>
                </div>
            </div>

        </div>

    </>

  )
}

export default Banner
