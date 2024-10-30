import React from 'react'
import { img } from '../../../api/apiService';

const ProductItem = ({ product, setEdit, setDelete, changeStatus, restoreItem, deleteItem }) => {
    const handleRestore = () => {
        restoreItem(product.id);
    };
    const handleDelete = () => {
        deleteItem(product.id);
    }

    return (
        <tr key={product.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="sr-only">checkbox</label>
                </div>
            </td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">#{product.id}</td>
            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 flex flex-row items-start">
                <img
                    src={img(product.productImages[0]?.thumbnail || '')}

                    alt={product.image}
                    className="w-16 h-16 object-cover"
                />
                <div className='flex flex-col ml-2'>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">{product.name}</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{product.categoryName}</div>
                </div>
            </td>

            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.brandName}</td>


            <td class="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                <div className="flex items-center">
                    {product.productStores.length === 0 ? (
                        <span>Chưa nhập hàng</span>
                    ) : (
                        <div className="flex items-center">
                            <div
                                className={`h-2.5 w-2.5 rounded-full mr-2 ${product.productStores[0]?.qty < 10 ? 'bg-red-500' : 'bg-green-500'}`}
                            ></div>
                            {product.productStores[0]?.qty}
                        </div>
                    )}

                </div>

            </td>
            <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{product.content}</td>
            <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                {product.description || 'Chưa có mô tả'}

            </td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.pricebuy)}
            </td>
            {product.status === 0 ? (
                <td className="p-4 space-x-2 whitespace-nowrap">
                    <button onClick={handleRestore} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 01.293.707V3h4a1 1 0 011 1v1h-6V3a1 1 0 01.293-.707A1 1 0 0110 2zM4 5v2a1 1 0 01-1 1H1a1 1 0 00-1 1v9a2 2 0 002 2h12a2 2 0 002-2V8a1 1 0 00-1-1H5a1 1 0 01-1-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1z" clipRule="evenodd" /></svg>
                        Restore
                    </button>
                    <button onClick={() => setDelete(product.id)} type="button" data-drawer-target="drawer-delete-product-default" data-drawer-show="drawer-delete-product-default" aria-controls="drawer-delete-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        Destroy
                    </button>

                </td>
            ) : (
                <td className="p-4 space-x-2 whitespace-nowrap">
                    <button onClick={() => setEdit(product)} type="button" data-drawer-target="drawer-update-product-default" data-drawer-show="drawer-update-product-default" aria-controls="drawer-update-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 hover:bg-green-900 rounded-lg focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                        Update
                    </button>
                    <button onClick={handleDelete} type="button" data-drawer-target="drawer-delete-product-default" data-drawer-show="drawer-delete-product-default" aria-controls="drawer-delete-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        Delete
                    </button>
                </td>

            )}
        </tr>
    )
}

export default ProductItem