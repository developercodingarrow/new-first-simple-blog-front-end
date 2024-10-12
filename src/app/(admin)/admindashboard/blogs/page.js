import React, { Suspense } from "react";
import styles from "./bloglistpage.module.css";
import Blogswrapper from "./wrapper";
import { blogsListAction } from "@/src/app/utils/adminActions/authBlogsActions";
import { cookies } from "next/headers";

export default async function BlogListpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;

  let initialData;
  try {
    // Fetch the web stats using the auth token
    const res = await blogsListAction(authToken);
    console.log(res);
    if (res.status === "success") {
      initialData = res.result;
    } else {
      initialData = [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    initialData = null;
  }
  return (
    <div>
      <Blogswrapper data={initialData} />
    </div>
  );
}
