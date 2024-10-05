import React, { Suspense } from "react";
import DraftBlogsWrapper from "@/src/components/userDashbord/draft/DraftBlogsWrapper";
import { draftBlogs } from "@/src/app/utils/blogactions";
import CardSkeleton from "@/src/components/userDashbord/elements/skeleton/CardSkeleton";

import { cookies } from "next/headers"; // Import cookies here
export default async function draftBlogpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value; // Access cookies directly here

  let initialData;
  try {
    const res = await draftBlogs(authToken); // Pass authToken directly to your function
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
        <DraftBlogsWrapper data={initialData} />
      </Suspense>
    </div>
  );
}
