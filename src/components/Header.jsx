import React from 'react';
import { Link } from 'react-router-dom';
import SmoothScrollLink from './SmoothScrollLink';
import useScrollSpy from '../hooks/useScrollSpy';

const Header = () => {
  const activeSection = useScrollSpy(['presentation', 'h3se', 'projects']);

  

  return (
    <header className='outfit z-50'>
      <span className='logo'>
        <Link to="/"><img src="src/assets/logo1.png" alt="sclog logo" /></Link>
      </span>

      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>

          {/* Sections one-page */}
          <li>
            <SmoothScrollLink 
              to="#presentation" 
              active={activeSection === 'presentation'}
            >
              Présentation
            </SmoothScrollLink>
          </li>
          
          <li>
            <SmoothScrollLink 
              to="#h3se"
              active={activeSection === 'h3se'}
            >
              H3SE
            </SmoothScrollLink>
          </li>
          
          <li>
            <SmoothScrollLink 
              to="#projects"
              active={activeSection === 'projects'}
            >
              Projects
            </SmoothScrollLink>
          </li>

          {/* Pages séparées */}
          <li><Link to="/logistique">Logistique Pétrolière</Link></li>
          <li><Link to="/rse">RSE</Link></li>
          <li><Link to="/rejoindre">Nous Rejoindre</Link></li>
          <li><Link to="/news">Actualité</Link></li>
        </ul>
      </nav>

      <div className="search-box">
            <input type="text" placeholder='Recherche...'/>
            <img src="src/assets/search-icon.png" alt="search icon" />
        </div>

        <span id='toogle-lang'>
            <img src="src/assets/france.png" alt="french logo" />
        </span>
    </header>
  );
};

export default Header;