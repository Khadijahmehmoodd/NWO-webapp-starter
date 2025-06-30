'use client';

import Image from 'next/image';
import newDesign from '@/public/image/new-design.jpg';
import locketSet from '@/public/image/locket-set.png';
import { ArrowRight } from 'lucide-react';

export default function NewDesignSection() {
  return (
    <section className="w-full px-4 md:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
       
        <div className="w-full md:w-[400px] aspect-square relative overflow-hidden rounded-md">
          <Image
            src={newDesign}
            alt="New Design"
            className="object-cover"
            fill
            priority
          />
        </div>

     
        <div className="flex-1 text-center md:text-left max-w-xl space-y-4">
          <p className="text-sm text-primary-text font-medium">New Design</p>
          <h2 className="text-4xl font-bold text-canvas-text-contrast leading-tight">
            Extraordinary <br /> Designs
          </h2>
          <p className="text-canvas-text-contrast text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Morbi quisque tellus convallis sit sed sagittis scelerisque.
            In turpis blandit fames sed. Volutpat ultricies sit donec eu. Suspendisse.
          </p>
          <p className="text-primary-text text-lg font-medium">
            Best gift for your loved one
          </p>

         
          <button className="bg-primary-text text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition">
            SHOP NOW <ArrowRight size={18} />
          </button>
        </div>

       
        <div className="w-full md:w-[200px] aspect-square flex flex-col items-center justify-center text-center p-4 rounded-md">
          <Image
            src={locketSet}
            alt="Beaded white pearl necklace"
            className="object-contain  bg-primary-bg"
            width={220}
            height={220}
            priority
          />
          <p className="text-sm text-canvas-text-contrast mt-3">
            Beaded white pearl necklace,<br />White Color
          </p>
          <p className="text-sm font-semibold text-canvas-text-contrast mt-1">$400.00</p>
        </div>
      </div>
    </section>
  );
}
