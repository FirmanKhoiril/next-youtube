export interface IOptions {
  headers: {
    ["X-RapidAPI-Key"]: string | any;
    ["X-RapidAPI-Host"]: string;
  };
}

export type TContextState = {
  searchToogle: boolean;
  sidebarToogle: boolean;
  toogleDescription: boolean;
  searchTermMobile: string;
  searchTerm: string;
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
      avatar: [TAvatarAuthor];
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

export type TAvatarAuthor = {
  url: string;
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
        avatar: [TAvatarAuthor];
      };
      descriptionSnippet: string;
      title: string;
      videoId: string;
      publishedTimeText: string;
      movingThumbnails?: [];
      stats: {
        views: string | any;
      };
      thumbnails: [TThumbnailImage];
    };
  };
}
