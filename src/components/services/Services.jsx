import React from 'react'

const Services = () => {


  return (
    <section className='services'>
    <article>
        <div className='left'>
            
            <p className='title1'>Services</p>
            <p className='title2'>Découvrez les services que nous proposons</p>
            <p className='title3'>Des solutions logistiques fiables et intégrées</p>
            <p>
            Grâce à son réseau de dépôts  répartis et à des moyens logistiques diversifiés, la SCLOG assure une gestion fluide, sécurisée et adaptée sur l’ensemble du territoire national.
            </p>

        </div>
        <div className='right jost'>
            <div>
                <p  className='huge-num'>145</p>
                <p>Camions citernes</p>
            </div>
            <div>
                <p  className='huge-num'>125</p>
                <p>Wagons citernes</p>
            </div>
            <div>
                <p  className='huge-num'>05</p>
                <p>Barges</p>
            </div>

        </div>
    </article>

    <article>
        <div className='service-card'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Stockage</p>
            <p>Nous stockons les produits issus de la production de la CORAF et des importations de la SNPC et de nos clients pour le compte de ces derniers. Pour cela, nous disposons de 8 dépôts pétroliers répartis sur l’ensemble du Congo</p>
        </div>

        <div className='service-card'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Transport massif</p>
            <p>Nous réalisons le transfert de produits pétroliers entre nos 8 dépôts grâce à différents moyens : les camions citernes, les wagons citernes et les barges
            </p>
        </div>

        <div className='service-card'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Chargement de Camions-citernes</p>
            <p>Les produits stockés pour le compte de nos clients sont ensuite chargés par nos soins dans des camions citernes à la demande de ces derniers</p>
        </div>

        <div className='service-card'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Soutage de navires ou barges</p>
            <p>Nos prestations s’étendent également à l’activité de soutage sur demande de nos clients détenteurs de produits</p>
        </div>
    </article>

    

    </section>
  )
}

export default Services
