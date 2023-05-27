import { RelatedVideoById } from "@/app/api/fetchYoutube";
import { Iid } from "@/types/Types";
import { useQuery } from "react-query";

const RelatedVideo = ({ id }: Iid) => {
  // const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["relatedVideo", id], () => RelatedVideoById(id), {
  //   refetchOnWindowFocus: false,
  //   staleTime: 60 * (60 * 1000),
  //   refetchInterval: 60 * (60 * 1000),
  // });

  return <div>RelatedVideo</div>;
};

export default RelatedVideo;
