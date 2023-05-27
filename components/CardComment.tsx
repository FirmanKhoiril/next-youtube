import { IComment } from "@/types/Types";
import Image from "next/image";
import React from "react";

const CardComment = ({ comment }: IComment) => {
  return (
    <div className="w-full min-h-[120px] flex justify-start items-start">
      <div className="flex justify-center items-center gap-3">
        <Image src={comment.author.avatar[0].url} height={40} width={40} className="rounded-full min-h-10 min-w-10" alt={comment.author.title} loading="lazy" />
        <div>
          <h2 className="font-play">{comment.author.title}</h2>
          <p className="text-slate-500 text-sm">{comment.publishedTimeText}</p>
          <p className="font-inter my-[3px] text-[13px]">{comment.content}</p>
          <div className="flex items-center text-sm gap-2 justify-start">
            <p>{comment.stats.replies} replies</p>
            <p>{comment.stats.votes} votes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
