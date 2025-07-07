'use client';

import { useEffect, useState } from 'react';
import ProductCard from './product-card';
import { createClient } from '@/lib/utils/supabase/client';
import type { Tables } from '@/types_db';

type Product = Tables<'user_products'>;

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchUserProducts = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        setProducts([]); 
        setLoading(false);
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
      setLoading(false);
    };

    fetchUserProducts();
  }, []);

  if (loading) return <p className="p-4 text-center">Loading products...</p>;

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
