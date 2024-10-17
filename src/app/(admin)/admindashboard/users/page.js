import React, { Suspense } from "react";
import styles from "./usertable.module.css";
import UserWrapper from "./wrapper";
import { userListActions } from "@/src/app/utils/adminActions/authUserActions";

async function getData(slug) {
  const res = await userListActions(slug);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.status === "success" || !res.result) {
    throw new Error("Data not found");
  }

  return await res.result;
}
export default async function UserListPage() {
  const initialData = await getData();

  return (
    <div>
      <UserWrapper data={initialData} />
    </div>
  );
}
