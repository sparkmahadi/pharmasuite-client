import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import RightSideIcons from "./RightSideIcons";
import SearchForm from "./SearchForm";
import MenuMobile from "./MenuMobile";

const Navbar = () => {

  return (
    <div className="2xl:px-10 bg-red-300">
      <nav className="max-w-7xl nav-bg bg-green-300 mx-auto py-2 xl:p-5">
        {/* desktop navbar */}
        <div className="hidden xl:block">
          <div className="flex justify-around">

            <Image src={logo} alt="" className="w-1/6" />

            <SearchForm />

            <RightSideIcons />
          </div>
        </div>
        {/* tablet navbar */}
        <div className="xl:hidden">
          <div className="flex items-center justify-between px-2 md:px-5">
            <Image src={logo} alt="" className="w-24" />
            <RightSideIcons />
          </div>
          <div className="px-2 md:px-5 py-2">
            <SearchForm />
          </div>
        </div>

      </nav>
      {/* nav bottom menus */}
      <div className="lg:p-5 font-semibold">
        <ul className="lg:flex lg:gap-10 items-center justify-center">
          <li>Home</li>
          <span className="flex gap-2 items-center">
            <li>Medicines</li>
            <FaChevronDown className="" />
          </span>
          <span className="flex gap-2 items-center">
            <li>Products</li>
            <FaChevronDown className="" />
          </span>
          <span className="flex gap-2 items-center">
            <li>Equipments</li>
            <FaChevronDown className="" />
          </span>
          <span className="flex gap-2 items-center">
            <li>Online Doctos</li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
