import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          } else {
            entry.target.classList.remove('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      '.slide-in, .slide-in-delay, .slide-down, .slide-delay'
    );
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimations;