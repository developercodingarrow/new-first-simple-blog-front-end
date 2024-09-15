import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";

import { getLoginCookies, isAuth } from "../authAction";
const authToken = getLoginCookies();

console.log("authToken--", authToken);

// 1) API FOR USER REGISTRATION ACCOUNT
export const userProfileUpdate = async (requestData) => {
  if (authToken) {
    const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/update-user-profile`;
    const method = "post";
    return performAPIAction(method, url, requestData, authToken);
  }

  return null;
};

// UPDATE BLOG THUMBLIN
export const UpdateUserProfilePic = async (formData) => {
  console.log(formData);
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/update-user-profile-pic`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, authToken);
};
