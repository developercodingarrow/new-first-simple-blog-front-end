"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { isAuth } from "../Actions/authAction";
import { getSingleBlog } from "../Actions/blogActions/blogAction";

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
  const [isLoading, setisLoading] = useState(false);
  const [singleBlog, setsingleBlog] = useState({});

  const handelAllBlogs = async (slug) => {
    try {
      const res = await getSingleBlog(slug);
      if (res.data.status === "success") {
        setsingleBlog(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        isLoading,
        setisLoading,
        handelAllBlogs,
        singleBlog,
        setsingleBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
