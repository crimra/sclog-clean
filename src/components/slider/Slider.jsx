import React, { useRef, useEffect } from "react";
import { SliderData } from "./sliderData";

const InfiniteSlider = () => {
  const containerRef = useRef(null);
  const speed = 0.5; // Vitesse du scroll

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // effet infini
    const sliderContent = container.querySelector(".slider-track");
    sliderContent.innerHTML += sliderContent.innerHTML;

    let animationFrameId;
    let scroll = 0;

    const animate = () => {
      scroll += speed;
      if (scroll >= sliderContent.scrollWidth / 2) {
        scroll = 0;
      }
      container.scrollLeft = scroll;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap slider-container"
      style={{ height: "14rem" }}
    >
      <div className="slider-track flex gap-6">
        {SliderData.map((slide, index) => (
          <div
            key={index}
            className="w-[300px] h-[200px] flex-shrink-0"
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
