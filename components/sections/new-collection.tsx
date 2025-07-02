// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';
// import product1 from '@/public/image/earrings.png';
// import product2 from '@/public/image/rings.png';
// import product3 from '@/public/image/locket-set.png';
// import product4 from '@/public/image/pearl-necklace.png';
// import product5 from '@/public/image/bracelet.png';

// const products = [
//   {
//     title: 'Essential Figaro Earrings Set, Gold Color',
//     price: '$400.00',
//     image: product1,
//   },
//   {
//     title: 'Essential begedan Rings, Silver Color',
//     price: '$250.00',
//     image: product2,
//   },
//   {
//     title: 'Essential Gekani Locket Set, Silver Color',
//     price: '$550.00',
//     image: product3,
//   },
//   {
//     title: 'Beaded white pearl necklace, White Color',
//     price: '$400.00',
//     image: product4,
//   },
//   {
//     title: 'Swarovski AG Bracelet Jewelry, Silver Color',
//     price: '$150.00',
//     image: product5,
//   },
// ];

// export default function NewCollectionsSection() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [scrollPercent, setScrollPercent] = useState(0);

//   const handleScroll = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     const maxScroll = el.scrollWidth - el.clientWidth;
//     const percent = (el.scrollLeft / maxScroll) * 100;
//     setScrollPercent(percent);
//   };

//   useEffect(() => {
//     const el = scrollRef.current;
//     if (!el) return;
//     el.addEventListener('scroll', handleScroll);
//     return () => el.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <section className="w-full px-4 py-16">
//       <div className="max-w-7xl mx-auto">
    
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl md:text-4xl font-bold text-canvas-text-contrast">
//             OUR NEW IN PRODUCTS
//           </h2>
//           <button className="hidden sm:inline-flex items-center border border-canvas-text-contrast rounded-full px-6 py-2 text-sm hover:bg-canvas-text-contrast hover:text-white transition">
//             SEE ALL JEWELRY →
//           </button>
//         </div>

     
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="
//               flex gap-6 overflow-x-auto sm:overflow-visible no-scrollbar
//               scroll-snap-x scroll-snap-mandatory sm:grid sm:grid-cols-5
//             "
//           >
//             {products.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="
//                   scroll-snap-start
//                   min-w-[250px] sm:min-w-0 sm:w-full
//                   bg-canvas-on-canvas p-4 rounded-md flex-shrink-0
//                   cursor-pointer group transition duration-300
//                 "
//               >
//                 <div className="w-full h-[100px] flex items-center justify-center bg-primary-bg">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={180}
//                     height={180}
//                     className="object-contain w-[180px] h-[100px]"
//                   />
//                 </div>

//                 <h3 className="text-sm font-medium mt-4 text-canvas-text-contrast leading-tight">
//                   {item.title}
//                 </h3>
//                 <p className="text-md font-bold mt-2 text-canvas-text-contrast">{item.price}</p>
//                 <div className="mt-4 h-[2px] w-1/2 bg-primary-text rounded-full group-hover:w-full transition-all duration-300"></div>
//               </div>
//             ))}
//           </div>

        
//           <div className="sm:hidden h-[2px] rounded-full w-full overflow-hidden mt-4 bg-canvas-on-canvas">
//             <div
//               className="h-[2px] rounded-full bg-primary-text transition-all duration-300"
//               style={{ width: `${scrollPercent}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

import product1 from '@/public/image/earrings.png';
import product2 from '@/public/image/rings.png';
import product3 from '@/public/image/locket-set.png';
import product4 from '@/public/image/pearl-necklace.png';
import product5 from '@/public/image/bracelet.png';

const products = [
  {
    title: 'Essential Figaro Earrings Set, Gold Color',
    price: '$400.00',
    image: product1,
  },
  {
    title: 'Essential begedan Rings, Silver Color',
    price: '$250.00',
    image: product2,
  },
  {
    title: 'Essential Gekani Locket Set, Silver Color',
    price: '$550.00',
    image: product3,
  },
  {
    title: 'Beaded white pearl necklace, White Color',
    price: '$400.00',
    image: product4,
  },
  {
    title: 'Swarovski AG Bracelet Jewelry, Silver Color',
    price: '$150.00',
    image: product5,
  },
];

export default function NewCollectionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isDesktop, setIsDesktop] = useState(false);
  const [paused, setPaused] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop && !paused) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isDesktop, paused]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const percent = (el.scrollLeft / maxScroll) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isDesktop) return;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-canvas-text-contrast">
            OUR NEW IN PRODUCTS
          </h2>
          <button className="hidden sm:inline-flex items-center border border-canvas-text-contrast rounded-full px-6 py-2 text-sm hover:bg-canvas-text-contrast hover:text-white transition">
            SEE ALL JEWELRY →
          </button>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={scrollRef}
            className={`flex gap-6 ${
              isDesktop ? 'overflow-visible' : 'overflow-x-auto scroll-snap-x scroll-snap-mandatory no-scrollbar'
            }`}
            animate={controls}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {[...products, ...products].map((item, idx) => (
              <div
                key={idx}
                className="
                  scroll-snap-start
                  w-[240px] flex-shrink-0
                   p-4 rounded-md 
                  cursor-pointer group transition duration-300
                "
              >
                <div className="w-full h-[220px] flex items-center justify-center bg-primary-bg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={180}
                    height={180}
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-sm font-medium mt-4 text-canvas-text-contrast leading-tight">
                  {item.title}
                </h3>
                <p className="text-md font-bold mt-2 text-canvas-text-contrast">{item.price}</p>
                <div className="mt-4 h-[2px] w-1/2 bg-primary-text rounded-full group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </motion.div>

          {!isDesktop && (
            <div className="sm:hidden h-[2px] rounded-full w-full overflow-hidden mt-4 bg-canvas-on-canvas">
              <div
                className="h-[2px] rounded-full bg-primary-text transition-all duration-300"
                style={{ width: `${scrollPercent}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

