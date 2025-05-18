import React, { useEffect, useState } from 'react';

const MainHero = () => {
   const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 600);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const videoSrc = isMobile
      ? '/assets/accueil-phone.mp4'
      : '/assets/accueil.mp4';
  
    return (
      <video
        className="hero-media"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: 'auto' }}
      />
    );
  };

export default MainHero

