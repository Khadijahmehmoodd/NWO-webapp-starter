'use client';

import { motion } from 'framer-motion';

export const TopBanner = () => {
  const message = 'Free express shipping with orders over $150 — SHOP NOW';

  return (
    <div className="w-full overflow-hidden bg-canvas-text-contrast text-canvas-on-canvas py-2 text-sm">
      <motion.div
        className="flex w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 40, 
          ease: 'linear',
        }}
      >
        
        {[...Array(10)].map((_, i) => (
          <span key={i} className="inline-block px-8 font-medium whitespace-nowrap">
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
