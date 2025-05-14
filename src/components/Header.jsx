import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SmoothScrollLink from './SmoothScrollLink';
import useScrollSpy from '../hooks/useScrollSpy';

const Header = () => {
  const { t, i18n } = useTranslation();
  const activeSection = useScrollSpy(['presentation', 'h3se', 'projects']);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [lang, setLang] = useState(i18n.language || 'fr');

  const location = useLocation();
  const navRef = useRef();

  // Crée un tableau de refs pour les SmoothScrollLink
  const smoothRefs = [useRef(), useRef(), useRef()];

  // Fonction pour blur tous les SmoothScrollLink
  const blurSmoothLinks = () => {
    smoothRefs.forEach(ref => {
      if (ref.current) ref.current.blur();
    });
  };

  // Toggle menu burger sur clic (ouvre/ferme)
  const handleBurgerClick = () => setMenuOpen(prev => !prev);

  const toggleLangMenu = () => setShowLangMenu(prev => !prev);

  const handleLangChange = (newLang) => {
    setLang(newLang);
    setShowLangMenu(false);
    i18n.changeLanguage(newLang);
  };

  return (
    <header className='outfit z-50 relative'>
      <span className='logo'>
        <Link to="/"><img src="/assets/log2.svg" alt="sclog logo" /></Link>
      </span>

      <button
        className={`burger${menuOpen ? " open" : ""}`}
        onClick={handleBurgerClick}
        aria-label="Ouvrir/fermer le menu"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'open' : ''} ref={navRef}>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'activeNavLink' : ''}
              onClick={() => {
                setMenuOpen(false);
                blurSmoothLinks();
              }}
            >
              {t('nav.home')}
            </Link>
          </li>
          <li>
            <SmoothScrollLink
              to="#presentation"
              className={
                location.pathname === '/' && activeSection === 'presentation'
                  ? 'smooth-active'
                  : ''
              }
              setBurgerOpen={setMenuOpen}
              linkRef={smoothRefs[0]}
            >
              {t('nav.presentation')}
            </SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink
              to="#h3se"
              className={
                location.pathname === '/' && activeSection === 'h3se'
                  ? 'smooth-active'
                  : ''
              }
              setBurgerOpen={setMenuOpen}
              linkRef={smoothRefs[1]}
            >
              {t('nav.h3se')}
            </SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink
              to="#projects"
              className={
                location.pathname === '/' && activeSection === 'projects'
                  ? 'smooth-active'
                  : ''
              }
              setBurgerOpen={setMenuOpen}
              linkRef={smoothRefs[2]}
            >
              {t('nav.projects')}
            </SmoothScrollLink>
          </li>
          <li>
            <Link
              to="/logistique"
              className={location.pathname === '/logistique' ? 'activeNavLink' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.logistique')}
            </Link>
          </li>
          <li>
            <Link
              to="/rse"
              className={location.pathname === '/rse' ? 'activeNavLink' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.rse')}
            </Link>
          </li>
          <li>
            <Link
              to="/rejoindre"
              className={location.pathname === '/rejoindre' ? 'activeNavLink' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.rejoindre')}
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className={location.pathname === '/news' ? 'activeNavLink' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.news')}
            </Link>
          </li>
        </ul>
        <div className="search-box mt-4">
          <input type="text" placeholder={t('search')} />
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
