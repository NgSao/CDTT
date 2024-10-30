import React from 'react'

function Dashboard() {
    return (
        <div className="px-4 pt-6 mb-36">
            <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">00đ</span>
                            <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Bán hàng tuần này</h3>
                        </div>
                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                            0%
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="p-4 bg-white border  border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Thông kê tháng này
                        <button type="button"><svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg><span className="sr-only">Show information</span></button>
                    </h3>
                    <ul className="block text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400">
                        <li className="w-full">
                            <button type="button" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Sản phẩm bán chạy</button>
                        </li>
                        <li className="w-full">
                            <button type="button" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600">Khách hàng mua nhiều</button>
                        </li>
                    </ul>
                    <div className="border-t border-gray-200 dark:border-gray-600">
                        <div className="block pt-4">
                            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png" alt="imac image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    iPhone 13
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                                                    </svg>
                                                    0.0%
                                                    <span className="ml-2 text-gray-500">với tháng trước</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            00đ
                                        </div>
                                    </div>
                                </li>

                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png" alt="watch image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    iPhone13
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                                                    </svg>
                                                    0.0%
                                                    <span className="ml-2 text-gray-500">với tháng trước</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            0.0đ
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Sản phẩm</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">0</span>

                    </div>
                    <div className="w-full" />
                </div>
                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Người dùng</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">0</span>

                    </div>
                    <div className="w-full" />
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="w-full">
                        <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Tổng đánh giá</h3>
                        <div className="flex items-center mb-2">
                            <div className="w-16 text-sm font-medium dark:text-white">5+</div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-16 text-sm font-medium dark:text-white">3+</div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '0%' }} />
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-16 text-sm font-medium dark:text-white">2+</div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '0%' }} />
                            </div>
                        </div>
                        <div className="flex items-center mb-2">
                            <div className="w-16 text-sm font-medium dark:text-white">1+</div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ width: '0%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Dashboard