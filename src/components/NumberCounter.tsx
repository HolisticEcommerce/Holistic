'use client';

import { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface NumberCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export default function NumberCounter({ end, duration = 2000, suffix = '' }: NumberCounterProps) {
  const [isClient, setIsClient] = useState(false);
  const [count, setCount] = useState(end);
  const countRef = useRef(count);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    if (inView) {
      setCount(0);
      countRef.current = 0;
      const startTime = Date.now();
      
      const updateCount = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const nextCount = Math.floor(easeOutQuart * end);
          
          setCount(nextCount);
          countRef.current = nextCount;
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
          countRef.current = end;
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [end, duration, inView, isClient]);

  if (!isClient) {
    return (
      <span ref={ref} className="inline-block">
        {end.toLocaleString()}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}{suffix}
    </span>
  );
}
