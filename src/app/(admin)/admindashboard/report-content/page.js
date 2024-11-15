import React, { Suspense } from "react";
import { cookies } from "next/headers";
import { reportListAction } from "@/src/app/utils/adminActions/authReportActions";
import Reportwrapper from "./wrapper";

export default async function Reportpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;

  let initialData;
  try {
    // Fetch the web stats using the auth token
    const res = await reportListAction(authToken);

    if (res.status === "success") {
      initialData = res.result;
    } else {
      initialData = [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    initialData = null;
  }
  return (
    <div>
      <Reportwrapper data={initialData} />
    </div>
  );
}
