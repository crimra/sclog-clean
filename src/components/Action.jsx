import React from 'react'

const Action = () => {

    

  return (
    
    <>
        <div className="action">

                <p className='title2'>Actionnariat SCLOG</p>
                <p>La Société Commune de Logistique, SCLOG, est une société anonyme dont l’actionnariat est composé comme suit :</p>

                <div className="chart">

                    <div className="chart-left">
                        <svg width="250" height="250" viewBox="0 0 500 500">
                            <path className="segment" d="M250,250 L500,250 A250,250 0 0,1 250,500 Z" fill="#F70C0D"/>
                            <text x="375" y="375" textAnchor="middle" fill="white" fontSize="20">25%</text>

                            <path className="segment" d="M250,250 L250,500 A250,250 0 0,1 0,250 Z" fill="#102E60"/>
                            <text x="125" y="375" textAnchor="middle" fill="white" fontSize="20">25%</text>

                            <path className="segment" d="M250,250 L0,250 A250,250 0 0,1 250,0 Z" fill="#FFC000"/>
                            <text x="125" y="125" textAnchor="middle" fill="#000" fontSize="20">25%</text>

                            
                            <path className="segment" d="M250,250 L250,0 A250,250 0 0,1 426.77,73.22 Z" fill="#00B050"/>
                            <text x="345" y="90" textAnchor="middle" fill="white" fontSize="20">12.5%</text>

                            
                            <path className="segment" d="M250,250 L426.77,73.22 A250,250 0 0,1 500,250 Z" fill="#FFFF00"/>
                            <text x="440" y="170" textAnchor="middle" fill="black" fontSize="20">12.5%</text>
                        </svg>
                    </div>

                    <div className="chart-right">

                        <div className="item">
                            <img src="src/assets/Total.svg" alt="" srcSet="" />
                        </div>

                        <div className="item">
                            <img src="src/assets/Puma.svg" alt="" srcSet="" />
                        </div>

                        <div className="item">
                            <img src="src/assets/x-oil.svg" alt="" srcSet="" />
                        </div>

                        <div className="item">
                            <img src="src/assets/GPL.svg" alt="" srcSet="" />
                        </div>

                        <div className="item">
                            <img src="src/assets/SNPC.svg" alt="" srcSet="" />
                        </div>
                    </div>

                </div>

        </div>
      

    </>

  )
}

export default Action
