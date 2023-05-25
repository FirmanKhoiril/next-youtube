"use client";
import { TContextState } from "@/types/Types";
import { useState, createContext, useContext } from "react";

export const StateContext = createContext<TContextState>({
  searchToogle: false,
  setSearchToogle: () => {},
  sidebarToogle: false,
  setSidebarToogle: () => {},
  toogleDescription: false,
  setToogleDescription: () => {},
});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchToogle, setSearchToogle] = useState<boolean>(false);
  const [sidebarToogle, setSidebarToogle] = useState<boolean>(false);
  const [toogleDescription, setToogleDescription] = useState(false);
  return <StateContext.Provider value={{ searchToogle, sidebarToogle, toogleDescription, setToogleDescription, setSearchToogle, setSidebarToogle }}> {children}</StateContext.Provider>;
};

export const useGlobalContext: any = (): TContextState => useContext(StateContext);
