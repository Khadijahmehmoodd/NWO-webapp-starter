'use client';

import Image from 'next/image';
import forHer from '@/public/image/for-her.jpg';
import forHim from '@/public/image/for-him.jpg';

export default function GiftSection() {
  return (
    <section className="w-full py-10 bg-canvas-on-canvas">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-9 items-center justify-center px-6">
     
        <div className="relative w-full md:w-1/2 max-w-[500px] aspect-[3/4] rounded-md overflow-hidden shadow-md">
          <Image
            src={forHer}
            alt="Gift for Her"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-primary-bg flex items-center justify-center">
            <span className="text-canvas-text-contrast text-sm md:text-lg font-bold tracking-widest">
              <span className="block md:hidden transform -rotate-90 whitespace-nowrap">GIFT FOR HER</span>
              <span className="hidden md:block [writing-mode:vertical-rl] rotate-180">GIFT FOR HER</span>
            </span>
          </div>
        </div>

        {/* Gift for Him */}
        <div className="relative w-full md:w-1/2 max-w-[500px] aspect-[3/4] rounded-md overflow-hidden shadow-md">
          <Image
            src={forHim}
            alt="Gift for Him"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-primary-bg flex items-center justify-center">
            <span className="text-canvas-text-contrast text-sm md:text-lg font-bold tracking-widest">
              <span className="block md:hidden transform -rotate-90 whitespace-nowrap">GIFT FOR HIM</span>
              <span className="hidden md:block [writing-mode:vertical-rl] rotate-180">GIFT FOR HIM</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
