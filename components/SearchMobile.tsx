import { useGlobalContext } from "@/context/Context";
import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";

const SearchMobile = () => {
  const { setSearchToogle, searchToogle, setSearchTermMobile, searchTermMobile } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchToogle(!searchToogle);
    setSearchTermMobile("");
    console.log(searchTermMobile);
  };

  const handleEraseSearchTerm = () => {
    setSearchTermMobile("");
  };
  return (
    <form onSubmit={handleSubmit} className="md:hidden px-1 justify-between flex-grow flex w-full items-center z-10 absolute bg-pink-500">
      <button type="button" onClick={() => setSearchToogle(!searchToogle)} className="p-3 rounded-full hover:bg-white/30">
        <MdArrowBack className="icon" />
      </button>
      <input type="text" value={searchTermMobile} onChange={(e) => setSearchTermMobile(e.target.value)} placeholder="Search Something" className="p-3 rounded-md bg-white flex-grow relative outline-none font-poppins" />
      {searchTermMobile.length > 0 && (
        <span onClick={handleEraseSearchTerm} className="p-3 absolute right-12 cursor-pointer">
          <AiOutlineClose className="icon" />
        </span>
      )}

      <button type="submit" className="p-3 rounded-full hover:bg-white/30">
        <AiOutlineSearch className="icon" />
      </button>
    </form>
  );
};

export default SearchMobile;
