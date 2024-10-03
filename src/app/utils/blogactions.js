"use server";
import { cookies } from "next/headers"; // Import the cookies function
import {
  performGetAPIAction,
  performAPIAction,
  ImageAPIAction,
} from "./genericAction";
import { API_BASE_URL } from "../../../config";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function createBlogAction() {
  const url = `${API_BASE_URL}/private/blog/first-action-create-blog`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, {}, authToken);

    return res.data;
  } catch (error) {
    return error;
  }
}

export async function draftBlogs() {
  const url = `${API_BASE_URL}/private/blog/my-draft-blogs`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function updateToDraft(formData) {
  const url = `${API_BASE_URL}/private/blog/update-to-draft`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function deleteBlogApi(formData) {
  const url = `${API_BASE_URL}/private/blog/delete-blog`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function reportBlogAction(formData) {
  const url = `${API_BASE_URL}/private/blog/report-content`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function likeActions(formData) {
  const url = `${API_BASE_URL}/private/blog/like`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function unlikeAction(formData) {
  const url = `${API_BASE_URL}/private/blog/unlike`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function upadteBlogContent(formData, slug) {
  const url = `${API_BASE_URL}/private/blog/update-blog-content/${slug}`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function upadteBlogTags(formData, slug) {
  const url = `${API_BASE_URL}/private/blog/update-blog-tags/${slug}`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function UpdateBlogThumblin(formData, projectId) {
  const url = `${API_BASE_URL}/private/blog/update-blog-thumblin/${projectId}`;
  const method = "patch";
  try {
    const res = await ImageAPIAction(method, url, formData, authToken);

    return res.data;
  } catch (error) {
    return error;
  }
}

export async function deleteBlogThumblinImages(projectId) {
  const url = `${API_BASE_URL}/private/blog/delete-blog-thumblin/${projectId}`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, {}, authToken);
    if (res.status === 204) {
      return { success: true, message: "image deleted" }; // Return a simple object to prevent unnecessary processing
    }
  } catch (error) {
    return { error: error.message || "Request failed" };
  }
}
