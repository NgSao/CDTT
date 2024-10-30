import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>Khách hàng thân thiết </span>
                </div>
            </div>
            <div className='container mx-auto mt-10'>
                <div className='flex-col flex gap-4 justify-center items-center  mb-10'>
                    <img src='https://minhtuanmobile.com/assets/front/img/khthanthiet-no-user-tuoi-20.png' className='w-40' />
                    <p className='text-2xl font-medium '>Đăng nhập <span>SN Mobile</span></p>
                </div>
                <form class="space-y-6 font-[sans-serif] max-w-md mx-auto border-b-2 pb-6 border-gray-300">
                    <div>
                        <div>Số điện thoại của bạn</div>
                        <input type="tel"
                            class="mt-2 px-4 py-3 bg-white border-gray-300 w-full text-sm outline-none  focus:border-red-700 rounded border-2" />
                    </div>

                    <div>
                        <div>Mật khẩu</div>
                        <input type="password"
                            class="px-4 py-3 bg-white border-2 border-gray-300  w-full text-sm outline-none  focus:border-red-700 rounded" />
                    </div>

                    <div class="flex">
                        <input type="checkbox" class="w-4" />
                        <label class="text-sm ml-2 ">Ghi nhớ</label>
                    </div>
                    <Link to='/customer'>
                        <button type="button"
                            class="!mt-4 w-full px-4 py-3 mx-auto block text-lg bg-red-700 rounded-lg text-white font-bold  hover:bg-red-800">ĐĂNG NHẬP</button>
                    </Link>
                </form>

                <div className='max-w-md mx-auto'>
                    <Link to='/register'>
                        <button type="button"
                            class="!mt-4 px-4 py-3 w-full mx-auto block text-lg border-2 border-red-950 bg-white rounded-lg text-red-950 font-bold  hover:bg-red-950 hover:text-white">ĐĂNG KÝ THÀNH VIÊN</button></Link>
                </div>

            </div>
        </div>

    )
}

export default Login
