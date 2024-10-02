"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";

export async function featureTagListAction() {
  const cookieStore = cookies(); // Move this inside the function
  const authToken = cookieStore.get("jwt")?.value; // Ensure fresh token
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/featured-tags`;
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
    const res = await fetch(
      "http://localhost:8000/api/v1/first-simple-blog/private/tag/verified-tags",
      {
        // next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch tags");
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching tags:", error.message);
    return null;
  }
}
