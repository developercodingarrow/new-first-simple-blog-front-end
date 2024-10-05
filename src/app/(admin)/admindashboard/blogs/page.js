import React, { Suspense } from "react";
import styles from "./bloglistpage.module.css";
import Blogswrapper from "./wrapper";
import { blogsListAction } from "@/src/app/utils/adminActions/authBlogsActions";

async function getData() {
  const data = await blogsListAction();
  if (!data) {
    throw new Error("Data not found");
  }
  return data;
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
