import React from 'react'

function PaymentError() {
    return (
        <div>
            <div className="bg-white p-4 border border-gray-300 rounded-md mb-4">
                <div className="flex items-center bg-blue-500 p-2 rounded-md text-white mb-4">
                    <img src="/path-to-icon/delivery-icon.png" alt="delivery" className="w-5 h-5 mr-2" />
                    <h3 className="font-bold text-lg">Thông tin thanh toán</h3>
                </div>
                <p>Hình thức: <strong className="text-blue-500">Thanh toán trực tuyến bằng VNPAY</strong></p>
                <p>Thời gian: <strong>19:08 10/09/2024</strong></p>
                <p>Số tiền: <strong>39,370,000đ</strong></p>
                <p>Trạng thái: <strong>Thanh toán thất bại/lỗi</strong></p>
            </div>
        </div>
    )
}

export default PaymentError