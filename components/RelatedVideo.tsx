import { RelatedVideoById } from "@/app/api/fetchYoutube";
import { Iid, TCardImage } from "@/types/Types";
import { useQuery } from "react-query";
import { CardImage, Error, Loading } from "./";

const RelatedVideo = ({ id }: Iid) => {
  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["relatedVideo", id], () => RelatedVideoById(id), {
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
          <div className="flex gap-4 flex-col mt-4">
            {data?.contents?.map((content: TCardImage, idx: number) => (
              <CardImage key={idx} item={content} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default RelatedVideo;
