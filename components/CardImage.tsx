"use client";
import { ICardImage } from "@/types/Types";
import millify from "millify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardImage = ({ item }: ICardImage) => {
  return (
    <Link href={`/${item?.video?.videoId}`} className="card cursor-pointer hover:scale-[1.01] transition duration-150 w-80 bg-white shadow-xl">
      <Image loading="lazy" src={item?.video?.thumbnails[0].url} width={320} height={140} alt={item?.video?.author?.title} className="rounded-t-lg" />
      <div className="card-body">
        <h4 className="card-title text-sm font-inter">{item?.video?.title}</h4>
        <p className="text-[12px]">{item?.video?.descriptionSnippet}</p>
        <div className="card-actions text-sm text-slate-600 justify-start">
          <div>{millify(item?.video?.stats?.views)} views</div>
        </div>
      </div>
    </Link>
  );
};

export default CardImage;
