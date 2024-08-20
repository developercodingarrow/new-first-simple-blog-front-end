"use client";
import React, { useEffect, useState } from "react";
import UserCard from "@/src/components/server-components/cards/user/UserCard";
import {
  myDraftBlog,
  deleteBlogApi,
  updateToPublsih,
} from "@/src/Actions/blogActions/blogAction";

export default function UserDraftBlogs() {
  const [draftBlogs, setdraftBlogs] = useState([]);

  useEffect(() => {
    handelmyDraftBlog();
  }, []);

  const handelmyDraftBlog = async () => {
    try {
      const res = await myDraftBlog();
      if (res.data.status === "success") {
        console.log(res.data.result);
        setdraftBlogs(res.data.result);
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

  const handelPublsih = async (actionId) => {
    try {
      const data = {
        blogId: actionId,
      };
      const res = await updateToPublsih(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const editDeleteActions = [
    { label: "Edit", handler: handleEdit },
    { label: "Delete", handler: handleDelete },
    { label: "Publsih", handler: handelPublsih },
  ];
  return (
    <div>
      {draftBlogs.map((data, index) => {
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
