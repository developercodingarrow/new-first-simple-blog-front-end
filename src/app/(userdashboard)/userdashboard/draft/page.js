import React, { Suspense } from "react";
import DraftBlogsWrapper from "@/src/components/userDashbord/draft/DraftBlogsWrapper";
import { draftBlogs } from "@/src/app/utils/blogactions";
import CardSkeleton from "@/src/components/userDashbord/elements/skeleton/CardSkeleton";

async function getData() {
  try {
    const res = await draftBlogs();
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    if (!res.result) {
      throw new Error("Data not found");
    }

    return await res.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw new Error(`Failed to fetch data: ${error}`);
  }
}
export default async function draftBlogpage() {
  const initialData = await getData();
  return (
    <div>
      <Suspense fallback={<CardSkeleton />}>
        <DraftBlogsWrapper data={initialData} />
      </Suspense>
    </div>
  );
}
