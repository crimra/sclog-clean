import React from 'react'
import { Link } from 'react-router-dom'
import Rejoindre from './pages/Rejoindre'

const Header = () => {
  return (
    <header className='outfit z-50  '>
        <span className='logo'>
            <Link to={"/"}><img src="src/assets/logo1.png" alt="sclog logo" /></Link>
        </span>

        <nav>
            <ul>
                <li><Link to={"/"}>Acceuil</Link></li>
                <li><a href="#">Présentation</a></li>
                <li><a href="#">H3SE</a></li>
                <li><a href="#">Projects</a></li>


                <li><Link to={'/logistique'}>Logistique Petrolière</Link></li>
                
                <li><Link to={'/rse'}>RSE</Link></li>
                <li><Link to={'/rejoindre'}>Nous Rejoindre</Link></li>
                <li><Link to={'/news'}>Actualité</Link></li>

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
