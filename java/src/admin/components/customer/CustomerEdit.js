import React from 'react'

function CustomerEdit({ isCustomerEdit, setCustomerEdit }) {
    return (
        <>
            <div className={`fixed inset-0 bg-gray-900 opacity-80 ${isCustomerEdit ? 'block' : 'hidden'} transition-opacity`} aria-hidden="true"></div>

            <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${isCustomerEdit ? 'block' : 'hidden'}`} aria-hidden="true">
                <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                            <h3 className="text-xl font-semibold dark:text-white">
                                Edit user
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => setCustomerEdit(false)}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên khách hàng</label>
                                    <input type="text" name="first-name" defaultValue="SaoNguyen" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="SaoNguyen" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Giới tính</label>
                                    <input type="text" name="last-name" defaultValue="Nam" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Nam" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" defaultValue="nguyensaovn2019@gmail.com" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="nguyensaovn2019@gmail.com" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Điện thoại</label>
                                    <input type="text" name="position" defaultValue="0392445255" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="0392445255" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu hiện tại</label>
                                    <input type="password" name="current-password" defaultValue="••••••••" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="••••••••" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu mới</label>
                                    <input type="password" name="new-password" defaultValue="••••••••" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="••••••••" required />
                                </div>

                            </div>
                        </div>
                        <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                            <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Lưu thông tin</button>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default CustomerEdit