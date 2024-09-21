"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function createCommentAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/create-new-blog-comment`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function deleteCommentAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/delete-comments`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function deleteCommentReplyAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/delete-comments-reply`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function createReplyAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/comment-reply`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

// export const createReplyAction = async (formData) => {
//   if (authToken) {
//     const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/comment-reply`;
//     const method = "post";

//     return performAPIAction(method, url, formData, authToken);
//   }
//   return null;
// };
