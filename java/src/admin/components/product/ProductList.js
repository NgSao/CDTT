import React, { useMemo, useState, useEffect } from 'react';
import ProductAdd from './ProductAdd';
import ProductDelete from './ProductDelete';
import ProductEdit from './ProductEdit';
import { deletee, index, restore, status, trash } from '../../../api/apiService';
import ProductItem from './ProductItem';

function ProductList() {
    const [isAdd, setAdd] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [isDelete, setDelete] = useState(false);

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    const [showTrash, setShowTrash] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = useMemo(() => {
        return products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [products, searchQuery]);


    const TotalPage = (data) => {
        let total = 0;
        data.forEach(brand => {
            total += (brand.id || 0);
        });
        return total;
    }

    const fetchList = async () => {
        try {
            const response = await index('product');
            const responseData = response.data;
            if (responseData && Array.isArray(responseData)) {
                setProducts(responseData);
                const total = TotalPage(responseData);
                setTotalPage(total);
            } else {
                console.error("Lỗi dữ liệu nhận được từ API.");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API lấy dữ liệu: ", error);
        } finally {
            setIsLoading(false);
        }
    }
    console.log(products);
    const fetchTrash = async () => {
        try {
            const response = await trash('product/trash');
            const responseData = response.data;
            if (responseData && Array.isArray(responseData)) {
                setProducts(response.data);
            } else {
                console.error("Lỗi dữ liệu nhận được từ API.");
            }
        } catch (error) {
            console.error("Lỗi khi gọi API lấy dữ liệu: ", error);
        }
    };

    const changeStatus = async (id) => {
        try {
            await status('product/status', id);
            fetchList();
        } catch (error) {
            console.error("Lỗi khi gọi API lấy dữ liệu: ", error);
        }
    };


    const restoreItem = async (id) => {
        try {
            await restore('product/restore', id);
            fetchList();
        } catch (error) {
            console.error("Lỗi khi gọi API lấy dữ liệu: ", error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await deletee('product/delete', id);
            fetchList();
        } catch (error) {
            console.error("Lỗi khi gọi API lấy dữ liệu: ", error);
        }
    };



    useEffect(() => {
        showTrash ? fetchTrash() : fetchList();
    }, [showTrash]);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-white">
                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                        <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">
                                            {showTrash ? 'Thùng rác' : 'Sản phẩm'}
                                        </span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                            {showTrash ? 'Danh sách thùng rác' : 'Danh mục sản phẩm'}

                        </h1>
                    </div>
                    <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                        <div className="flex items-center mb-4 sm:mb-0">
                            <form className="sm:pr-3" onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="brands-search" className="sr-only">Tìm kiếm</label>
                                <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                        placeholder="Tìm kiếm sản phẩm"
                                    />
                                </div>
                            </form>
                            <div className="flex items-center w-full sm:justify-end">
                                <div className="flex pl-2 space-x-1">
                                    <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                                    </a>
                                    <button onClick={() => { setShowTrash(!showTrash); }}
                                        className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                                    </button>

                                    <a href="#" className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setAdd(true)} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 bg-blue-700 hover:bg-blue-900 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800" type="button" data-drawer-target="drawer-create-product-default" data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default" data-drawer-placement="right">
                            Thêm mới
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Mã sản phẩm
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Tên sản phẩm
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Thương hiệu
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Số lượng
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Nội dung
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Mô tả
                                        </th>
                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Giá
                                        </th>

                                        <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            Hành động
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {filtered.length === 0 ? (
                                        <li className="text-center py-4">Không có</li>
                                    ) : (
                                        filtered.map(product => (
                                            <ProductItem key={index} product={product} setEdit={setEdit} setDelete={setDelete} changeStatus={changeStatus} restoreItem={restoreItem} deleteItem={deleteItem} />
                                        ))
                                    )}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-between dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center mb-4 sm:mb-0">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Có <span className="font-semibold text-gray-900 dark:text-white">1-20</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalPage}</span></span>
                </div>
                <div className="flex items-center space-x-3">
                    <a href="#" className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Previous
                    </a>
                    <a href="#" className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Next
                        <svg className="w-5 h-5 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </a>
                </div>
            </div>
            <ProductEdit isProductEdit={isEdit} setProductEdit={setEdit} fetchList={fetchList} />
            <ProductDelete isProductDelete={isDelete} setProductDelete={setDelete} fetchList={fetchList} />
            <ProductAdd isProductAdd={isAdd} setProductAdd={setDelete} fetchList={fetchList} />


        </div >

    )
}

export default ProductList