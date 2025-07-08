'use client';

import ProductCard from './product-card';
import type { Tables } from '@/types_db';

type Product = Tables<'user_products'>;

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-10">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center col-span-full">No products found.</p>
      )}
    </div>
  );
}
