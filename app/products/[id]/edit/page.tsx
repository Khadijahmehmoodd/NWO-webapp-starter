
// 'use client';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { createClient } from '@/lib/utils/supabase/client';
// import { Tables } from '@/types_db';

// type Product = Tables<'user_products'>;

// export default function EditProductPage() {
//   const router = useRouter();
//   const { id } = useParams();
//   const supabase = createClient();

//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [newImageFile, setNewImageFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       if (!id || typeof id !== 'string') return;

//       const { data, error } = await supabase
//         .from('user_products')
//         .select('*')
//         .eq('id', id)
//         .single();

//       if (error) {
//         alert('Failed to fetch product: ' + error.message);
//         return;
//       }

//       setProduct(data);
//       setLoading(false);
//     };

//     fetchProduct();
//   }, [id]);

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file || !product) return;

//     setUploading(true);
//     const fileExt = file.name.split('.').pop();
//     const filePath = `public/${id}-${Date.now()}.${fileExt}`;

//     const { error, data } = await supabase.storage
//       .from('product-images')
//       .upload(filePath, file, {
//         cacheControl: '3600',
//         upsert: true,
//       });

//     if (error) {
//       alert('Error uploading image: ' + error.message);
//       setUploading(false);
//       return;
//     }

//     const { data: urlData } = supabase.storage
//       .from('product-images')
//       .getPublicUrl(filePath);

//     if (urlData?.publicUrl) {
//       setProduct({ ...product, image_url: urlData.publicUrl });
//     }

//     setUploading(false);
//   };

//   const handleUpdate = async () => {
//     if (!product || !id || typeof id !== 'string') return;

//     setSaving(true);

//     const { error } = await supabase
//       .from('user_products')
//       .update({
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         image_url: product.image_url,
//       })
//       .eq('id', id);

//     setSaving(false);

//     if (error) {
//       alert('Failed to update product: ' + error.message);
//     } else {
//       alert('Product updated!');
//       router.push(`/products/${id}`);
//     }
//   };

//   if (loading) return <p className="p-4 text-center">Loading...</p>;
//   if (!product) return <p className="p-4 text-center text-alert-bg">Product not found.</p>;

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Edit Product</h1>

//       {product.image_url && (
//         <img
//           src={product.image_url}
//           alt="Current Product"
//           className="w-full h-64 object-contain mb-4 border rounded"
//         />
//       )}

   
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="mb-4"
//       />

//       {uploading && <p className="text-sm text-canvas-text-contrast mb-2">Uploading image...</p>}

//       <input
//         type="text"
//         className="w-full border p-2 mb-4 rounded"
//         placeholder="Product Name"
//         value={product.name || ''}
//         onChange={(e) => setProduct({ ...product, name: e.target.value })}
//       />

//       <textarea
//         className="w-full border p-2 mb-4 rounded"
//         placeholder="Description"
//         value={product.description || ''}
//         onChange={(e) => setProduct({ ...product, description: e.target.value })}
//       />

//       <input
//         type="number"
//         className="w-full border p-2 mb-4 rounded"
//         placeholder="Price"
//         value={product.price || ''}
//         onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
//       />

//       <button
//         onClick={handleUpdate}
//         className="bg-primary-bg text-canvas-on-canvas px-4 py-2 rounded hover:bg-primary-line"
//         disabled={saving}
//       >
//         {saving ? 'Saving...' : 'Save Changes'}
//       </button>
//     </div>
//   );
// }
'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/client';
import { Tables } from '@/types_db';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

type Product = Tables<'user_products'>;

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const supabase = createClient();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id || typeof id !== 'string') return;

      const { data, error } = await supabase
        .from('user_products')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        alert('Failed to fetch product: ' + error.message);
        return;
      }

      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id, supabase]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !product) return;

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const filePath = `public/${id}-${Date.now()}.${fileExt}`;

    const { error } = await supabase.storage
      .from('product-images')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (error) {
      alert('Error uploading image: ' + error.message);
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(filePath);

    if (urlData?.publicUrl) {
      setProduct({ ...product, image_url: urlData.publicUrl });
    }

    setUploading(false);
  };

  const handleUpdate = async () => {
    if (!product || !id || typeof id !== 'string') return;

    setSaving(true);

    const { error } = await supabase
      .from('user_products')
      .update({
        name: product.name,
        description: product.description,
        price: product.price,
        image_url: product.image_url,
      })
      .eq('id', id);

    setSaving(false);

    if (error) {
      alert('Failed to update product: ' + error.message);
    } else {
      setOpenDialog(true);
    }
  };

  if (loading) return <p className="p-4 text-center">Loading...</p>;
  if (!product) return <p className="p-4 text-center text-alert-bg">Product not found.</p>;
  return (
    <>
    
     
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-20 py-10 mt-10 mb-8 max-w-[1000px] mx-auto bg-canvas-on-canvas shadow-xl rounded-xl">
        
        <h1 className="text-5xl font-extrabold text-center mt-10 mb-8 text-primary-solid-hover drop-shadow-md transition-all duration-500">
        Edit Product
        </h1>

        {product.image_url && (
          <div className="mb-6">
            <img
              src={product.image_url}
              alt="Current Product"
              className="w-full h-52 object-contain border border-canvas-bg bg-primary-bg rounded-lg shadow-sm"
            />
          </div>
        )}

    
        <label className="block mb-6">
          <span className="block text-sm font-medium text-canvas-text-contrast mb-1">Change Image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-canvas-text-contrast
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-primary-solid-hover file:text-canvas-text-contrast
              hover:file:bg-primary-bg
              transition"
          />
        </label>

    
        <label className="block mb-4">
          <span className="block text-sm font-medium text-canvas-text-contrast mb-1">Product Name</span>
          <input
            type="text"
            value={product.name || ''}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            className="w-full px-4 py-2 border border-canvas-bg-active rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
          />
        </label>

       
        <label className="block mb-4">
          <span className="block text-sm font-medium text-canvas-text-contrast mb-1">Description</span>
          <textarea
            value={product.description || ''}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            className="w-full px-4 py-2 border border-x-canvas-solid-hover rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
            rows={3}
          />
        </label>

       
        <label className="block mb-6">
          <span className="block text-sm font-medium text-canvas-text-contrast mb-1">Price (USD)</span>
          <input
            type="number"
            value={product.price || ''}
            onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })}
            className="w-full px-4 py-2 border border-canvas-bg-active rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
          />
        </label>

      
        <button
          onClick={handleUpdate}
          type="button"
          disabled={saving}
          className="w-full py-3 bg-primary-solid-hover text-canvas-on-canvas rounded-md font-semibold hover:bg-primary-solid transition"
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>

        
        <AlertDialog
          open={openDialog}
          onOpenChange={(open) => {
            setOpenDialog(open);
            if (!open) router.push(`/products/${id}`);
          }}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Product Updated</AlertDialogTitle>
              <AlertDialogDescription>
                Your product has been successfully updated.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );

}