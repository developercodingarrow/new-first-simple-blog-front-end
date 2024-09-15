import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "../../../Actions/authAction";
const authToken = getLoginCookies();

// 1) GET ALL USER LIST
export const allBlogsListAction = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/protected/blog/all-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const featuredBlogAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/protected/blog/blog-featured-toggle`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};
