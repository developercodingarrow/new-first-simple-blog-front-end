import { performGetAPIAction } from "../../performAPIAction";
import { cookies } from "next/headers"; // Server-side cookie access
import { API_BASE_URL } from "../../../../../config";

const fetchWithAuthToken = async (url) => {
  const cookieStore = cookies(); // Access server-side cookies
  const authToken = cookieStore.get("jwt")?.value; // Get JWT token

  if (authToken) {
    return performGetAPIAction(url, authToken); // Perform API call with the token
  }

  throw new Error("Unauthorized: No JWT token found.");
};

// 1) GET ALL USER LIST
export const allTagList = async (requestData) => {
  const url = `${API_BASE_URL}/private/tag/all-tags`;
  return fetchWithAuthToken(url); // Use the helper function
};
