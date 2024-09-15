import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";
import Cookies from "js-cookie";
import { API_BASE_URL } from "../../../config";

// 1) API FOR USER REGISTRATION ACCOUNT
export const userRegister = async (requestData) => {
  const url = `${API_BASE_URL}/auth/sing-up`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// 2) API FOR USER REGISTER OTP
export const otpVerfication = async (requestData, slug) => {
  const url = `${API_BASE_URL}/auth/verify-otp/${slug}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// 3) User Login
export const loginAccount = async (requestData, token) => {
  const url = `${API_BASE_URL}/auth/login`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const logOutAction = () => {
  localStorage.removeItem("user");
  Cookies.remove("jwt");
  Cookies.remove("user");
};
