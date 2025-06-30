'use client';

import Image from 'next/image';

const imageList = [
  '/image/image1.jpg',
  '/image/image2.jpg',
  '/image/image3.jpg',
  '/image/image4.jpg',
  '/image/image5.jpg',
];

export default function GallerySection() {
  return (
    <section className="w-full bg-canvas-on-canvas px-2 py-4">
      <div className="grid grid-cols-5 gap-2">
        {imageList.map((src, idx) => (
          <div key={idx} className="w-full aspect-[4/5] relative overflow-hidden">
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
