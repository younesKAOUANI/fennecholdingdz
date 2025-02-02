// pages/add-category.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddCategory() {
    const router = useRouter();
    const [categoryForm, setCategoryForm] = useState({
        name: '',
        img: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategoryForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(categoryForm),
            });

            if (!res.ok) {
                throw new Error('Failed to create category');
            }

            setMessage('Category created successfully!');
            setCategoryForm({
                name: '',
                img: '',
            });
            // Optionally, redirect or refresh the category list:
            // router.push('/categories');
        } catch (error) {
            console.error(error);
            setMessage('Error creating category');
        }
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Ajouter une Categorie</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Nom de la categorie'
                        value={categoryForm.name}
                        onChange={handleChange}
                        className='border border-gray-300 rounded-md p-2 w-full'
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        placeholder='URL de l\image'
                        value={categoryForm.img}
                        onChange={handleChange}
                        className='border border-gray-300 rounded-md p-2 w-full'
                    />
                </div>
                <button type="submit" style={{ marginTop: '1rem' }}>
                    Add Category
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
