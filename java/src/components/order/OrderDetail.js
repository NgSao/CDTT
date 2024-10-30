import { useState } from 'react';
import UserInfo from './UserInfo';

function OrderDetail() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="flex-1  mt-5 p-4">
            <div className="bg-white p-4 mb-5 rounded-sm border border-gray-300">
                <div className="flex justify-between pb-2 font-semibold">
                    <span>ĐƠN HÀNG: <span>290604</span></span>
                    <span className="text-green-600">Thành công</span>
                </div>
                <div className="border-b border-gray-300 pb-4">
                    <p>Ngày đặt hàng: 11/09/2024</p>
                    <p className="text-red-700 font-medium pt-1">Dự kiến giao: 14/09/2024</p>
                </div>

                <div className="flex items-center border-b border-gray-300 py-4">
                    <img className="h-24 w-20" src="https://minhtuanmobile.com/uploads/products/iphone-15-blue-minh-tuan-mobile-231215085234-231215085234_thumb.png" alt="iPhone 15" />
                    <div className="ml-4">
                        <p className="font-bold">iPhone 15 - Chính hãng VN/A</p>
                        <div className="flex items-center mt-2">
                            <span className="pr-4">Số lượng:</span><span>1</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <span className="pr-12">Giá:</span><span>13,090,000đ</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center border-b border-gray-300 py-4">
                    <img className="h-24 w-20" src="https://minhtuanmobile.com/uploads/products/iphone-15-blue-minh-tuan-mobile-231215085234-231215085234_thumb.png" alt="iPhone 15" />
                    <div className="ml-4">
                        <p className="font-bold">iPhone 15 - Chính hãng VN/A</p>
                        <div className="flex items-center mt-2">
                            <span className="pr-4">Số lượng:</span><span>1</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <span className="pr-12">Giá:</span><span>13,090,000đ</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mb-6">
                    <div className="flex justify-between pb-2">
                        <span>Tổng đơn hàng:</span><span>13,650,000đ</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Số lượng:</span><span>2</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Phí vận chuyển:</span><span>-</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span>Mã giảm giá/ưu đãi:</span><span>-</span>
                    </div>
                    <div className="flex justify-between pb-2">
                        <span className="font-bold text-red-700">Tổng tiền đơn hàng:</span>
                        <div className="text-center">
                            <span className="font-bold text-red-700">13,599,000đ</span>

                        </div>
                    </div>
                    <button
                        className="border border-red-700 rounded-full px-6 py-1 mt-2 text-red-700 "
                        onClick={() => setShowDetails(!showDetails)}   >
                        Chi tiết
                    </button>
                </div>

                {showDetails && (
                    <div className=" p-4 border border-gray-300 rounded-lg">
                        <UserInfo />
                    </div>
                )}
            </div>
        </div>
    );
}

export default OrderDetail;
