import React, { Suspense } from "react";
import PubllishedBlogWrapper from "@/src/components/userDashbord/published/PubllishedBlogWrapper";
import CardSkeleton from "@/src/components/userDashbord/elements/skeleton/CardSkeleton";
import { publishedBlog } from "@/src/app/utils/blogactions";
import { cookies } from "next/headers"; // Import cookies here

export default async function PublishedBlogPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value; // Access cookies directly here

  let initialData;
  try {
    const res = await publishedBlog(authToken);
    if (res.error) {
      console.error("Error fetching draft blogs:", res.error);
      initialData = [];
    } else {
      initialData = res.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    initialData = []; // Handle the case where data is not found
  }

  return (
    <div>
      <Suspense fallback={<CardSkeleton />}>
        <PubllishedBlogWrapper data={initialData} />
      </Suspense>
    </div>
  );
}
