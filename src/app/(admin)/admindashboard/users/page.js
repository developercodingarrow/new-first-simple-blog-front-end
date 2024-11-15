import React, { Suspense } from "react";
import styles from "./usertable.module.css";
import UserWrapper from "./wrapper";
import { userListActions } from "@/src/app/utils/adminActions/authUserActions";

async function getData(slug) {
  try {
    const res = await userListActions(slug);

    if (!res.status === "success" || !res.result) {
      throw new Error("Data not found");
    }

    return res.result;
  } catch (error) {
    // Return an object with an error to handle in the UI
    return { error: error.message };
  }
}
export default async function UserListPage() {
  const initialData = await getData();

  return (
    <div>
      <UserWrapper data={initialData} />
    </div>
  );
}
