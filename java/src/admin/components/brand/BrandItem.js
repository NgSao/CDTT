import React from 'react';

const BrandItem = ({ brand, setEdit, setDelete, changeStatus, restoreBrand, deleteBrand }) => {
    const handleRestore = () => {
        restoreBrand(brand.id);
    };
    const handleDelete = () => {
        deleteBrand(brand.id);
    }
    return (
        <tr key={brand.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-194556" className="sr-only">checkbox</label>
                </div>
            </td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">#{brand.id}</td>
            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400 flex flex-row items-start">
                <div className='flex flex-col ml-2'>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">{brand.name}</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{brand.slug}</div>
                </div>
            </td>
            <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{brand.description}</td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {brand.updatedAt
                    ? new Date(brand.updatedAt).toLocaleString('vi-VN', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })
                    : 'Chưa cập nhật'}
            </td>
            <td className="p-4 whitespace-nowrap">
                <span
                    className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md ${brand.status === 1 ? 'bg-green-100 text-green-800 border border-green-100 dark:bg-gray-700 dark:text-green-400 dark:border-green-500' : 'bg-yellow-100 text-yellow-800 border border-yellow-100 dark:bg-gray-700 dark:text-yellow-400 dark:border-yellow-500'}`}
                    onClick={() => changeStatus(brand.id)}
                    style={{ cursor: 'pointer' }}
                >
                    {brand.status === 1 ? 'Hoạt động' : 'Tạm ngừng'}
                </span>
            </td>

            {brand.status === 0 ? (
                <td className="p-4 space-x-2 whitespace-nowrap">
                    <button onClick={handleRestore} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-900 rounded-lg focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 01.293.707V3h4a1 1 0 011 1v1h-6V3a1 1 0 01.293-.707A1 1 0 0110 2zM4 5v2a1 1 0 01-1 1H1a1 1 0 00-1 1v9a2 2 0 002 2h12a2 2 0 002-2V8a1 1 0 00-1-1H5a1 1 0 01-1-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1z" clipRule="evenodd" /></svg>
                        Restore
                    </button>
                    <button onClick={() => setDelete(brand.id)} type="button" data-drawer-target="drawer-delete-product-default" data-drawer-show="drawer-delete-product-default" aria-controls="drawer-delete-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        Destroy
                    </button>

                </td>
            ) : (
                <td className="p-4 space-x-2 whitespace-nowrap">
                    <button onClick={() => setEdit(brand)} type="button" data-drawer-target="drawer-update-product-default" data-drawer-show="drawer-update-product-default" aria-controls="drawer-update-product-default" data-drawer-placement="right" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 hover:bg-green-900 rounded-lg focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
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
    );
};

export default BrandItem;
