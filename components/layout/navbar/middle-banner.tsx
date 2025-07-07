

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Variants } from 'framer-motion';
import {
  PiPhoneLight,
  PiUserCircle,
  PiHeart,
  PiShoppingCart,
  PiMagnifyingGlass,
  PiList,
  PiX,
} from 'react-icons/pi';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/client';
import { Button } from '@/components/ui'; // make sure this matches your button import

export default function MiddleBanner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setIsAuthenticated(!!data?.user);
    };

    checkAuth();
  }, []);

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2, ease: 'easeInOut' } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const handleAuthClick = async () => {
    const supabase = createClient();

    if (isAuthenticated) {
      await supabase.auth.signOut();
      router.refresh();
    } else {
      if (pathname.includes('signup')) {
        router.push('/signin/password_signin');
      } else {
        router.push('/signin/signup');
      }
    }
  };

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

        
            <Button
              onClick={handleAuthClick}
              color="gray"
              variant="ghost"
              size="small"
            >
              {isAuthenticated ? 'Logout' : 'Login'}

            </Button>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="transition-transform"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden w-full bg-canvas-on-canvas shadow-md border-t border-b border-canvas-solid px-4 py-4 space-y-2 z-50"
          >
            <Link href="/products" className="block text-sm font-semibold">All Jewelry</Link>
            <Link href="/new" className="block text-sm font-semibold">New In</Link>
            <Link href="/earrings" className="block text-sm font-semibold">Earrings</Link>
            <Link href="/rings" className="block text-sm font-semibold">Rings</Link>
            <Link href="/necklaces" className="block text-sm font-semibold">Necklaces</Link>
            <Link href="/gifts" className="block text-sm font-semibold">Gifts</Link>
            <Button
              onClick={handleAuthClick}
              color="gray"
              variant="ghost"
              size="small"
            >
              {isAuthenticated ? 'Logout' : 'Login'}

            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
