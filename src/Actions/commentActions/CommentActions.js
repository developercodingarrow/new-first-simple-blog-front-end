import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";

import { getLoginCookies, isAuth } from "../authAction";
const authToken = getLoginCookies();

export const createComment = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/create-new-blog-comment`;
    const method = "post";

    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const createReplyAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/comment-reply`;
    const method = "post";

    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const deleteCommentApi = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/delete-comments`;
    const method = "delete";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const deleteCommentReplyApi = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/comment/delete-comments-reply`;
    const method = "delete";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};
