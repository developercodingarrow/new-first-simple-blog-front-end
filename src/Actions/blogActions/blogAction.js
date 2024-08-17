import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";

import { getLoginCookies, isAuth } from "../authAction";
const authToken = getLoginCookies();

export const createBlogWithImg = async (formData, projectId) => {
  console.log(formData);
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/create-blog`;
  const method = "post";
  return ImageAPIAction(method, url, formData, authToken);
};

// UPDATE BLOG THUMBLIN
export const UpdateBlogThumblin = async (formData, projectId) => {
  console.log(formData);
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-thumblin/${projectId}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, authToken);
};

// 1) API FOR USER REGISTRATION ACCOUNT
export const getSingleBlog = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-single-blog/${slug}`;
  const method = "get";
  return performGetAPIAction(url, authToken);
};

export const deleteBlogThumblinImages = async (id, projectId) => {
  console.log(id);
  const data = {};
  console.log(data);
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/delete-blog-thumblin/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, authToken);
};

export const upadteBlogTags = async (formData, slug) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-tags/${slug}`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const singleBlogs = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-blog/${slug}`;
  return performGetAPIAction(url);
};
