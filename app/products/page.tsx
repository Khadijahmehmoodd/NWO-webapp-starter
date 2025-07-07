
'use client';

import { useEffect, useState } from 'react';
import ProductList from '@/components/products/product-list';
import { createClient } from '@/lib/utils/supabase/client';
import type { Tables } from '@/types_db';

type Product = Tables<'user_products'>;

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const supabase = createClient();

  const fetchProducts = async () => {
    const { data } = await supabase.from('user_products').select('*');
    if (data) setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-10 mt-10 mb-8 max-w-[1000px] mx-auto bg-canvas-on-canvas  flex justify-between items-center mb-6">
        <h1 className="text-5xl font-extrabold text-center mt-10 mb-8 text-primary-solid-hover drop-shadow-md transition-all duration-500">My Products</h1>
        <a
          href="/products/add"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition  mt-10 mb-8 "
        >
  + Add Product
        </a>

      </div>
      <ProductList products={products} />
    </div>
  );
}
