import React, { Suspense } from "react";
import styles from "./bloglistpage.module.css";
import Blogswrapper from "./wrapper";
import { blogsListAction } from "@/src/app/utils/adminActions/authBlogsActions";

async function getData(slug) {
  const res = await blogsListAction(slug);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.status === "success" || !res.result) {
    throw new Error("Data not found");
  }
  console.log(res.result);
  return await res.result;
}
export default async function BlogListpage() {
  const initialData = await getData();
  console.log(initialData);
  return (
    <div>
      <Blogswrapper data={initialData} />
    </div>
  );
}
