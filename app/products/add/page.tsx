'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/client';


export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return alert('Not logged in');

    let imageUrl = '';


    if (imageFile) {
      const { data, error } = await supabase.storage
        .from('product-images') // Ensure this bucket exists
        .upload(`public/${Date.now()}_${imageFile.name}`, imageFile);

      if (error) {
        console.error('Image upload failed:', error.message);
        return alert('Image upload failed');
      }

      const { data: publicUrl } = supabase.storage
        .from('product-images')
        .getPublicUrl(data.path);

      imageUrl = publicUrl.publicUrl;
    }

    const { error: insertError } = await supabase.from('user_products').insert({
      name,
      price: parseFloat(price),
      description,
      image_url: imageUrl,
      user_id: user.id,
    });

    if (insertError) {
      console.error(insertError.message);
      alert('Failed to add product.');
    } else {
      router.push('/products');
    }
  };

  return (
    <main className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          required
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          required
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          required
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-success-bg text-canvas-text-contrast px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </main>
  );
}
