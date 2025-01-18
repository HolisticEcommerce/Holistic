'use client';

import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);
  const [positions, setPositions] = useState<Position[]>([]);

  useEffect(() => {
    setIsClient(true);
    const newPositions = Array.from({ length: 30 }, () => ({
      x: Math.floor(Math.random() * 2000),
      y: Math.floor(Math.random() * 2000),
      delay: Math.random() * -15
    }));
    setPositions(newPositions);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full animate-twinkle"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            animationDelay: `${pos.delay}s`
          }}
        />
      ))}
    </div>
  );
}
