"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";
import { API_BASE_URL } from "../../../../config";

export async function blogsListAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/blog/all-blogs`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function featuredBlogAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/protected/blog/blog-featured-toggle`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}
