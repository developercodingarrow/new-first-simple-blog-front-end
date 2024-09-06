"use client";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const FillterContext = createContext();

export default function FillterContextProvider({ children }) {
  const [visibalRows, setvisibalRows] = useState([]);
  console.log("visibalRows--", visibalRows);
  return (
    <FillterContext.Provider value={{ visibalRows, setvisibalRows }}>
      {children}
    </FillterContext.Provider>
  );
}
