"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";
import CryptoJS from "crypto-js";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

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
    console.error("Error logging in:", error.message);
    return { error: error.message }; // Return the error message
  }
}
