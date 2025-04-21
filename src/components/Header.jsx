import React from 'react'
import { NavLink } from 'react-router-dom'
import Rejoindre from './pages/Rejoindre'

const Header = () => {
  return (
    <header className='outfit z-50'>
        <span className='logo'>
            <NavLink to={"/"}><img src="src/assets/logo1.png" alt="sclog logo" 
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeNavLink" : ""
              }
            /></NavLink>
        </span>

        <nav>
            <ul>
                <li><NavLink to={"/"}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeNavLink" : ""
                  }
                >Acceuil</NavLink></li>
                <li><a href="#">Présentation</a></li>
                <li><a href="#">H3SE</a></li>
                <li><a href="#projects">Projects</a></li>


                <li><NavLink to={'/logistique'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeNavLink" : ""
                  }
                >Logistique Petrolière</NavLink></li>
                
                <li><NavLink to={'/rse'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeNavLink" : ""
                  }
                >RSE</NavLink></li>
                <li><NavLink to={'/rejoindre'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeNavLink" : ""
                  }
                >Nous Rejoindre</NavLink></li>
                <li><NavLink to={'/news'}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeNavLink" : ""
                  }
                >Actualité</NavLink></li>

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
