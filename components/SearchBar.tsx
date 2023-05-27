import { useGlobalContext } from "@/context/Context";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm("");

    if (searchTerm.length === 0) {
      alert("Harus Diisi");
    } else {
      router.push(`/search/${searchTerm}`);
    }
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
        placeholder="Search Something"
        className="bg-white/70 hover:bg-white/50 rounded-tl-lg text-black font-poppins placeholder:text-black/70 px-4 w-[300px] py-2 outline-none focus:border-b relative"
      />
      {searchTerm.length > 0 && (
        <span onClick={handleEraseSearchTerm} className="p-3 absolute right-20 cursor-pointer">
          <AiOutlineClose className="icon" />
        </span>
      )}
      <button type="submit" aria-label="buttonSearch" name="buttonSearch" className="p-3 bg-white/40 hover:bg-white/50">
        <AiOutlineSearch className="icon hover:text-white" />
      </button>
    </form>
  );
};

export default SearchBar;
