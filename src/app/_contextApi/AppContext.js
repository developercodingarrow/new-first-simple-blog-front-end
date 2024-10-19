"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isMobleDrawer, setisMobleDrawer] = useState(false);

  const handelOpenMobileDrawer = () => {
    setisMobleDrawer(true);
  };

  const handelCloseMobileDrawer = () => {
    setisMobleDrawer(false);
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      // Remove g_state cookie when the browser is closed
      Cookies.remove("g_state");
    };

    // Add event listener for beforeunload
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <AppContext.Provider
      value={{
        isBtnLoadin,
        setisBtnLoadin,
        isMobleDrawer,
        setisMobleDrawer,
        handelOpenMobileDrawer,
        handelCloseMobileDrawer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
