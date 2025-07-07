'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import DisplayProduct from '@/components/products/display-product';
import { Tables } from '@/types_db';
import { createClient } from '@/lib/utils/supabase/client';
import DeleteProduct from '@/components/products/delete-product';
import EditProduct from '@/components/products/edit-product';

type Product = Tables<'user_products'>;

export default function ProductDetailPage() {
  const params = useParams();
  const id =
    typeof params.id === 'string'
      ? params.id
      : Array.isArray(params.id)
        ? params.id[0]
        : '';

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from('user_products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error(' Failed to fetch product:', error.message);
      } else {
        setProduct(data);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [id, supabase]);

  if (loading) return <p className="text-center p-6">Loading...</p>;
  if (!product) return <p className="text-center p-6 text-red-600">Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-20 justify-items-center">
      <DisplayProduct product={product} />
      <div className=" mt-4 flex gap-4 justify-items-center">
        <DeleteProduct productId={product.id}/>
        <EditProduct product={product} />
      </div>
    </div>
  );
}
