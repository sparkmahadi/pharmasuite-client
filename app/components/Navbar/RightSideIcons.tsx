"use client";

import React, { useEffect } from "react";
import { FaCartPlus, FaSearch, FaTruck } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { clearUserCred, setUserCred } from "@/redux/user/userSlice";

const RightSideIcons = () => {
  const userData = useSelector((state: any) => state.user.userDetails);
  const dispatch = useDispatch();
  const navIcon = "w-6 h-6 md:w-8 md:h-8 text-teal-800";
  const rightIconDivs = "flex items-center gap-2 lg:gap-3 ";

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(clearUserCred());
    window.location.href = "/"; 
  };

  useEffect(() => {
    const userCredJson : any = localStorage.getItem('user');
    const userCred = JSON.parse(userCredJson);
    console.log(userCred);
    if (userCred?.email && userCred?.name && userCred?.role) {
      // alert("User login successfully");
     
      dispatch(setUserCred(userCred));
    //   router.push(`/`);
    }
  }, [dispatch]);
  return (
    <div className="flex justify-center xl:gap-5 2xl:gap-20">
      <Link href={"orders"} className={rightIconDivs}>
        <FaTruck className={navIcon} />
        <p className="xl:flex flex-col justify-center text-sm hidden">
          <span>Track</span>
          <span className="font-bold">Your Order</span>
        </p>
      </Link>

      <div className={rightIconDivs}>
        <div className="mr-5 mb-1 md:mb-3">
          <FaCartPlus className={`${navIcon} absolute`} />
          <span className="relative font-bold text-xs md:text-sm px-0.5 md:px-1.5 border border-sky-600 text-white md:text-black bg-red-400 md:bg-sky-100 rounded-full left-4 bottom-1 md:left-6 md:bottom-1">
            0
          </span>
        </div>
        <span className="font-bold hidden xl:block">
          <Link href={"cart"}>Cart</Link>
        </span>
      </div>

      <div className={rightIconDivs}>
        {userData?.email?.length === 0 ? (
          <span className="xl:flex flex-col items-center text-sm hidden mr-3">
            <Link href="/account/login" className="">
              <span>Login/</span>
            </Link>
            <Link href={"/account/register"}>
              <p className="font-bold" title="Register">
                Register
              </p>
            </Link>
          </span>
        ) : (
          <button className="font-bold" onClick={handleLogOut}>
            Log Out
          </button>
        )}
        <CgProfile className={navIcon} />
      </div>
    </div>
  );
};

export default RightSideIcons;
