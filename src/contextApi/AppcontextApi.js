"use client";
import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isUserDrawer, setisUserDrawer] = useState(false);
  const [isLogined, setisLogined] = useState(true);

  const handelOpenUserDrawer = () => {
    setisUserDrawer(true);
  };

  const handelCloseUserDrawer = () => {
    setisUserDrawer(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLogined,
        isUserDrawer,
        handelOpenUserDrawer,
        handelCloseUserDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
