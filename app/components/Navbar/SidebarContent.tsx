import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";

const SidebarContent = () => {
  const dropDownClasses = "dropdown dropdown-hover w-full";
  const menuIcons = "flex gap-10 items-center justify-between";
  return (
    <ul className="">
      <div className="bg-teal-700 py-2">
        <li className="p-7 text-white flex justify-around items-center">
          <div className="flex flex-col items-end">
            <h3>Login/</h3>
            <div>
              <h2 className="text-2xl font-semibold">Register</h2>
            </div>
          </div>
          <div className="">
            <CgProfile className="w-10 h-10" />
          </div>
        </li>
      </div>

      <li>
        <ul tabIndex={0} data-menu-list="true" className="">
          <div className={dropDownClasses}>
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-full justify-between"
            >
              <li>Medicines</li>
              <FaChevronDown className="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
            >
              <li>
                <Link href={"/otc-medicines"}>OTC Medicines</Link>
              </li>
              <li>
                <Link href={"/otc-medicines"}>Prescription Medicines</Link>
              </li>
            </ul>
          </div>

          <div className={dropDownClasses}>
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-full justify-between"
            >
              <li>Products</li>
              <FaChevronDown className="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
            >
              <li>
                <Link href={"/otc-medicines"}>Healthcare Products</Link>
              </li>
              <li>
                <Link href={"/otc-medicines"}>Men&apos;s Products</Link>
              </li>
              <li>
                <Link href={"/otc-medicines"}>Women&apos;s Products</Link>
              </li>
              <li>
                <Link href={"/otc-medicines"}>Baby Care</Link>
              </li>
            </ul>
          </div>

          <div className={dropDownClasses}>
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 w-full justify-between"
            >
              <li>Equipments</li>
              <FaChevronDown className="" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-full p-2 shadow"
            >
              <li>
                <Link href={"/otc-medicines"}>OTC Medicines</Link>
              </li>
              <li>
                <Link href={"/otc-medicines"}>Prescription Medicines</Link>
              </li>
            </ul>
          </div>

          <span>
            <li className="btn w-full">Online Doctos</li>
          </span>
          {/* More menu items can be added similarly */}
        </ul>
      </li>

      <div className="divider"></div>

      <li className="text-sm flex flex-col">
        <Link href={"/about-us"} className="mb-5 btn">
          About Us
        </Link>
        <Link href="/customer-services" className="btn">
          Customer Services
        </Link>
      </li>
    </ul>
  );
};

export default SidebarContent;
