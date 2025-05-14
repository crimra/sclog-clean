// components/SmoothScrollLink.jsx
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SmoothScrollLink = ({ to, className = '', children, setBurgerOpen, linkRef }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const internalRef = useRef();
  const ref = linkRef || internalRef;

  const handleClick = (e) => {
    e.preventDefault();
    const anchor = to.startsWith('#') ? to : `#${to}`;
    if (location.pathname !== '/') {
      navigate(`/${anchor}`);
    } else {
      const el = document.getElementById(anchor.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setBurgerOpen(false);
    // Retire le focus après le clic
    if (ref.current) ref.current.blur();
  };

  return (
    <a
      href={to}
      className={className}
      onClick={handleClick}
      ref={ref}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;