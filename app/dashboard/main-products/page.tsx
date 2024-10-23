"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEdit } from 'react-icons/fa';
import { GiGrowth } from 'react-icons/gi';
import { MdDeleteSweep } from 'react-icons/md';
import demoImage from "@/public/fluclox-500-1631442367478.png";
import getMainProducts from '@/lib/main-products/getMainProducts';

const MainProductsList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);  // Track current page
    const [limit] = useState(10);  // Set limit (e.g., 10 items per page)
    const [totalPages, setTotalPages] = useState(0); // Track total pages

    // Fetch products when page changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getMainProducts(limit, page)
                console.log('refetch');
                setProducts(data.products);  // Set the fetched products
                setTotalPages(data.totalPages);  // Set total pages
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, [page, limit]);

    // Handle page change
    const handlePageChange = (newPage: any) => {
        setPage(newPage);
    };

    return (
        <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full max-w-full px-3 mb-6 mx-auto">
                <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                        {/* Card Body */}
                        <div className="flex-auto block py-8 pt-6 px-9">
                            <div className="overflow-x-auto">
                                {
                                    products?.length>0 ? 
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                    <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark uppercase">
                                            <th className="pb-3 text-start min-w-[175px]">Product Name</th>
                                            <th className="pb-3 text-end min-w-[100px]">Manufacturer</th>
                                            <th className="pb-3 text-end min-w-[100px]">Stock Qty</th>
                                            <th className="pb-3 pr-12 text-end min-w-[175px]">Product Type</th>
                                            <th className="pb-3 pr-12 text-end min-w-[100px]">Added At</th>
                                            <th className="pb-3 text-end min-w-[50px]">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products?.map((pd: any) =>
                                                <tr key={pd?._id} className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <Image src={demoImage} alt='' className='w-[50px] h-[50px] inline-block shrink-0 rounded-2xl' />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <Link
                                                                    href={`/products/${pd?._id}`}
                                                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                                                >
                                                                    {pd?.item_name?.slice(0, 20)}
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">{pd?.manufacturers.slice(0, 20)}</span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                            <GiGrowth />
                                                            {pd?.inventory[0]?.stock_qty}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                                            {pd?.sku_type}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                            <span className="flex items-center justify-center p-0 m-0 gap-2">
                                                                <FaEdit />
                                                                <MdDeleteSweep />
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                :
                                <p>No Products Found</p>
                                }
                            </div>
                        </div>
                        {/* End Card Body */}
                    </div>
                </div>
            </div>

            {/* Pagination controls */}
            <div className="pagination flex space-x-2 mt-4">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        disabled={page === i + 1}
                        className={`px-4 py-2 border border-gray-300 rounded-lg ${page === i + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500 hover:bg-gray-100"}`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default MainProductsList;
