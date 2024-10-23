"use client"
import ImageUpload from '@/app/components/Dashboard/AddProducts/ImageUpload';
import { useEffect, useState } from 'react';

const AddMainProduct = () => {
  const [formData, setFormData] = useState({
    item_name: '',
    item_desc: '',
    cat_name: '',
    price: 0,
    stock_qty: 0,
  });

  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [isNewCategory, setIsNewCategory] = useState(false);

  useEffect(() => {
    // Fetch categories from backend when component mounts
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Handle new category addition
    if (isNewCategory && newCategory.trim()) {
      try {
        const res = await fetch('/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cat_name: newCategory }),
        });
        const data = await res.json();
        if (res.ok) {
          setCategories([...categories, newCategory]);
          setFormData({ ...formData, cat_name: newCategory });
        } else {
          console.error('Error adding category:', data.message);
        }
      } catch (err) {
        console.error('Failed to add new category:', err);
      }
    }

    // Proceed with adding the product
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Product added:', data);
      } else {
        console.error('Error adding product');
      }
    } catch (err) {
      console.error('Failed to add product:', err);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === 'new-category') {
      setIsNewCategory(true);
      setFormData({ ...formData, cat_name: '' });
    } else {
      setIsNewCategory(false);
      setFormData({ ...formData, cat_name: selectedCategory });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
       <ImageUpload/>
    </div>
  );
};

export default AddMainProduct;
