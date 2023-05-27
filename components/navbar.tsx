"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import SearchBar from "./SearchBar";
import SearchMobile from "./SearchMobile";
import { useGlobalContext } from "@/context/Context";

const navbar = () => {
  const { searchToogle, setSearchToogle } = useGlobalContext();
  return (
    <div className=" py-2 flex justify-between md:justify-around bg-pink-500 sticky top-0 z-10 items-center flex-wrap">
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
      <div className="box__center relative">
        <div data-tip="Search" onClick={() => setSearchToogle((prev: boolean) => !prev)} className="icon__right block md:hidden">
          <AiOutlineSearch className="icon" />
        </div>
        <SearchBar />
      </div>
      {!searchToogle && <SearchMobile />}
    </div>
  );
};

export default navbar;
