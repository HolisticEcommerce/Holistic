'use client';

import { useEffect } from 'react';
import '../styles/stars.css';

const StarryBackground = () => {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars');
      if (!starsContainer) return;

      // Clear existing stars
      starsContainer.innerHTML = '';

      // Create regular stars
      const numStars = 100;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        const size = Math.random() < 0.5 ? 'small' : Math.random() < 0.8 ? 'medium' : 'large';
        star.className = `star ${size}`;
        star.style.setProperty('--duration', `${2 + Math.random() * 4}s`);
        star.style.setProperty('--delay', `${Math.random() * 2}s`);
        star.style.left = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
      }

      // Create shooting stars
      const numShootingStars = 3;
      for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 50}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(shootingStar);
      }
    };

    createStars();
    const interval = setInterval(createStars, 5000); // Recreate stars every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return <div className="stars" />;
};

export default StarryBackground;
