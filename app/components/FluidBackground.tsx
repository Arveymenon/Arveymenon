
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030303]">
      {/* Precision Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Crosshairs */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-white" />
      </div>

      {/* Atmospheric Glow */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[100vw] h-[100vw] bg-cyan-900/10 rounded-full blur-[180px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
      
      {/* Subtle Scanlines */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 50%, #fff 50%)',
        backgroundSize: '100% 4px'
      }} />
    </div>
  );
};

export default FluidBackground;
