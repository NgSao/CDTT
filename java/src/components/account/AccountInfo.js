import React from 'react';
import { CiEdit } from "react-icons/ci";

const AccountInfo = () => {

    return (
        <div className="flex flex-col mx-20">
            <div className="p-6">
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                            <p className="text-gray-500">Họ và tên:</p>
                            <input
                                type="text"
                                placeholder="Nguyễn Sao"
                                className="ml-2 text-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button>
                            <CiEdit className="size-5" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                            <p className="text-gray-500">Email:</p>
                            <input
                                type="email"
                                placeholder="nguyensaovn2019@gmail.com"
                                className="ml-2 text-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button>
                            <CiEdit className="size-5" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                            <p className="text-gray-500">Giới tính:</p>
                            <input
                                type="text"
                                placeholder="Chưa cập nhật"
                                className="ml-2 text-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button>
                            <CiEdit className="size-5" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                            <p className="text-gray-500">Số điện thoại:</p>
                            <input
                                type="tel"
                                placeholder="0392445255"
                                className="ml-2 text-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button>
                            <CiEdit className="size-5" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                            <p className="text-gray-500">Sinh nhật:</p>
                            <input
                                type="text"
                                placeholder="Chưa cập nhật"
                                className="ml-2 text-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button>
                            <CiEdit className="size-5" />
                        </button>
                    </div>

                    <div className="flex justify-between items-center border-b pb-4">
                        <div className="flex items-center">
                            <p className="text-gray-500">Địa chỉ:</p>
                            <input
                                type="text"
                                placeholder="Chưa cập nhật"
                                className="ml-2 text-sm text-gray-700 focus:outline-none"
                            />
                        </div>
                        <button>
                            <CiEdit className="size-5" />
                        </button>
                    </div>
                </div>

                <button className="bg-orange-500 text-white text-lg py-2 mt-6 rounded-lg w-full">
                    Đổi mật khẩu
                </button>

                <button
                    className="bg-red-600 text-white text-lg py-2 mt-4 rounded-lg w-full"
                >
                    Cập nhật thông tin
                </button>
            </div>
        </div>
    );
};

export default AccountInfo;