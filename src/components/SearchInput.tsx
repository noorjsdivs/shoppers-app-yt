"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="relative w-full hidden md:inline-flex flex-1 h-12 text-base items-center gap-2 justify-between">
        <CiSearch className="text-lg absolute left-2.5 mt-.5 text-lightOrange" />
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 h-full outline-none bg-transparent placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-28"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search && (
          <IoMdClose
            className="text-accent/50 hover:text-lightRed hoverEffect cursor-pointer absolute right-20"
            onClick={() => setSearch("")}
          />
        )}
        <button className=" bg-lightOrange text-white px-3.5 py-1.5 mr-1.5 text-sm hover:bg-darkOrange hoverEffect font-medium absolute right-0">
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
