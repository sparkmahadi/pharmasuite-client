import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import RightSideIcons from "./RightSideIcons";
import SearchForm from "./SearchForm";

const Navbar = () => {

  return (
    <div className="px-10">
      <nav className="max-w-8xl nav-bg bg-green-300 mx-auto p-5">
        <div className="">
          <div className="flex justify-around">

            <Image src={logo} alt="" className="w-40" />

            <SearchForm />

            <RightSideIcons />
          </div>
        </div>

      </nav>
      {/* nav bottom menus */}
      <div className="lg:p-5 font-semibold">
        <ul className="lg:flex lg:gap-10 items-center justify-center">
          <li>Home</li>
          <span className="flex gap-2 items-center">
            <li>Medicines</li>
            <FaChevronDown className=""/>
          </span>
          <span className="flex gap-2 items-center">
            <li>Products</li>
            <FaChevronDown className=""/>
          </span>
          <span className="flex gap-2 items-center">
            <li>Equipments</li>
            <FaChevronDown className=""/>
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
