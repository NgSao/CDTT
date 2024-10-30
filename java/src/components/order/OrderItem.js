import React from 'react'

function OrderItem() {
    return (
        <div>
            <div className="flex items-center p-2 border-b">
                <img src="https://minhtuanmobile.com/uploads/products/iphone-15-blue-minh-tuan-mobile-231215085234-231215085234_thumb.png" alt="product" className="w-20 h-24 object-contain" />
                <div className="ml-4">
                    <p className="font-bold">iPhone 15 - Chính hãng VN/A</p>
                    <p>Màu: <span>Xanh</span></p>
                    <p>Số lượng: <span>1</span></p>
                </div>
            </div>
            <div className="flex items-center p-2 border-b">
                <img src="https://minhtuanmobile.com/uploads/products/iphone-15-blue-minh-tuan-mobile-231215085234-231215085234_thumb.png" alt="product" className="w-20 h-24 object-contain" />
                <div className="ml-4">
                    <p className="font-bold">iPhone 15 - Chính hãng VN/A</p>
                    <p>Màu: <span>Xanh</span></p>
                    <p>Số lượng: <span>1</span></p>
                </div>
            </div>
            <div className="pt-4 border-t">
                <div className="flex justify-between mb-2">
                    <span className="font-medium">Tổng tiền sản phẩm:</span>
                    <span>39,180,000đ</span>
                </div>
                {/* <div className="flex justify-between mb-2">
                    <span className="font-medium">Phí vận chuyển:</span>
                    <div className="text-right">
                        <span>+190,000đ</span>
                        <p className="text-xs text-blue-400">(Phí vận chuyển đã bao gồm bảo hiểm)</p>
                    </div>
                </div> */}
                <div className="flex justify-between">
                    <span className="font-semibold text-red-700">Tổng tiền đơn hàng:</span>
                    <span className="font-semibold text-red-700">39,370,000đ</span>
                </div>
            </div></div>
    )
}

export default OrderItem