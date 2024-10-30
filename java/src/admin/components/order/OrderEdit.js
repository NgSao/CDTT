import React from 'react'

function OrderEdit({ isOrderEdit, setOrderEdit }) {
    return (
        <>
            <div className={`fixed inset-0 bg-gray-900 opacity-80 ${isOrderEdit ? 'block' : 'hidden'} transition-opacity`} aria-hidden="true"></div>

            <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto ${isOrderEdit ? 'block' : 'hidden'}`} aria-hidden="true">
                <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                        <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                            <h3 className="text-xl font-semibold dark:text-white">
                                CHI TIẾT ĐƠN HÀNG
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => setOrderEdit(false)}
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
                            <div className="flex flex-col gap-2 pb-2 border-b rounded-t dark:border-gray-700">
                                <div className='flex flex-row justify-between items-center'>
                                    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Mã đơn hàng: <span> #01</span></div>
                                    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Trạng thái đơn hàng:
                                        <select className="ml-2 bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                                            <option value="pending">Chờ xác nhận</option>
                                            <option value="confirmed">Xác nhận</option>
                                            <option value="shipping">Đang vận chuyển</option>
                                            <option value="delivered">Đang giao</option>
                                            <option value="success">Thành công</option>
                                            <option value="canceled">Đã hủy</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Người nhận: <span> SaoNguyen</span></div>
                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Điện thoại: <span> 0392445255</span></div>
                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Email: <span> nguyensaovn2019@gmail.com</span></div>
                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ: <span> 18 Linh Trung, Thủ Đức , Hồ Chí Minh</span></div>
                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày tạo: <span> 00-00 22/09/2024</span></div>
                                <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Ghi chú: <span></span></div>
                            </div>
                            <div className="flex flex-col gap-6 pb-4 border-b rounded-t dark:border-gray-700">
                                <div className='flex flex-row items-center justify-between'>
                                    <div className="flex flex-row items-center">
                                        <img
                                            src="https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png"
                                            alt="iPhone 13"
                                            className="w-10 h-10 object-cover"
                                        />
                                        <div className='flex flex-col ml-2'>
                                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">iPhone 13 128GB - Chính hãng VN/A</div>
                                        </div>
                                    </div>
                                    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white"> x2</div>
                                    <div className="mb-2 text-sm font-medium text-gray-900 dark:text-white"> 572.000đ</div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-6 pb-4 border-b rounded-t dark:border-gray-700">
                                <div className="text-sm  whitespace-nowrap text-gray-500 dark:text-gray-400">Giảm giá</div>
                                <div className="text-base font-medium  whitespace-nowrap text-red-700">0đ</div>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-6">
                                <div className="text-base font-bold  whitespace-nowrap text-white ">Tổng cộng</div>
                                <div className="text-base font-bold  whitespace-nowrap text-white">572.000đ</div>
                            </div>
                            <div className="items-center flex flex-row justify-end space-x-4 ">
                                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" type="submit">Xác nhận đơn hàng</button>
                                <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="submit">Hủy đơn hàng</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div></>
    )
}

export default OrderEdit