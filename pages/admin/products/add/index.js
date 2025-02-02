// pages/add-product.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Select from 'react-select';

export default function AddProduct() {
  const router = useRouter();
  const [productForm, setProductForm] = useState({
    name: '',
    img: '',
    specification: '',
    configurations: '',
    categoryId: '',
    highlights: '',
    datasheet: '',
    brochure: '',
  });
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);

  // Fetch categories from API and store them in state
  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/categories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const newData = await response.json();
      setCategories(newData);
      console.log(newData);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle input changes for text/textarea fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productForm),
      });

      if (!res.ok) {
        throw new Error('Failed to create product');
      }

      setMessage('Product created successfully!');
      setProductForm({
        name: '',
        img: '',
        specification: '',
        configurations: '',
        categoryId: '',
        highlights: '',
        datasheet: '',
        brochure: '',
      });
      // Optionally, redirect or refresh product list:
      // router.push('/products');
    } catch (error) {
      console.error(error);
      setMessage('Error creating product');
    }
  };

  // Map fetched categories to react-select options
  const categoryOptions = categories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className='text-3xl font-bold mb-6'>Ajouter un produit</h1>
      <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-2'>
        <input
          type="text"
          id="name"
          name="name"
          value={productForm.name}
          onChange={handleChange}
          placeholder='Nom du produit'
          className='border border-gray-300 rounded-md p-2 w-full'
        />

        <Select
          options={categoryOptions}
          onChange={(selectedOption) =>
            setProductForm((prev) => ({
              ...prev,
              categoryId: selectedOption ? selectedOption.value : '',
            }))
          }
          placeholder="Categorie"
          isClearable
          className="w-full"
        />

        <input
          type="text"
          id="img"
          name="img"
          value={productForm.img}
          onChange={handleChange}
          placeholder='Image'
          className='border border-gray-300 rounded-md p-2 w-full col-span-2'
        />

        <textarea
          id="specification"
          name="specification"
          value={productForm.specification}
          onChange={handleChange}
          placeholder='Specifications'
          className='border border-gray-300 rounded-md p-2 w-full col-span-2'
        />

        <textarea
          id="configurations"
          name="configurations"
          value={productForm.configurations}
          onChange={handleChange}
          placeholder='Configurations'
          className='border border-gray-300 rounded-md p-2 w-full col-span-2'
        />

        <textarea
          id="highlights"
          name="highlights"
          value={productForm.highlights}
          onChange={handleChange}
          placeholder='A la une'
          className='border border-gray-300 rounded-md p-2 w-full col-span-2'
        />

        <input
          type="text"
          id="datasheet"
          name="datasheet"
          value={productForm.datasheet}
          onChange={handleChange}
          placeholder='Datasheet'
          className='border border-gray-300 rounded-md p-2 w-full'
        />

        <input
          type="text"
          id="brochure"
          name="brochure"
          value={productForm.brochure}
          onChange={handleChange}
          placeholder='Brochure'
          className='border border-gray-300 rounded-md p-2 w-full'
        />

        <button type="submit" className='bg-blue-500 text-white p-2 rounded-md col-span-2 mt-2'>
          Add Product
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
