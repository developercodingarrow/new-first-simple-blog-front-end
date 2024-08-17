import { singleBlogs } from "@/src/Actions/blogActions/blogAction";
import SingleBlogPageUI from "@/src/layouts/server/singleBlogPage/SingleBlogPageUI";
import React from "react";

async function getData(slug) {
  const res = await singleBlogs(slug);

  return await res.data.result;
}

export default async function SingleBlogpage(pathname) {
  const slug = pathname.params?.slug;

  const data = await getData(slug);

  return (
    <div>
      <SingleBlogPageUI ssrData={data} />
    </div>
  );
}
