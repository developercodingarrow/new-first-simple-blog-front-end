"use client";
import React, { useEffect, useState } from "react";

import {
  deleteBlogApi,
  mypublishedBlog,
  updateToDeaft,
} from "@/src/Actions/blogActions/blogAction";
import UserDashBordCard from "../elements/card/UserDashBordCard";
import CardSkeleton from "../elements/skeleton/CardSkeleton";

export default function PubllishedBlogWrapper(props) {
  const { data } = props;

  const [publishedBlog, setpublishedBlog] = useState(data);
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
      {publishedBlog.map((data, index) => {
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
