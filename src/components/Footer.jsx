import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
        <div className='left'>
            <h4>Siège</h4>
            <p>Dépôt de Mpila-BP 14 522</p>
            <p>Dépôt des Hydrocarbures liquides BOULEVARD SASSOU NGUESSO, République du Congo</p>
            <p> + 242 06 660 45 00</p>
            <p>secretariat@sclog.cg</p>
        </div>

        <div className='right'>
            <h4>Horaires</h4>
            <p>7h30-17h30</p>
            <br />
            <h3>Suivez-nous</h3>
            <img src="src/assets/linkedIn1.png" alt="" />
        </div>

        </div>

        <p className='bottom'>&copy;2025 by sOmedia</p>
    </footer>
  )
}

export default Footer
