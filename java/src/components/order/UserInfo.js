import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { LuUserCircle2 } from "react-icons/lu";

function UserInfo() {
    return (
        <div className='flex flex-col gap-3'>
            <div className=' flex flex-row items-center justify-center'>
                < h1 className='text-center p-2 text-white font-medium text-lg bg-red-700 rounded-lg' > Thông tin khách hàng</h1 >
            </div >
            <div className='flex flex-row items-center gap-2 '>
                <LuUserCircle2 className='text-2xl' />
                <p className='text-base'>Người nhận:</p>
                <p className='text-base'>SaoNguyen</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
                <FaPhoneAlt className='text-2xl' />
                <p className='text-basse'>Số điện thoại:</p>
                <p className='text-basse'>0392445255</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
                <FaEnvelope className='text-2xl' />
                <p className='text-basse'>Email:</p>
                <p className='text-basse'>nguyensaovn@gmail.com</p>

            </div>
            <div className='flex flex-row items-center gap-2 '>
                <FaMapMarkerAlt className='text-2xl' />
                <p className='text-basse'>Địa chỉ nhận hàng:</p>
                <p className='text-basse'>Thủ Đức</p>
            </div>
            <div className='flex flex-row items-center gap-2 '>
                <AiOutlineEdit className='text-2xl' />
                <p className='text-basse'>Ghi chú:</p>
                <p className='text-basse'>Ship cho người yêu</p>
            </div>
        </div >
    )
}

export default UserInfo
