import React, { useState, useEffect, useRef } from 'react';

function User() {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center ml-3">
            <button onClick={() => setUserMenuOpen(!userMenuOpen)}>
                <div type="button" className="relative flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded={userMenuOpen ? 'true' : 'false'} data-dropdown-toggle="dropdown-2">
                    <img className="w-8 h-8 rounded-full" src="https://th.bing.com/th/id/OIP.h16GiUHqgY3r490HRXTKDQHaNK?rs=1&pid=ImgDetMain" alt="user photo" />
                </div>
            </button>
            <div ref={menuRef} className={`z-50 absolute right-0 top-12 ${userMenuOpen ? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}>
                <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 dark:text-white" role="none">
                        SaoNguyen
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        nguyensaovn2019@gmail.com
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                    </li>

                    <li>
                        <a href="/admin/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default User;
