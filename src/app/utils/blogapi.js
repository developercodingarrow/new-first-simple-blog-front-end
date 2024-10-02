"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";

export async function getSingleAuthBlog(slug) {
  const cookieStore = cookies(); // Move cookies call inside the function
  const authToken = cookieStore.get("jwt")?.value;
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-single-blog/${slug}`;

  try {
    const res = await performGetAPIAction(url, authToken);
    console.log("res---", res);
    return res.data;
  } catch (error) {
    return { error: error.message || "Unknown error occurred" };
  }
}
