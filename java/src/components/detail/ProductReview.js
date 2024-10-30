import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaPencilAlt, FaClock } from 'react-icons/fa';
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';

function ProductReview() {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => setModalVisible(!modalVisible);

    const [rating, setRating] = useState(0);
    const renderStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <button
                    key={i}
                    onClick={() => setRating(i)}
                    className="text-red-700 text-xl"
                >
                    {i <= rating ? <FaStar /> : <FaStarHalfAlt />}
                </button>
            );
        }
        return stars;
    };

    return (
        <div className="container border-gray-300 border-2 p-5 rounded-lg overflow-hidden">
            <div className='text-xl font-normals'>Đánh Giá & Nhận Xét Về <span>Iphone 14 128GB</span> - Chính Hãng VN/A</div>
            <div className='grid grid-cols-3 gap-4 mt-5 border-gray-300 border-2 rounded-lg'>
                <div className='flex flex-col justify-center items-center border-r-2 p-5'>
                    <div className='text-4xl font-bold'>4.5</div>
                    <div className='flex flex-row m-4 gap-2'>
                        <FaStar className="text-yellow-500 text-2xl" />
                        <FaStar className="text-yellow-500 text-2xl" />
                        <FaStar className="text-yellow-500 text-2xl" />
                        <FaStar className="text-yellow-500 text-2xl" />
                        <FaStarHalfAlt className="text-gray-300 text-2xl" />
                    </div>
                    <div className='text-xl'>Có <span className='text-red-700 font-bold'>6</span> đánh giá và nhận xét</div>
                </div>
                <div className='col-span-2 m-5'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1'>
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                            </div>
                            <div className="w-96 bg-gray-200 rounded-full dark:bg-gray-300">
                                <div className="bg-red-700 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '45%' }}></div>
                            </div>


                            <div className='text-lg'>3 đánh giá</div>
                        </div>

                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1'>
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                            </div>
                            <div className="w-96 bg-gray-200 rounded-full dark:bg-gray-300">
                                <div className="bg-red-700 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '55%' }}></div>
                            </div>

                            <div className='text-lg'>3 đánh giá</div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1'>
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                            </div>
                            <div className="w-96 bg-gray-200 rounded-full dark:bg-gray-300">
                                <div className="bg-red-700 h-3 text-xs font-medium text-blue-100 text-center  leading-none rounded-full" style={{ width: '0%' }}></div>
                            </div>

                            <div className='text-lg'>3 đánh giá</div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1'>
                                <FaStar className="text-red-700 text-xl" />
                                <FaStar className="text-red-700 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                            </div>
                            <div className="w-96 bg-gray-200 rounded-full dark:bg-gray-300">
                                <div className="bg-red-700 h-3 text-xs font-medium text-blue-100 text-center  leading-none rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <div className='text-lg'>3 đánh giá</div>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <div className='flex flex-row gap-1'>
                                <FaStar className="text-red-700 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                                <FaStarHalfAlt className="text-gray-300 text-xl" />
                            </div>
                            <div className="w-96 bg-gray-200 rounded-full dark:bg-gray-300">
                                <div className="bg-red-700 h-3 text-xs font-medium text-blue-100 text-center  leading-none rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <div className='text-lg'>3 đánh giá</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="border-t-2 border-gray-500 pt-2 mt-10">
                <div className="flex items-center space-x-4 p-4 border-b border-gray-300 relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://th.bing.com/th/id/OIP.h16GiUHqgY3r490HRXTKDQHaNK?rs=1&pid=ImgDetMain" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold">Nguyễn Sao</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <FaClock className="mr-1" />
                            <span>27/07/2024</span>
                        </div>
                        <p className="mt-2">Nhân viên nhiệt tình thân thiện, dễ thương . Hẹn có dịp sẽ ủng hộ tiếp</p>
                    </div>

                    <div className="flex items-center border-2 rounded-full p-1 px-5 ">
                        <FaStar className="mr-1 text-xl text-yellow-500" />
                        <span className="font-bold text-xl">5</span>
                    </div>

                </div>
                <div className="flex items-center space-x-4 p-4 border-b border-gray-300 relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://th.bing.com/th/id/OIP.h16GiUHqgY3r490HRXTKDQHaNK?rs=1&pid=ImgDetMain" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold">Nguyễn Sao</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <FaClock className="mr-1" />
                            <span>27/07/2024</span>
                        </div>
                        <p className="mt-2">Nhân viên nhiệt tình thân thiện, dễ thương . Hẹn có dịp sẽ ủng hộ tiếp</p>
                    </div>

                    <div className="flex items-center border-2 rounded-full p-1 px-5 ">
                        <FaStar className="mr-1 text-xl text-yellow-500" />
                        <span className="font-bold text-xl">5</span>
                    </div>

                </div>
                <div className="flex items-center space-x-4 p-4 border-b border-gray-300 relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden">
                        <img src="https://th.bing.com/th/id/OIP.h16GiUHqgY3r490HRXTKDQHaNK?rs=1&pid=ImgDetMain" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold">Nguyễn Sao</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <FaClock className="mr-1" />
                            <span>27/07/2024</span>
                        </div>
                        <p className="mt-2">Nhân viên nhiệt tình thân thiện, dễ thương . Hẹn có dịp sẽ ủng hộ tiếp</p>
                    </div>

                    <div className="flex items-center border-2 rounded-full p-1 px-5 ">
                        <FaStar className="mr-1 text-xl text-yellow-500" />
                        <span className="font-bold text-xl">5</span>
                    </div>
                </div>
                <div className="p-4 mt-2 flex justify-center">
                    <div
                        onClick={toggleModal}
                        className="flex items-center justify-center border border-red-700 text-red-700 font-medium py-2 px-4 rounded-lg cursor-pointer  hover:bg-blue-700 hover:text-white hover:border-blue-700" >
                        <FaPencilAlt className="mr-2" />
                        Gửi đánh giá
                    </div>
                </div>
            </div>



            {/* Modal */}
            <Modal
                isOpen={modalVisible}
                onRequestClose={toggleModal}
                className="flex flex-col  relative bg-white w-full h-auto mt-40 max-w-2xl mx-auto rounded-lg z-50"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <button
                    onClick={toggleModal}
                    className="absolute top-2 right-2 text-gray-600">
                    <ImCross size={20} />
                </button>
                <div className='bg-red-700'>
                    <h2 className="text-lg font-semibold p-2 text-white">Đánh giá của bạn</h2>
                </div>
                <div className="m-4 text-center">
                    <p className="text-md font-bold mb-2">Bạn cảm thấy <span>iPhone 15 256GB - Chính hãng VN/A</span> như thế nào?</p>
                    <div className="flex flex-row justify-center gap-2">
                        {renderStars()}
                    </div>
                </div>
                <div className="space-y-4 mx-5">
                    <div className="flex justify-between space-x-4 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Họ & Tên</label>
                            <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium mb-1">Số điện thoại</label>
                            <input type="text" className="border border-gray-300 rounded-md p-2 w-full" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Đánh giá của bạn</label>
                        <textarea className="border border-gray-300 rounded-md p-2 w-full h-32" />
                    </div>
                    <div className='pb-4 cursor-pointer'>
                        <div className="bg-blue-500 text-center text-white p-3 rounded-md w-40">
                            Gửi đánh giá
                        </div>
                    </div>

                </div>
            </Modal>

        </div>
    )
}

export default ProductReview
