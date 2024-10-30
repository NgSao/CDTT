import React, { useState, useEffect } from 'react';
import { update, img } from './../../../api/apiService';

function ProductEdit({ isProductEdit, setProductEdit, fetchList }) {
    const itemData = isProductEdit;
    console.log("toi là:", itemData)
    const [item, setItem] = useState({
        id: '',
        name: '',
        slug: '',
        description: '',
        category_id: '',
        brand_id: '',
        content: '',
        thumbnail: '',
        pricebuy: ''
    });
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (itemData) {
            setItem({
                id: itemData.id || '',
                name: itemData.name || '',
                slug: itemData.slug || '',
                description: itemData.description || '',
                category_id: itemData.category_id || '',
                brand_id: itemData.brand_id || '',
                content: itemData.content || '',
                thumbnail: itemData.thumbnail || '',
                pricebuy: itemData.pricebuy || '',
            });
            setImage(itemData.thumbnail ? itemData.thumbnail : null);
        }
    }, [itemData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setItem({
                ...item,
                thumbnail: file,
            });
        }
    };

    const removeImage = () => {
        setImage(null);
        setItem({
            ...item,
            thumbnail: null,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', item.name);
        formData.append('slug', item.slug);
        formData.append('description', item.description);
        formData.append('category_id', item.category_id);
        formData.append('brand_id', item.brand_id);
        formData.append('content', item.content);
        formData.append('pricebuy', item.pricebuy);

        if (item.thumbnail && typeof item.thumbnail !== 'string') {
            formData.append('thumbnail', item.thumbnail);
        }

        try {
            await update("product/update", item.id, formData);
            setProductEdit(false);
            fetchList();
            setItem({
                id: '',
                name: '',
                slug: '',
                description: '',
                category_id: '',
                brand_id: '',
                content: '',
                thumbnail: '',
                pricebuy: ''
            });
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <>
            <div className={`fixed inset-0 bg-gray-900 opacity-80 ${isProductEdit ? 'block' : 'hidden'} transition-opacity`} aria-hidden="true"></div>
            <div className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform ${isProductEdit ? 'translate-x-0' : 'translate-x-full'} bg-white dark:bg-gray-800`} tabIndex={-1} aria-labelledby="drawer-label">
                <div className='grid grid-flow-row-dense'>
                    <div>
                        <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Update Product</h5>
                        <button onClick={() => setProductEdit(false)} type="button" aria-controls="drawer-update-product-default" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            <span className="sr-only">Close menu</span>
                        </button>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên sản phẩm</label>
                                <input value={item.name} onChange={handleChange} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Type product name" required />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chọn ảnh</label>
                                <input type="file" onChange={handleImageChange} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border cursor-pointer p-2.5 dark:bg-gray-700 dark:border-gray-600" />
                                {(image || itemData.thumbnail) && (
                                    <div className="relative mt-4">
                                        <img src={`${img(image || itemData.thumbnail)}`} alt="Product Thumbnail" className="rounded-lg" />
                                        <button onClick={removeImage} type="button" className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thương hiệu</label>
                                <select value={item.brand_id} onChange={handleChange} name="brand_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                    <option selected>Chọn thương hiệu</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Dell">Dell</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Danh mục</label>
                                <select value={item.category_id} onChange={handleChange} name="category_id" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                                    <option selected>Chọn danh mục</option>
                                    <option value="iPhone">iPhone</option>
                                    <option value="MayTinh">Máy tính</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="pricebuy" value={item.pricebuy} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="$149" required />
                            </div>
                            <div>
                                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nội dung</label>
                                <textarea name="content" value={item.content} onChange={handleChange} rows={1} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Write product description..."></textarea>
                            </div>
                            <div>
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mô tả</label>
                                <textarea name="description" value={item.description} onChange={handleChange} rows={2} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Write product description..."></textarea>
                            </div>
                            <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">
                                Cập nhật sản phẩm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductEdit;
