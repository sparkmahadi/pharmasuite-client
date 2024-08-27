import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import RightSideIcons from "./RightSideIcons";
import SearchForm from "./SearchForm";
import NavBottomMenus from "./NavBottomMenus";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="2xl:px-10">
      <nav className="max-w-7xl nav-bg 0 mx-auto py-2 xl:p-5">
        {/* desktop navbar */}
        <div className="hidden xl:block">
          <div className="flex justify-between">
            <Image src={logo} alt="" className="w-1/6" />

            <SearchForm />

            <RightSideIcons />
          </div>
        </div>
        {/* tablet navbar */}
        <div className="xl:hidden">
          <div className="flex items-center justify-between px-2 md:px-5">
            <Image src={logo} alt="" className="w-24" />
            <div className="flex items-center gap-2">
              <RightSideIcons />
              <div className="block md:hidden">
                <Sidebar />
              </div>
            </div>
          </div>
          <div className="px-2 md:px-5 py-2">
            <SearchForm />
          </div>
        </div>
      </nav>

      <NavBottomMenus />
    </div>
  );
};

export default Navbar;
