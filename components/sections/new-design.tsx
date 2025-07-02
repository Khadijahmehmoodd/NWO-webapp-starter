'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import newDesign from '@/public/image/new-design.jpg';
import locketSet from '@/public/image/locket-set.png';
import { ArrowRight } from 'lucide-react';

export default function NewDesignSection() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ amount: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="w-full lg:w-[33%] aspect-square relative overflow-hidden rounded-md"
        >
          <Image
            src={newDesign}
            alt="New Design"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        
        <div className="w-full lg:w-[40%] text-center lg:text-left space-y-4">
          <p className="text-primary-text text-base font-medium">New Design</p>

          <h2 className="text-4xl md:text-5xl font-bold text-canvas-text-contrast leading-tight">
            Extraordinary <br /> Designs
          </h2>

          <p className="text-canvas-text-contrast text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Morbi quisque tellus convallis sit sed
            sagittis scelerisque. In turpis blandit fames sed. Volutpat ultricies sit donec eu.
            Suspendisse.
          </p>

          <p className="text-primary-text text-lg font-medium">
            Best gift for your loved one
          </p>

          <button className="mt-4 inline-flex items-center justify-center gap-2 bg-primary-text text-canvas-on-canvas px-6 py-3 rounded-full hover:opacity-90 transition">
            SHOP NOW <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Product - Scroll In */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ amount:0.3 }}
          className="w-full lg:w-[25%] flex flex-col items-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-bg w-full aspect-square flex items-center justify-center rounded-md transition-transform"
          >
            <Image
              src={locketSet}
              alt="Beaded white pearl necklace"
              width={180}
              height={180}
              className="object-contain"
              priority
            />
          </motion.div>

          <p className="text-sm text-canvas-text-contrast mt-3 text-center">
            Diamond Necklace,<br />Silver Color
          </p>
          <p className="text-sm font-semibold text-canvas-text-contrast mt-1 text-center">
            $400.00
          </p>
        </motion.div>

      </div>
    </section>
  );
}
