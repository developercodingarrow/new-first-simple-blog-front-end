"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { getSingleBlog } from "../_actions/blogapi";
import { genericDataHandler } from "../_generichandler/generichandler";
import { reportBlogAction } from "../utils/blogactions";

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

  // HANDLER REPORT BLOG
  const handelReportBlog = genericDataHandler(reportBlogAction);

  return (
    <BlogContext.Provider
      value={{
        isLoading,
        setisLoading,
        handelAllBlogs,
        singleBlog,
        setsingleBlog,
        // refactor code after this
        handelReportBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
