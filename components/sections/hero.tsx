import Image from 'next/image';
import hero from '@/public/image/hero.jpg';

export default function Hero() {
  return (
    <section className="relative w-full h-[604px] overflow-hidden">
     
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={hero}
          alt="background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <p className="text-white text-sm tracking-wide">*ENJOY TOUR 50% OFF</p>
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold max-w-[90%] sm:max-w-3xl leading-tight">
          Jewelry is a way of keeping memories alive
        </h1>
        <button className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          SHOP NOW →
        </button>
      </div>
    </section>
  );
}
