import { performGetAPI } from "@/src/app/utils/genericAction";

export const userPublishedBlogs = async (slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/user-blogs/${slug}`;
  return performGetAPI(url);
};
