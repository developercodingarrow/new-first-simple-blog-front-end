"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { getAllTags } from "../Actions/tagActions/tagActions";
export const TagContext = createContext();

export default function TagContextProvider({ children }) {
  const [allTags, setallTags] = useState([]);

  const handelgetAll = async () => {
    try {
      const res = await getAllTags();

      if (res.data.status === "success") {
        setallTags(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetAll();
  }, []);

  return (
    <TagContext.Provider value={{ allTags, setallTags }}>
      {children}
    </TagContext.Provider>
  );
}
