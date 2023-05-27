"use client";
import { useQuery } from "react-query";
import { videoDetailById } from "../api/fetchYoutube";
import ReactPlayer from "react-player";
import { Comments, Error, Loading, RelatedVideo } from "@/components";
import Image from "next/image";
import millify from "millify";
import { useGlobalContext } from "@/context/Context";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import moment from "moment";
import Link from "next/link";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { toogleDescription, setToogleDescription } = useGlobalContext();
  const { data, isLoading, isFetching, isError, isSuccess } = useQuery(["videoDetail", id], () => videoDetailById(id), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="min-h-screen lg:mt-10 px-2 space-y-10 sm:space-y-0 md:px-6 lg:px-14 w-full flex-col xl:flex-row flex relative">
            <div className="flex justify-start gap-2 flex-col box items-start ">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react__player" />
              <p className="font-poppins">{data?.title}</p>
              <div className="w-full box__center mt-2">
                <Link href={`/channel/${data?.author?.channelId}`}>
                  <Image src={data?.author?.avatar[0]?.url} loading="lazy" alt={data?.author?.title} width={40} height={40} className="rounded-full" />
                </Link>
                <div className="flex items-center w-full justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <h4 className=" font-play">{data?.author?.title}</h4>
                      <p className=" text-[12px] text-slate-500">{moment(data?.publishedDate).fromNow()}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{data?.author?.stats?.subscribersText}</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 flex flex-row gap-2 px-4">
                    <p data-tip={`${data?.stats?.likes} Likes`} className="views__likes">
                      {millify(data?.stats?.likes)} <AiOutlineLike className="text-lg" />
                    </p>
                    <p data-tip={`${data?.stats?.views} Views`} className="views__likes">
                      {millify(data?.stats?.views)} <AiOutlineEye className="text-lg" />
                    </p>
                  </div>
                </div>
              </div>
              <div className={`mt-4 ${toogleDescription ? "min-h-80" : "h-[103px] bg-black/5 "} relative  p-2 rounded-lg space-y-4 overflow-hidden`}>
                <div onClick={() => setToogleDescription((prev: boolean) => !prev)} className=" absolute right-2 cursor-pointer bg-black/20 hover:bg-black/30 px-2 py-1 rounded-full">
                  ...more
                </div>

                <div className="flex flex-wrap space-x-2">
                  {data?.keywords?.map((keyword: string, idx: number) => (
                    <p className="text-sm text-blue-500 flex flex-wrap" key={idx}>
                      #{keyword}
                    </p>
                  ))}
                </div>

                <p className=" text-sm font-poppins">{data?.description}</p>
              </div>

              <div>
                <Comments id={id} />
              </div>
            </div>
            <div className="ml-0 md:ml-2 min-h-screen items-center flex w-full flex-col space-y-4">
              <h1 className="text-4xl font-mons">You might also like</h1>
              <RelatedVideo id={id} />
            </div>
          </div>
        )
      )}
    </>
  );
}
