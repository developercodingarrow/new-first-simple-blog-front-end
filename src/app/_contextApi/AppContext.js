"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isBtnLoadin, setisBtnLoadin] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isBtnLoadin,
        setisBtnLoadin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
