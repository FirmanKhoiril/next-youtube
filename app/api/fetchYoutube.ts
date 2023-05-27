import { IOptions } from "@/types/Types";
import axios from "axios";

const BASE_URL: string = "https://youtube138.p.rapidapi.com";

const options: IOptions = {
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_APP_YOUTUBE_API,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const getDataYoutube = async (url: string): Promise<any> => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export const dataYoutube = async (): Promise<any> => {
  const res = await getDataYoutube("search/?q=beritaterbaru2023&hl=id");
  return res;
};

export const videoDetailById = async (id: string): Promise<any> => {
  const res = await getDataYoutube(`video/details/?hl=id&id=${id}`);
  return res;
};

export const videoCommentById = async (id: string): Promise<any> => {
  const res = await getDataYoutube(`video/comments/?id=${id}&hl=id`);
  return res;
};
export const RelatedVideoById = async (id: string): Promise<any> => {
  const res = await getDataYoutube(`video/related-contents/?id=${id}&hl=id`);
  return res;
};
