'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import product1 from '@/public/image/necklace-sliver.png';
import product2 from '@/public/image/diamond-necklace.png';
import product3 from '@/public/image/heart-necklace.png';
import product4 from '@/public/image/gold-necklace.png';
import product5 from '@/public/image/flower-necklace.png';

const products = [
  {
    title: 'Essential Swarovski Necklace, Silver Color',
    price: '$400.00',
    image: product1,
  },
  {
    title: 'Essential Diamond Necklace, Silver Color',
    price: '$250.00',
    image: product2,
  },
  {
    title: 'Essential Heart Locket Set, Gold Color',
    price: '$550.00',
    image: product3,
  },
  {
    title: 'Beaded Round gold necklace, Gold Color',
    price: '$400.00',
    image: product4,
  },
  {
    title: 'Essential Flower Necklace, Gold Color',
    price: '$150.00',
    image: product5,
  },
];

export default function NewCollectionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const percent = (el.scrollLeft / maxScroll) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-6 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-canvas-text-contrast">
         NECKLACE
        </h2>

        <button className="hidden sm:inline-block border border-canvas-text-contrast rounded-full px-5 py-2 text-sm hover:bg-canvas-text-contrast hover:text-canvas-on-canvas transition">
          SEE ALL JEWELRY →
        </button>

        <button className="inline-block sm:hidden text-2xl text-canvas-text-contrast">
          →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={scrollRef}
          className="
            flex gap-4 overflow-x-auto sm:overflow-visible no-scrollbar 
            scroll-snap-x scroll-snap-mandatory pb-6
            sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5
          "
        >
          {products.map((item, idx) => (
            <div
              key={idx}
              className="
                scroll-snap-start
                bg-canvas-on-canvas rounded-md p-4 flex-shrink-0 cursor-pointer
                group transition duration-300
                flex flex-col justify-between h-[360px] w-full max-w-[300px] mx-auto
              "
            >
              <div className="w-full h-[220px] flex items-center justify-center bg-primary-bg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={180}
                  className="object-contain w-[180px] h-[180px]"
                />
              </div>

              <div className="mt-4 flex flex-col justify-between flex-1">
                <h3 className="text-sm font-medium text-canvas-text-contrast leading-tight">
                  {item.title}
                </h3>
                <p className="text-md font-bold mt-2 text-canvas-text-contrast">
                  {item.price}
                </p>
              </div>

              <div className="mt-4 h-[2px] w-1/2 rounded-full bg-primary-text group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        <div className="sm:hidden h-[2px] rounded-full w-full overflow-hidden mt-2 bg-canvas-on-canvas">
          <div
            className="h-[2px] rounded-full bg-primary-text transition-all duration-300"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
