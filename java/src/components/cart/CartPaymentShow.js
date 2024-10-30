import React from 'react';

import OrderInfo from './../order/OrderInfo';
import UserInfo from './../order/UserInfo';
import PaymentMethod from './PaymentMethod';
import { Link } from 'react-router-dom';

const CartPaymentShow = () => {


    return (
        <div className='flex flex-col gap-10'>
            <div className='border-2  rounded-md p-3 '>
                <OrderInfo />
            </div>
            <div className='border-2  rounded-md p-3 '>
                <UserInfo />
            </div>
            <PaymentMethod />
            <Link to='/cart/success'>
                <button
                    className="bg-red-700 text-white rounded-xl p-3 w-full font-bold hover:bg-red-950" >
                    THANH TOÁN
                </button>
            </Link>
        </div>
    );
};

export default CartPaymentShow;
