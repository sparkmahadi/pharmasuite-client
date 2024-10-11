"use client";

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DashSideNav from '../components/Dashboard/SideNavs/DashSideNav';
import { CiMenuBurger } from 'react-icons/ci';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure that this code runs only on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Retrieve user details from Redux
  const { _id: userId, name, email, role } = useSelector((state: any) => state.user.userDetails);

  // Render nothing until the component has mounted
  if (!isMounted) {
    return null; // You can return a loading indicator here if needed
  }

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Menu button */}
        <div className='flex items-center gap-2'>
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <CiMenuBurger className="w-5 h-5" />
          </label>
          <h3 className='text-xl text-teal-800 font-semibold'>Dashboard</h3>
        </div>
        <div className="p-4">{children}</div>
      </div>


      {/* Sidebar Navigation */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <DashSideNav userRole={role} />
      </div>
    </div>
  );
}
