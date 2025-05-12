import React, { useRef, useEffect } from "react";
import { SliderData } from "./sliderData";

const InfiniteSlider = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Effet infini avec CSS
    const sliderContent = container.querySelector(".slider-track");
    sliderContent.innerHTML += sliderContent.innerHTML; // Duplique le contenu pour l'effet infini

    return () => {
      // Nettoyage si nécessaire
      sliderContent.innerHTML = sliderContent.innerHTML.slice(0, sliderContent.innerHTML.length / 2);
    };
  }, []);

  return (
    <div ref={containerRef} className="slider-container">
      <div className="slider-track">
        {SliderData.map((slide, index) => (
          <div key={index} className="slider-item">
            <img
              src={slide.url}
              alt={slide.alt || `Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
