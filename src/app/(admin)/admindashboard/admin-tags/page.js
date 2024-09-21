import React, { Suspense } from "react";
import styles from "../../pagesStyle.module.css";
import AdminTagswrapper from "./wrapper";

import { tagListAction } from "@/src/app/utils/adminActions/authTagActions";

async function getData(slug) {
  const res = await tagListAction(slug);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  if (!res.status === "success" || !res.result) {
    throw new Error("Data not found");
  }
  console.log(res.result);
  return await res.result;
}

export default async function AdminTags() {
  const initialData = await getData();
  return (
    <div>
      <AdminTagswrapper data={initialData} />
    </div>
  );
}
