'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import diamondImg from '@/public/image/diamond.jpg';
import trendsImg from '@/public/image/trends.jpg';
import customImg from '@/public/image/custom.jpg';

const cardData = [
  {
    title: 'DIAMOND COLLECTION',
    description: 'Lorem ipsum dolor sit amet consectetur. Cum risus odio mauris.',
    image: diamondImg,
  },
  {
    title: 'LATEST TRENDS',
    description: 'Lorem ipsum dolor sit amet consectetur. Cum risus odio mauris.',
    image: trendsImg,
  },
  {
    title: 'CUSTOM JEWELRY',
    description: 'Lorem ipsum dolor sit amet consectetur. Cum risus odio mauris.',
    image: customImg,
  },
];

export default function CollectionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.clientWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <section className="w-full px-4 py-16">
      <h2 className="text-center max-w-[1280px] mx-auto text-canvas-text-contrast font-poppins text-2xl sm:text-4xl font-medium leading-[40px] tracking-[0.005em] mb-10">
        Lorem ipsum dolor sit amet consectetur. Bibendum eget pretium neque in
        adipiscing. Hendrerit ultricies turpis sed suspendisse ut. Non urna
        senectus arcu id sed aenean.
      </h2>

      <div
        ref={scrollRef}
        className={`${
          isMobile
            ? 'flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth gap-6'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        } max-w-6xl mx-auto`}
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-md shadow-md ${
              isMobile
                ? 'snap-center flex-shrink-0 w-full sm:w-[90%] md:w-[80%] lg:w-[450px] h-[500px]'
                : 'h-[500px]'
            }`}
          >
            {/* Image Section */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-base sm:text-lg max-w-sm">{item.description}</p>
              <button className="mt-6 px-6 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition">
                SHOP NOW →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll dots for mobile only */}
      {isMobile && (
        <div className="flex justify-center mt-6 space-x-3">
          {cardData.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-[#B38E65]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
