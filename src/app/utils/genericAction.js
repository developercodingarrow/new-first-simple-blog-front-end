"use server";
import axios from "axios";

export const performGetAPIAction = async (url, token = null, options = {}) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, {
      headers,
      withCredentials: true,
      ...options,
    });
    return response;
  } catch (error) {
    console.error("API Request Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "API request failed");
  }
};

// for previous way
export const performGetAPI = async (url, token = null, options = {}) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await axios.get(url, {
      headers,
      withCredentials: true,
      ...options,
    });
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const performAPIAction = async (
  method,
  url,
  requestData,
  token = null
) => {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const config = {
      method,
      url,
      headers,
      data: requestData,
      withCredentials: true,
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export const ImageAPIAction = async (
  method,
  url,
  requestData,
  token = null
) => {
  const headers = {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const config = {
      method,
      url,
      headers,
      data: requestData,
    };

    const response = await axios(config);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};