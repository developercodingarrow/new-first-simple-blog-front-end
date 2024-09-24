"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "../../ApplicationIcons";
import { createBlogAction } from "@/src/app/utils/blogactions";

export default function NavApiActionIcon() {
  const router = useRouter();
  const handelCreateBlogAction = async () => {
    try {
      const res = await createBlogAction();
      console.log(res);
      if (res.status === "success") {
        const pathId = res.result.id;
        router.push(`/new-blog/${pathId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handelCreateBlogAction}>
      <FaPlus />
    </div>
  );
}
