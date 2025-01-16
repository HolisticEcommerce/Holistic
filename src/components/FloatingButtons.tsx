'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const thirdSectionOffset = window.innerHeight * 2; // Approximately third section
      setShowScrollTop(currentScrollY > thirdSectionOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (navigator.vibrate && typeof navigator.vibrate === 'function') {
      navigator.vibrate(100);
    }
  };

  const buttonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    hover: { 
      scale: 1.1
    }
  };

  const containerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const arrowVariants = {
    animate: {
      y: [0, -2, 0, 2, 0],
      x: [0, 1, 0, -1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const glowVariants = {
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-8 right-4 z-50 flex flex-col gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919319695241"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group"
        variants={buttonVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 rounded-full transform transition-all duration-200 shadow-lg">
          <div className="absolute w-full h-full rounded-full animate-ping bg-green-500 opacity-20" />
          <FaWhatsapp className="text-white text-2xl" />
        </div>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+91-9319695241"
        className="relative group"
        variants={buttonVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200" />
        <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 rounded-full transform transition-all duration-200 shadow-lg">
          <div className="absolute w-full h-full rounded-full animate-ping bg-blue-500 opacity-20" />
          <FaPhone className="text-white text-2xl" />
        </div>
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="relative group"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100"
              variants={glowVariants}
              animate="animate"
            />
            <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-pink-600 rounded-full transform transition-all duration-200 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
              <motion.div
                variants={arrowVariants}
                animate="animate"
                className="relative z-10"
              >
                <FaArrowUp className="text-white text-2xl" />
              </motion.div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingButtons;