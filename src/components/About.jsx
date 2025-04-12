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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, culpa? Minima atque reiciendis    maxime ad. Dolorum suscipit amet magnam! Quod hic at aliquid, corrupti perferendis modi fugit sapiente labore minima?</p>
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
                        <p>Ku sakana ve dolor sit amet consectetur adipisicing elit. Placeat, culpa? Minima atque reiciendis    maxime ad. Dolorum suscipit amet magnam! Quod hic at aliquid, corrupti perferendis modi fugit sapiente labore minima?</p>
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
