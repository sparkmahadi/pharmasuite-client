
import getAllCategories from "@/lib/other-products/getAllCategories";
import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const NavBottomMenus = async () => {
  const categories = await getAllCategories();
  return (
    <div className="lg:p-5 font-semibold hidden lg:block">
      <ul className="lg:flex lg:gap-10 items-center justify-center">
        <Link href={"/"}>
          <li>Home</li>{" "}
        </Link>
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
              <Link href={"/main-products/category/otc-medicines"}>
                OTC Medicines
              </Link>
            </li>
            <li>
              <Link href={"/main-products/category/prescription-medicines"}>
                Prescription Medicines
              </Link>
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
            {categories?.length > 0 ?
              categories?.map((cat:any) => (
                <li key={cat._id}>
                  <Link href={cat.href}>{cat.title}</Link>
                </li>
              ))
              :
              <li><p>No categories found.</p></li>
            }
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
              <Link href={"/other-products/category/devices-equipments"}>Devices and Equipments</Link>
            </li>
          </ul>
        </div>

        <span className="flex gap-2 items-center">
          <li>Online Doctos</li>
        </span>

        <span className="flex gap-2 items-center">
          <li><Link href={'/dashboard'}><p>Dashboard</p></Link></li>
        </span>
      </ul>
    </div>
  );
};

export default NavBottomMenus;
