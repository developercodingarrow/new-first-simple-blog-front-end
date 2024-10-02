import { performGetAPI } from "../utils/genericAction";

export const featureblogByTag = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/blog/get-blog-by-tag/${slug}`;
  return performGetAPI(url);
};
