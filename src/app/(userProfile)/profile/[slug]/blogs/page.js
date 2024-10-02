import React from "react";
import { userPublishedBlogs } from "../apiactions";
import MainCard from "@/src/components/homepage/card/MainCard";

async function getData(slug) {
  const res = await userPublishedBlogs(slug);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return await res.data.result;
}
export default async function UserBlogsPage(pathname) {
  const slug = pathname.params?.slug;
  const initialData = await getData(slug);

  return (
    <div>
      {initialData.length === 0 ? (
        <div>There is no content</div>
      ) : (
        <div>
          {initialData.map((el, index) => {
            return (
              <div>
                <MainCard data={el} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
