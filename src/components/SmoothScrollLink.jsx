// components/SmoothScrollLink.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SmoothScrollLink = ({ to, className = '', children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const anchor = to.startsWith('#') ? to : `#${to}`;
    if (location.pathname !== '/') {
      // Navigue vers la home avec l'ancre
      navigate(`/${anchor}`);
    } else {
      // Déjà sur la home, scroll smooth
      const el = document.getElementById(anchor.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;