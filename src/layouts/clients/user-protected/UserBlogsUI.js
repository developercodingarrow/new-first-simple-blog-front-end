"use client";
import {
  mypublishedBlog,
  updateToDeaft,
  deleteBlogApi,
} from "@/src/Actions/blogActions/blogAction";
import UserCard from "@/src/components/server-components/cards/user/UserCard";
import React, { useEffect, useState } from "react";

export default function UserBlogsUI() {
  const [publishedBlog, setpublishedBlog] = useState([]);

  useEffect(() => {
    handelmyPublishedBlog();
  }, []);

  const handelmyPublishedBlog = async () => {
    try {
      const res = await mypublishedBlog();
      if (res.data.status === "success") {
        console.log(res.data.result);
        setpublishedBlog(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (_, slug) => {
    console.log("Edit action triggered", slug);
  };

  const handleDelete = async (actionId) => {
    try {
      const data = {
        blogId: actionId,
      };
      const res = await deleteBlogApi(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handelDeaft = async (actionId) => {
    try {
      const data = {
        blogId: actionId,
      };
      const res = await updateToDeaft(data);
      console.log(res);
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
      {publishedBlog.map((data, index) => {
        return (
          <UserCard
            key={index}
            footerActions={editDeleteActions}
            actionId={data._id}
            slug={data.slug}
          />
        );
      })}
    </div>
  );
}
