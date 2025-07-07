// app/products/layout.tsx
import React from 'react';
import '@/styles/main.css';
import type { Metadata } from 'next';
import { Footer, Navbar } from '@/components/layout';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My awesome Next.js app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
