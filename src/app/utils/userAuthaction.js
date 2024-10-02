"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "../../../config";
const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

export async function userLoginAction(formData) {
  const url = `${API_BASE_URL}/user-auth/login`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      data: formData, // Send form data in the request body
      withCredentials: true, // If cookies or auth tokens are needed
    });

    const token = res.data.token;
    const userDetail = res.data.user;
    if (token) {
      cookies().set("jwt", token); // Store the token in cookies

      // Encrypt the user details using AES encryption
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });
    }
    return { data: res.data };
  } catch (error) {
    if (error.response && error.response.data) {
      return { error: error.response.data.message };
    }

    return { error: "An unexpected error occurred" };
  }
}

export async function userGoogleLoginAction(googleCredential) {
  const url = `${API_BASE_URL}/user-auth/google-login`;
  const method = "post";

  try {
    // Send Google token to your Express API
    const res = await axios({
      method,
      url,
      data: { token: googleCredential }, // Pass the Google credential here
      withCredentials: true, // If cookies or auth tokens are needed
    });

    const token = res.data.token;
    const userDetail = res.data.user;

    if (token) {
      cookies().set("jwt", token); // Store the token in cookies

      // Encrypt the user details using AES encryption
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });
    }

    return res.data; // Return response data
  } catch (error) {
    return { error: error.message }; // Return the error message
  }
}

export async function userRegisterAction(formData) {
  const url = `${API_BASE_URL}/user-auth/sing-up`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    return { data: res.data };
  } catch (error) {
    console.error("Error during registration:", error);
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function userotpVerfication(formData, slug) {
  const url = `${API_BASE_URL}/user-auth/verify-otp/${slug}`;
  const method = "post";
  try {
    // const res = await performAPIAction(method, url, formData, authToken);
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    return { status: "success", data: res.data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function updateUserProfileAction(formData) {
  const url = `http://localhost:8000/api/v1/first-simple-blog/private/users/update-user-profile`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData, // Send form data in the request body
      withCredentials: true, // If cookies or auth tokens are needed
    });

    console.log(res);

    return { status: "success", data: res.data };
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function updateUserDetail(data) {
  const userData = JSON.stringify(data);
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();

  // Store the encrypted data in cookies
  cookies().set("user", encryptedData, {
    httpOnly: false,
  });
}

export async function LogOutAction() {
  const url = `${API_BASE_URL}/user-auth/logout`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      withCredentials: true, // Send cookies with request
    });

    // Remove the cookies by setting them with a past expiration date
    const cookieStore = cookies();
    cookieStore.set("jwt", "", { expires: new Date(0) });
    cookieStore.set("user", "", { expires: new Date(0) });
    cookieStore.set("g_state", "", { expires: new Date(0) });

    return { status: "success", data: res.data };
  } catch (error) {
    console.error("Error:", error.message);
    return { error: error.message };
  }
}
