"use client";
import { ICardImage } from "@/types/Types";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NotFound } from "./";

const CardImage = ({ item }: ICardImage) => {
  if (!item.video) return <NotFound />;
  return (
    <Link href={`/${item?.video?.videoId}`} className="card cursor-pointer hover:scale-[1.01] transition duration-150 w-80 min-h-[400px] bg-white shadow-xl">
      <Image loading="lazy" src={item.video.thumbnails[0].url || item.video.thumbnails[1].url} width={320} height={130} alt={item?.video?.author?.title} className="rounded-t-lg" />
      <div className="card-body">
        <h5 className="card-title text-[13px] font-inter">{item?.video?.title}</h5>
        <p className="text-[12px]">{item?.video?.descriptionSnippet}</p>
        <div className="card-actions text-[11px] text-slate-600 justify-start">
          <div>{millify(item?.video?.stats?.views)} views</div>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
