import React, { Suspense } from "react";
import { publishedBlog } from "./apiAction";
import PubllishedBlogWrapper from "@/src/components/userDashbord/published/PubllishedBlogWrapper";
import CardSkeleton from "@/src/components/userDashbord/elements/skeleton/CardSkeleton";

async function getData() {
  try {
    const res = await publishedBlog();
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    if (!res.data || !res.data.result) {
      throw new Error("Data not found");
    }

    return await res.data.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    // throw new Error(`Failed to fetch data: ${error}`);
  }
}

export default async function PublishedBlogPage() {
  const initialData = await getData();

  return (
    <div>
      <Suspense fallback={<CardSkeleton />}>
        <PubllishedBlogWrapper data={initialData} />
      </Suspense>
    </div>
  );
}
