import { performGetAPIAction } from "../performAPIAction";
import { cookies } from "next/headers"; // Server-side cookie access

const fetchWithAuthToken = async (url) => {
  const cookieStore = cookies(); // Access server-side cookies
  const authToken = cookieStore.get("jwt")?.value; // Get JWT token
  console.log("authToken----", authToken);

  if (authToken) {
    return performGetAPIAction(url, authToken); // Perform API call with the token
  }

  throw new Error("Unauthorized: No JWT token found.");
};

// Web stats action using the helper function
export const webStatsAction = async () => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/stats/web-stats`;
  return fetchWithAuthToken(url); // Use the helper function
};
