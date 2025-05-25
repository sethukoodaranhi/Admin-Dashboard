import React, { useContext } from 'react'
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import cmpnyLogo from '../assets/images/company-logo.png'
function Sidebar({ isOpen, setIsOpen }) {
    const { logout } = useContext(AuthContext)
    const sideMenus = [
        {
            id: 1,
            icon: "material-symbols:home-outline",
            title: "Dashboard",
            path: '/dashboard'
        },
        {
            id: 2,
            icon: "mynaui:users",
            title: "Users",
            path: '/users'
        },
        {
            id: 3,
            icon: "solar:settings-linear",
            title: "Settings",
            path: '/settings'
        },
        {
            id: 4,
            icon: "ri:logout-circle-r-line",
            title: 'Logout'
        }
    ]
    return (
        <div
            className={`sidebarContainer min-h-screen bg-[#13097d] text-white shadow-md w-64 fixed top-0 left-0 h-full z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}
        >
            <ul className="flex flex-col space-y-2 p-4 mt-14 md:mt-0">
                <img
                    className="mx-auto w-50 h-auto"
                    src={cmpnyLogo}
                    alt="Company Logo"
                />
                {sideMenus.map((item, index) => (
                    <li key={index}>

                        {item.title === "Logout" ? (
                            <button
                                onClick={logout}
                                className="flex items-center w-full px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[#1e1eaa]"
                            >
                                <Icon icon={item.icon} width="24" height="24" className="mr-3" />
                                <span className="text-[16px] font-medium">{item.title}</span>
                            </button>
                        ) : (
                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)} // Close on link click (mobile)
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-[#1e1eaa] ${isActive ? 'bg-[#1e1eaa]' : ''}`
                                }
                            >
                                <Icon icon={item.icon} width="24" height="24" className="mr-3" />
                                <span className="text-[16px] font-medium">{item.title}</span>
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Sidebar