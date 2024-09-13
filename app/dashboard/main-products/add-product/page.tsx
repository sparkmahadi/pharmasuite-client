"use client"

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="item_name"
          placeholder="Item Name"
          value={formData.item_name}
          onChange={(e) => setFormData({ ...formData, item_name: e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded"
        />

        <textarea
          name="item_desc"
          placeholder="Item Description"
          value={formData.item_desc}
          onChange={(e) => setFormData({ ...formData, item_desc: e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded"
        />

        {/* Category Dropdown */}
        <select
          name="cat_name"
          value={formData.cat_name}
          onChange={handleCategoryChange}
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value="new-category">Add New Category</option>
        </select>

        {/* Input for New Category */}
        {isNewCategory && (
          <input
            type="text"
            placeholder="New Category Name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        )}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: +e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded"
        />

        <input
          type="number"
          name="stock_qty"
          placeholder="Stock Quantity"
          value={formData.stock_qty}
          onChange={(e) => setFormData({ ...formData, stock_qty: +e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddMainProduct;
