import React from "react";
import { cookies } from "next/headers";
import { contactEnquireListAction } from "@/src/app/utils/contactActions";
import Contactwrapper from "./wrapper";

export default async function ContactEnquiresPage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  let initialData;
  try {
    // Fetch the web stats using the auth token
    const res = await contactEnquireListAction(authToken);

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
      <Contactwrapper data={initialData} />
    </div>
  );
}
