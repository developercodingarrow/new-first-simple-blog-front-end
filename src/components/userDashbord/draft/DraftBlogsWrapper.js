"use client";
import React from "react";
import { draftBlogs, deleteBlogApi } from "@/src/app/utils/blogactions";
import { useRouter } from "next/navigation";
import UserDashBordCard from "../elements/card/UserDashBordCard";

export default function DraftBlogsWrapper(props) {
  const { data } = props;
  const router = useRouter();

  console.log("draft page wrapper---", data);

  const handleEdit = (id, slug) => {
    router.push(`/new-blog/${id}`);
  };

  const handleDelete = async (actionId) => {
    try {
      const data = {
        id: actionId,
      };
      const res = await deleteBlogApi(data);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  const editDeleteActions = [
    { label: "Edit", handler: handleEdit },
    // { label: "Delete", handler: handleDelete },
    { label: "Delete", handler: handleDelete },
  ];
  return (
    <div>
      {data && data.length >= 1 ? (
        data?.map((item, index) => (
          <UserDashBordCard
            key={index}
            footerActions={editDeleteActions}
            data={item}
          />
        ))
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
}
