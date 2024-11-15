"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";
import { API_BASE_URL } from "../../../../config";

export async function blogsListAction(authToken) {
  if (!authToken) {
    throw new Error("Authentication token is missing"); // Manually throw an error
  }
  const url = `${API_BASE_URL}/protected/blog/all-blogs`; // protected/blog/all-blogs
  try {
    const res = await performGetAPIAction(url, authToken);

    if (res.data.status === "success") {
      return res.data;
    } else {
      return { error: res.data?.message || "Failed to fetch users" };
    }
  } catch (error) {
    return { error: error.message || "An unexpected error occurred" };
  }
}

export async function clientblogsList() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  if (!authToken) {
    throw new Error("Authentication token is missing"); // Manually throw an error
  }
  const url = `${API_BASE_URL}/protected/blog/all-blogs`; // protected/blog/all-blogs
  try {
    const res = await performGetAPIAction(url, authToken);

    if (res.data.status === "success") {
      return res.data;
    } else {
      return { error: res.data?.message || "Failed to fetch users" };
    }
  } catch (error) {
    return { error: error.message || "An unexpected error occurred" };
  }
}

export async function featuredBlogAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  if (!authToken) {
    throw new Error("Authentication token is missing"); // Manually throw an error
  }
  const url = `${API_BASE_URL}/protected/blog/blog-featured-toggle`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function BlogReportAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  if (!authToken) {
    throw new Error("Authentication token is missing"); // Manually throw an error
  }
  const url = `${API_BASE_URL}/protected/blog/blog-report-action`;
  const method = "patch";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}
