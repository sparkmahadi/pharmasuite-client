"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome, FaUser, FaListUl, FaBloggerB, FaArchive, FaBell, FaEnvelope, FaBoxes, FaClipboardList, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const AdminSideNav = () => {
    const [selected, setSelected] = useState<string | null>(null);
    const liClasses = "text-sm flex items-center hover:text-[#f84525] before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 cursor-pointer";

    const handleDropdownToggle = (item: string) => {
        setSelected(prev => (prev === item ? null : item));
    };

    return (
        <div className="fixed left-0 top-0 w-64 h-full bg-teal-900 p-4 z-50 sidebar-menu transition-transform text-white">
            <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
                <h2 className="font-bold text-2xl">
                    Pharma{' '}
                    <span className="bg-[#f84525] text-white px-2 rounded-md">Suite</span>
                </h2>
            </a>
            <ul className="mt-4">
                <span className="text-gray-400 font-bold">ADMIN</span>

                {/* Dashboard */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaHome className="mr-3 text-lg" />
                        <span className="text-sm">Dashboard</span>
                    </a>
                </li>

                {/* Users Management */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md" onClick={() => handleDropdownToggle('users')}>
                        <FaUser className="mr-3 text-lg" />
                        <span className="text-sm">Users</span>
                        <IoIosArrowForward className={`ml-auto ${selected === 'users' ? 'rotate-90' : ''}`} />
                    </a>
                    <ul className={`pl-7 mt-2 ${selected === 'users' ? 'block' : 'hidden'}`}>
                        <li className="mb-4">
                            <p className={liClasses}>All Users</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Roles</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Permissions</p>
                        </li>
                    </ul>
                </li>

                {/* Product Management */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md" onClick={() => handleDropdownToggle('products')}>
                        <FaBoxes className="mr-3 text-lg" />
                        <span className="text-sm">Products</span>
                        <IoIosArrowForward className={`ml-auto ${selected === 'products' ? 'rotate-90' : ''}`} />
                    </a>
                    <ul className={`pl-7 mt-2 ${selected === 'products' ? 'block' : 'hidden'}`}>
                        <li className="mb-4">
                            <Link href={"/dashboard/all-products"}><p className={liClasses}>All Products</p></Link>
                        </li>
                        <li className="mb-4">
                            <Link href={"/dashboard/main-products"}><p className={liClasses}>Main Products</p></Link>
                        </li>
                        <li className="mb-4">
                            <Link href={"/dashboard/other-products"}><p className={liClasses}>Other Products</p></Link>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Add New</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Categories</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Inventory</p>
                        </li>
                    </ul>
                </li>

                {/* Orders Management */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md" onClick={() => handleDropdownToggle('orders')}>
                        <FaClipboardList className="mr-3 text-lg" />
                        <span className="text-sm">Orders</span>
                        <IoIosArrowForward className={`ml-auto ${selected === 'orders' ? 'rotate-90' : ''}`} />
                    </a>
                    <ul className={`pl-7 mt-2 ${selected === 'orders' ? 'block' : 'hidden'}`}>
                        <li className="mb-4">
                            <p className={liClasses}>All Orders</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Pending</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Completed</p>
                        </li>
                    </ul>
                </li>

                {/* Analytics */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaChartLine className="mr-3 text-lg" />
                        <span className="text-sm">Analytics</span>
                    </a>
                </li>

                {/* Blog Management */}
                <span className="text-gray-400 font-bold">BLOG</span>
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md" onClick={() => handleDropdownToggle('blog')}>
                        <FaBloggerB className="mr-3 text-lg" />
                        <span className="text-sm">Post</span>
                        <IoIosArrowForward className={`ml-auto ${selected === 'blog' ? 'rotate-90' : ''}`} />
                    </a>
                    <ul className={`pl-7 mt-2 ${selected === 'blog' ? 'block' : 'hidden'}`}>
                        <li className="mb-4">
                            <p className={liClasses}>All Posts</p>
                        </li>
                        <li className="mb-4">
                            <p className={liClasses}>Categories</p>
                        </li>
                    </ul>
                </li>

                {/* Archive */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaArchive className="mr-3 text-lg" />
                        <span className="text-sm">Archive</span>
                    </a>
                </li>

                {/* Personal Notifications and Messages */}
                <span className="text-gray-400 font-bold">PERSONAL</span>
                <li className="mb-1 group">
                    <p className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaBell className="mr-3 text-lg" />
                        <span className="text-sm">Notifications</span>
                        <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
                            5
                        </span>
                    </p>
                </li>
                <li className="mb-1 group">
                    <p className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaEnvelope className="mr-3 text-lg" />
                        <span className="text-sm">Messages</span>
                        <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
                            2 New
                        </span>
                    </p>
                </li>

                {/* Settings and Logout */}
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaCog className="mr-3 text-lg" />
                        <span className="text-sm">Settings</span>
                    </a>
                </li>
                <li className="mb-1 group">
                    <a href="#" className="flex font-semibold items-center py-2 px-4 hover:bg-teal-950 hover:text-gray-100 rounded-md">
                        <FaSignOutAlt className="mr-3 text-lg" />
                        <span className="text-sm">Logout</span>
                    </a>
                </li>
            </ul>
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 hidden" />
        </div>
    );
};

export default AdminSideNav;
