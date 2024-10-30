import React, { useState } from 'react';
import homeImage from '../../images/home.jpg';
import momoImage from '../../images/momo.png';
import vnpayImage from '../../images/vnpay.jpg';
import zalopayImage from '../../images/zalo.jpeg';

const radioButtons = [
    {
        id: '1',
        label: 'Giao hàng tận nhà',
        imageUrl: homeImage,
    },
    {
        id: '2',
        label: 'Thanh toán trực tuyến bằng MOMO',
        imageUrl: momoImage,
    },
    {
        id: '3',
        label: 'Thanh toán trực tiếp VNPAY',
        imageUrl: vnpayImage,
    },
    {
        id: '4',
        label: 'Thanh toán trực tiếp bằng ZaloPay',
        imageUrl: zalopayImage,
    }
];

const PaymentMethod = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handlePress = (id) => {
        setSelectedId(id);
    };

    return (
        <div>
            <h1 className='text-xl'>Hình thức thanh toán</h1>
            {radioButtons.map(item => (
                <button
                    key={item.id}
                    onClick={() => handlePress(item.id)}
                    className={`flex items-center justify-between border p-2 rounded-full my-2 w-full ${selectedId === item.id ? 'border-red-700' : 'border-gray-300'} bg-white`}
                >
                    <img src={item.imageUrl} alt={item.label} className="w-10 h-10 mr-4" />
                    <p className="flex-1 text-left">{item.label}</p>
                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${selectedId === item.id ? 'border-red-700' : 'border-gray-500'}`}>
                        {selectedId === item.id && <div className="w-3 h-3 bg-red-700 rounded-full" />}
                    </div>
                </button>
            ))}
        </div >
    );
};

export default PaymentMethod;
