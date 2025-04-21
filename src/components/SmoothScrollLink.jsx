// components/SmoothScrollLink.jsx
import React from 'react';

const SmoothScrollLink = ({ to, children, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(to.substring(1)); // Enlève le #
    
    if (element) {
      const headerHeight = 100; // Ajustez selon votre header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Met à jour l'URL sans rechargement
      window.history.pushState(null, '', to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;