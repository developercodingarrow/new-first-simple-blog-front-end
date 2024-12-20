import React from "react";
import { UserDetail } from "@/src/app/utils/adminActions/authUserActions";
import UserDetailUi from "@/src/app/_adminPanel/ui/userDetails/userDetailUi";

async function getData(slug) {
  try {
    const res = await UserDetail(slug);
    // await new Promise((resolve) => setTimeout(resolve, 100000));
    if (!res.status === "success") {
      throw new Error("Data not found");
    }
    return await res.result;
  } catch (error) {
    return { error: error.message };
  }
}
export default async function UserDetailpage(pathname) {
  const slug = pathname.params?.slug;
  const initialData = await getData(slug);
  return (
    <div>
      <UserDetailUi data={initialData} />
    </div>
  );
}
