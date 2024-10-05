"use server";

import { performGetAPIAction } from "@/src/Actions/performAPIAction";
import { getLoginCookies, isAuth } from "../../../../Actions/authAction";
const authToken = getLoginCookies();

export async function draftBlog() {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/my-draft-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
}
