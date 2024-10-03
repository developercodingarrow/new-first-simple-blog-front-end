import {
  performGetAPIAction,
  performGetAPI,
  performAPIAction,
} from "../../../utils/genericAction";
import { API_BASE_URL } from "../../../../../config";

export const ssrSingleBlogs = async (slug) => {
  const url = `${API_BASE_URL}/private/blog/get-blog/${slug}`;
  return performGetAPI(url);
};
