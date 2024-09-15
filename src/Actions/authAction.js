import { performAPIAction } from "./performAPIAction";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

// Define the encryption key and data to be encrypted
const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

export const setLoginCookies = (key, value) => {
  const expirationInSeconds = 36000;
  Cookies.set(key, value);
};

export const getLoginCookies = (key) => {
  return Cookies.get("jwt");
};

// set token in LocalStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (data, token, cb) => {
  const userData = JSON.stringify(data);
  // Encrypt the data using AES encryption
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();
  Cookies.set("jwt", token); // Normal cookie
  Cookies.set("user", encryptedData);
  setLocalStorage("user", encryptedData);

  cb();
};

export const updateUserData = (data) => {
  const userData = JSON.stringify(data);
  // Encrypt the data using AES encryption
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();
  Cookies.set("user", encryptedData);
  setLocalStorage("user", encryptedData);
  console.log("update cookies");
};

// DESTRUCTURE Encipted DATA
export const getEncryptedData = (encryptedUserData) => {
  try {
    if (encryptedUserData) {
      const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      // Check if decrypted data is empty
      if (!decryptedData) {
        return null;
      }

      const userData = JSON.parse(decryptedData);
      return userData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const logOutAction = () => {
  localStorage.removeItem("user");
  Cookies.remove("jwt");
  Cookies.remove("user");
};

// Authentication
export const isAuth = () => {
  if (process.browser) {
    const cookichecked = getLoginCookies("jwt");
    if (cookichecked) {
      if (localStorage.getItem("user")) {
        return getEncryptedData(JSON.parse(localStorage.getItem("user")));
      } else {
        return false;
      }
    }
  }
};
