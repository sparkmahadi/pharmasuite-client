import React from 'react';

import { FaCartPlus, FaSearch, FaTruck } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

const RightSideIcons = () => {
    const navIcon = "w-6 h-6 md:w-8 md:h-8 text-teal-800";
    const rightIconDivs = "flex items-center gap-2 lg:gap-3 ";
    return (
        <div className="flex justify-center xl:gap-5 2xl:gap-20">
            {/* <button
                type="button"
                className="menu-icon d-block d-sm-none btn btn-primary"
              >
              </button> */}
            <div className={rightIconDivs}>
                <FaTruck className={navIcon} />
                <p className="xl:flex flex-col justify-center text-sm hidden">
                    <span>Track</span>
                    <span className='font-bold'>Your Order</span>
                </p>
            </div>

            <div className={rightIconDivs}>
                <div className='mr-5 mb-1 md:mb-3'>
                    <FaCartPlus className={`${navIcon} absolute`} />
                    <span className="relative font-bold text-xs md:text-sm px-0.5 md:px-1.5 border border-sky-600 text-white md:text-black bg-red-400 md:bg-sky-100 rounded-full left-4 bottom-1 md:left-6 md:bottom-1">0</span>
                </div>
                <span className="font-bold hidden xl:block">Cart</span>
            </div>

            <div className={rightIconDivs}>
                <Link
                    href="/account/login"
                    className="xl:flex items-center text-sm"
                >
                    <span className="xl:block hidden mr-3">
                        <span>Login/</span>
                        <p className="font-bold" title="Register">
                            Register
                        </p>
                    </span>
                    <CgProfile className={navIcon} />
                </Link>
            </div>


        </div>
    );
};

export default RightSideIcons;