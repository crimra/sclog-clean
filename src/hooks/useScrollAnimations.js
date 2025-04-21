import { useEffect } from "react";

const useScrollAnimations = () => {
  useEffect(() => {
    // Fonction d'animation du compteur
    const animateCounter = (element, target) => {
      const duration = 2000; // 2 secondes
      let start = 0;
      const increment = target / (duration / 16); // Calcul pour ~60fps

      const updateCounter = () => {
        const current = parseInt(element.textContent, 10);
        if (current < target) {
          element.textContent = Math.ceil(current + increment);
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target < 10 ? `0${target}` : target;
        }
      };

      element.textContent = "0"; // Réinitialise à 0
      requestAnimationFrame(updateCounter);
    };

    // Configuration de l'observateur
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          obs.unobserve(entry.target);

          // Gestion spécifique des compteurs
          if (entry.target.classList.contains("huge-num")) {
            const target = parseInt(entry.target.dataset.target || entry.target.textContent, 10);
            if (!isNaN(target)) animateCounter(entry.target, target);
          }
        }
      });
    }, { threshold: 0.1 });

    // Sélection des éléments à observer
    const elements = document.querySelectorAll(
      ".slide-in, .slide-in-delay, .slide-down, .slide-delay, .huge-num"
    );

    elements.forEach(el => {
      // Initialisation spécifique pour les compteurs
      if (el.classList.contains("huge-num")) {
        el.dataset.target = el.textContent; // Stocke la valeur finale
      }
      observer.observe(el);
    });

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

export default useScrollAnimations;