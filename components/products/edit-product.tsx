// 'use client';

// import { useRouter } from 'next/navigation';
// import { Tables } from '@/types_db';

// type Product = Tables<'user_products'>;

// export default function EditProduct({ product }: { product: Product }) {
//   const router = useRouter();

//   const handleEdit = () => {
//     if (!product?.id) {
//       alert('Invalid product ID');
//       return;
//     }
//     router.push(`/products/${product.id}/edit`);
//   };

//   return (
//     <button
//       onClick={handleEdit}
//       className="mt-4 inline-flex items-center justify-center gap-2 bg-primary-text text-canvas-on-canvas px-6 py-3 rounded-full hover:opacity-90 transition"
//     >
//       Edit
//     </button>
//   );
// }

'use client';

import { useRouter } from 'next/navigation';
import { Tables } from '@/types_db';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

type Product = Tables<'user_products'>;

export default function EditProduct({ product }: { product: Product }) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/products/${product.id}/edit`);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mt-4 inline-flex items-center justify-center gap-2 bg-primary-text text-canvas-on-canvas px-6 py-3 rounded-full hover:opacity-90 transition">
          Edit
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Product</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to edit this product?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleEdit}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
