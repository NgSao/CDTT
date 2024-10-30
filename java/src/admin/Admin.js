import React from 'react';
import Topbar from './layouts/Topbar';
import Menu from './layouts/Menu';
import { Outlet } from 'react-router-dom';
import Footer from './layouts/Footer';
function Admin() {


    return (
        <div className='bg-gray-50 dark:bg-gray-800'>
            <Topbar />
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Menu />
                <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" />
                <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default Admin
