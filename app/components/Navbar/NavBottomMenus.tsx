import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const NavBottomMenus = () => {
  return (
    <div className="lg:p-5 font-semibold hidden md:block">
      <ul className="lg:flex lg:gap-10 items-center justify-center">
        <li>Home</li>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            <span className="flex gap-2 items-center">
              <li>Medicines</li>
              <FaChevronDown className="" />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href={"/otc-medicines"}>OTC Medicines</Link>
            </li>
            <li>
              <Link href={"/otc-medicines"}>Prescription Medicines</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            <span className="flex gap-2 items-center">
              <li>Products</li>
              <FaChevronDown className="" />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href={"/otc-medicines"}>Healthcare Products
              </Link>
            </li>
            <li>
              <Link href={"/otc-medicines"}>Men's Products</Link>
            </li>
            <li>
              <Link href={"/otc-medicines"}>Women's Products</Link>
            </li>
            <li>
              <Link href={"/otc-medicines"}>
              Baby Care</Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1">
            <span className="flex gap-2 items-center">
              <li>Equipments</li>
              <FaChevronDown className="" />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link href={"/otc-medicines"}>OTC Medicines</Link>
            </li>
            <li>
              <Link href={"/otc-medicines"}>Prescription Medicines</Link>
            </li>
          </ul>
        </div>

        <span className="flex gap-2 items-center">
          <li>Online Doctos</li>
        </span>
      </ul>
    </div>
  );
};

export default NavBottomMenus;
