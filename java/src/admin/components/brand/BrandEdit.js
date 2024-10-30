import React, { useState, useEffect } from 'react';
import { update, img } from './../../../api/apiService';

function BrandEdit({ isBrandEdit, setBrandEdit, fetchBrands }) {
    const brandData = isBrandEdit;
    const [brand, setBrand] = useState({
        id: '',
        name: '',
        slug: '',
        description: '',
        thumbnail: '',
    });
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (brandData) {
            setBrand({
                id: brandData.id || '',
                name: brandData.name || '',
                slug: brandData.slug || '',
                description: brandData.description || '',
                thumbnail: brandData.thumbnail || '',
            });
            setImage(brandData.thumbnail ? brandData.thumbnail : null);
        }
    }, [brandData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBrand({
            ...brand,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setBrand({
                ...brand,
                thumbnail: file,
            });
        }
    };

    const removeImage = () => {
        setImage(null);
        setBrand({
            ...brand,
            thumbnail: null,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', brand.name);
        formData.append('slug', brand.slug);
        formData.append('description', brand.description);

        if (brand.thumbnail && typeof brand.thumbnail !== 'string') {
            formData.append('thumbnail', brand.thumbnail);
        }

        try {
            await update("brand/update", brand.id, formData);
            setBrandEdit(false);
            fetchBrands();
            setBrand({
                id: '',
                name: '',
                slug: '',
                description: '',
                thumbnail: '',
            });
        } catch (error) {
            console.error('Error updating brand:', error);
        }
    };

    return (
        <>
            <div className={`fixed inset-0 bg-gray-900 opacity-80 ${isBrandEdit ? 'block' : 'hidden'} transition-opacity`} aria-hidden="true"></div>
            <div className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${isBrandEdit ? 'translate-x-0' : 'translate-x-full'} bg-white dark:bg-gray-800`} tabIndex={-1} aria-labelledby="drawer-label">
                <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Update Brand</h5>
                <button onClick={() => setBrandEdit(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên thương hiệu</label>
                        <input value={brand.name} onChange={handleChange} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                        <input value={brand.slug} onChange={handleChange} type="text" name="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn ảnh</label>
                        <input type="file" onChange={handleImageChange} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border cursor-pointer p-2.5 dark:bg-gray-700 dark:border-gray-600" />

                        {(image || brandData.thumbnail) && (
                            <div className="relative mt-4">

                                <img src={`${img(image || brandData.thumbnail)}`} alt="Brand Thumbnail" className="rounded-lg" />
                                <button onClick={removeImage} type="button" className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                        <textarea value={brand.description} onChange={handleChange} name="description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                    </div>
                    <div className="flex justify-center w-full pb-4 mt-4 space-x-4 sm:px-4">
                        <button type="submit" className="w-full justify-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Update
                        </button>
                        <button type="button" className="w-full justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            <svg aria-hidden="true" className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 011 1v12a1 1 0 01-2 0V3a1 1 0 011-1zM6 2a1 1 0 011 1v12a1 1 0 01-2 0V3a1 1 0 011-1z" clipRule="evenodd" /></svg>
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default BrandEdit;
