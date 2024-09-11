import { performGetAPIAction } from "../../performAPIAction";
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

// 1) GET ALL USER LIST
export const allBlogsListAction = async (requestData) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/blog/all-blogs`;
  return fetchWithAuthToken(url); // Use the helper function
};
