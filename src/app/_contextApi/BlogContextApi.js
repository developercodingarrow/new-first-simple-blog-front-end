"use client";
import { createContext, useEffect, useRef, useState } from "react";
import { genericDataHandler } from "../_generichandler/generichandler";
import { reportBlogAction } from "../utils/blogactions";

export const BlogContext = createContext();

export default function BlogContextProvider({ children }) {
  // HANDLER REPORT BLOG
  const handelReportBlog = genericDataHandler(reportBlogAction);

  return (
    <BlogContext.Provider
      value={{
        handelReportBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
