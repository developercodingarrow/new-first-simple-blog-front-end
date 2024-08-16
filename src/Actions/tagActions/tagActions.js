import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";

import { getLoginCookies, isAuth } from "../authAction";
const authToken = getLoginCookies();

// 1) API FOR USER REGISTRATION ACCOUNT
export const getAllTags = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/tag/all-tags`;
  const method = "get";
  return performGetAPIAction(url);
};
