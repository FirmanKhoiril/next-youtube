import { useGlobalContext } from "@/context/Context";
import { dummyLinks } from "@/types/DummyData";
import { TDummyLinks } from "@/types/Types";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { setToogleSidebar } = useGlobalContext();
  return (
    <motion.div whileInView={{ x: [-300, 0] }} transition={{ duration: 0.6 }} className="absolute z-20 min-h-screen w-[330px] bg-white inset-0 flex flex-col items-center justify-start px-2 py-4">
      <div className="flex items-center gap-3">
        <button type="button" className="p-2 bg-black/10 hover:bg-black/20 rounded-full" aria-label="closeSidebar" name="buttonCloseSidebar" onClick={() => setToogleSidebar((prev: boolean) => !prev)}>
          <AiOutlineClose className="text-2xl" />
        </button>
        <Link href="/" className="px-10">
          <h2 className="font-extrabold text-3xl text-black tracking-wide">
            Pink<span className="text-pink-500">Tube</span>
          </h2>
        </Link>
      </div>
      <div className="w-full px-2 flex flex-col gap-3 mt-20">
        {dummyLinks.map((link: TDummyLinks) => (
          <Link
            className="flex items-center min-h-20 border border-transparent hover:border-pink-500 hover:text-black rounded-sm transition duration-200 hover:bg-white space-x-2 text-white w-full py-2 px-3 bg-pink-500"
            href={link.to}
            onClick={() => setToogleSidebar((prev: boolean) => !prev)}
          >
            <span className="text-xl">{link.icon}</span>
            <h4 className="text-lg font-poppins">{link.name}</h4>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5">
        <h2 className="text-sm">
          @All rights reserved <br />
          <a target="_blank" href="" className=" text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-red-300 font-extrabold hover:text-pink-500 transition duration-200 to-pink-400 text-lg">
            Firman Khoiril Rohmatullah
          </a>
        </h2>
      </div>
    </motion.div>
  );
};

export default Sidebar;
