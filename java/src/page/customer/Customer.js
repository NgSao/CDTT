import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlinePayment } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import CutomerHome from '../../components/account/CutomerHome';

function Customer() {
    return (
        <div>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>Khách hàng thân thiết </span>
                </div>
            </div>
            <div className='container mx-auto p-3 grid grid-cols-5 gap-2'>
                <div className='flex flex-col gap-2 border-r-2  '>
                    <Link to='/customer' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out text-red-700 group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out text-red-700 group-hover:text-red-700'>Trang chủ</h2>
                        </div>
                    </Link>
                    <Link to='/historyorder' className='group'>
                        <div className='flex flex-row items-center gap-2 cursor-pointer transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                            <FaHome className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700' />
                            <h2 className='text-lg transition-colors duration-300 ease-in-out group-hover:text-red-700'>Lịch sử mua hàng</h2>
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
                    <div className='container mx-auto'>
                        <div className='flex-col flex gap-4 justify-center items-center'>
                            <img src='https://minhtuanmobile.com/assets/front/img/khthanthiet-no-user-tuoi-20.png' className='w-20' />
                            <p className='text-xl font-medium text-red-700 '>ANH SAO</p>
                            <div className='flex flex-row gap-40'>
                                <div className='flex flex-col items-center'>
                                    <MdOutlinePayment className='text-red-700 size-8' />
                                    <p>Tổng chi tiêu</p>
                                    <p className='text-red-700'>13,599,000đ</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <FaBirthdayCake className='text-red-700 size-8' />
                                    <p>Sinh nhật</p>
                                    <p className='text-red-700'>29/06/2004</p>
                                </div>
                            </div>
                            <CutomerHome />
                        </div>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Customer