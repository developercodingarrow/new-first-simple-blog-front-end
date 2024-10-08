"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";
import { API_BASE_URL } from "../../../config";

export async function featureTagListAction() {
  const cookieStore = cookies(); // Move this inside the function
  const authToken = cookieStore.get("jwt")?.value; // Ensure fresh token
  const url = `${API_BASE_URL}/private/tag/featured-tags`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data.data;
  } catch (error) {
    return { error: error };
  }
}

export async function getTagsWithRevalidation() {
  try {
    // Revalidate the data at most every hour (3600 seconds)
    const res = await fetch(`${API_BASE_URL}/private/tag/verified-tags`, {
      next: { revalidate: 10 },
    });
    if (!res.ok) {
      return [];
    }
    const data = await res.json();

    return data.data;
  } catch (error) {
    return null;
  }
}
