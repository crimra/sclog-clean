import React, { useEffect, useRef } from 'react';
import 'animate.css';

const Tabs = () => {
    const [active, setActive] = React.useState(1);
    const title1Ref = useRef(null);
    const title2Ref = useRef(null);

    function toogleTab(tab) {
        setActive(tab);
    }

    useEffect(() => {
        // Animation pour title1 (apparition du bas vers le haut)
        const observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer1.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (title1Ref.current) {
            observer1.observe(title1Ref.current);
        }

        // Animation pour title2 (apparition mot par mot de gauche à droite)
        const observer2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = entry.target.textContent;
                    entry.target.textContent = '';
                    
                    text.split(' ').forEach((word, i) => {
                        const wordSpan = document.createElement('span');
                        wordSpan.textContent = word;
                        wordSpan.style.display = 'inline-block';
                        wordSpan.style.animation = `wordAppear 0.5s ${i * 0.2}s forwards`;
                        wordSpan.style.opacity = '0';
                        wordSpan.style.transform = 'translateX(-20px)';
                        entry.target.appendChild(wordSpan);
                        
                        // Ajouter un espace normal après chaque mot sauf le dernier
                        if (i < text.split(' ').length - 1) {
                            entry.target.appendChild(document.createTextNode(' '));
                        }
                    });
        
                    observer2.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        if (title2Ref.current) {
            observer2.observe(title2Ref.current);
        }

        return () => {
            if (title1Ref.current) observer1.unobserve(title1Ref.current);
            if (title2Ref.current) observer2.unobserve(title2Ref.current);
        };
    }, []);

    return (
        <section className='about'>
            <p ref={title1Ref} className='title1 outfit' style={{ opacity: 0 }}>A propos</p>
            <p ref={title2Ref} className='title2 outfit'>Découvrez notre histoire, notre vision et nos valeurs</p>
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
    );
}

export default Tabs;