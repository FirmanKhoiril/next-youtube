"use client";
import { TContextState } from "@/types/Types";
import { useState, createContext, useContext } from "react";

export const StateContext = createContext<TContextState>({
  searchToogle: false,
  setSearchToogle: () => {},
  sidebarToogle: false,
  searchTerm: "",
  setSidebarToogle: () => {},
  toogleDescription: false,
  setToogleDescription: () => {},
  setSearchTerm: () => {},
  setSearchTermMobile: () => {},
  searchTermMobile: "",
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchToogle, setSearchToogle] = useState<boolean>(true);
  const [searchTermMobile, setSearchTermMobile] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarToogle, setSidebarToogle] = useState<boolean>(false);
  const [toogleDescription, setToogleDescription] = useState(false);
  return (
    <StateContext.Provider value={{ searchToogle, sidebarToogle, searchTerm, searchTermMobile, toogleDescription, setSearchTerm, setSearchTermMobile, setToogleDescription, setSearchToogle, setSidebarToogle }}>
      {" "}
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext: any = (): TContextState => useContext(StateContext);
