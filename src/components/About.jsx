import React from 'react'

const Tabs = () => {

    const [active, setActive] = React.useState(1)
    function toogleTab(tab){
        setActive(tab)
    }
  return (
    <section className='about'>
        <p className='title1 outfit'>A propos</p>
        <p className='title2 outfit'>Découvrez notre histoire, notre vision et nos valeurs</p>
        <div className='tabs jost'>
            <div style={{"display": active==1?"block":"none" }} className="card">
                <div className='tabs-header outfit'>
                    <div className="tab-header-text">
                        <div onClick={()=>{toogleTab(1)}} className={`tab-item ${active==1?"active":""}`}>Présentation</div>
                        <div onClick={()=>{toogleTab(2)}} className={`tab-item ${active==2?"active":""}`}>Vision</div>
                        <p>SCLOG assure le stockage et le transport en masse des hydrocarbures liquides à travers l'ensemble de la République du Congo, tout en respectant les normes de sécurité et de qualité les plus strictes, attestées par ses certifications ISSSRS Niveau 3 et JIG. Les produits pris en charge incluent le gazole, l'essence, le Jet-A1 (carburant pour avions), le fioul et le pétrole lampant. Ces hydrocarbures proviennent principalement de la production de la raffinerie CORAF et des importations réalisées par la SNPC et les marketeurs.
                        </p>
                    </div>
                    <div className='img-container'>
                        <img src="src/assets/card.png" alt="Image 1" /*width={"250px"}*/ />
                    </div>
                </div>
                
            </div>

            <div style={{"display": active==2?"block":"none" }} className="card">
            <div className='tabs-header outfit'>
                    <div className="tab-header-text">
                        <div onClick={()=>{toogleTab(1)}} className={`tab-item ${active==1?"active":""}`}>Présentation</div>
                        <div onClick={()=>{toogleTab(2)}} className={`tab-item ${active==2?"active":""}`}>Vision</div>
                        <p>Être la référence en termes d'excellence opérationnelle et d'innovation dans le secteur du stockage et de la logistique des produits pétroliers liquides au Congo et en Afrique centrale.
                        </p>
                    </div>
                    <div className='img-container'>
                        <img src="src/assets/card-blue.png" alt="Image 1" /*width={"250px"}*/ />
                    </div>
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default Tabs
