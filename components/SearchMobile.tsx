import { useGlobalContext } from "@/context/Context";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";

const SearchMobile = () => {
  const { setSearchToogle, setSearchTermMobile, searchTermMobile } = useGlobalContext();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchToogle((prev: boolean) => !prev);
    setSearchTermMobile("");
    if (searchTermMobile.length > 0) {
      router.push(`/search/${searchTermMobile}`);
    }
  };

  const handleEraseSearchTerm = () => {
    setSearchTermMobile("");
  };
  return (
    <form onSubmit={handleSubmit} className="md:hidden px-1 justify-between overflow-hidden flex-grow flex w-full items-center z-10 absolute bg-pink-500">
      <button type="button" name="buttonBack" aria-label="buttonBack" onClick={() => setSearchToogle((prev: boolean) => !prev)} className="p-3 rounded-full hover:bg-white/30">
        <MdArrowBack className="text-2xl" />
      </button>
      <input type="text" value={searchTermMobile} onChange={(e) => setSearchTermMobile(e.target.value)} placeholder="Search Something" className="p-3 mx-5 rounded-md bg-white min-w-[150px] flex-grow relative outline-none font-poppins" />
      {searchTermMobile.length > 0 && (
        <span onClick={handleEraseSearchTerm} className="p-3 absolute right-12 cursor-pointer">
          <AiOutlineClose className="icon" />
        </span>
      )}

      <button type="submit" name="buttonSearch" aria-label="buttonSearch" className="p-3 rounded-full hover:bg-white/30" onSubmit={() => setSearchTermMobile((prev: boolean) => setSearchToogle(!prev))}>
        <AiOutlineSearch className="text-2xl" />
      </button>
    </form>
  );
};

export default SearchMobile;
