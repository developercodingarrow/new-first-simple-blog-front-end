"use client";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export const AppContext = createContext();

export default function AppContextProvider({ children, bannerDetails }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);
  const [isMobleDrawer, setisMobleDrawer] = useState(false);
  useEffect(() => {
    console.log("test app context");
    // Store banner details in a cookie for testing
    console.log("bannerDetails---", bannerDetails);
    if (bannerDetails) {
      Cookies.set("mainBanner", JSON.stringify(bannerDetails), { expires: 1 }); // Expires in 1 day
    }
  }, [bannerDetails]); // Run effect if bannerDetails changes

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
