import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { Icon } from '@iconify/react';
function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className='flex flex-col md:flex-row min-h-screen relative'>
            <button
                className="md:hidden p-4"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Icon icon="lucide:menu" width="30" height="30" className='text-gray-500'/>
            </button>
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
            <div className='flex-1 p-4 bg-gray-50'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout