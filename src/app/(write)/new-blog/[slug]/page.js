"use client";
import React, { useContext, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import { BlogContext } from "@/src/contextApi/BlogContextApi";

import EditBlogUI from "@/src/layouts/clients/user-protected/EditBlogUI";

export default function page() {
  const { handelAllBlogs, singleBlog } = useContext(BlogContext);
  const params = useParams();
  const { slug } = params;

  console.log(singleBlog);

  useEffect(() => {
    if (slug) {
      handelAllBlogs(slug);
    }
  }, [slug]);

  return (
    <div>
      <EditBlogUI apiData={singleBlog} slug={slug} />
    </div>
  );
}
