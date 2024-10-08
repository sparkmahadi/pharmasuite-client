import getAllProducts from '@/lib/all-products/getAllProducts';
import getAllCategories from '@/lib/other-products/getAllCategories';
import getAllUsers from '@/lib/users/getAllUsers';
import React from 'react';

interface UsersData {
    success: boolean;
    message: string;
    data: object[];
  }

  
const DashCards = async () => {
    const usersData : UsersData = await getAllUsers();
    const products = await getAllProducts();
    const categories = await getAllCategories();
    const users = usersData?.data;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <div className="flex items-center mb-1">
                                        <div className="text-2xl font-semibold">{users?.length}</div>
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">{users?.length > 1 ? "User" : "Users"}</div>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600"><i className="ri-more-fill"></i></button>
                                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href="/" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                        </div>
                        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                            <div className="flex justify-between mb-4">
                                <div>
                                    <div className="flex items-center mb-1">
                                        <div className="text-2xl font-semibold">{products?.length}</div>
                                        <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">+30%</div>
                                    </div>
                                    <div className="text-sm font-medium text-gray-400">Products</div>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600"><i className="ri-more-fill"></i></button>
                                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="/dierenartsen" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                        </div>
                        <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <div className="text-2xl font-semibold mb-1">{categories?.length}</div>
                                    <div className="text-sm font-medium text-gray-400">Categories</div>
                                </div>
                                <div className="dropdown">
                                    <button type="button" className="dropdown-toggle text-gray-400 hover:text-gray-600"><i className="ri-more-fill"></i></button>
                                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="" className="text-[#f84525] font-medium text-sm hover:text-red-800">View</a>
                        </div>
        </div>
    );
};

export default DashCards;