"use client";
import { createContext, useEffect, useRef, useState } from "react";
// import { getAllTags } from "../Actions/tagActions/tagActions";
export const TagContext = createContext();

export default function TagContextProvider({ children, verifiedTags }) {
  const [allTags, setallTags] = useState(verifiedTags);
  const [filteredTags, setFilteredTags] = useState([]);

  useEffect(() => {
    // Check if tags are already in localStorage
    const storedTags = localStorage.getItem("tags");

    // If verifiedTags are not provided, load from localStorage
    if (!verifiedTags && storedTags) {
      setallTags(JSON.parse(storedTags));
      setFilteredTags(JSON.parse(storedTags));
    } else {
      // If verifiedTags are provided, store them in localStorage
      localStorage.setItem("tags", JSON.stringify(verifiedTags));
    }
  }, [verifiedTags]);

  const handelfilterTags = (query) => {
    if (!query) {
      setFilteredTags(allTags); // If no query, show all tags
    } else {
      const filtered = allTags.filter((tag) =>
        tag.tagName.toLowerCase().includes(query)
      );
      setFilteredTags(filtered);
    }
  };

  return (
    <TagContext.Provider
      value={{ allTags, setallTags, filteredTags, handelfilterTags }}
    >
      {children}
    </TagContext.Provider>
  );
}
