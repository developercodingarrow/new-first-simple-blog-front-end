"use server";
import { cookies } from "next/headers"; // Import the cookies function
import {
  performGetAPIAction,
  performAPIAction,
  ImageAPIAction,
} from "./genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function createBlogAction() {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/first-action-create-blog`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, {}, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

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

export async function updateToDraft(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-to-draft`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function deleteBlogApi(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/delete-blog`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function reportBlogAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/report-content`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function likeActions(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/like`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function unlikeAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/unlike`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function upadteBlogContent(formData, slug) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-content/${slug}`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function upadteBlogTags(formData, slug) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-tags/${slug}`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function UpdateBlogThumblin(formData, projectId) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-thumblin/${projectId}`;
  const method = "patch";
  try {
    const res = await ImageAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function deleteBlogThumblinImages(projectId) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/delete-blog-thumblin/${projectId}`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, {}, authToken);
    return res;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return { error: error };
  }
}
