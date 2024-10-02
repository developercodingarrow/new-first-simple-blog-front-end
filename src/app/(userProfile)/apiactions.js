import {
  performGetAPIAction,
  performGetAPI,
  performAPIAction,
  GetAPIAction,
} from "../utils/genericAction";

export const profileUserDeatils = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/user-details/${slug}`;
  return GetAPIAction(url, null);
};
