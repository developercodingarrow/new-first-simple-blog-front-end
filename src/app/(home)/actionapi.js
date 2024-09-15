import { performGetAPIAction } from "../_adminPanel/admin_actions/performAPIAction";
import { cookies } from "next/headers"; // Server-side cookie access
import crypto from "crypto"; // Node.js crypto module for decryption

export const tagfillterBlogs = async (query, page) => {
  //   testing purpose end

  // Api
  const limit = 3; // Static limit value
  let url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/fllterd-tag-blogs`;

  const queryParams = [];
  if (query) {
    queryParams.push(`tag=${query}`);
  }
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  return performGetAPIAction(url, null);
};
