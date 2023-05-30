"use client";
import { useInfiniteQuery } from "react-query";
import { CardImage, Error, Loading } from "@/components";
import { TCardImage } from "@/types/Types";
import { useGlobalContext } from "@/context/Context";
import { getDataYoutube } from "@/app/api/fetchYoutube";

export default function page({ params: { search } }: { params: { search: string } }) {
  const { cursorNext, setCursorNext } = useGlobalContext();

  const YoutubeInfinite = async ({ cursorNext, search }: { cursorNext?: string; search: string }): Promise<any> => {
    const decoded = decodeURIComponent(search);
    const res = await getDataYoutube(`search/?q=${decoded}&cursor=${cursorNext}&hl=id`);
    return res;
  };

  const { data, fetchNextPage, isLoading, isSuccess, isError, isFetching, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryFn: () => YoutubeInfinite({ cursorNext, search }),
    queryKey: ["youtubeInfinite", search],
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages?.map((page) => page?.cursorNext);
      if (pages?.length > 0) {
        setCursorNext(pages[0]?.cursorNext);
        return nextPage;
      }
      return null;
    },
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      {isLoading && isFetching ? <Loading /> : isError && <Error />}
      {isFetchingNextPage && <Loading />}
      {isSuccess && (
        <>
          {data?.pages.map((page: any, idx: number) => (
            <div key={idx} className="flex flex-wrap items-center justify-center gap-4 mt-10 px-0 sm:px-4">
              {page?.contents?.map((item: TCardImage, idx: number) => (
                <CardImage key={idx} item={item} />
              ))}
            </div>
          ))}
        </>
      )}
      {hasNextPage && (
        <button
          className="px-4 mt-10 flex items-center justify-center bg-white border border-pink-500 hover:bg-pink-500 hover:border-transparent transition duration-200 py-2"
          onClick={() => {
            fetchNextPage();
          }}
          type="button"
        >
          Next Page
        </button>
      )}
    </div>
  );
}
