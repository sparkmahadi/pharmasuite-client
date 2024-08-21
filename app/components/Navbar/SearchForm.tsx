import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchForm = () => {
    const navIcon = "w-6 h-6 ml-2 text-teal-800";
    return (
        <form className="w-1/3">
            <div className="flex items-center justify-between border rounded-xl border-gray-400 p-1 bg-white gap-10">
                <FaSearch className={navIcon} />
                <input
                    className="search-input"
                    placeholder="Find your medicine"
                />
                <button className="my-btn">Search</button>
            </div>
        </form>
    );
};

export default SearchForm;