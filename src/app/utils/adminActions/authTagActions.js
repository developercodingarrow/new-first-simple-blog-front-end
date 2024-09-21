"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function tagListAction() {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/all-tags`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function createTagAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/create-tag`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function tagverificationAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/tag-vrification`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function tagFeatureAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/tag-featured`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function deleteSingleTagAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/delete-single-tag`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}
