'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface NumberCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function NumberCounter({ end, duration = 2000, suffix = '' }: NumberCounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const startValue = countRef.current;
      
      const updateCount = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const nextCount = Math.floor(startValue + (end - startValue) * easeOutQuart);
          
          setCount(nextCount);
          countRef.current = nextCount;
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [end, duration, inView]);

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
