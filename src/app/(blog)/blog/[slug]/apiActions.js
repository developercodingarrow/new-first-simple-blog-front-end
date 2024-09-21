import {
  performGetAPIAction,
  performGetAPI,
  performAPIAction,
} from "../../../utils/genericAction";

export const ssrSingleBlogs = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-blog/${slug}`;
  return performGetAPI(url);
};
