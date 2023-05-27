import { videoCommentById } from "@/app/api/fetchYoutube";
import { Iid, TComment } from "@/types/Types";
import { useQuery } from "react-query";
import Loading from "./Loading";
import Error from "./Error";
import CardComment from "./CardComment";

const Comments = ({ id }: Iid) => {
  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["commentVideo", id], () => videoCommentById(id), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });
  return (
    <>
      {isFetching && isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className=" mt-5 md:mt-10 flex flex-col gap-2">
            {data?.comments?.map((comment: TComment, idx: number) => (
              <CardComment comment={comment} key={idx} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default Comments;
