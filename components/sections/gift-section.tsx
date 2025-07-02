'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import forHer from '@/public/image/for-her.jpg';
import forHim from '@/public/image/for-him.jpg';

export default function GiftSection() {
  const cards = [
    { src: forHer, alt: 'Gift for Her', label: 'GIFT FOR HER' },
    { src: forHim, alt: 'Gift for Him', label: 'GIFT FOR HIM' },
  ];

  return (
    <section className="w-full py-10 bg-canvas-on-canvas">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-9 items-center justify-center px-6">
        {cards.map(({ src, alt, label }) => (
          <motion.div
            key={label}
            whileHover={{
              scale: 1.05,
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 10,
              },
            }}
            className="relative w-full md:w-1/2 max-w-[500px] aspect-[3/4] md:aspect-[4/5] rounded-md overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-all duration-300"
              priority
            />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-primary-bg flex items-center justify-center">
              <span className="text-canvas-text-contrast text-sm md:text-lg font-bold tracking-widest">
                <span className="block md:hidden transform -rotate-90 whitespace-nowrap">{label}</span>
                <span className="hidden md:block [writing-mode:vertical-rl] rotate-180">{label}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
