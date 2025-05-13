import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <h2 className="outfit">Siège</h2>
          <p className="jost">Dépôt de Mpila-BP 14 522</p>
          <p className="jost">
            Dépôt des Hydrocarbures liquides BOULEVARD SASSOU NGUESSO, République du Congo
          </p>
          <p className="jost">+ 242 06 660 45 00</p>
          <p className="jost">secretariat@sclog.cg</p>
        </div>

        <div className="right">
          <h2 className="outfit">Horaires</h2>
          <p className="jost">7h30 - 17h30</p>
          <h2 className="outfit">Suivez-nous</h2>
          <a
            href="https://cg.linkedin.com/company/sclog-cg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suivez-nous sur LinkedIn"
          >
            <img src="/assets/linkedIn1.png" alt="LinkedIn" width="25px" />
          </a>
        </div>
      </div>

      <p className="bottom">&copy;2025 by sOmedia</p>
    </footer>
  );
};

export default Footer;
