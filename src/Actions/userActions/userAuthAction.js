import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "../performAPIAction";

// 1) API FOR USER REGISTRATION ACCOUNT
export const userRegister = async (requestData) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/auth/sing-up`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// 2) API FOR USER REGISTER OTP
export const otpVerfication = async (requestData, slug) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/auth/verify-otp/${slug}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// 3) User Login
export const loginAccount = async (requestData, token) => {
  const url = `http://localhost:8000/api/v1/first-simple-blog/auth/login`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};
