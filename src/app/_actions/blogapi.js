import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

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

// 1) for update blog
export const getSingleBlog = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-single-blog/${slug}`;
  const method = "get";
  return performGetAPIAction(url, authToken);
};
