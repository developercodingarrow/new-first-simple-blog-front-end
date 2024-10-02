import React, { Suspense } from "react";
import { getSingleAuthBlog } from "@/src/app/utils/blogapi";
import EditBlogUI from "@/src/components/editBlog/EditBlogUi";
import Loading from "./loading";

async function getData(slug) {
  try {
    const res = await getSingleAuthBlog(slug);

    // Handle blog fetch failure
    if (res?.error) {
      console.log("Error returned from API:", res.error);
      throw new Error(res.error); // Properly throw the error
    }

    return await res.result;
  } catch (error) {
    throw new Error(`${error}`);
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
