"use client";
import React from "react";
import { updateToPublsih, draftBlogs } from "@/src/app/utils/blogactions";
import { useRouter } from "next/navigation";
import UserDashBordCard from "../elements/card/UserDashBordCard";

export default function DraftBlogsWrapper(props) {
  const { data } = props;
  const router = useRouter();

  const handleEdit = (_, slug) => {
    console.log("Edit action triggered", slug);
  };

  const handelUpdatePublish = async (actionId) => {
    try {
      const data = {
        blogId: actionId,
      };
      const res = await updateToPublsih(data);
      console.log("handel dreft---", res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  const editDeleteActions = [
    { label: "Edit", handler: handleEdit },
    // { label: "Delete", handler: handleDelete },
    { label: "Publsih", handler: handelUpdatePublish },
  ];
  return (
    <div>
      {data.map((data, index) => {
        return (
          <UserDashBordCard
            key={index}
            footerActions={editDeleteActions}
            data={data}
          />
        );
      })}
    </div>
  );
}
