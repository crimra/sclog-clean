import React from 'react'

const COUNTER_OPTIONS = {
    duration: 2 // secondes
  };

const Services = () => {
    const countersAnimated = useRef(false);

  const animateCounters = (element, target) => {
    const duration = COUNTER_OPTIONS.duration * 1000;
    const startTime = Date.now();
    const startValue = 0;
    
    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      
      element.textContent = current < 10 && target >= 10 
        ? `0${current}` 
        : current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target < 10 
          ? `0${target}` 
          : target;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    if (countersAnimated.current) return;
    
    const counters = document.querySelectorAll('.huge-num');
    if (!counters.length) return;

    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10) || 0;
      animateCounters(counter, target);
    });

    countersAnimated.current = true;
  }, []);

  return (
    <section className='services'>
    <article>
        <div className='left'>
            
            <p className='title1'>Services</p>
            <p className='title2'>Découvrez les services que nous proposons</p>
            <p className='title3 slide-in'>Des solutions logistiques fiables et intégrées</p>
            <p className='slide-in'>
            Grâce à son réseau de dépôts  répartis et à des moyens logistiques diversifiés, la SCLOG assure une gestion fluide, sécurisée et adaptée sur l’ensemble du territoire national.
            </p>

        </div>
        <div className='right jost'>
            <div>
                <p  className='huge-num' data-target="145">0</p>
                <p>Camions citernes</p>
            </div>
            <div>
                <p  className='huge-num' data-target="125">0</p>
                <p>Wagons citernes</p>
            </div>
            <div>
                <p  className='huge-num' data-target="5">0</p>
                <p>Barges</p>
            </div>

        </div>
    </article>

    <article>
        <div className='service-card slide-down'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Stockage</p>
            <p>Nous stockons les produits issus de la production de la CORAF et des importations de la SNPC et de nos clients pour le compte de ces derniers. Pour cela, nous disposons de 8 dépôts pétroliers répartis sur l’ensemble du Congo</p>
        </div>

        <div className='service-card slide-down slide-delay'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Transport massif</p>
            <p>Nous réalisons le transfert de produits pétroliers entre nos 8 dépôts grâce à différents moyens : les camions citernes, les wagons citernes et les barges
            </p>
        </div>

        <div className='service-card slide-down'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Chargement de Camions-citernes</p>
            <p>Les produits stockés pour le compte de nos clients sont ensuite chargés par nos soins dans des camions citernes à la demande de ces derniers</p>
        </div>

        <div className='service-card slide-down slide-delay'>
            <span ><img src="src/assets/service-check.svg" alt="check incon" /></span>
            <p className='title3'>Soutage de navires ou barges</p>
            <p>Nos prestations s’étendent également à l’activité de soutage sur demande de nos clients détenteurs de produits</p>
        </div>
    </article>

    

    </section>
  )
}

export default Services
