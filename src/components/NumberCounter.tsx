'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface NumberCounterProps {
  end: number | string;
  duration?: number;
  suffix?: string;
}

export default function NumberCounter({ end, duration = 2000, suffix = '' }: NumberCounterProps) {
  const finalNumber = typeof end === 'string' ? parseInt(end) : end;
  const [count, setCount] = useState(finalNumber);
  const countRef = useRef(0);
  const animationRef = useRef<number>(1);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;
    
    const startValue = 0;
    let startTime: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      
      if (elapsedTime < duration) {
        const progress = elapsedTime / duration;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const nextCount = Math.floor(startValue + (finalNumber - startValue) * easeOutQuart);
        
        setCount(nextCount);
        countRef.current = nextCount;
        animationRef.current = requestAnimationFrame(updateCount);
      } else {
        setCount(finalNumber);
      }
    };
    
    animationRef.current = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, finalNumber, duration]);

  return (
    <div ref={ref}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}
