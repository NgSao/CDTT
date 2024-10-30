import React, { useState } from 'react';

function Menu() {
    const [isProductOpen, setProductOpen] = useState(false);
    const [isCategoryOpen, setCategoryOpen] = useState(false);
    const [isBrandOpen, setBrandOpen] = useState(false);
    const [isBannerOpen, setBannerOpen] = useState(false);
    const [isCustomerOpen, setCustomerOpen] = useState(false);
    const [isConfigOpen, setConfigOpen] = useState(false);
    const [isOrderOpen, setOrderOpen] = useState(false);
    const [isBlogOpen, setBlogOpen] = useState(false);


    return (
        <div className="fixed top-0 left-0 z-20  flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
            <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <ul className="pb-2 space-y-2">
                            <li>
                                <form action="#" method="GET" className="lg:hidden">
                                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                                        </div>
                                        <input type="text" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search" />
                                    </div>
                                </form>
                            </li>
                            <li>
                                <a href="/admin" className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></svg>
                                    <span className="ml-3">Bảng điều khiển</span>
                                </a>
                            </li>
                            <li>
                                <button type="button" onClick={() => setProductOpen(!isProductOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Sản phẩm</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isProductOpen ? 'block' : 'hidden'}`}>

                                    <li>
                                        <a href="/admin/products" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Tất cả sản phẩm</a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Giảm giá sản phẩm</a>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <button type="button" onClick={() => setCategoryOpen(!isCategoryOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Danh mục</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isCategoryOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <a href="/admin/categorys" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Tất cả danh mục</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button type="button" onClick={() => setBrandOpen(!isBrandOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Thương hiệu</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isBrandOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <a href="/admin/brands" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Tất cả thương hiệu</a>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <button type="button" onClick={() => setBannerOpen(!isBannerOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Quảng cáo</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isBannerOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <a href="/admin/banners" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Tất cả quảng cáo</a>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <button type="button" onClick={() => setCustomerOpen(!isCustomerOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Khách hàng</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isCustomerOpen ? 'block' : 'hidden'}`}>

                                    <li>
                                        <a href="/admin/customers" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Khách hàng đăng ký</a>
                                    </li>
                                    <li>
                                        <a href="" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Hỗ trợ</a>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <button type="button" onClick={() => setConfigOpen(!isConfigOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Cửa hàng</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isConfigOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <a href="/admin/config" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Cấu hình cửa hàng</a>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <button type="button" onClick={() => setOrderOpen(!isOrderOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Đơn hàng</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isOrderOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <a href="/admin/orders" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Tất cả đơn hàng</a>
                                    </li>

                                </ul>
                            </li>

                            <li>
                                <button type="button" onClick={() => setBlogOpen(!isBlogOpen)} className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                                    <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zM10.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h4.5zM16.5 6.75a.75.75 0 01.75.75v.625a.75.75 0 01-.75.75h-5.25a.75.75 0 01-.75-.75v-.625a.75.75 0 01.75-.75h5.25z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Tin tức</span>
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                                <ul className={`py-2 space-y-2 ${isBlogOpen ? 'block' : 'hidden'}`}>
                                    <li>
                                        <a href="/admin/topics" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Chủ đề</a>
                                    </li>
                                    <li>
                                        <a href="/admin/topic/post" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"> Tất cả bài viết</a>
                                    </li>

                                </ul>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
