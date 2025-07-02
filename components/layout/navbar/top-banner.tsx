'use client';

import { motion } from 'framer-motion';

export const TopBanner = () => {
  const message = 'Free express shipping with orders over $150 — SHOP NOW';

  return (
    <div className="w-full overflow-hidden bg-canvas-text-contrast text-canvas-on-canvas py-2 text-sm whitespace-nowrap">
      <motion.div
        className="flex gap-16 animate-marquee"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: 'linear',
        }}
      >
        
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-medium">
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
