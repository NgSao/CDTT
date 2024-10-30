import React from 'react'
import { Link } from 'react-router-dom';
import { CiShoppingBasket } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiGift } from "react-icons/ci";
import { MdPayment } from "react-icons/md";

function OrderInfo() {
    return (
        <div className='flex flex-col gap-3'>
            <div className=' flex flex-row items-center justify-center'>
                < h1 className='text-center p-2 text-white font-medium text-lg bg-red-700 rounded-lg' > Thông tin đơn hàng</h1 >
            </div >
            <div className='flex flex-row items-center gap-2 '>
                <CiShoppingBasket className='text-2xl' />
                <p className='text-lg'>Tổng tiền sản phẩm:</p>
                <p className='text-lg'>19,290,000đ</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
                <LiaShippingFastSolid className='text-2xl' />
                <p className='text-lg'>Phí vận chuyển:</p>
                <p className='text-lg'>FreeShip</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
                <CiGift className='text-2xl' />
                <p className='text-lg'>Mã giảm giá:</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
                <MdPayment className='text-2xl' />
                <p className='text-lg'>Tổng tiền đơn hàng:</p>
                <p className='text-lg font-medium'>19,290,000đ</p>
            </div>
        </div >
    )
}

export default OrderInfo
