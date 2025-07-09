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
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
      console.error('No session found:', sessionError?.message);
      setProducts([]);
      return;
    }

    const { data, error } = await supabase
      .from('user_products')
      .select('*')
      .eq('user_id', session.user.id);

    if (error) {
      console.error('Error fetching user products:', error.message);
    }

    setProducts(data || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-10 mt-10 max-w-[1000px] mx-auto bg-canvas-on-canvas flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center sm:text-left text-primary-solid-hover drop-shadow-md transition-all duration-500">
          My Products
        </h1>
        <a
          href="/products/add"
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm sm:text-base transition"
        >
          + Add Product
        </a>
      </div>
      <ProductList products={products} />
    </div>
  );
}

