import React from 'react'
import { Link } from 'react-router-dom'

function LoginAdmin() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
                <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
                        Đăng nhập Quản lý SN Mobile
                    </h2>
                    <div className="mt-8 space-y-6 flex flex-col justify-center">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="nguyensaovn2019@gmail.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label className="font-medium text-gray-900 dark:text-white">Ghi nhớ tài khoản</label>
                            </div>
                            <a href="#" className="ml-auto text-sm text-red-700 hover:underline dark:text-red-500">Quên mật khẩu?</a>
                        </div>
                        <Link to='/admin' className=" w-full px-5 py-3 text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 sm:w-auto dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Đăng nhập</Link>
                        <a href="/" className=" text-sm text-left text-white hover:underline ">Trang người dùng</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default LoginAdmin
