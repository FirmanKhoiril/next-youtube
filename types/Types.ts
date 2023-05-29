import { SetStateAction } from "react";
export interface IOptions {
  headers: {
    ["X-RapidAPI-Key"]: string | any;
    ["X-RapidAPI-Host"]: string;
  };
}

export type TDummyLinks = {
  name: string;
  to: string;
  icon: Element | any;
};

export type TComment = {
  author: {
    avatar: [TThumbnailImage];
    channelId: string;
    title: string;
  };
  commentId: string;
  content: string;
  stats: {
    replies: number;
    votes: number;
  };
  publishedTimeText: string;
};

export type TVideoDetail = {
  author: {
    avatar: [TThumbnailImage];
    channelId: string;
    title: string;
    stats: {
      subscribers: string;
      subscribersText: string;
    };
  };
  description: string;
  publishedDate: string;
  keywords: [string];
  thumbnails: [TThumbnailImage];
  title: string;
  videoId: string;
  stats: {
    comments: number;
    likes: number;
    views: number;
  };
};

export interface IComment {
  comment: {
    author: {
      avatar: [TThumbnailImage];
      channelId: string;
      title: string;
    };
    commentId: string;
    content: string;
    stats: {
      replies: number;
      votes: number;
    };
    publishedTimeText: string;
  };
}

export type TVideoComment = {
  comments: [];
  cursorNext: string;
};

export type TSearch = {
  cursorNext: string;
  contents: [];
};

export interface Iid {
  id: string;
}

export type TCategory = {
  name: string;
};

export type TContextState = {
  searchToogle: boolean;
  sidebarToogle: boolean;
  categories: string;
  cursorNext: string;
  toogleDescription: boolean;
  toogleSidebar: boolean;
  searchTermMobile: string;
  searchTerm: string;
  setCursorNext: React.Dispatch<SetStateAction<string>>;
  setToogleSidebar: React.Dispatch<SetStateAction<boolean>>;
  setCategories: React.Dispatch<SetStateAction<string>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setSearchTermMobile: React.Dispatch<React.SetStateAction<string>>;
  setToogleDescription: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchToogle: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarToogle: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TRootLayout = {
  metadata: {
    title: string;
    description: string;
  };
  children: React.ReactNode;
};

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "pinktube.netlify.app",
  description: "Youtube Clone but More Better :)",
};

export type TCardImage = {
  video: {
    author: {
      title: string;
      channelId: string;
      avatar: [TThumbnailImage];
    };
    descriptionSnippet: string;
    title: string;
    videoId: string;
    publishedTimeText: string;
    movingThumbnails?: [];
    stats: {
      views: string | number;
    };
    thumbnails: [TThumbnailImage];
  };
};

export type TThumbnailImage = {
  url: string;
};

export interface ICardImage {
  item: {
    video: {
      author: {
        title: string;
        channelId: string;
        avatar: [TThumbnailImage];
      };
      descriptionSnippet: string;
      title: string;
      videoId: string;
      publishedTimeText: string;
      movingThumbnails?: [];
      stats: {
        views: string | any;
      };
      thumbnails?: [TThumbnailImage] | any;
    };
  };
}
