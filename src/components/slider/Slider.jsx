import React, { useState } from 'react';
import { SliderData } from './sliderData';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // ou '@vitejs/plugin-react'



// Adaptez l'import selon votre outil (Vite ou Create React App)

// --- Exemple pour Vite ---
import LeftArrowIconSrc from '../../assets/Previous-slide.svg';
import RightArrowIconSrc from '../../assets/Next-slide.svg';

// --- OU Exemple pour Create React App ---
// import { ReactComponent as LeftArrowIcon } from './assets/icons/fleche-gauche.svg';
// import { ReactComponent as RightArrowIcon } from './assets/icons/fleche-droite.svg';


const Slider = () => {
    const [current, setCurrent] = useState(3);
    const slideLength = SliderData.length;

    function prevImage(){
        setCurrent(current <= 0 ? slideLength - 1 : current - 1);
    }
    function nextImage(){
        setCurrent(current < slideLength - 1 ? current + 1 : 0);
    }

    // Les classes de taille et couleur peuvent souvent s'appliquer aux SVGs
    const iconClasses = "absolute w-[50px] h-[50px] text-[#1F458E] cursor-pointer z-10";
    // Note: text-[#1F458E] ne fonctionnera que si le SVG est conçu pour hériter de la couleur (fill="currentColor")

    return (
        <section className="flex justify-center items-center relative">

            <img src={LeftArrowIconSrc} alt="Flèche gauche" className={`${iconClasses} left-10`} onClick={prevImage} />

            <div className="w-[1000px] h-[500px] flex scale-80 transition ease-in-out hover:-translate-y-1">
                {SliderData.length > 0 && (
                     <img src={SliderData[current]?.url} alt={SliderData[current]?.alt || "Slide image"}/>
                )}
            </div>

            <img src={RightArrowIconSrc} alt="Flèche droite" className={`${iconClasses} right-10`} onClick={nextImage} />

        </section>
    );
}

export default Slider;