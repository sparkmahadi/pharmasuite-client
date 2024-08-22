import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const navIcon = "w-5 h-5 md:w-6 md:h-6 ml-1 md:ml-2 text-teal-800";
  return (
    <form className="">
      <div className="flex items-center justify-between border rounded-xl border-gray-400 p-1 bg-white gap-5 xl:gap-10">
        <FaSearch className={navIcon} />
        <input className="search-input" placeholder="Find your medicine" />
        <button className="border-none outline-none px-2 md:px-5 py-1 md:text-base font-semibold text-xs text-white bg-[#00b8a2] rounded-lg cursor-pointer">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
