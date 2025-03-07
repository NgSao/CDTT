import React, { useEffect, useState } from 'react';
import Sidebar from './../layout/Sidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Headerr() {
    const [activeMenu, setActiveMenu] = useState('Home');
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Để mở dropdown

    // Fetch user info from the API
    const getUserInfo = async () => {
        const token = localStorage.getItem('authToken');
        const id = localStorage.getItem('userId');
        if (!token) {
            console.log('No token found');
            return;
        }

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/show/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const userData = response.data.user;
            const userget = userData.reduce((a, b, c, d) => d);

            setUser(userget); // Update user info
        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const menuItems = [
        { id: 1, label: 'Shop All' },
        { id: 2, label: 'Tops' },
        { id: 3, label: 'Bottoms' },
        { id: 4, label: 'Outerwear' },
        { id: 5, label: 'Bar' },
    ];

    const handleMenuClick = (label) => {
        setActiveMenu(label);
    };

    const handleLogout = () => {
        // Xử lý đăng xuất
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setUser(null); // Reset lại user sau khi đăng xuất
    };
    console.log("user", user)

    return (
        <header className='py-4 px-4 sm:px-10 z-50 min-h-[70px] relative'>
            <div className='lg:flex lg:items-center gap-x-2 relative'>
                <div className="flex items-center shrink-0">
                    <a href="/Home"><img src="https://theme.hstatic.net/1000306633/1001194548/14/logo_menu_no_scroll.png?v=225" alt="logo" className='w-40' /></a>
                    <button id="toggleOpen" className='lg:hidden ml-auto'>
                        <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>

                <div id="collapseMenu" className="lg:ml-14 max-lg:hidden lg:!block w-full">
                    <div className='lg:flex items-center w-full gap-6'>
                        <ul className='lg:flex gap-x-6'>
                            {menuItems.map((item) => (
                                <li key={item.id} className='max-lg:border-b max-lg:py-3 px-3'>
                                    <a
                                        href="#"
                                        onClick={() => handleMenuClick(item.label)}
                                        className={`hover:text-blue-600 block transition-all ${activeMenu === item.label ? 'text-blue-600' : ''}`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className='flex items-center lg:ml-auto'>
                            {!user ? (
                                <Link to="/login">
                                    <button className='px-6 py-2.5'>
                                        Đăng nhập
                                    </button>
                                </Link>
                            ) : (
                                <div className='relative'>
                                    <img
                                        src={user.thumbnail}
                                        alt="User Thumbnail"
                                        className='w-10 h-10 rounded-full cursor-pointer'
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    />
                                    {isDropdownOpen && (
                                        <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg'>
                                            <button
                                                onClick={handleLogout}
                                                className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
                                            >
                                                Đăng xuất
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className='flex xl:w-80 max-xl:w-full bg-transparent px-6 py-2.5 rounded border border-black'>
                                <input type='text' placeholder='Search something...' className='w-full bg-transparent rounded outline-none' />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
                                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                                </svg>
                            </div>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Headerr;
