import React from 'react'

const Slider = ({ }) => {
  const sliderTrack = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slideCounters = document.querySelectorAll('.slide-counter');
  
  let currentIndex = 0;
  let slideWidth = slides[0].clientWidth;

  function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      slideCounters.forEach((counter, index) => {
          counter.textContent = `${index + 1} / ${slides.length}`;
          counter.style.display = index === currentIndex ? 'block' : 'none';
      });
  }

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  });

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  });

  // Navigation au clavier
  document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') nextBtn.click();
      if (e.key === 'ArrowLeft') prevBtn.click();
  });

  // Redimensionnement fenêtre
  window.addEventListener('resize', () => {
      slideWidth = slides[0].clientWidth;
      updateSlider();
  });
  
    return (
      <div class="slider-container">
        <div class="slider-track">
            <div class="slide">
                <img src="https://source.unsplash.com/random/1200x500?mountain" alt="Montagne"/>
                <div class="slide-counter">1 / 5</div>
            </div>
            <div class="slide">
                <img src="https://source.unsplash.com/random/1200x500?forest" alt="Forêt"/>
                <div class="slide-counter">2 / 5</div>
            </div>
            <div class="slide">
                <img src="https://source.unsplash.com/random/1200x500?beach" alt="Plage"/>
                <div class="slide-counter">3 / 5</div>
            </div>
            <div class="slide">
                <img src="https://source.unsplash.com/random/1200x500?city" alt="Ville"/>
                <div class="slide-counter">4 / 5</div>
            </div>
            <div class="slide">
                <img src="https://source.unsplash.com/random/1200x500?space" alt="Espace"/>
                <div class="slide-counter">5 / 5</div>
            </div>
        </div>
        
        <button class="slider-btn prev"></button>
        <button class="slider-btn next"></button>
      </div>
    );
  };
  
  export default Slider;