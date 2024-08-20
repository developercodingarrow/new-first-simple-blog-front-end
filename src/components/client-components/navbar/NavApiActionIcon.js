"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/navapiAction.module.css";
import { FaPlus } from "../../ApplicationIcons";
import { createBlogAction } from "@/src/Actions/blogActions/blogAction";

export default function NavApiActionIcon() {
  const router = useRouter();
  const handelCreateBlogAction = async () => {
    try {
      const res = await createBlogAction();
      console.log(res);
      if (res.data.status === "success") {
        const pathId = res.data.result.id;
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
