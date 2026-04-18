import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PageSliderProps {
  children: React.ReactNode[];
  page: number;
  setPage: (page: number) => void;
}

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const PageSlider: React.FC<PageSliderProps> = ({ children, page, setPage }) => {
  const [direction, setDirection] = useState(0);
  const lastScroll = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;
      const now = Date.now();
      if (now - lastScroll.current < 700) return; // evita scroll rápido
      lastScroll.current = now;
      if (e.deltaY > 0 && page < children.length - 1) {
        setDirection(1);
        setPage(Math.min(page + 1, children.length - 1));
      } else if (e.deltaY < 0 && page > 0) {
        setDirection(-1);
        setPage(Math.max(page - 1, 0));
      }
    };

    // Soporte para swipe táctil
    const minSwipe = 50;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      touchEndY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = () => {
      const deltaY = touchStartY.current - touchEndY.current;
      const now = Date.now();
      if (Math.abs(deltaY) > minSwipe && now - lastScroll.current > 700) {
        lastScroll.current = now;
        if (deltaY > 0 && page < children.length - 1) {
          setDirection(1);
          setPage(Math.min(page + 1, children.length - 1));
        } else if (deltaY < 0 && page > 0) {
          setDirection(-1);
          setPage(Math.max(page - 1, 0));
        }
      }
    };

    const node = containerRef.current;
    node?.addEventListener('wheel', handleWheel, { passive: false });
    node?.addEventListener('touchstart', handleTouchStart, { passive: false });
    node?.addEventListener('touchmove', handleTouchMove, { passive: false });
    node?.addEventListener('touchend', handleTouchEnd, { passive: false });
    return () => {
      node?.removeEventListener('wheel', handleWheel);
      node?.removeEventListener('touchstart', handleTouchStart);
      node?.removeEventListener('touchmove', handleTouchMove);
      node?.removeEventListener('touchend', handleTouchEnd);
    };
  }, [page, children.length]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden touch-none select-none">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute w-full h-full overflow-y-auto"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {children[page]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
