import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { performGetAPIAction } from "@/src/Actions/performAPIAction";

const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export const publishedBlog = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/my-published-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};
