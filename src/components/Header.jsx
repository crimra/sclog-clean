import React from 'react'

const Header = () => {
  return (
    <header className='outfit'>
        <span className='logo'>
            <img src="src/assets/logo1.png" alt="sclog logo" />
        </span>

        <nav>
            <ul>
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">Présentation</a></li>
                <li><a href="#">H3SE</a></li>
                <li><a href="#">Projects</a></li>

                <li><a href="#">Logistique Petrolière</a></li>
                <li><a href="#">RSE</a></li>
                <li><a href="#">Nous Rejoindre</a></li>
                <li><a href="#">Actualité</a></li>
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
  )
}

export default Header
