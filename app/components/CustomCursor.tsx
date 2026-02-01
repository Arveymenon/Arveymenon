
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none hidden md:block">
      {/* Core Dot */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      
      {/* Lagging Ring */}
      <motion.div
        className="absolute top-0 left-0 border border-cyan-400/20 rounded-full mix-blend-screen"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          opacity: isHovering ? 0.8 : 0.3,
          backgroundColor: isHovering ? "rgba(34, 211, 238, 0.05)" : "transparent"
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </div>
  );
};

export default CustomCursor;
