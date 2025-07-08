'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/client';
import { Button } from '@/components/ui';

export default function MiddleBanner() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session?.user);
    };

    checkSession();

    // React to login/logout events within the same or other tabs
    const handleStorage = () => checkSession();
    window.addEventListener('storage', handleStorage);

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session?.user);
      setRenderKey(prev => prev + 1); // force re-render
    });

    return () => {
      window.removeEventListener('storage', handleStorage);
      listener?.subscription?.unsubscribe(); // cleanup listener
    };
  }, []);

  const handleAuthClick = async () => {
    const supabase = createClient();

    if (isAuthenticated) {
      await supabase.auth.signOut();
      localStorage.setItem('auth-event', Date.now().toString()); // notify storage listeners
      router.push('/');
    } else {
      router.push('/signin/password_signin');
    }
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      <div className="w-full h-16 px-4 sm:px-6 md:px-10 py-3 text-canvas-text-contrast bg-canvas-on-canvas border-b border-canvas-text-contrast flex items-center justify-between">
        <div className="hidden md:flex items-center gap-2">
          <PiPhoneLight className="text-lg" />
          <Link href="/" className="hover:underline">
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
              <Link href="/" className="hover:underline">Search</Link>
            </div>
            <div className="flex items-center gap-1">
              <PiUserCircle className="text-lg" />
              <Link href="/account" className="hover:underline">User</Link>
            </div>
            <div className="flex items-center gap-1">
              <PiHeart className="text-lg" />
              <Link href="/" className="hover:underline">Wishlist</Link>
            </div>
            <div className="flex items-center gap-1">
              <PiShoppingCart className="text-lg" />
              <Link href="/" className="hover:underline">Cart</Link>
            </div>

            {/* 👇 Login / Logout */}
            <Button
              key={renderKey}
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
              {menuOpen ? <PiX className="text-2xl" /> : <PiList className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
            <Link href="/products" className="block text-sm font-semibold">New In</Link>
            <Link href="/products" className="block text-sm font-semibold">Earrings</Link>
            <Link href="/products" className="block text-sm font-semibold">Rings</Link>
            <Link href="/products" className="block text-sm font-semibold">Necklaces</Link>
            <Link href="/products" className="block text-sm font-semibold">Gifts</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
