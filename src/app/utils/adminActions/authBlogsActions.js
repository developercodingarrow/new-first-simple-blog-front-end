"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function blogsListAction() {
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/blog/all-blogs`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function featuredBlogAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/blog/blog-featured-toggle`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}
