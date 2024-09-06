"use client";
import React, { useContext, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";

import EditBlogUI from "@/src/layouts/clients/user-protected/EditBlogUI";
import { BlogContext } from "@/src/app/_contextApi/BlogContextApi";

export default function page() {
  const { handelAllBlogs, singleBlog } = useContext(BlogContext);
  const params = useParams();
  const { slug } = params;

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
