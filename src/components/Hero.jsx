import React, { useState } from 'react';

const Hero = () => {
  const [loading, setLoading] = useState(true);

  // Compteur pour savoir quand tout est chargé
  const [loadedCount, setLoadedCount] = useState(0);
  const totalToLoad = 2; // 1 image + 1 vidéo

  const handleAssetLoaded = () => {
    setLoadedCount(count => {
      const next = count + 1;
      if (next === totalToLoad) setLoading(false);
      return next;
    });
  };

  return (
    <div className="hero">
      {loading && <div className="loader">Chargement...</div>}

      <img
        src="/assets/hero-image.jpg"
        alt="Hero"
        style={{ display: loading ? 'none' : 'block' }}
        onLoad={handleAssetLoaded}
      />

      <video
        src="/assets/acceuil.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ display: loading ? 'none' : 'block' }}
        onLoadedData={handleAssetLoaded}
      />
    </div>
  );
};

export default Hero;
