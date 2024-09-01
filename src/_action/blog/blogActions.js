import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";

import { getLoginCookies, isAuth } from "../../Actions/authAction";
const authToken = getLoginCookies();

// TAG FILLTER BLOG API
export const tagfillterBlogs = async (query, page) => {
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

// REPORT BLOG
export const reportBlogAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/report-content`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};
