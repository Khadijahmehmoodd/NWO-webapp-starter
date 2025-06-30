// components/layout/footer/footer-link.tsx
'use client';

import React from 'react';
import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  label: string;
}

export const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className='text-white hover:underline text-sm sm:text-base'
  >
    {label}
  </Link>
);
