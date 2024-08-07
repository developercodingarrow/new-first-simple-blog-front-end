"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { isAuth } from "../Actions/authAction";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const longined = isAuth();
  console.log(longined);
  const [isUserDrawer, setisUserDrawer] = useState(false);
  const [isLogined, setisLogined] = useState(null);

  const handelOpenUserDrawer = () => {
    setisUserDrawer(true);
  };

  const handelCloseUserDrawer = () => {
    setisUserDrawer(false);
  };

  useEffect(() => {
    const loggedIn = isAuth();
    setisLogined(loggedIn);
    if (loggedIn) {
      console.log("useEffect run");
    }
  }, []);

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
