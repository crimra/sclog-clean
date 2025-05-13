import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SmoothScrollLink from './SmoothScrollLink';
import useScrollSpy from '../hooks/useScrollSpy';

const Header = () => {
  const activeSection = useScrollSpy(['presentation', 'h3se', 'projects']);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [lang, setLang] = useState('fr'); // ou récup via localStorage si besoin

  const toggleLangMenu = () => {
    setShowLangMenu(prev => !prev);
  };

  const handleLangChange = (newLang) => {
    setLang(newLang);
    setShowLangMenu(false);
    //i18n.changeLanguage(newLang); i18next
  };

  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <header className='outfit z-50 relative'>
      <span className='logo'>
        <Link to="/"><img src="/assets/log2.svg" alt="sclog logo" /></Link>
      </span>

      <button
        className={`burger ${burgerOpen ? 'open' : ''}`}
        onClick={() => setBurgerOpen(prev => !prev)}
        aria-label="Menu"
        aria-expanded={burgerOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={burgerOpen ? 'open' : ''}>
        <ul className=''>
          <li>
            <Link to="/" className={activeSection === 'home' ? 'activeNavLink' : ''}>Accueil</Link>
          </li>
          <li>
            <SmoothScrollLink to="#presentation" active={activeSection === 'presentation'}>Présentation</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="#h3se" active={activeSection === 'h3se'}>H3SE</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="#projects" active={activeSection === 'projects'}>Projets</SmoothScrollLink>
          </li>
          <li><Link to="/logistique">Logistique pétrolière</Link></li>
          <li><Link to="/rse">RSE</Link></li>
          <li><Link to="/rejoindre">Nous rejoindre</Link></li>
          <li><Link to="/news">Actualité</Link></li>
        </ul>

        {/* Search bar intégrée dans le menu burger */}
        <div className="search-box mt-4">
          <input type="text" placeholder='Recherche...' />
          <img src="/assets/search-icon.svg" alt="search icon" />
        </div>
      </nav>

      

      {/* Menu Langue */}
      <div className="relative">
        <span id='toggle-lang' onClick={toggleLangMenu} className="cursor-pointer">
          <img
            src={`/assets/${lang === 'fr' ? 'france' : 'uk'}.png`}
            alt="current lang"
            className="w-6 h-6"
          />
        </span>

        {showLangMenu && (
        <div className="absolute right-0 mt-2 bg-white border shadow rounded w-32 z-50">
          <button
            className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
            onClick={() => handleLangChange('fr')}
            >
            <img src="/assets/france.png" alt="Français" className="w-5 h-5" />
            <span className="text-[#56676D]">Français</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 w-full hover:bg-gray-100"
            onClick={() => handleLangChange('en')}
          >
            <img src="/assets/uk.png" alt="English" className="w-5 h-5" />
            <span className="text-[#56676D]">English</span>
          </button>
        </div>
        )}
      </div>
    </header>
  );
};

export default Header;
