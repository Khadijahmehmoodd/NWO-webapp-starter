'use client';

// import { useRouter } from 'next/navigation';
import { useUser } from '@supabase/auth-helpers-react';
import { Tables } from '@/types_db';
import EditProduct from './edit-product';
import DeleteProduct from './delete-product';

type Product = Tables<'user_products'>;

export default function DisplayProduct({ product }: { product: Product }) {

  const user = useUser();

  const isOwner = user?.id === product.user_id;

  const imageSrc = product.image_url?.startsWith('http')
    ? product.image_url
    : `/product-images/public/${product.image_url ?? ''}`;

  return (
    <div className="bg-canvas-on-canvas rounded-lg shadow-md p-6 text-center">
   
      <div className="w-full max-w-md mx-auto mb-6 bg-primary-bg" >
        <img
          src={imageSrc || '/placeholder.png'}
          alt={product.name ?? 'Product'}
          className="w-full max-w-xs h-auto mx-auto rounded-lg object-contain"
        />
      </div>

     
      <h1 className="text-3xl font-bold text-canvas-text-contrast mb-2">{product.name}</h1>
      <p className="text-primary-text mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-success-text-contrast mb-4">$. {product.price}</p>

    
      {isOwner && (
        <div className="flex justify-items-center gap-4 mt-6 ">
          <EditProduct product={product} />
          <DeleteProduct productId={product.id} />
        </div>
      )}
    </div>
  );
}
