"use client";
import { getNextPageSearchParams } from "@/app/api/fetchYoutube";
import { CardImage, Error, Loading } from "@/components";
import { useGlobalContext } from "@/context/Context";
import { TCardImage } from "@/types/Types";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

const page = ({ params: { search, nextPage } }: { params: { search: string; nextPage: string } }) => {
  const router = useRouter();

  const { setCursorNext } = useGlobalContext();

  const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["search", search, nextPage], () => getNextPageSearchParams(search, nextPage), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });
  const decodedSearch = decodeURIComponent(search);
  const handleNextPage = () => {
    if (data && data.cursorNext) {
      setCursorNext(data?.cursorNext);
    }
    router.push(`/search/${search}/${data?.cursorNext}`);
  };
  return (
    <>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            <h1 className=" text-center my-10 text-pink-500 text-4xl">Searching For {decodedSearch}</h1>
            <div className="flex flex-row gap-3 justify-center items-center flex-wrap">
              {data?.contents?.map((item: TCardImage, idx: number) => (
                <CardImage item={item} key={idx} />
              ))}
            </div>
            <div className="flex items-center justify-center my-10 ">
              <button
                onClick={handleNextPage}
                className="rounded-md hover:bg-white border-transparent border hover:border-pink-500 transition duration-300 w-28 px-3 py-2 bg-pink-500"
                type="button"
                name="ButtonNextPage"
                aria-label="nextPage"
              >
                Next Page
              </button>
            </div>
          </>
        )
      )}
    </>
  );
};

export default page;
