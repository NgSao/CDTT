import React from 'react'
import CartPaymentShow from '../components/cart/CartPaymentShow'
import Progress from './../components/cart/Progress ';

function CartPayment() {
    return (
        <div>
            <div className='bg-gray-200 border-b-2 border-gray-300'>
                <div className='container mx-auto p-3 '>
                    <span>Trang chủ / </span>
                    <span>Đơn hàng của bạn </span>
                </div>
            </div>
            <div className='container mx-auto mt-4'>
                <Progress step={2} />
                <div className='max-w-xl mx-auto mt-5 '>
                    <p className='text-2xl mb-5'>Thông tin thanh toán</p>
                    <CartPaymentShow />
                </div>
            </div>
        </div>)
}

export default CartPayment