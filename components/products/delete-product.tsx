// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { createClient } from '@/lib/utils/supabase/client';

// export default function DeleteProduct({ productId }: { productId: string }) {
//   const router = useRouter();
//   const supabase = createClient();
//   const [isDeleting, setIsDeleting] = useState(false);

//   const handleDelete = async () => {
//     const confirmDelete = confirm('Are you sure you want to delete this product?');
//     if (!confirmDelete) return;

//     setIsDeleting(true);

//     const { error } = await supabase
//       .from('user_products')
//       .delete()
//       .eq('id', productId);

//     if (error) {
//       alert(' Failed to delete: ' + error.message);
//       setIsDeleting(false);
//     } else {
//       alert('✅ Product deleted successfully');
//       router.push('/products'); 
//     }
//   };

//   return (
//     <button
//       onClick={handleDelete}
//       disabled={isDeleting}
//       className={`mt-4 inline-flex items-center justify-center gap-2 bg-primary-text text-canvas-on-canvas px-6 py-3 rounded-full hover:opacity-90 transition ${
//         isDeleting ? 'bg-alert-bg-active cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
//       }`}
//     >
//       {isDeleting ? 'Deleting...' : 'Delete'}
//     </button>
//   );
// }
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createClient } from '@/lib/utils/supabase/client';
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

export default function DeleteProduct({ productId }: { productId: string }) {
  const router = useRouter();
  const supabase = createClient();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    const { error } = await supabase
      .from('user_products')
      .delete()
      .eq('id', productId);

    if (error) {
      alert('Failed to delete: ' + error.message);
      setIsDeleting(false);
    } else {
      router.push('/products');
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          disabled={isDeleting}
          className={`mt-4 inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full transition ${
            isDeleting
              ? 'bg-alert-bg-active cursor-not-allowed'
              : 'bg-red-600 hover:bg-red-700'
          }`}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Product</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Are you sure you want to delete this product?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
