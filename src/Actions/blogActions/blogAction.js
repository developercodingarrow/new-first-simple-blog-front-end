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

export const createBlogAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/first-action-create-blog`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

// UPDATE BLOG THUMBLIN
export const UpdateBlogThumblin = async (formData, projectId) => {
  console.log(formData);
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-thumblin/${projectId}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, authToken);
};

// 1) for update blog
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

export const upadteBlogContent = async (formData, slug) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-blog-content/${slug}`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

// SSR for all user
export const singleBlogs = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-blog/${slug}`;
  return performGetAPIAction(url);
};
//  SSR All Blogs

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

export const likeAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/like`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const unlikeAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/unlike`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const mypublishedBlog = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/my-published-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const myDraftBlog = async () => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/my-draft-blogs`;
    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const updateToDeaft = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-to-draft`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const updateToPublsih = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/update-to-published`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const deleteBlogApi = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/delete-blog`;
    const method = "delete";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const reportContentAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/report-content`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};
