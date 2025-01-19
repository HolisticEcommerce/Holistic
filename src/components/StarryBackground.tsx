'use client';

import { useEffect, useRef } from 'react';
import '../styles/stars.css';

const StarryBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      const starsContainer = starsRef.current;
      if (!starsContainer) return;

      const fragment = document.createDocumentFragment();
      
      // Create regular stars
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() < 0.5 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
        star.className = `star ${size}`;
        star.style.cssText = `
          --duration: ${2 + Math.random() * 4}s;
          --delay: ${Math.random() * 2}s;
          left: ${Math.random() * 100}%;
          transform: translate3d(0, 0, 0);
        `;
        fragment.appendChild(star);
      }

      // Create shooting stars
      const numShootingStars = 3;
      for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.cssText = `
          top: ${Math.random() * 50}%;
          left: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 3}s;
          transform: translate3d(0, 0, 0);
        `;
        fragment.appendChild(shootingStar);
      }

      // Clear and append in a single operation
      starsContainer.innerHTML = '';
      starsContainer.appendChild(fragment);
    };

    createStars();
    
    // Reduce recreation frequency to improve performance
    const interval = setInterval(createStars, 10000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={starsRef} className="stars" />;
};

export default StarryBackground;
