"use client";
import Notfound from "../public/not_found.svg";
import Image from "next/image";

const error = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Image src={Notfound} width={300} height={300} alt="Not Found" />
    </div>
  );
};

export default error;
