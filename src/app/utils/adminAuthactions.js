"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";

import { API_BASE_URL } from "../../../config";

export async function adminLoginAction(formData) {
  const url = `${API_BASE_URL}/private/blog/update-to-published`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    return error;
  }
}
