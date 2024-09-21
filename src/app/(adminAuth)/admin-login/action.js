"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import {
  performGetAPIAction,
  performAPIAction,
} from "../../utils/genericAction";

export async function adminLoginAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/admin-auth/protected-login`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      data: formData, // Send form data in the request body
      withCredentials: true, // If cookies or auth tokens are needed
    });

    // Assuming you want to store a token or some auth data in a cookie
    const token = res.data.token;
    if (token) {
      cookies().set("jwt", token); // Store the token in cookies if necessary
    }

    return res.data; // Return response data
  } catch (error) {
    console.error("Error logging in:", error.message);
    return { error: error.message }; // Return the error message
  }
}

export const adminLoginAction = async (formData) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/protected/admin-auth/protected-login`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      data: formData, // Send form data in the request body
      withCredentials: true, // If cookies or auth tokens are needed
    });

    // Assuming you want to store a token or some auth data in a cookie
    const token = res.data.token;
    if (token) {
      cookies().set("jwt", token); // Store the token in cookies if necessary
    }

    return res.data; // Return response data
  } catch (error) {
    console.error("Error logging in:", error.message);
    return { error: error.message }; // Return the error message
  }
};
