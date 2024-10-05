"use server";
import { cookies } from "next/headers"; // Import the cookies function
import {
  performGetAPIAction,
  performAPIAction,
  ImageAPIAction,
} from "./genericAction";
import { API_BASE_URL } from "../../../config";

export async function updateUser(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
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
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/users/update-user-profile-pic`;
  const method = "patch";
  try {
    const res = await ImageAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}
