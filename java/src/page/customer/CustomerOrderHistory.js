
import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import OrderDetail from '../../components/order/OrderDetail';

function CustomerOrderHistory() {
    return (
        <div>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>Khách hàng thân thiết / </span>
                    <span>Lịch sử mua hàng </span>
                </div>
            </div>
            <div className='container mx-auto p-3 grid grid-cols-5 gap-2'>
                <div className='flex flex-col gap-2 border-r-2  '>
                    <Link to='/customer' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out  group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out  group-hover:text-red-700'>Trang chủ</h2>
                        </div>
                    </Link>
                    <Link to='/historyorder' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out text-red-700 group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out text-red-700 group-hover:text-red-700'>Lịch sử mua hàng</h2>
                        </div>
                    </Link>
                    <Link to='/' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700'>Ưu đãi</h2>
                        </div>
                    </Link>
                    <Link to='/account' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700'>Thông tin của bạn</h2>
                        </div>
                    </Link>
                    <Link to='/' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700'>Tổng đài hỗ trợ</h2>
                        </div>
                    </Link>
                    <Link to='/' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700'>Đăng xuất</h2>
                        </div>
                    </Link>
                </div>
                <div class="col-span-4">
                    <h1 className='text-center text-2xl text-red-700 font-medium'>LỊCH SỬ MUA HÀNG</h1>
                    <div class="grid grid-cols-5 mx-10 gap-5 mt-5">
                        <Link to='/historyorder' className='group'>
                            <button className='bg-red-200 p-1 px-4 group-hover:bg-red-700 rounded-lg'>
                                <h2 className='text-base text-red-700 group-hover:text-white'>Tất cả</h2>
                            </button>
                        </Link>
                        <Link to='/ordernew' className='group'>
                            <button className=' p-1 px-4 group-hover:bg-red-700 rounded-lg'>
                                <h2 className='text-base text-red-700 group-hover:text-white'>Chờ Xác Nhận</h2>
                            </button>
                        </Link>
                        <Link to='/' className='group'>
                            <button className=' p-1 px-4 group-hover:bg-red-700 rounded-lg'>
                                <h2 className='text-base text-red-700 group-hover:text-white'>Đã Xác Nhận</h2>
                            </button>
                        </Link>
                        <Link to='/' className='group'>
                            <button className=' p-1 px-4 group-hover:bg-red-700 rounded-lg'>
                                <h2 className='text-base text-red-700 group-hover:text-white'>Đã Giao</h2>
                            </button>
                        </Link>
                        <Link to='/' className='group'>
                            <button className=' p-1 px-4 group-hover:bg-red-700 rounded-lg'>
                                <h2 className='text-base text-red-700 group-hover:text-white'>Đã Hủy</h2>
                            </button>
                        </Link>
                    </div>
                    <OrderDetail />
                </div>
            </div >
        </div >
    )
}

export default CustomerOrderHistory