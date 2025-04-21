import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-90px 0px -50% 0px', // Ajustez selon besoin
        threshold: 0.1
      }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

export default useScrollSpy;