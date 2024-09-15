"use client"

import React, { useState } from 'react';
import { FaHome, FaUser, FaListUl, FaBloggerB, FaArchive, FaBell, FaEnvelope } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const DashSideNav: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleDropdownToggle = (item: string) => {
    setSelected(prev => (prev === item ? null : item));
  };

  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
      <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
        <h2 className="font-bold text-2xl">
          LOREM{' '}
          <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span>
        </h2>
      </a>
      <ul className="mt-4">
        <span className="text-gray-400 font-bold">ADMIN</span>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            // Add your active or selected class logic here
          >
            <FaHome className="mr-3 text-lg" />
            <span className="text-sm">Dashboard</span>
          </a>
        </li>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            onClick={() => handleDropdownToggle('users')}
          >
            <FaUser className="mr-3 text-lg" />
            <span className="text-sm">Users</span>
            <IoIosArrowForward className={`ml-auto ${selected === 'users' ? 'rotate-90' : ''}`} />
          </a>
          <ul className={`pl-7 mt-2 ${selected === 'users' ? 'block' : 'hidden'}`}>
            <li className="mb-4">
              <a
                href="#"
                className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >
                All
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >
                Roles
              </a>
            </li>
          </ul>
        </li>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            // Add your active or selected class logic here
          >
            <FaListUl className="mr-3 text-lg" />
            <span className="text-sm">Activities</span>
          </a>
        </li>
        <span className="text-gray-400 font-bold">BLOG</span>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            onClick={() => handleDropdownToggle('blog')}
          >
            <FaBloggerB className="mr-3 text-lg" />
            <span className="text-sm">Post</span>
            <IoIosArrowForward className={`ml-auto ${selected === 'blog' ? 'rotate-90' : ''}`} />
          </a>
          <ul className={`pl-7 mt-2 ${selected === 'blog' ? 'block' : 'hidden'}`}>
            <li className="mb-4">
              <a
                href="#"
                className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >
                All
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3"
              >
                Categories
              </a>
            </li>
          </ul>
        </li>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            // Add your active or selected class logic here
          >
            <FaArchive className="mr-3 text-lg" />
            <span className="text-sm">Archive</span>
          </a>
        </li>
        <span className="text-gray-400 font-bold">PERSONAL</span>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            // Add your active or selected class logic here
          >
            <FaBell className="mr-3 text-lg" />
            <span className="text-sm">Notifications</span>
            <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">
              5
            </span>
          </a>
        </li>
        <li className="mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
            // Add your active or selected class logic here
          >
            <FaEnvelope className="mr-3 text-lg" />
            <span className="text-sm">Messages</span>
            <span className="md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">
              2 New
            </span>
          </a>
        </li>
      </ul>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
    </div>
  );
};

export default DashSideNav;
