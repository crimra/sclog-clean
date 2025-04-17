import { useEffect } from "react";

const useGlobalTitleAnimations = () => {
  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          observer1.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const text = entry.target.textContent;
          entry.target.textContent = '';

          text.split(' ').forEach((word, i) => {
            const wordSpan = document.createElement('span');
            wordSpan.textContent = word;
            wordSpan.style.display = 'inline-block';
            wordSpan.style.animation = `wordAppear 0.5s ${i * 0.2}s forwards`;
            wordSpan.style.opacity = '0';
            wordSpan.style.transform = 'translateX(-20px)';
            entry.target.appendChild(wordSpan);

            if (i < text.split(' ').length - 1) {
              entry.target.appendChild(document.createTextNode(' '));
            }
          });

          observer2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const titles1 = document.querySelectorAll('.title1');
    const titles2 = document.querySelectorAll('.title2');

    titles1.forEach(el => observer1.observe(el));
    titles2.forEach(el => observer2.observe(el));

    return () => {
      titles1.forEach(el => observer1.unobserve(el));
      titles2.forEach(el => observer2.unobserve(el));
    };
  }, []);
};

export default useGlobalTitleAnimations;
