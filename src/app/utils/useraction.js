"use server";
import { cookies } from "next/headers"; // Import the cookies function
import {
  performGetAPIAction,
  performAPIAction,
  ImageAPIAction,
} from "./genericAction";

// Get auth token from cookies
const cookieStore = cookies();
const authToken = cookieStore.get("jwt")?.value;

export async function updateUser(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/update-user-profile`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

export async function updateUserProfilePic(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/update-user-profile-pic`;
  const method = "patch";
  try {
    const res = await ImageAPIAction(method, url, formData, authToken);
    return res.data;
  } catch (error) {
    console.error("Error fetching draft blogs:", error.message);
    return error;
  }
}

// export async function userDetails(slug) {
//   const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/user-details/${slug}`;
//   const method = "post";
//   try {
//     const res = await performAPIAction(method, url, formData, authToken);
//     return res.data;
//   } catch (error) {
//     console.error("Error fetching draft blogs:", error.message);
//     return error;
//   }
// }

