"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarContent from "./SidebarContent";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <GiHamburgerMenu className="w-6 h-6 text-teal-800"/>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 text-base-content min-h-full w-64">
          <SidebarContent />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
