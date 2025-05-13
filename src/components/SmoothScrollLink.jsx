// components/SmoothScrollLink.jsx
import React from 'react';

const SmoothScrollLink = ({ to, children, className = '', ...props }) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

export default SmoothScrollLink;