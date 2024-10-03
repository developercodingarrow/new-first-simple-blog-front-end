import { performGetAPIAction } from "../performAPIAction";
import { cookies } from "next/headers"; // Server-side cookie access
import { API_BASE_URL } from "../../../../config";

const fetchWithAuthToken = async (url) => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;

  if (authToken) {
    return performGetAPIAction(url, authToken);
  }

  throw new Error("Unauthorized: No JWT token found.");
};

// Web stats action using the helper function
export const webStatsAction = async () => {
  const url = `${API_BASE_URL}/stats/web-stats`;
  return fetchWithAuthToken(url); // Use the helper function
};
