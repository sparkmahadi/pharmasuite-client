import React from 'react';

import { FaCartPlus, FaSearch, FaTruck } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';

const RightSideIcons = () => {
    const navIcon = "w-8 h-8 text-teal-800";
    const rightIconDivs = "flex items-center lg:gap-3 ";
    return (
        <div className="flex justify-center gap-20">
            {/* <button
                type="button"
                className="menu-icon d-block d-sm-none btn btn-primary"
              >
              </button> */}
            <div className={rightIconDivs}>
                <FaTruck className={navIcon} />
                <p className="flex flex-col justify-center text-sm">
                    <span>Track</span>
                    <span className='font-bold'>Your Order</span>
                </p>
            </div>

            <div className={rightIconDivs}>
                <div className='mr-5 mb-3'>
                    <FaCartPlus className={`${navIcon} absolute`} />
                    <span className="relative font-bold text-sm px-1.5 border border-sky-600 bg-sky-100 rounded-full left-6 bottom-1">0</span>
                </div>
                <span className="font-bold">Cart</span>
            </div>

            <div className={rightIconDivs}>
                <Link
                    href="/login"
                    className="flex items-center text-sm"
                >
                    <span className="mr-3">
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