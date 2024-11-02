"use server";
import { cookies } from "next/headers"; // Import the cookies function
import { performGetAPIAction, performAPIAction } from "./genericAction";
import { API_BASE_URL } from "../../../config";

export async function contactEnquireListAction() {
  const cookieStore = cookies(); // Move this inside the function
  const authToken = cookieStore.get("jwt")?.value; // Ensure fresh token
  const url = `${API_BASE_URL}/contact/get-contact-enqure-list`;
  try {
    const res = await performGetAPIAction(url, authToken);

    return res.data;
  } catch (error) {
    return { error: error };
  }
}

export async function newContactEnquire(formData) {
  const url = `${API_BASE_URL}/contact/send-contact-info`;
  const method = "post";
  try {
    const res = await performAPIAction(method, url, formData);
    return res.data;
  } catch (error) {
    return error;
  }
}
