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
