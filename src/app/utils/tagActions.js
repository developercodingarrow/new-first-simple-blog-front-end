"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function featureTagListAction() {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/featured-tags`;
  try {
    const res = await performGetAPIAction(url, authToken);
    return res.data.tags;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function getTagsWithRevalidation() {
  try {
    // Revalidate the data at most every hour (3600 seconds)
    const res = await fetch(
      "http://localhost:8000/api/v1/first-simple-blog/private/tag/verified-tags",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch tags");
    }

    const data = await res.json();
    return data.data.tags;
  } catch (error) {
    console.error("Error fetching tags:", error.message);
    return null;
  }
}
