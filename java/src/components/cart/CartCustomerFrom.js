import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = [
    { id: 1, address: 'Hồ Chí Minh - 123 Lê Văn Việt' },
    { id: 2, address: 'Hồ Chí Minh - 45 Nguyễn Văn Tăng' },
    { id: 3, address: 'Hồ Chí Minh - 67 Nguyễn Xuyển' },
    { id: 4, address: 'Hồ Chí Minh - 89 Lò Lu' },
    { id: 5, address: 'Hồ Chí Minh - 10 Đỗ Xuân Hợp' },
];
function CartCustomerFrom() {
    const [selectedId, setSelectedId] = useState('0');
    const radioButtons = [
        { id: '1', label: 'Nhận tại cửa hàng' },
        { id: '2', label: 'Giao hàng tận nơi' }
    ];

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [selectedShop, setSelectedShop] = useState(null);

    const [shops, setShops] = useState(Shop);

    const [isOtherReceiver, setIsOtherReceiver] = useState(false);
    const [isScreenSupport, setIsScreenSupport] = useState(false);

    useEffect(() => {
        axios.get('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then(response => {
                if (response.data.error === 0) {
                    setProvinces(response.data.data.map(province => ({ label: province.name, value: province.id })));
                }
            })
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            axios.get(`https://esgoo.net/api-tinhthanh/2/${selectedProvince}.htm`)
                .then(response => {
                    if (response.data.error === 0) {
                        setDistricts(response.data.data.map(district => ({ label: district.name, value: district.id })));
                        setWards([]);
                    }
                })
                .catch(error => console.error(error));
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedDistrict) {
            axios.get(`https://esgoo.net/api-tinhthanh/3/${selectedDistrict}.htm`)
                .then(response => {
                    if (response.data.error === 0) {
                        setWards(response.data.data.map(ward => ({ label: ward.name, value: ward.id })));
                    }
                })
                .catch(error => console.error(error));
        }
    }, [selectedDistrict]);

    return (
        <div className="flex flex-col p-4 items-center bg-white border-2 shadow-lg">
            <div className='flex flex-row float-start w-full pl-4'>
                <h1 className="text-xl mb-4">Thông tin đơn hàng</h1>
            </div>
            <div className=" w-full max-w-lg  rounded-lg">
                <input
                    type="text"
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                    placeholder="Vui lòng nhập họ và tên (bắt buộc)"
                />
                <input
                    type="tel"
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                    placeholder="Vui lòng nhập số điện thoại (bắt buộc)"
                />
                <input
                    type="email"
                    className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                    placeholder="Vui lòng nhập địa chỉ email (bắt buộc)"
                />
                <p className="text-lg">Chọn phương thức nhận hàng:</p>
                <div className="flex space-x-4 my-4">
                    {radioButtons.map(button => (
                        <label key={button.id} className="flex items-center">
                            <input
                                type="radio"
                                value={button.id}
                                checked={selectedId === button.id}
                                onChange={() => setSelectedId(button.id)}
                                className="mr-2"
                            />
                            {button.label}
                        </label>
                    ))}
                </div>

                {selectedId === '1' && (
                    <div className="mb-4">
                        <p>Hệ thống cửa hàng</p>
                        <select
                            className="border border-gray-300 rounded-lg w-full p-2"
                            value={selectedShop}
                            onChange={(e) => setSelectedShop(e.target.value)}
                        >
                            <option value="">Chọn cửa hàng</option>
                            {shops.map(shop => (
                                <option key={shop.id} value={shop.id}>{shop.address}</option>
                            ))}
                        </select>
                    </div>
                )}

                {selectedId === '2' && (
                    <div>
                        <div className="mb-4">
                            <p>Tỉnh/Thành phố</p>
                            <select
                                className="border border-gray-300 rounded-lg w-full p-2"
                                value={selectedProvince}
                                onChange={(e) => {
                                    setSelectedProvince(e.target.value);
                                    setSelectedDistrict(null);
                                    setSelectedWard(null);
                                }}
                            >
                                <option value="">Chọn tỉnh thành</option>
                                {provinces.map(province => (
                                    <option key={province.value} value={province.value}>{province.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <p>Quận/huyện</p>
                            <select
                                className="border border-gray-300 rounded-lg w-full p-2"
                                value={selectedDistrict}
                                onChange={(e) => {
                                    setSelectedDistrict(e.target.value);
                                    setSelectedWard(null);
                                }}
                            >
                                <option value="">Chọn huyện</option>
                                {districts.map(district => (
                                    <option key={district.value} value={district.value}>{district.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-4">
                            <p>Xã/Phường</p>
                            <select
                                className="border border-gray-300 rounded-lg w-full p-2"
                                value={selectedWard}
                                onChange={(e) => setSelectedWard(e.target.value)}
                            >
                                <option value="">Chọn xã/phường</option>
                                {wards.map(ward => (
                                    <option key={ward.value} value={ward.value}>{ward.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="border border-gray-300 rounded-lg w-full p-2 mb-4">
                            <p>Địa chỉ</p>
                            <input
                                type="text"
                                className="w-full p-2"
                                placeholder="Nhập địa chỉ"
                            />
                        </div>
                    </div>
                )}


                <div className="mb-4">
                    <p>Ghi chú của khách hàng</p>
                    <textarea
                        className="border border-gray-300 rounded-lg w-full p-2"
                        rows="4"
                    />
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isOtherReceiver}
                        onChange={() => setIsOtherReceiver(!isOtherReceiver)}
                    />
                    <label>Gọi người khác nhận (nếu có)</label>
                </div>

                {isOtherReceiver && (
                    <div>
                        <input
                            type="text"
                            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                            placeholder="Nhập họ tên người nhận (bắt buộc)"
                        />
                        <input
                            type="tel"
                            className="border border-gray-300 rounded-lg w-full p-2 mb-4"
                            placeholder="Nhập số điện thoại của người nhận (bắt buộc)"
                        />
                    </div>
                )}

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={isScreenSupport}
                        onChange={() => setIsScreenSupport(!isScreenSupport)}
                    />
                    <label>Hỗ trợ gián màn hình, chuyển dữ liệu</label>
                </div>
                <Link to='/cart/payment'>
                    <button
                        className="bg-red-700 text-xl text-white rounded-lg p-2 w-full font-bold hover:bg-red-950" >
                        TIẾP TỤC
                    </button>
                </Link>
            </div>
        </div>
    );
}
export default CartCustomerFrom
