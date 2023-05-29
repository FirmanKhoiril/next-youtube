"use client";
import { TContextState } from "@/types/Types";
import { useState, createContext, useContext } from "react";

export const StateContext = createContext<TContextState>({
  searchToogle: false,
  setSearchToogle: () => {},
  sidebarToogle: false,
  searchTerm: "",
  cursorNext: "",
  toogleSidebar: false,
  setToogleSidebar: () => {},
  setCursorNext: () => {},
  setSidebarToogle: () => {},
  toogleDescription: false,
  setToogleDescription: () => {},
  setSearchTerm: () => {},
  setSearchTermMobile: () => {},
  setCategories: () => {},
  categories: "",
  searchTermMobile: "",
});
//EpwDEhNiZXJpdGEgdGVyYmFydSAyMDIzGoQDU0JTQ0FRdHBTSGRtTUY5UVlrSnNkNElCQzBoVlYyOXBYelV3UjFGRmdnRUxNVTlUU1VocE5WVjFRbEdDQVF0M1kxa3lkRmxsTkROWlJZSUJDM00wYUdWamQyNVZkV0puZ2dFTGFrMWpNV0psYkc5bVZuZUNBUXRGT0VadVptaFVhWFY2WjRJQkMxZFJUVVUyUm1oSGNtVlJnZ0VMU1ZkSFVEZzRlVU13U0VXQ0FRdDVNV3hFYzJVNFQwODNZNElCQ3pjMGNuZEpOV2czTjFrNGdnRUxUVmcyTlZGSU9GTlhRV09DQVF0YVdFWllNMUZyWlhkNE9JSUJDM1ExTVVkR2JWWkNOMVJqZ2dFTGRWY3plRzQ1YUZFeFdUaUNBUXR5U2twV1VHaFhVMGcwYjRJQkN6ZEtNblpqY1RrMllUVlpnZ0VMVldwUWMzSXpMVlJKVjJlQ0FRc3RkemhCWDJWTkxWRTBiNElCQzFreFZIRjJiVE5ZWVV4RnNnRUdDZ1FJRlJBQxiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D

// const { data, isSuccess, isLoading, isFetching, isError } = useQuery(["homeData", categories], () => dataYoutube(categories), {
//   refetchOnWindowFocus: false,
//   staleTime: 60 * (60 * 1000),
//   refetchInterval: 60 * (60 * 1000),
// });

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchToogle, setSearchToogle] = useState<boolean>(true);
  const [searchTermMobile, setSearchTermMobile] = useState("");
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [cursorNext, setCursorNext] = useState("");
  const [categories, setCategories] = useState("berita terbaru 2023");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarToogle, setSidebarToogle] = useState<boolean>(false);
  const [toogleDescription, setToogleDescription] = useState(false);
  return (
    <StateContext.Provider
      value={{
        searchToogle,
        cursorNext,
        categories,
        toogleSidebar,
        sidebarToogle,
        searchTerm,
        searchTermMobile,
        toogleDescription,
        setSearchTerm,
        setCategories,
        setToogleSidebar,
        setCursorNext,
        setSearchTermMobile,
        setToogleDescription,
        setSearchToogle,
        setSidebarToogle,
      }}
    >
      {" "}
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext: any = (): TContextState => useContext(StateContext);
