import { useGlobalContext } from "@/context/Context";
import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm("");
  };

  const handleEraseSearchTerm = () => {
    setSearchTerm("");
  };
  return (
    <form className="md:inline-flex hidden mr-10" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="bg-white/20 hover:bg-white/30 text-white font-poppins placeholder:text-white/50 px-4 w-[300px] py-2 outline-none focus:border-b relative"
      />
      {searchTerm.length > 0 && (
        <span onClick={handleEraseSearchTerm} className="p-3 absolute right-20 cursor-pointer">
          <AiOutlineClose className="icon" />
        </span>
      )}
      <button type="submit" className="p-3 bg-white/40 hover:bg-white/50">
        <AiOutlineSearch className="icon hover:text-white" />
      </button>
    </form>
  );
};

export default SearchBar;
