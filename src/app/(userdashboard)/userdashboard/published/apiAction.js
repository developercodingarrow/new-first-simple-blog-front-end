import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { performGetAPIAction } from "@/src/app/utils/genericAction";

export const publishedBlog = async () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/my-published-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};
