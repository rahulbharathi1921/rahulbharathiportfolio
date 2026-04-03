import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { cn } from '../lib/utils';

/** Subtle accent cursor dot. Ring removed for better UX. */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { damping: 30, stiffness: 300, mass: 0.5 });
  const cursorY = useSpring(mouseY, { damping: 30, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-1.5 h-1.5 bg-secondary rounded-full pointer-events-none z-[10000] shadow-[0_0_8px_rgba(59,130,246,0.6)]"
      style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
    />
  );
}
