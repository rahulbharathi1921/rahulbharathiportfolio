import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { cn } from '../lib/utils';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Faster spring settings for "award-winning" feel
  const mainSpringConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const ringSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };

  const cursorX = useSpring(mouseX, mainSpringConfig);
  const cursorY = useSpring(mouseY, mainSpringConfig);
  
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-1.5 h-1.5 bg-yellow-400 rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_rgba(251,191,36,0.8)]",
          isClicking && "scale-150"
        )}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-8 h-8 border border-yellow-400/50 rounded-full pointer-events-none z-[9999]",
          isHovered && "w-16 h-16 border-yellow-400 bg-yellow-400/10 scale-110",
          isClicking && "scale-90 opacity-50"
        )}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150 }}
      >
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-[8px] font-bold text-yellow-600 tracking-tighter">VIEW</span>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
