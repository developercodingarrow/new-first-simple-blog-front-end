import { performAPIAction } from "./performAPIAction";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

// Define the encryption key and data to be encrypted
const encryptionKey = "my-secret-key";

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

  setLocalStorage("user", encryptedData);
  setLoginCookies("jwt", token);

  cb();
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

// API FOR LOGIN ACCOUNT
const authToken = getLoginCookies();
