"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "../genericAction";
import { API_BASE_URL } from "../../../../config";

// Get auth token from cookies

export async function tagListAction(authToken) {
  const url = `${API_BASE_URL}/private/tag/all-tags`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function createTagAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/tag/create-tag`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function tagverificationAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/tag/tag-vrification`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function tagFeatureAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/tag/tag-featured`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function deleteSingleTagAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/tag/delete-single-tag`;
  const method = "delete";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    console.log("deleteSingleTagAction---", res);
    return res.data;
  } catch (error) {
    return error;
  }
}
