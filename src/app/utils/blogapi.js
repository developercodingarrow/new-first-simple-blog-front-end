"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";
import { API_BASE_URL } from "../../../config";

export async function getSingleAuthBlog(slug) {
  const cookieStore = cookies(); // Move cookies call inside the function
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/private/blog/get-single-blog/${slug}`;

  try {
    const res = await performGetAPIAction(url, authToken);
    console.log("res blogapi action---", res);
    return res.data;
  } catch (error) {
    return { error: error.message || "Unknown error occurred" };
  }
}
