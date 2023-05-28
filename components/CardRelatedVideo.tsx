"use client";
import { ICardImage } from "@/types/Types";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NotFound } from "./";

const CardRelatedVideo = ({ item }: ICardImage) => {
  if (!item.video) return <NotFound />;
  return (
    <Link href={`/${item?.video?.videoId}`} className="flex flex-row bg-white px-1 py-2 rounded-r-lg gap-2 ml-10">
      <Image loading="lazy" src={item.video.thumbnails[0].url || item.video.thumbnails[1].url} width={150} height={140} alt={item?.video?.author?.title} className="rounded-lg" />
      <div>
        <h5 className="text-sm">{item?.video?.title.slice(0, 80)}</h5>

        <div>
          <div>{millify(item?.video?.stats?.views)} views</div>
        </div>
      </div>
    </Link>
  );
};

export default CardRelatedVideo;
