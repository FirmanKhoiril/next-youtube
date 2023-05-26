import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import SearchBar from "./SearchBar";

const navbar = () => {
  return (
    <div className="px-4 py-2 flex justify-between bg-pink-500 sticky top-0 z-10 items-center flex-wrap">
      <div className="box__center">
        <div data-tip="Menu" className=" icon__left ">
          <AiOutlineMenu className=" icon" />
        </div>
        <Link href="/">
          <h2 className="font-extrabold text-3xl text-black tracking-wide">
            Pink<span className="text-white">Tube</span>
          </h2>
        </Link>
      </div>

      <div className="box__center">
        <div data-tip="Search" className="icon__right block sm:hidden">
          <AiOutlineSearch className="icon" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default navbar;
