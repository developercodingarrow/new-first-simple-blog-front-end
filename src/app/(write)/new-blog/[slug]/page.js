import React, { Suspense } from "react";
import { getSingleAuthBlog } from "@/src/app/utils/blogapi";
import EditBlogUI from "@/src/components/editBlog/EditBlogUi";
import Loading from "./loading";

async function getData(slug) {
  try {
    const res = await getSingleAuthBlog(slug);
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    console.log("page api---", res);
    if (!res.result) {
      throw new Error("Data not found");
    }

    return await res.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function page(pathname) {
  const slug = pathname?.params?.slug;

  const initialData = await getData(slug);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <EditBlogUI apiData={initialData} slug={slug} />
      </Suspense>
    </div>
  );
}
