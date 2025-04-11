import React from 'react'

const Tabs = () => {

    const [active, setActive] = React.useState(1)
    function toogleTab(tab){
        setActive(tab)
    }
  return (
    <section className='tabs'>
        <div className='tabs-header'>
            <div onClick={()=>{toogleTab(1)}} className={`tab-item ${active==1?"active":""}`}>Tab1</div>
            <div onClick={()=>{toogleTab(2)}} className={`tab-item ${active==2?"active":""}`}>Tab2</div>
            <div onClick={()=>{toogleTab(3)}} className={`tab-item ${active==3?"active":""}`}>Tab3</div>
            
        
        </div>
        <div>
            <div style={{"display": active==1?"block":"none" }} className="card">
                <h2>Content1</h2>
                <div className="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, culpa? Minima atque reiciendis maxime ad. Dolorum suscipit amet magnam! Quod hic at aliquid, corrupti perferendis modi fugit sapiente labore minima?</p>
                    <div className='img-container'>
                        <img src="https://images.pexels.com/photos/31569990/pexels-photo-31569990.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
                    </div>
                </div>
            </div>

            <div style={{"display": active==2?"block":"none" }} className="card">
                <h2>Content2</h2>
                <div className='card-content'>
                    <p>Mu ke ve camarade ya ngé ipsum dolor sit amet consectetur adipisicing elit. Placeat, culpa? Minima atque reiciendis maxime ad. Dolorum suscipit amet magnam! Quod hic at aliquid, corrupti perferendis modi Je suis un putain de goat en fait fugit sapiente labore minima?</p>
                    <div className='img-container'>
                        <img src="https://images.pexels.com/photos/31549604/pexels-photo-31549604/free-photo-of-quai-en-bois-serein-avec-vue-apaisante-sur-le-lac.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
                    </div>
                </div>
            </div>

            <div style={{"display": active==3?"block":"none" }} className="card">
                <h2>Content3</h2>
                <div className='card-content'>
                    <p>Kuanga ipsum dolor sit amet Dolorum suscipit amet magnam! Quod hic at aliquid, corrupti perferendis modi fugit sapiente labore minima?</p>
                    <div className='img-container'>
                        <img src="https://images.pexels.com/photos/31566174/pexels-photo-31566174.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Tabs
