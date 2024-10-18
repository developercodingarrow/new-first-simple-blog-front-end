"use server";

import axios from "axios";
import { API_BASE_URL } from "../../../config";
import { ImageAPIAction, performAPIAction } from "./genericAction";
import { cookies } from "next/headers";

export async function getMainBanner() {
  const url = `${API_BASE_URL}/admin-auth/main-banner/get-main-banner`;
  try {
    const res = await axios.get(url);

    if (res.data.status === "success" && res.data.result.length > 0) {
      console.log(res.data.result);
      return res.data.result[0]; // Return the first banner
    }
  } catch (error) {
    console.error("Error fetching main banner:", error);
  }
  return null; // Return null if there's an error or no result
}

export async function publishedMainBanner(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/admin-auth/main-banner/publish-banner`;
  const method = "post";
  try {
    const res = await ImageAPIAction(method, url, formData, authToken);

    return res.data;
  } catch (error) {
    return { error: error };
  }
}
