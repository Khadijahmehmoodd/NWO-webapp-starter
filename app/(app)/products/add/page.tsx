'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/utils/supabase/client';

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert('Not logged in');
      setIsSubmitting(false);
      return;
    }

    let imageUrl = '';

    if (imageFile) {
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(`public/${Date.now()}_${imageFile.name}`, imageFile);

      if (error) {
        console.error('Image upload failed:', error.message);
        alert('Image upload failed');
        setIsSubmitting(false);
        return;
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

    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-canvas-on-canvas p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Product</h1>
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label className="block text-sm font-medium text-canvas-text-contrast mb-1">Product Name</label>
            <input
              required
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (USD)</label>
            <input
              required
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              placeholder="Optional description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
            <input
              required
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 p-2 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md text-canvas-on-canvas font-semibold transition ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Add Product'}
          </button>
        </form>
      </div>
    </main>
  );
}
