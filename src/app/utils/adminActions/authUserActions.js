"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";

export async function userListActions() {
  const cookieStore = cookies(); // Move cookies call inside the function
  const authToken = cookieStore.get("jwt")?.value;
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/users/all-users`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function UserDetail(id) {
  const cookieStore = cookies(); // Move cookies call inside the function
  const authToken = cookieStore.get("jwt")?.value;
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/users/user-detail/${id}`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}
