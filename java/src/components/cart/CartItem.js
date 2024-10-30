import React, { useState } from 'react';
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function CartItem() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState("Màu sắc");
    const colors = ["Pink", "Yellow", "Blue"];

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setIsDropdownOpen(false);
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row border-gray-300 border-2 rounded-2xl p-2 justify-between mb-8'>
                <div className='flex flex-row'>
                    <div className='w-28 h-auto overflow-hidden cursor-pointer'>
                        <img src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' alt='Product' />
                    </div>
                    <div className='flex flex-col ml-2'>
                        <p className='text-base font-semibold mb-3'>iPhone 15 128GB - Chính hãng VN/A</p>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={handleDropdown}
                                className="px-2 py-1 border border-gray-300 text-black text-sm outline-none w-full bg-white hover:bg-gray-50 flex items-center rounded-full" >
                                {selectedColor} {/* Display selected color */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 ml-auto" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <ul className="absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white z-[1000] min-w-full w-max max-h-96 overflow-auto rounded-sm">
                                    {colors.map((color, index) => (
                                        <li key={index}
                                            onClick={() => handleColorSelect(color)}
                                            className={`m-2 text-gray-800 text-sm cursor-pointer hover:bg-gray-100 ${selectedColor === color ? 'font-semibold' : ''}`}>
                                            {color}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='mt-5'>
                            <span className='font-medium text-red-700'>19,290,000đ </span>
                            <span className='line-through ml-4'>24,990,000đ</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end'>
                    <div className='border-2 rounded-lg p-2 group hover:bg-red-700 cursor-pointer'>
                        <FaTrash className='group-hover:text-white' />
                    </div>
                    <div className='border-2 rounded-full p-2'>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                            <div>
                                <FaPlus />
                            </div>
                            <input type='number' className='ml-2 w-16 h-full text-center' value={10} />
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row border-gray-300 border-2 rounded-2xl p-2 justify-between mb-8'>
                <div className='flex flex-row'>
                    <div className='w-28 h-auto overflow-hidden cursor-pointer'>
                        <img src='https://minhtuanmobile.com/uploads/products/iphone-15-yellow-230913032308-230913152308_thumb.png' alt='Product' />
                    </div>
                    <div className='flex flex-col ml-2'>
                        <p className='text-base font-semibold mb-3'>iPhone 15 128GB - Chính hãng VN/A</p>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={handleDropdown}
                                className="px-2 py-1 border border-gray-300 text-black text-sm outline-none w-full bg-white hover:bg-gray-50 flex items-center rounded-full" >
                                {selectedColor} {/* Display selected color */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 ml-auto" viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <ul className="absolute shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white z-[1000] min-w-full w-max max-h-96 overflow-auto rounded-sm">
                                    {colors.map((color, index) => (
                                        <li key={index}
                                            onClick={() => handleColorSelect(color)}
                                            className={`m-2 text-gray-800 text-sm cursor-pointer hover:bg-gray-100 ${selectedColor === color ? 'font-semibold' : ''}`}>
                                            {color}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='mt-5'>
                            <span className='font-medium text-red-700'>19,290,000đ </span>
                            <span className='line-through ml-4'>24,990,000đ</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end'>
                    <div className='border-2 rounded-lg p-2 group hover:bg-red-700 cursor-pointer'>
                        <FaTrash className='group-hover:text-white' />
                    </div>
                    <div className='border-2 rounded-full p-2'>
                        <div className='flex flex-row justify-center items-center cursor-pointer'>
                            <div>
                                <FaPlus />
                            </div>
                            <input type='number' className='ml-2 w-16 h-full text-center' value={10} />
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row border-gray-300 bg-white border-2 rounded-xl justify-between items-center mb-8 relative'>
                <input placeholder='Nhập mã giảm giá(nếu có)' className='ml-3 w-auto p-3' />

                <div className='flex flex-row items-center gap-2 mr-4 cursor-pointer group'>
                    <p className="text-lg group-hover:text-red-700">Áp dụng</p>
                    <RiDiscountPercentLine className='text-2xl group-hover:text-red-700' />
                </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <p className='text-lg'>Tạm tính</p>
                <p className='text-xl text-red-700 font-medium'>185,610,000</p>
            </div>
            <Link to='/cart/customer'>
                <button type="button"
                    class="!mt-4 w-full py-3 mx-auto block text-lg bg-red-700 rounded-lg text-white font-bold  hover:bg-red-950">MUA HÀNG</button>
            </Link>

        </div>
    );
}

export default CartItem;
