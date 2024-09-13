"use client";

import { useState, useEffect } from 'react';

const AddOtherProduct = () => {
  const [formData, setFormData] = useState({
    item_name: '',
    alias: '',
    manufacturers: '',
    sku_type: '',
    item_type: '',
    cat_id: '',
    cat_name: '',
    price: 0,
    stock_qty: 0,
  });
  // const categories =
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [errors, setErrors] = useState({ item_name: '', cat_name: '', price: '', stock_qty: '' });

  const validateForm = () => {
    let valid = true;
    const newErrors = { item_name: '', cat_name: '', price: '', stock_qty: '' };

    if (!formData.item_name.trim()) {
      newErrors.item_name = 'Item name is required';
      valid = false;
    }
    if (!formData.cat_name.trim() && !newCategory.trim()) {
      newErrors.cat_name = 'Category name is required';
      valid = false;
    }
    if (formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
      valid = false;
    }
    if (formData.stock_qty <= 0) {
      newErrors.stock_qty = 'Stock quantity must be greater than 0';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, cat_name: newCategory || formData.cat_name }),
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

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New main Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="item_name"
          placeholder="Item Name"
          value={formData.item_name}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        {errors.item_name && <p className="text-red-500">{errors.item_name}</p>}

        {/* Category Dropdown */}
        <div className="block w-full p-2 border border-gray-300 rounded">
          <label htmlFor="cat_name">Select Category</label>
          <select
            name="cat_name"
            value={formData.cat_name}
            onChange={handleChange}
            className="block w-full p-2 mt-2 border border-gray-300 rounded"
          >
            <option value="">Select Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          name="newCategory"
          placeholder="Or Add New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        {errors.cat_name && <p className="text-red-500">{errors.cat_name}</p>}

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        {errors.price && <p className="text-red-500">{errors.price}</p>}

        <input
          type="number"
          name="stock_qty"
          placeholder="Stock Quantity"
          value={formData.stock_qty}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
        {errors.stock_qty && <p className="text-red-500">{errors.stock_qty}</p>}

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

export default AddOtherProduct;
