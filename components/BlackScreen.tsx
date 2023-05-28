import { useGlobalContext } from "@/context/Context";
import React from "react";

const BlackScreen = () => {
  const { setToogleSidebar } = useGlobalContext();
  return <div onClick={() => setToogleSidebar((prev: boolean) => !prev)} className="absolute left-0 w-full h-[192.5vh] z-10  bg-black/50" />;
};

export default BlackScreen;
