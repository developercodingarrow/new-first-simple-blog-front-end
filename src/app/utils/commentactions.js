"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";
import { API_BASE_URL } from "../../../config";
// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function createCommentAction(formData) {
  const url = `${API_BASE_URL}/private/comment/create-new-blog-comment`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function deleteCommentAction(formData) {
  const url = `${API_BASE_URL}/private/comment/delete-comments`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function deleteCommentReplyAction(formData) {
  const url = `${API_BASE_URL}/private/comment/delete-comments-reply`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function createReplyAction(formData) {
  const url = `${API_BASE_URL}/private/comment/comment-reply`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}
