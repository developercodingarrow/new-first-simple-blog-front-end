import React, { Suspense } from "react";
import styles from "../../pagesStyle.module.css";
import Tagwrapper from "./wrapper";
import { tagListAction } from "@/src/app/utils/adminActions/authTagActions";
import { cookies } from "next/headers";

export default async function TagListpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value; // Get the auth token from cookies

  let initialData; // Declare variable to hold web stats
  try {
    // Fetch the web stats using the auth token
    const res = await tagListAction(authToken); // Pass the token to the action
    if (res.status === "success") {
      initialData = res.result;
    } else {
      initialData = [];
    }
  } catch (error) {
    initialData = null; // Handle the case where fetching fails
  }
  return (
    <div>
      <Tagwrapper data={initialData} />
    </div>
  );
}
