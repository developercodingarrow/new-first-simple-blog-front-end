"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";
import { API_BASE_URL } from "../../../../config";

export async function userListActions() {
  const cookieStore = cookies(); // Move cookies call inside the function
  const authToken = cookieStore.get("jwt")?.value;
  if (!authToken) {
    throw new Error("Authentication token is missing"); // Manually throw an error
  }
  const url = `${API_BASE_URL}/protected/users/all-users`;
  try {
    const res = await performGetAPIAction(url, authToken);
    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      return { error: res.data?.message || "Failed to fetch users" };
    }
  } catch (error) {
    return { error: error.message || "An unexpected error occurred" };
  }
}

export async function UserDetail(id) {
  const cookieStore = cookies(); // Move cookies call inside the function
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/protected/users/user-detail/${id}`;
  try {
    const res = await performGetAPIAction(url, authToken);
    if (res.data && res.data.status === "success") {
      return res.data;
    } else {
      return { error: res.data?.message || "Failed to fetch users" };
    }
  } catch (error) {
    return { error: error.message || "An unexpected error occurred" };
  }
}
