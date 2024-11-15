import { performGetAPIAction } from "../utils/genericAction";
import { API_BASE_URL } from "../../../config";
export const tagfillterBlogs = async (query, page) => {
  const limit = 100; // Static limit value
  let url = `${API_BASE_URL}/private/blog/fllterd-tag-blogs`;

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
