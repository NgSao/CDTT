// src/components/Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className="top-4 right-4  text-black py-2 px-4  "
                onClick={toggleSidebar}
            >
                Cart
            </button>
            <div
                className={`fixed top-0 right-0 h-full w-96 bg-white text-white transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <button
                    className="absolute top-4 right-4 text-black text-4xl hover:scale-110"
                    onClick={toggleSidebar}
                >
                    &times;
                </button>
                <div className="p-6">
                    <h2 className="text-lg text-black  mb-4">Giỏ Hàng</h2>
                    {/* Nội dung của giỏ hàng sẽ được thêm vào đây */}

                    <h2 className="text-lg text-black  mb-4">
                        TOTAL</h2>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
