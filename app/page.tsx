"use client";
import { useQuery } from "react-query";
import { dataYoutube } from "./api/fetchYoutube";
import { CardImage, Categories, Error, Loading } from "@/components";
import { TCardImage } from "@/types/Types";
import { useGlobalContext } from "@/context/Context";

export default function Home() {
  const { categories } = useGlobalContext();
  const { data, isLoading, isSuccess, isError, isFetching } = useQuery(["Home", categories], () => dataYoutube(categories), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <div className="min-h-screen">
      <Categories />
      {isLoading && isFetching ? <Loading /> : isError && <Error />}

      {isSuccess && (
        <>
          <div className="flex flex-wrap gap-4 mt-10 px-0 sm:px-4">
            {data?.contents?.map((item: TCardImage, idx: number) => (
              <CardImage key={idx} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
