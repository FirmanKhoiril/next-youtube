"use client";
import { useQuery } from "react-query";
import { dataYoutube } from "./api/fetchYoutube";
import { CardImage, Error, Loading } from "@/components";
import { TCardImage } from "@/types/Types";

export default function Home() {
  const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["homeData"], dataYoutube, {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <div className="min-h-screen">
      {isLoading && isFetching ? <Loading /> : isError && <Error />}
      {isSuccess && (
        <div className="flex flex-wrap gap-4 justify-center px-0 sm:px-4">
          {data?.contents?.map((item: TCardImage, idx: number) => (
            <CardImage key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
