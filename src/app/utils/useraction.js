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

export async function updateUser(formData) {
  const url = `${API_BASE_URL}/private/users/update-user-profile`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}

export async function updateUserProfilePic(formData) {
  const url = `${API_BASE_URL}/private/users/update-user-profile-pic`;
  const method = "patch";
  try {
    const res = await ImageAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}
