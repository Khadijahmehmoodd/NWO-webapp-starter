'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  PiPhoneLight,
  PiUserCircle,
  PiHeart,
  PiShoppingCart,
  PiMagnifyingGlass,
  PiList,
  PiX,
} from 'react-icons/pi';

export default function MiddleBanner() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-16 px-4 sm:px-6 md:px-10 py-3 text-canvas-text-contrast bg-canvas-on-canvas border-b border-canvas-text-contrast flex items-center justify-between">
       
        <div className="hidden md:flex items-center gap-2">
          <PiPhoneLight className="text-lg" />
          <Link href="/contact" className="hover:underline">
            Free call: +44 558 6648 89
          </Link>
        </div>

    
        <div>
          <Link href="/">
            <Image src="/image/logo.png" alt="Logo" width={60} height={20} />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1">
              <PiMagnifyingGlass className="text-lg" />
              <a href="#" className="hover:underline">Search</a>
            </div>
            <div className="flex items-center gap-1">
              <PiUserCircle className="text-lg" />
              <a href="#" className="hover:underline">User</a>
            </div>
            <div className="flex items-center gap-1">
              <PiHeart className="text-lg" />
              <a href="#" className="hover:underline">Wishlist</a>
            </div>
            <div className="flex items-center gap-1">
              <PiShoppingCart className="text-lg" />
              <a href="#" className="hover:underline">Cart</a>
            </div>
          </div>

      
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <PiX className="text-2xl" />
              ) : (
                <PiList className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden w-full  justify-items-center bg-canvas-on-canvas shadow-md border-t border-b border-canvas-solid px-4 py-4 space-y-2">
          <Link href="/all" className="block text-sm font-semibold">All Jewelry</Link>
          <Link href="/new" className="block text-sm font-semibold">New In</Link>
          <Link href="/earrings" className="block text-sm font-semibold">Earrings</Link>
          <Link href="/rings" className="block text-sm font-semibold">Rings</Link>
          <Link href="/necklaces" className="block text-sm font-semibold">Necklaces</Link>
          <Link href="/gifts" className="block text-sm font-semibold">Gifts</Link>
        </div>
      )}
    </>
  );
}
