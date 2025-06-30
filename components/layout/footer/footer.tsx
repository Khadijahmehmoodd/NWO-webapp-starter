'use client';

// import Link from 'next/link';
import Image from 'next/image';
import { footerData } from '@/lib/constants';
import { FooterLink } from './footer-link';

import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-canvas-text-contrast text-canvas-on-canvas px-6 pt-8 pb-6">
      
      <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
      
        <div className="order-1 lg:order-none">
          <Image
            src="/image/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm sm:text-base order-3 lg:order-none">
          {footerData.map((link, idx) => (
            <FooterLink key={idx} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="flex gap-3 order-2 lg:order-none">
          <FaXTwitter className="text-xl hover:opacity-70 cursor-pointer" />
          <FaInstagram className="text-xl hover:opacity-70 cursor-pointer" />
          <FaYoutube className="text-xl hover:opacity-70 cursor-pointer" />
          <FaLinkedin className="text-xl hover:opacity-70 cursor-pointer" />
        </div>
      </div>

    
      <div className="my-6 h-[1px] w-full bg-white/30"></div>

     
      <p className="text-center text-sm text-white">
        © {currentYear} Copyright {currentYear} JEWELZ
      </p>
    </footer>
  );
}
