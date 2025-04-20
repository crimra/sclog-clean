import { useEffect } from "react";

const useScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    const elements = document.querySelectorAll(
      ".slide-in, .slide-in-delay, .slide-down, .slide-delay"
    );
  
    elements.forEach(el => observer.observe(el));
  
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
};

export default useScrollAnimations;
