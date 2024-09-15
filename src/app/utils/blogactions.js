"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function draftBlogs() {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/my-draft-blogs`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function updateToPublsih(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-to-published`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}
