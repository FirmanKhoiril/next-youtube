import Image from "next/image";
import Brand from "../public/not_found_2.svg";

const NotFound = () => {
  return (
    <div className=" flex items-center flex-col justify-center">
      <Image src={Brand} width={320} height={500} alt="Not Found" />
      <h1 className="text-3xl font-play">Not Found</h1>
    </div>
  );
};

export default NotFound;
