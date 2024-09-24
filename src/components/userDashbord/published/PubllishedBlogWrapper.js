"use client";
import React from "react";
import { useRouter } from "next/navigation";
import UserDashBordCard from "../elements/card/UserDashBordCard";
import { deleteBlogApi, updateToDraft } from "@/src/app/utils/blogactions";

export default function PubllishedBlogWrapper(props) {
  const router = useRouter();
  const { data } = props;

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

  const handelDeaft = async (actionId) => {
    try {
      const data = {
        id: actionId,
      };
      const res = await updateToDraft(data);
      console.log("handel dreft---", res);
      handelmyPublishedBlog();
    } catch (error) {
      console.log(error);
    }
  };

  const editDeleteActions = [
    { label: "Edit", handler: handleEdit },
    { label: "Delete", handler: handleDelete },
    { label: "Draft", handler: handelDeaft },
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
