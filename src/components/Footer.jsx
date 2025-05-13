import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <h2 className="outfit">{t('footer.siege')}</h2>
          <p className="jost">{t('footer.address')}</p>
          <p className="jost">{t('footer.address2')}</p>
          <p className="jost">{t('footer.phone')}</p>
          <p className="jost">{t('footer.email')}</p>
        </div>

        <div className="right">
          <h2 className="outfit">{t('footer.horaires')}</h2>
          <p className="jost">{t('footer.hours')}</p>
          <h2 className="outfit">{t('footer.follow')}</h2>
          <a
            href="https://cg.linkedin.com/company/sclog-cg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('footer.follow') + ' LinkedIn'}
          >
            <img src="/assets/linkedIn1.png" alt="LinkedIn" width="25px" />
          </a>
        </div>
      </div>

      <p className="bottom">{t('footer.copyright')}</p>
    </footer>
  );
};

export default Footer;
