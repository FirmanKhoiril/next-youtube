"use client";
import { useInfiniteQuery } from "react-query";
import { YoutubeInfinite } from "./api/fetchYoutube";
import { CardImage, Categories, Error, Loading } from "@/components";
import { TCardImage } from "@/types/Types";
import { useGlobalContext } from "@/context/Context";

export default function Home() {
  const { categories, cursorNext, setCursorNext } = useGlobalContext();
  const { data, fetchNextPage, isLoading, isSuccess, isError, isFetching, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryFn: ({ nextPage }: any) => YoutubeInfinite(nextPage, categories),
    queryKey: ["youtubeInfinite", categories],
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 1) {
        setCursorNext(pages[0].cursorNext);
        console.log(pages[0].cursorNext);
        return pages[0].cursorNext;
      }
    },
  });

  //EpwDEhNiZXJpdGEgdGVyYmFydSAyMDIzGoQDU0JTQ0FRdHBTSGRtTUY5UVlrSnNkNElCQzBoVlYyOXBYelV3UjFGRmdnRUxNVTlUU1VocE5WVjFRbEdDQVF0M1kxa3lkRmxsTkROWlJZSUJDM00wYUdWamQyNVZkV0puZ2dFTGFrMWpNV0psYkc5bVZuZUNBUXRGT0VadVptaFVhWFY2WjRJQkMxZFJUVVUyUm1oSGNtVlJnZ0VMU1ZkSFVEZzRlVU13U0VXQ0FRdDVNV3hFYzJVNFQwODNZNElCQ3pjMGNuZEpOV2czTjFrNGdnRUxUVmcyTlZGSU9GTlhRV09DQVF0YVdFWllNMUZyWlhkNE9JSUJDM1ExTVVkR2JWWkNOMVJqZ2dFTGRWY3plRzQ1YUZFeFdUaUNBUXR5U2twV1VHaFhVMGcwYjRJQkN6ZEtNblpqY1RrMllUVlpnZ0VMVldwUWMzSXpMVlJKVjJlQ0FRc3RkemhCWDJWTkxWRTBiNElCQzFreFZIRjJiVE5ZWVV4RnNnRUdDZ1FJRlJBQxiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D

  // const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["homeData", categories], () => dataYoutube(categories), {
  //   refetchOnWindowFocus: false,
  //   staleTime: 60 * (60 * 1000),
  //   refetchInterval: 60 * (60 * 1000),
  // });

  return (
    <div className="min-h-screen">
      <Categories />
      {isLoading && isFetching ? <Loading /> : isError && <Error />}
      {isFetchingNextPage && <Loading />}

      {isSuccess && (
        <>
          {data?.pages.map((page: any, idx: number) => (
            <div key={idx} className="flex flex-wrap gap-4 mt-10 justify-start px-0 sm:px-4">
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
