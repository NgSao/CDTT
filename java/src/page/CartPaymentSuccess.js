import React from 'react';
import Progress from '../components/cart/Progress ';
import { Link } from 'react-router-dom';
import UserInfo from '../components/order/UserInfo';
import OrderItem from '../components/order/OrderItem';

const CartPaymentSuccess = () => {
    return (
        <div>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>Đặt hàng thành công </span>
                </div>
            </div>
            <div className="container mx-auto flex flex-col max-w-xl">
                <Progress step={3} />
                <div className="p-4">
                    <div className="bg-green-100 p-4 border border-gray-300 rounded-md mb-4">
                        <h1 className="text-lg font-bold mb-1">Đặt hàng thành công</h1>
                        <p className="mb-1">Đơn hàng đã đặt thành công.</p>
                        <div className="flex items-center mb-1">
                            <span>Cảm ơn Quý khách đã mua hàng tại
                                <Link to='/'>
                                    <button className="text-red-700 ml-1">SN Mobile</button>
                                </Link>
                            </span>
                        </div>
                        <div className="flex items-center mb-1 ">
                            <span>Nếu Quý khách có bất kỳ thắc mắc gì, xin vui lòng liên hệ với hotline:
                                <button onClick={() => window.open('tel:0392445255')} className="text-red-700 ml-1">0392445255</button>
                            </span>

                        </div>
                    </div>

                    <div className="bg-white p-4 border border-gray-300 rounded-md mb-4">
                        <h2 className="text-lg font-bold text-red-700 mb-1">Thông tin đơn hàng</h2>
                        <p className="mb-1">Mã đơn hàng: <strong>SN2906.2004</strong></p>
                        <p className="mb-1">Ngày đặt hàng: <span>10/09/2024</span></p>
                        <p className="mb-1">Trạng thái: <span className="font-semibold text-blue-500">Giao dịch đang xử lý/kiểm tra</span></p>
                        <OrderItem />
                    </div>
                    <div className="bg-white p-4 border border-gray-300 rounded-md mb-4">
                        <UserInfo />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <Link to='/checkorder'>
                            <button
                                className="bg-yellow-500 text-xl text-white rounded-xl p-3 w-full font-bold hover:bg-red-950" >
                                Kiểm tra đơn hàng
                            </button>
                        </Link>
                        <Link to='/'>
                            <button
                                className="bg-red-700 text-xl text-white rounded-xl p-3 w-full font-bold hover:bg-red-950" >
                                Trang chủ
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default CartPaymentSuccess;
