"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaPlus } from "../../ApplicationIcons";
import { createBlogAction } from "@/src/app/utils/blogactions";
import toast, { Toaster } from "react-hot-toast";

export default function NavApiActionIcon() {
  const router = useRouter();
  const handelCreateBlogAction = async () => {
    try {
      const res = await createBlogAction();

      if (res.status === "Error") {
        alert(res.message);
        return;
      }
      if (res.status === "success") {
        const pathId = res.result.id;
        router.push(`/new-blog/${pathId}`);
      }
    } catch (error) {}
  };

  return (
    <>
      <div onClick={handelCreateBlogAction} aria-label="Create new post">
        <FaPlus />
      </div>
    </>
  );
}
