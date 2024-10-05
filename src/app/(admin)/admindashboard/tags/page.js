import React, { Suspense } from "react";
import styles from "../../pagesStyle.module.css";
import Tagwrapper from "./wrapper";
import { tagListAction } from "@/src/app/utils/adminActions/authTagActions";

async function getData() {
  const data = await tagListAction(); // Pass authToken as a parameter
  if (!data) {
    throw new Error("Data not found");
  }
  return data;
}

export default async function TagListpage() {
  const initialData = await getData();
  return (
    <div>
      <Tagwrapper data={initialData} />
    </div>
  );
}
