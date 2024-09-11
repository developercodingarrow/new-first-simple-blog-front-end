import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies, isAuth } from "../../../Actions/authAction";
const authToken = getLoginCookies();

// 1) GET ALL USER LIST
export const allTagListAction = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/all-tags`;

    return performGetAPIAction(url, authToken);
  }
  return null;
};

export const createTagAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/create-tag`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const deleteSingleTagAction = async (formData) => {
  if (authToken) {
    console.log("_id--", formData);
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/delete-single-tag`;
    const method = "delete";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};

export const tagverificationAction = async (formData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/tag-vrification`;
    const method = "post";
    return performAPIAction(method, url, formData, authToken);
  }
  return null;
};
