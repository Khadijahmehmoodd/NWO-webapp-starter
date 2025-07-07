'use client';

import Link from 'next/link';
import type { Tables } from '@/types_db';
import { motion } from 'framer-motion';

type Product = Tables<'user_products'>;

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="border rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer bg-canvas-on-canvas p-5 items-center"
      >
        <div className="w-full h-64 mb-4 overflow-hidden rounded-md flex items-center justify-center">
          <img
            src={product.image_url ?? '/placeholder.png'}
            alt={product.name ?? 'Product'}
            className="h-full w-full object-contain bg-primary-bg"
          />
        </div>

        <div className="px-1">
          <h2 className="text-xl font-semibold text-primary-solid-hover mb-1 justify-center">{product.name}</h2>
          <p className="text-sm text-primary-solid line-clamp-2 mb-2 items-center">
            {product.description}
          </p>
          <p className="font-bold text-base text-primary-solid-hover">
            $. {product.price}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
